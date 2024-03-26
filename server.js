import express from "express" 
import ProductsManager from "./fs/ProductsManager.fs.js";

/* Import nombreModulo from "nombreModulo" */
/*Import archivo from ./ruta/alArchivo/archivo.js*/

const server = express()
const port = 8080
const ready = () => console.log("server ready on port" + port);

server.listen(port, ready)

server.use(express.urlencoded({extended:true}))

server.get("/api/products/:text/:category",async(req,res)=>{
    try{
        const {text,category}=req.params
        const data= {text,category}
        const one= await ProductsManager.create(data)
        return res.status(200).json({
            response:one,
            success:true
        })
    }catch  (error){
        console.log(error);
        return res.status(400).json({
            response:"ERROR",
            success:false
        })
    }

})




