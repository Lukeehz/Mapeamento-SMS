require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const rotas = require('./router/index.ts');

const app = express();
const port = 80;


const basePath = path.join(__dirname, "../public/html");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

const User = require("./models/User");

let isLoggedIn = false;

app.use("/itmasters", (req:any, res:any, next:any) => {
    if (isLoggedIn) {
        next();
    } else {
        res.redirect("/auth/login"); // Redireciona para a página de login
    }
    
}, rotas);

app.get("/auth/logout", (req:any, res:any) => {
    isLoggedIn = false; 
    res.redirect("/auth/login");
})


app.get("/", (req:any, res:any) => {
    res.redirect("auth/login");
});

// Rota para exibir a página de login
app.get("/auth/login", (req:any, res:any) => {
    res.sendFile(path.join(basePath, 'index.html'));
});

// Rota privada para obter informações do usuário
app.get("/user/:id", checandoToken, async (req:any, res:any) => {
    const id = req.params.id;
    const user = await User.findById(id, '-password');

    if (!user) {
        return res.status(404).json({ msg: "Usuário não encontrado" });
    }

    res.status(200).json({ user });
});

function checandoToken(req:any, res:any, next:any) {
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
app.post("/auth/register", async (req:any, res:any) => {
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
app.post("/auth/login", async (req:any, res:any) => {
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
        isLoggedIn = true; // Marca como logado
        res.status(200).json({ msg: "Logado com sucesso", token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Aconteceu um erro no servidor" });
    }
});

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

app.use(express.static(path.join(__dirname, "../public/")));
app.use((req:any, res:any, next:any) => {
    res.status(404).sendFile(path.join(basePath, '404.html'));
});

// Conectando no MongoDB/Atlas e escutando a porta
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.pm52e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        app.listen(port, () => console.log(`Servidor rodando na porta ${port} acesse http://localhost:${port}`));
    })
    .catch((err: any) => {
        console.log(err);
    });