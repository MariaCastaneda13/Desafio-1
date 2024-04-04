//María Fernanda Castañeda Álvarez
const crypto = require("crypto")

class UsersManager {
    static #users = [];

    create(data) {
        const user = {
            id: crypto.randomBytes(12).toString("hex"),
            name: data.name,
            photo: data.photo,
            email: data.email,
            password: data.password,
            role: data.role,
        };

        if (!data.email || !data.password || !data.role) 
       { console.log("The user has not been created, please enter all data.") }
      else {
            UsersManager.#users.push(user);
            console.log("The user was created correctly");
        }
    }

    read() {
        return UsersManager.#users;
    }
    readOne(id){
        return UsersManager.#users.find(each=>each.id===id)
    }

    destroy(id){
        const filtered=UsersManager.#users.filter(each=>each.id!==id);
        UsersManager.#users =filtered;
        console.log((id+"deleted"));
    }
}
const gestorDeUsuarios = new UsersManager();
gestorDeUsuarios.create({
    name: "María",
    photo: "Maria1.jpg",
    email: "maria08@hotmail.com",
    password: "Buendia123",
    role: "Analista SEO",
});
gestorDeUsuarios.create({
        name: "Carolina",
        photo: "Carolina1.jpg",
        email: "carolina_rocha01@gmail.com",
        password: "Carorocha08",
        role: "Marketing director",
    });
    gestorDeUsuarios.create({
        name: "Pedro",
        photo: "Pedroperfil.jpg",
        email: "pedropascual@gmail.com",
        password: "pedro2007",
        role: "Head director",
    });
    gestorDeUsuarios.create({
        name: "Mariana",
        photo: "Mpedraza.jpg",
        email: "Mpedraza09@gmail.com",
        password: "Lichos08",
        role: "Redactora SEO",
    });
    console.log(gestorDeUsuarios.read());
