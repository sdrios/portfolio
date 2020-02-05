const express = require('express');
const app = express();
const port = 3000;




app.use(express.static('public'));
app.set('view engine','ejs');


app.get('/', (req, res) => res.render('home.ejs', {page:'home'}));
app.get('/projects', (req, res) => res.render('projects.ejs', {page:'projects'}));
app.get('/skills', (req, res) => res.render('skills.ejs', {page:'skills'}));
app.get('/resume', (req, res) => res.render('resume.ejs', {page:'resume'}));

app.listen(port, () => console.log(`Portfolio listening on port ${port}!`));