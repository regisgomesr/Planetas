const express = require('express');

const Planet = require('../models/planet');

const router = express.Router();


// Listagem de todos os Planetas
router.get('/', async (req, res) => {
    try {

        const planet = await Planet.find();

        return res.send({ planet });

    } catch (err) { 
        return res.status(400).send({ error: 'Error loading new planet'});
    }
});

// planeta buscando pelo id
router.get('/:planetId', async (req, res) => {
    
    try {

        const planet = await Planet.findById(req.params.planetId);

        return res.send({ planet });

    } catch (err) { 
        return res.status(400).send({ error: 'Error loading planet'});
    }


});


// planeta buscando pelo nome
router.get('/planetNome', async (req, res) => {
    
    try {

        const planet = await Planet.findOne({ "nome": req.body.nome });

        return res.send({ planet });

    } catch (err) { 
        console.log(planet);
        return res.status(400).send({ error: 'Error loading planet'});
    }


});


// Criacao do planeta
router.post('/', async (req, res) => {
    try {
        const planet = await Planet.create(req.body);

        await planet.save();

        return res.send({ planet });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error creating new planet'});
    }
});



// Atualizacao do planeta
router.put('/:planetId', async (req, res) => {
    
    try {
        const planet = await Planet.findByIdAndUpdate(req.params.planetId, {
            nome,
            clima,
            terreno,
        }, { new: true });

        await planet.save();

        return res.send({ planet });

    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error updating planet'});
    }

});

router.delete('/:planetId', async (req, res) => {
    
    try {

        await Planet.findByIdAndRemove(req.params.planetId);

        return res.send();

    } catch (err) { 
        return res.status(400).send({ error: 'Error deleting planet'});
    }

});


module.exports = app => app.use('/planets', router);

