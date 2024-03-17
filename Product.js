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
        console.log("Producto creado correctamente.");
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
    title: "Smartphone",
    photo: "ruta/imagen1.jpg",
    category: "Electronics",
    price: 499.99,
    stock: 10
});

productManagerInstance.create({
    title: "Laptop",
    photo: "ruta/imagen2.jpg",
    category: "Electronics",
    price: 899.99,
    stock: 5
});

console.log(productManagerInstance.read());
