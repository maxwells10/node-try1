const express = require('express');
const { create } = require('lodash');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for request
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>homepage</p>');
    res.render('index');

});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    res.render('about');

});
app.get('/blogs/create', (req, res) => {
            res.render('create');

            //404

            app.use((req, res) => {
                res.status(404).render('404');
            });