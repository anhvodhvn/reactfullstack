const express = require('express');
const http = require('http');
const path = require("path");

// Express
const server = express();
server.set('port', process.env.PORT || 3000);

const webpath = path.join(__dirname, 'build');
server.use('/', express.static(webpath, { index: 'index.html' }));
server.use('/cart', express.static(webpath, { index: 'cart.html' }));
server.use('/checkout', express.static(webpath, { index: 'checkout.html' }));
server.use('/contact', express.static(webpath, { index: 'contact.html' }));
server.use('/index', express.static(webpath, { index: 'index.html' }));
server.use('/sample', express.static(webpath, { index: 'sample.html' }));
server.use('/shop', express.static(webpath, { index: 'shop.html' }));
server.use('/single-product', express.static(webpath, { index: 'single-product.html' }));

module.exports = server;