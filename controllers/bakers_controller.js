const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then(bakers => {
            res.send(bakers)
        })
})

baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate('breads')
        .then(baker => {
            res.render('bakerShow', { baker: baker })
        })
})

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

module.exports = baker                    
