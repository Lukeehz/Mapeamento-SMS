const express = require ("express")
const router = express.Router();
const path = require ("path")
const basePath = path.join (__dirname, "../../html")

router.get("/home", (req,res)=>{
    res.sendFile(`${basePath}/inicio.html`)
})

router.get("/rede", (req,res)=>{
    res.sendFile(`${basePath}/rede.html`)
})
router.get("/servidores", (req,res)=>{
    res.sendFile(`${basePath}/servidores.html`)
})

module.exports = router;