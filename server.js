const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
const publicPath = path.join(__dirname, './public');
app.use(express.static(publicPath));
app.set('view engine', 'ejs');

const Product = mongoose.model('productDetails', {
    imgSrc: String,
    productName: String,
    price: String
});
mongoose.connect('mongodb://localhost:27017/productDetails', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.render("home");
});
app.get('/home', (req, res) => {
    res.render("home");
});
app.get('/signup', (req, res) => {
    res.render('signup')
});
app.get('/login', (req, res) => {
    res.render('login')
});
app.get('/cart', (req, res) => {
    res.render('cart')
});
app.post("/db", async (req, res) => {
    try {
        // Extract data from the form submission
        const { imgSrc, productName, price } = req.body;

        // Create a new product document
        const newProduct = new Product({
            imgSrc,
            productName,
            price
        });

        // Save the new product to the database
        await newProduct.save();

        // Respond with a success message or any other desired response
        res.render('cart');
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
