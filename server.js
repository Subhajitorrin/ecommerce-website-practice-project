const express = require('express');
const path = require('path');


const app = express();
const port = 3000;

const publicPath = path.join(__dirname, './public');
app.use(express.static(publicPath));
app.set('view engine', 'ejs');

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

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
