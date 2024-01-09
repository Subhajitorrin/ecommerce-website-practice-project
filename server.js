const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const publicPath = path.join(__dirname, './public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    let htmlpath = path.join(publicPath, 'html/home.html');
    res.sendFile(htmlpath);
});
app.get('/home', (req, res) => {
    let htmlpath = path.join(publicPath, 'html/home.html');
    res.sendFile(htmlpath);
});
app.get('/signup', (req, res) => {
    let htmlpath = path.join(publicPath, 'html/signup.html');
    res.sendFile(htmlpath);
});
app.get('/login', (req, res) => {
    let htmlpath = path.join(publicPath, 'html/login.html');
    res.sendFile(htmlpath);
});
app.get('/cart', (req, res) => {
    let htmlpath = path.join(publicPath, 'html/cart.html');
    res.sendFile(htmlpath);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
