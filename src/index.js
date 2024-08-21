const express = require ("express")
const app = express();
const path = require ("path")
const rotas = require('./router')
const port = 3000;
const basePath = path.join (__dirname, "../public/html/")


app.use("/itmasters" , rotas)
app.get("/", (req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.use(express.static(path.join(__dirname, "../public/")));

app.use ( (req,res,next)=>{
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, ()=>{
    console.log(`Server aberto na porta ${port}`)
})

