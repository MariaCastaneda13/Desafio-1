const fs = require("fs")
const crypto = require("crypto")
const { json } = require("stream/consumers")

class UsersManager {
    constructor() {
        this.path = "./fs/files/user.json"
        this.init()
    }
    init() {
        const exists = fs.existsSync(this.path)
        if (!exists) {
            const stringData = JSON.stringify([], null, 2)
            fs.writeFileSync(this.path, stringData)
            console.log("File created")
        } else {
            console.log("File already exist")
        }
    }

    async create(data) {
        const user = {
            id: crypto.randomBytes(12).toString("hex"),
            name: data.name,
            photo: data.photo,
            email: data.email,
            password: data.password,
            role: data.role,
        };

        if (!data.email || !data.password || !data.role) { console.log("Usuario no creado, por favor ingrese todos los datos.") }
        else {
            let users = await fs.promises.readFile(this.path, "utf-8")
            users = JSON.parse(users)
            users.push(user);
            console.log("El usuario se creo correctamente");
           users= JSON.stringify(users, null, 2)
            await fs.promises.writeFile(this.path, users)
        }
    }

    async read() {
        let users = await fs.promises.readFile(this.path, "utf-8")
        users = JSON.parse(users)
        return users;
    }
    async readOne(id) {
        let users = await fs.promises.readFile(this.path, "utf-8")
        users = JSON.parse(users)
        return users.find(each => each.id === id)
    }

    async destroy(id) {
        let users = await fs.promises.readFile(this.path, "utf-8")
        users = JSON.parse(users)
        const filtered = users.filter(each => each.id !== id);
        await fs.promises.writeFile(filtered)
        console.log((id + "eliminado"));
    }
}

async function test() {
    const gestorDeUsuarios = new UsersManager();
    await gestorDeUsuarios.create({
        name: "María",
        photo: "Maria1.jpg",
        email: "maria08@hotmail.com",
        password: "Buendia123",
        role: "Analista SEO",
    });
    await gestorDeUsuarios.create({
        name: "Carolina",
        photo: "Carolina1.jpg",
        email: "carolina_rocha01@gmail.com",
        password: "Carorocha08",
        role: "Marketing director",
    });
    await gestorDeUsuarios.create({
        name: "Pedro",
        photo: "Pedroperfil.jpg",
        email: "pedropascual@gmail.com",
        password: "pedro2007",
        role: "Head director",
    });
    await gestorDeUsuarios.create({
        name: "Mariana",
        photo: "Mpedraza.jpg",
        email: "Mpedraza09@gmail.com",
        password: "Lichos08",
        role: "Redactora SEO",
    });
    console.log(await gestorDeUsuarios.read())
   console.log(await gestorDeUsuarios .readOne("1d8584219ed5cbbe5a920aef"))
}
test ()