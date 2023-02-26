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

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate('breads')
        .then(baker => {
            res.render('bakerShow', { baker: baker })
        })
})

baker.delete('/:id', (req, res) => {
    Baker.findByIdAndDelete(req.params.id)
        .then(baker => {
            res.status(303).redirect('/breads')
        })
        .catch(err => {
            console.log(err)
            res.status(404).render('error404')
        })
})

module.exports = baker                    
