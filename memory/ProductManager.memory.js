//María Fernanda Castañeda Álvarez
class ProductsManager {
    #products = [];

    create(data) {
        const product = {
            id: this.#generateId(),
            title: data.title,
            photo: data.photo,
            category: data.category,
            price: data.price,
            stock: data.stock
        };
        this.#products.push(product);
        console.log("El producto se creó correctamente.");
    }

    read() {
        return this.#products;
    }

    #generateId() {
        if (this.#products.length === 0) {
            return 1;
        } else {
            return this.#products[this.#products.length - 1].id + 1;
        }
    }
}

const productManagerInstance = new ProductsManager();

productManagerInstance.create({
    title: "Harry Potter y la piedra filosofal",
    photo: "HP.jpg",
    category: "Fantasía",
    price: 100000,
    stock: 10
});

productManagerInstance.create({
    title: "En agosto nos vemos",
    photo: "EANV.jpg",
    category: "Universal",
    price: 65000,
    stock: 5
});

productManagerInstance.create({
    title: "La ciudad y sus muros inciertos",
    photo: "LCNI.jpg",
    category: "Universal",
    price: 79000,
    stock: 12
});

productManagerInstance.create({
    title: "Recupera tu mente,reconquista tu vida",
    photo: "RTMRTV.jpg",
    category: "Autoayuda",
    price: 65000,
    stock: 4
});

productManagerInstance.create({
    title: "Kindle Paper White",
    photo: "Kindle.jpg",
    category: "Electronics",
    price: 900000,
    stock: 15
});
console.log(productManagerInstance.read());
