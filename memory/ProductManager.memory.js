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
        console.log("The product was created correctly");
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

productManagerInstance.create({
    title: "Paper Towns",
    photo: "PaperT.jpg",
    category: "Juvenil",
    price: 57000,
    stock: 30
});

productManagerInstance.create({
    title: "El Diario de Ana Frank",
    photo: "EDDAF.jpg",
    category: "Historia",
    price: 68000,
    stock: 10
});
productManagerInstance.create({
    title: "Game Of Thrones",
    photo: "GOT.jpg",
    category: "Ficción",
    price: 98000,
    stock: 12
});
productManagerInstance.create({
    title: "The 100",
    photo: "T100.jpg",
    category: "Ficción",
    price: 63000,
    stock: 9
});
productManagerInstance.create({
    title: "Our Common Future",
    photo: "OCF.jpg",
    category: "Biologia",
    price: 110000,
    stock: 24
});
productManagerInstance.create({
    title: "Sobre el origen del tiempo",
    photo: "SEODT.jpg",
    category: "Ciencia y divulgación",
    price: 69000,
    stock: 19
});
productManagerInstance.create({
    title: "Supercomunicadores",
    photo: "superCom.jpg",
    category: "Autoayuda y superación",
    price: 54000,
    stock: 2
});
productManagerInstance.create({
    title: "El silencio en sus ojos",
    photo: "ESESO.jpg",
    category: "Policiaca",
    price: 55000,
    stock: 20
});
productManagerInstance.create({
    title: "Riverview",
    photo: "Rvw.jpg",
    category: "Literatura Universal",
    price: 55000,
    stock: 7
});
productManagerInstance.create({
    title: "Cocina de casa",
    photo: "CDC.jpg",
    category: "Cocina",
    price: 150000,
    stock: 21
});
productManagerInstance.create({
    title: "Quiero morir pero también comer tteokbokki",
    photo: "QMPCT.jpg",
    category: "Autoayuda y superación",
    price:48000 ,
    stock: 8
});
productManagerInstance.create({
    title: "Bajo la misma estrella",
    photo: "BLME.jpg",
    category: "Literatura juvenil",
    price: 62000,
    stock: 19
});
productManagerInstance.create({
    title: "Elizabeth Finch",
    photo: "EF.jpg",
    category: "Literatura Universal",
    price: 89000,
    stock: 7
});
productManagerInstance.create({
    title: "Grandes esperanzas",
    photo: "GE.jpg",
    category: "Literatura universal",
    price: 124000,
    stock: 21
});
productManagerInstance.create({
    title: "La historia de Oliver Twist",
    photo: "LHOT.jpg",
    category: "Literatura universal",
    price:48000 ,
    stock: 8
});
console.log(productManagerInstance.read());
