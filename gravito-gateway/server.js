const express = require('express');
const { createProxyMiddleware }= require('http-proxy-middleware');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT;
const USERS_SERVICE = process.env.USER_SERVICE_URL;
const PRODUCTS_SERVICE = process.env.PRODUCT_SERVICE_URL;

app.use('/users', createProxyMiddleware({ target: USERS_SERVICE, changeOrigin: true }));

app.use('/products', createProxyMiddleware({ target: PRODUCTS_SERVICE, changeOrigin: true }));

app.listen(PORT, () => console.log(`Gravito Gateway listening on port ${PORT}`));