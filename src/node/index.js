const express = require ("express")
const app = express();
const path = require ("path")
const rotas = require('./itmasters')
const port = 3000;
const basePath = path.join (__dirname, "../html/")


app.use("/itmasters" , rotas)
app.get("/", (req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.use(express.static(path.join(__dirname, "../assets/")));


app.listen(port, ()=>{
    console.log(`Server aberto na porta ${port}`)
})

