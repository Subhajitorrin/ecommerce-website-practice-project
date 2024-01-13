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

// Define the schema for the product details
const cartItemSchema = new mongoose.Schema({
    imgSrc: String,
    productName: String,
    price: String
});

// Create the Product model using the schema
const Product = mongoose.model('productDetails', cartItemSchema);

// mongoose.connect('mongodb://localhost:27017/productDetails', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb://localhost:27017/productDetails');
let mongoCloudUrl = "mongodb+srv://orrin2op:RhQZLEvdtcaDR8P6@cluster0.f7bdlrn.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoCloudUrl);


app.get('/', async (req, res) => {
    const data = await Product.find({});
    res.render("home", { data });
});

app.get('/home', async (req, res) => {
    const data = await Product.find({});
    res.render("home", { data });
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/login', (req, res) => {
    res.render('login');
});

// Use the existing Product model to fetch data for the 'cart' route
app.get('/cart', async (req, res) => {
    try {
        const data = await Product.find({});
        // console.log(data);
        res.render('cart', { data });
    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        res.status(500).send('Internal Server Error');
    }
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
        res.redirect('/');
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
