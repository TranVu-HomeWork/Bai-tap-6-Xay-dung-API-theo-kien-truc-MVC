const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

const PORT = 3000;

// Thêm middleware ĐỌC JSON ở vị trí này 
app.use(express.json());

// Gắn route
app.use('/api/products', productRoutes);

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server MVC đang chạy tại http://localhost:${PORT}`);
});