var express = require("express");
var app = express();
var nodemon = require("nodemon");
var bodyParser = require("body-parser");
var Person = require('./Productos.js');
var port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/send', (req, res) => {
    var newProducto = new Producto({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        official_store_id: req.body.official_store_id,
        precio
    });

    newProducto.save((err) => {
        if (err) {
            res.type('html').status(500);
            res.send('Error' + err);
            console.log(err);
        } else {
            res.render('created.ejs', {
                person: newPerson
            });
            console.log(newPerson);
            console.log(newPerson.name);
        };
    });
});



app.use('/public', express.static('public'));
app.use('/', (req, res) => 
        { res.redirect('/public/producto.html'); } );

app.listen(port, () => {
    console.log("Listening on port 3000");



});
