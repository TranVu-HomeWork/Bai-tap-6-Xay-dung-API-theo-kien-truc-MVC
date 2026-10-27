const Product = require('../models/Product');

const getProducts = (req, res) => {
    const data = Product.getAll();
    res.status(200).json({
        message: "Lấy danh sách sản phẩm thành công",
        data: data
    });
};

const createProduct = (req, res) => {

    const newProduct = Product.create(req.body);
    
    res.status(201).json({
        message: "Tạo sản phẩm thành công",
        data: newProduct
    });
};

module.exports = {
    getProducts,
    createProduct
};