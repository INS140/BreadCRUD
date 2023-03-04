require('dotenv').config()
const express = require('express')
const breadsController = require('../../controllers/breads_controller')
const bakersController = require('../../controllers/bakers_controller')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

const PORT = process.env.PORT
const app = express()

// Connect Mongoose
mongoose.set({strictQuery: true})
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

//Middleware
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//Routes
app.get('/', (req, res) => {
    res.render('home', {})
})


app.use('/breads', breadsController)

app.use('/bakers', bakersController)

// 404
app.get('*', (req, res) => {
    res.render('error404', {})
})

// Server Port
app.listen(PORT, () => {
    console.log("IT'S ALIVE!!!! on port:", PORT)
})

module.exports = app