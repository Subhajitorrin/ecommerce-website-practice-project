const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const publicPath = path.join(__dirname, './public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    let htmlpath = path.join(publicPath, 'html/signup.html');
    res.sendFile(htmlpath);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
