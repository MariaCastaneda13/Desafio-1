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
    title: "Vivo Y20",
    photo: "VivoY20.jpg",
    category: "Electronics",
    price: 500000,
    stock: 10
});

productManagerInstance.create({
    title: "Portatil ASUS Vivobook",
    photo: "Asus.jpg",
    category: "Electronics",
    price: 1899000,
    stock: 5
});

productManagerInstance.create({
    title: "IMac 24 pulgadas",
    photo: "Mac.jpg",
    category: "Electronics",
    price: 10300000,
    stock: 12
});

productManagerInstance.create({
    title: "Parlante bose",
    photo: "Bose.jpg",
    category: "Electronics",
    price: 600000,
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
