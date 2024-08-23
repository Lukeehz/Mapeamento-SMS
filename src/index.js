require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const rotas = require('./router');

const app = express();
const port = 3000;

// Caminho para arquivos HTML
const basePath = path.join(__dirname, "../public/html");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Middleware para processar dados de formulário

const User = require("./models/User");

app.use("/itmasters", rotas);

// Rota pública para mostrar uma mensagem de boas-vindas
app.get("/", (req, res) => {
    res.status(200).json({ msg: "Bem-vindo à API Itmasters" });
});

// Rota para exibir a página de login
app.get("/auth/login", (req, res) => {
    res.sendFile(path.join(basePath, 'index.html'));
});

// Rota privada para obter informações do usuário
app.get("/user/:id", checandoToken, async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id, '-password');

    if (!user) {
        return res.status(404).json({ msg: "Usuário não encontrado" });
    }

    res.status(200).json({ user });
});

function checandoToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ msg: "Acesso negado" });
    }

    try {
        const secret = process.env.SECRET;
        jwt.verify(token, secret);
        next();
    } catch (error) {
        res.status(400).json({ msg: "Token inválido" });
    }
}

// Rota para registrar um novo usuário
app.post("/auth/register", async (req, res) => {
    const { name, user, password } = req.body;

    if (!name) {
        return res.status(422).json({ msg: "O nome é obrigatório" });
    }
    if (!user) {
        return res.status(422).json({ msg: "O usuário é obrigatório" });
    }
    if (!password) {
        return res.status(422).json({ msg: "A senha é obrigatória" });
    }

    const usuarioExistente = await User.findOne({ user: user });

    if (usuarioExistente) {
        return res.status(422).json({ msg: "Usuário já existente" });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const usuario = new User({
        name,
        user,
        password: passwordHash
    });

    try {
        await usuario.save();
        res.status(201).json({ msg: "Usuário criado com sucesso" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Aconteceu um erro no servidor" });
    }
});

// Rota para autenticação
app.post("/auth/login", async (req, res) => {
    const { user, password } = req.body;

    if (!user || !password) {
        return res.status(422).json({ msg: "O usuário e a senha são obrigatórios" });
    }

    const usuarios = await User.findOne({ user: user });

    if (!usuarios) {
        return res.status(404).json({ msg: "Usuário não encontrado" });
    }

    const checkPassword = await bcrypt.compare(password, usuarios.password);
    if (!checkPassword) {
        return res.status(422).json({ msg: "Senha inválida" });
    }

    try {
        const secret = process.env.SECRET;
        const token = jwt.sign({ id: usuarios._id }, secret);
        res.status(200).json({ msg: "Logado com sucesso", token });

        // Nota: o redirecionamento não funcionará diretamente aqui,
        // pode ser necessário lidar com redirecionamento no lado do cliente (navegador)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Aconteceu um erro no servidor" });
    }
});

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

app.use(express.static(path.join(__dirname, "../public/")));
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(basePath, '404.html'));
});

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.pm52e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
    })
    .catch((err) => {
        console.log(err);
    });
