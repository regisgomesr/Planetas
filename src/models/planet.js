const mongoose = require('../database');

const PlanetSchema = new mongoose.Schema({
    nome: {
        type: String,
    },
    clima: {
        type: String,
    },
    terreno: {
        type: String,
    },
    qtafilme: {
        type: Number,
    }
});

const Planet = mongoose.model('Planet', PlanetSchema);
module.exports = Planet;
