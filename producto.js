var mongoose = require("mongoose");

var databasePort = 'mongodb://localhost:27017/myDatabase';

mongoose.set('useCreateIndex', true);

mongoose.connect(databasePort, {
    useNewUrlParser : true,
    useUnifiedTopology: true
});

var Schema = mongoose.Schema;

var productSchema = new Schema ({
    productos: [{
        codigo: Number,
        nombre: String,
        official_store_id: Number,
        precio: Number,
        disponibilidad: Number,
        disponibilidad_10 : Number,
        disponibilidad_05: Number,
        disponibilidad_73: Number,
        longDescription: String,
        cedim: Number,
        url_img: String,
        descripcion: String,
        cantidad: Number
    }]
});

module.exports = mongoose.model('Productos',productSchema);