import express from "express" 
import usersManager from "./data/fs/UsersManager.fs.js";
import ProductsManager from "./fs/ProductsManager.fs.js";
//Server
const server = express()
const port = 8080 
const ready = ()=> console.log("server ready on port" + port);
server.listen(port,ready)
//Middlewares
server.use(express.urlencoded({extended:true}))
server.use(express.json())

//Router
server.get("/",async(req,res)=>{
    try{
        return response.status(200).json({
            response: "API",
            success: true
        })
    }catch  (error){
        console.log(error);
        return res.status(404).json({
            response:"ERROR",
            success:false
        })
    }

})
//
server.get("/api/products", async (req, res) => {
    try {
        const { category } = req.query
        const products = await ProductsManager.read(category)
        if (products) {
            return res.status(200).json({
                response: products,
                category,
                success: true
            })
        } else {
            const error = new Error("Product not found")
            error.statusCode = 404
            throw error
        }
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            response: error.message,
            success: false
        })
    }
})

server.get("/api/products/:pid", async (req, res) => {
    try {
        const { pid } = req.params
        const one = await ProductsManager.readOne(pid)
        if (one) {
            return res.status(200).json({
                response: one,
                success: true
            })
        } else {
            const error = new Error("Product not found")
            error.statusCode = 404
            throw error
        }
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            response: error.message,
            success: false
        })
    }
})

/**/
server.get("/api/users", async (req, res) => {
    try {
        const { rol } = req.query
        const users = await usersManager.read(rol)
        if (users) {
            return res.status(200).json({
                response: users,
                rol,
                success: true
            });
        } else {
            const error = new Error("User not found")
            error.statusCode = 404
            throw error
        }
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            response: error.message,
            success: false
        })
    }
})

server.get("/api/users/:uid", async (req, res) => {
    try {
        const { uid } = req.params
        const one = await ProductsManager.readOne(uid)
        if (one) {
            return res.status(200).json({
                response: one,
                success: true
            })
        } else {
            const error = new Error("User not found")
            error.statusCode = 404
            throw error
        }
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            response: error.message,
            success: false
        })
    }
})



