const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

// Object Array Reference
baker.get('/', async (req, res) => {
    const bakers = Baker.find().populate('breads')
    res.send(bakers)
})

// SEED DATA
baker.get('/data/seed', async (req, res) => {
    await Baker.insertMany(bakerSeedData)
    res.redirect('/breads')
})

// SHOW
baker.get('/:id', async (req, res) => {
    const baker = await Baker.findById(req.params.id).populate('breads')
    res.render('bakerShow', { baker: baker })
})

// DELETE
baker.delete('/:id', async (req, res) => {
    try {
        await Baker.findByIdAndDelete(req.params.id)
        res.status(303).redirect('/breads')
    }
    catch(err) {
        console.log(err)
        res.status(404).render('error404')
    }
})

module.exports = baker