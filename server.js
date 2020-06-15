const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

//heroku
const port = process.env.PORT || 3000;

app.use(express.static( __dirname + '/public' ));

//express hbs engine
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

app.get('/', function (req, res) {

    res.render('home', {
        nombre: 'leo rodriguez',
    }); //renderiza el archivo home.hbs

});

app.get('/about', function (req, res) {

    res.render('about'); //renderiza el archivo about.hbs

});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});