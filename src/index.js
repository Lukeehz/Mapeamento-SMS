//Imports

require ('dotenv').config()
const express = require ("express")
const mongose = require('mongoose')
const jwt = require ("jsonwebtoken")
const bcrypt = require ("bcrypt")
const path = require ("path")
const rotas = require('./router')

//Porta node
const port = 3000;

//Const caminho
const basePath = path.join (__dirname, "../public/html/")

//Func express
const app = express();
app.use(express.json())

const User = require("./models/User")

app.use("/itmasters" , rotas)

//404


//Public route
app.get("/", (req,res)=>{
    res.status(200).json({msg: "Bem vindo a API Itmasters"})
})

//Rota privada
app.get("/user/:id",checandoToken, async (req,res)=>{
    const id = req.params.id

    //Checando usuario
    const user = await User.findById(id, '-password')

    if(!user){
        return res.status(404).json({msg : "Usuario não encontrado"})
    }

    res.status(200).json({user})
})

function checandoToken (req,res,next){
    const authHeader = req.headers ["authorization"]
    const token = authHeader && authHeader.split(" ")[1]

    if(!token){
        return res.status(401).json({msg: "Acesso negado"})
    }
    //Validando token
    try{

        const secret = process.env.SECRET

        jwt.verify(token, secret)
        next()

    }catch(error){
        res.status(400).json({msg: "Token inválido"})
    }
}

//Registrar usuario
app.post("/auth/register", async (req,res)=>{
    const {name,user,password} = req.body

    if(!name){
        return res.status(422).json({msg: "O nome é obrigatório"})
    }
    if(!user){
        return res.status(422).json({msg: "O usuário é obrigatório"})
    }
    if(!password){
        return res.status(422).json({msg: "a senha é obrigatória"})
    }

    //Checando se o usuario existe
    const usuarioExistente = await User.findOne({user: user})

    if(usuarioExistente){
    return res.status(422).json({msg: "Usuário já existente"})
}

    //Hash na senha
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password,salt)

    //Criando usuário
    const usuario = new User ({
        name,
        user,
        password: passwordHash
    })

    try{

        await usuario.save()
        res.status(201).json({msg: "Usuario criado com sucesso"})


    }catch(error){
        console.log(error)
        res.status(500).json({msg: "Aconteceu um erro no servidor"})
    }
    
})

//Autenticacao
app.post("/auth/login", async (req,res)=>{
    const {user, password} = req.body

    //Validação
    if(!user){
        return res.status(422).json({msg: "O usuário é obrigatório"})
    }
    if(!password){
        return res.status(422).json({msg: "a senha é obrigatória"})
    }

    //checando se usuario existe
    const usuarios = await User.findOne({user: user})

    if(!usuarios){
    return res.status(404).json({msg: "Usuário não encontrado"})
}

//Checando a senha
const checkPassword = await bcrypt.compare(password,usuarios.password)
if(!checkPassword){
    return res.status(422).json({msg: "Senha inválida"})
}

try{

    const secret = process.env.SECRET
    const token = jwt.sign({
        id: usuarios._id
    }, secret)

    res.status(200).json({msg: "Logado com sucesso",token})

}catch(error){
    console.log(error)
    res.status(500).json({msg: "Aconteceu um erro no servidor"})
}

})


//CREDENCIAIS
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS


//rota erro
app.use(express.static(path.join(__dirname, "../public/")));
app.use ( (req,res,next)=>{
    res.status(404).sendFile(`${basePath}/404.html`)
})
mongose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.pm52e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(()=>{
    app.listen(3000)
    console.log("Conectou ao banco")
}).catch((err)=>{
    console.log(err)
})


//Fora do mongo




