const express = require('express');
const app = express();
const port = 3000;




app.use(express.static('public'));
app.set('view engine','ejs');


app.get('/', (req, res) => res.render('home.ejs', {page:'about'}));
app.get('/projects', (req, res) => res.render('home.ejs', {page:'projects'}));
app.get('/skills', (req, res) => res.render('home.ejs', {page:'skills'}));
app.get('/resume', (req, res) => res.render('home.ejs', {page:'resume'}));

app.listen(port, () => console.log(`Portfolio listening on port ${port}!`));