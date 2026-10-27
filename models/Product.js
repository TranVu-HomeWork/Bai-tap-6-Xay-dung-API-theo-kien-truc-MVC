let products = [
    { id: 1, name: 'Iphone 18 Pro Max', price: 1200, quantity: 10 },
    { id: 2, name: 'MacBook Air M3', price: 1500, quantity:5 }
];

let nextId = 3;

module.exports = {
    getAll: () => {
        return products;
    },

    findById: (id) => {
        return products.find(product => product.id === Number(id));
    },

    create: (data) => {
        const newProduct = {
            id: nextId++,
            name: data.name,
            price: data.price,
            quantity: data.quantity
        };
        products.push(newProduct);
        return newProduct;
    }
};
