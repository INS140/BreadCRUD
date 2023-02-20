const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

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
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    Bread.create(req.body)
    res.redirect('/breads')
})

// NEW
breads.get('/new', (req, res) => {
    res.render('New')
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    Bread.findById(req.params.arrayIndex)
        .then(data => {res.render('show', { bread: data })})
        .catch(() => {res.status(404).render('error404')})
})

// DELETE
breads.delete('/:arrayIndex', (req, res) => {
    Bread.splice(req.params.arrayIndex, 1)
    res.status(303).redirect('/breads')
})

// UPDATE
breads.put('/:arrayIndex', (req, res) => {
    req.body.hasGluten = req.body.hasGluten === 'on'
    Bread[req.params.arrayIndex] = req.body
    res.redirect(`/breads/${req.params.arrayIndex}`)
})

// EDIT
breads.get('/:arrayIndex/edit', (req, res) => {
    res.render('edit', {
      bread: Bread[req.params.arrayIndex],
      index: req.params.arrayIndex
    })
})

module.exports = breads