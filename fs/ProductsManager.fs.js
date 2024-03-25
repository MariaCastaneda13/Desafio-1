const fs = require("fs")
const crypto = require("crypto")
const { json } = require("stream/consumers")

class ProductsManager {
    constructor() {
        this.path = "./fs/files/products.json"
        this.init()
    }
    init() {
        const exists = fs.existsSync(this.path)
        if (!exists) {
            const stringData = JSON.stringify([], null, 2)
            fs.writeFileSync(this.path, stringData)
            console.log("The file was created")
        } else {
            console.log("The file already exist")
        }
    }


    async create(data) {
        const product = {
            id: crypto.randomBytes(12).toString("hex"),
            title: data.title,
            photo: data.photo,
            category: data.category,
            price: data.price,
            stock: data.stock
        };

        if (!data.title || !data.photo || !data.category || !data.price || !data.stock) { console.log("The product has not been created, please enter all data.") }
        else {
            let products = await fs.promises.readFile(this.path, "utf-8")
            products = JSON.parse(products)
            products.push(product);
            console.log("The product was created correctly");
            products = JSON.stringify(products, null, 2)
            await fs.promises.writeFile(this.path, products)
        }
    }

    async read() {
        let products = await fs.promises.readFile(this.path, "utf-8")
        products = JSON.parse(products)
        return products;
    }

    async readOne(id) {
        let products = await fs.promises.readFile(this.path, "utf-8")
        products = JSON.parse(products)
        return products.find(each => each.id === id)
    }

    async destroy(id) {
        let products = await fs.promises.readFile(this.path, "utf-8")
        users = JSON.parse(products)
        const filtered = products.filter(each => each.id !== id);
        await fs.promises.writeFile(filtered)
        console.log((id + "deleted"));
    }
}

async function test() {
    const gestorDeProductos = new ProductsManager();
    await gestorDeProductos.create({
        title: "Harry Potter y la piedra filosofal",
        photo: "HP.jpg",
        category: "Fantasía",
        price: 100000,
        stock: 10
    });

    await gestorDeProductos.create({
        title: "En agosto nos vemos",
        photo: "EANV.jpg",
        category: "Universal",
        price: 65000,
        stock: 5
    });

    await gestorDeProductos.create({
        title: "La ciudad y sus muros inciertos",
        photo: "LCNI.jpg",
        category: "Universal",
        price: 79000,
        stock: 12
    });

    await gestorDeProductos.create({
        title: "Recupera tu mente,reconquista tu vida",
        photo: "RTMRTV.jpg",
        category: "Autoayuda",
        price: 65000,
        stock: 4
    });

    await gestorDeProductos.create({
        title: "Kindle Paper White",
        photo: "Kindle.jpg",
        category: "Electronics",
        price: 900000,
        stock: 15
    });

    await gestorDeProductos.create({
        title: "Paper Towns",
        photo: "PaperT.jpg",
        category: "Juvenil",
        price: 57000,
        stock: 30
    });

    await gestorDeProductos.create({
        title: "El Diario de Ana Frank",
        photo: "EDDAF.jpg",
        category: "Historia",
        price: 68000,
        stock: 10
    });
    await gestorDeProductos.create({
        title: "Game Of Thrones",
        photo: "GOT.jpg",
        category: "Ficción",
        price: 98000,
        stock: 12
    });
    await gestorDeProductos.create({
        title: "The 100",
        photo: "T100.jpg",
        category: "Ficción",
        price: 63000,
        stock: 9
    });
    await gestorDeProductos.create({
        title: "Our Common Future",
        photo: "OCF.jpg",
        category: "Biologia",
        price: 110000,
        stock: 24
    });
    console.log(await gestorDeProductos.read())
    console.log(await gestorDeProductos.readOne("d3955e0450f9fb275df286df"))
}
test()