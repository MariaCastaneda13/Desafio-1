class UsersManager {
    #users = [];

    create(data) {
        const user = {
            id: this.#generateId(),
            name: data.name,
            photo: data.photo,
            email: data.email,
            password: data.password,
            role: data.role,
        };
        this.#users.push(user);
        console.log("El usuario se creo correctamente");
    }

    read() {
        return this.#users;
    }

    #generateId() {
        if (this.#users.length === 0) {
            return 1;
        } else {
            return this.#users[this.#users.length - 1].id + 1;
        }
    }
}

const userManagerInstance = new UsersManager();

userManagerInstance.create({
    name: "María",
    photo: "Maria1.jpg",
    email: "maria08@hotmail.com",
    password: "Buendia123",
    role: "Analista SEO",
});

userManagerInstance.create({
    name: "Carolina",
    photo: "Carolina1.jpg",
    email: "carolina_rocha01@gmail.com",
    password: "Carorocha08",
    role: "Marketing director",
});

console.log(userManagerInstance.read());
