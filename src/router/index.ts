const expressRouter = require ("express")
const router = expressRouter.Router();
const pathRouter = require ("path")
const basePathRouter = pathRouter.join (__dirname, "../../public/html")

router.get("/", (req:any,res:any)=>{
    res.sendFile(`${basePath}/inicio.html`)
})

router.get("/rede", (req:any,res:any)=>{
    res.sendFile(`${basePath}/rede.html`)
})
router.get("/servidores", (req:any,res:any)=>{
    res.sendFile(`${basePath}/servidores.html`)
})

module.exports = router;