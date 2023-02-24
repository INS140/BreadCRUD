const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const Baker = require('../models/baker.js')

breads.get('/', (req, res) => {
    Bread.find().then(data => {
        res.render('index', {
            breads: data,
            title: 'Index Page'
        })
    })
})

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    req.body.hasGluten = req.body.hasGluten === 'on'
    Bread.create(req.body)
        .then(() => res.redirect('/breads'))
})

// NEW
breads.get('/new', (req, res) => {
    Baker.find().then(foundBakers => {
        res.render('new', { bakers: foundBakers })
    })
})

// SEED DATA
breads.get('/data/seed', (req, res) => {
    Baker.findOne({name: 'Rachel'}).then(baker => {
        Bread.insertMany([
            {
              name: 'Rye',
              hasGluten: true,
              image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              baker: baker
            },
            {
              name: 'French',
              hasGluten: true,
              image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              baker: baker
            },
            {
              name: 'Gluten Free',
              hasGluten: false,
              image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
              baker: baker
            },
            {
              name: 'Pumpernickel',
              hasGluten: true,
              image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
              baker: baker
            }
        ]).then(() => res.redirect('/breads'))
    })
})

// SHOW
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
        .populate('baker')
        .then(bread =>  res.render('show', { bread }) )
        .catch(err => {
            console.log(err)
            res.status(404).render('error404')
        })
})

// DELETE
breads.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(303).redirect('/breads')
        })
})

// UPDATE
breads.put('/:id', (req, res) => {
    req.body.hasGluten = req.body.hasGluten === 'on'
    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {  
            res.redirect(`/breads/${req.params.id}`)
        })
})

// EDIT
breads.get('/:id/edit', (req, res) => {
    Baker.find()
        .then(bakers => {
            Bread.findById(req.params.id)
                .then(bread => {
                    res.render('edit', { bread: bread, bakers: bakers })
                })
        })
})

module.exports = breads