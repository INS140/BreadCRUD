require('dotenv').config()
const express = require('express')
const breadsController = require('./controllers/breads_controller')
const methodOverride = require('method-override')

const PORT = process.env.PORT
const app = express()

//Middleware
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


//Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Bread!')
})


app.use('/breads', breadsController)

// 404
app.get('*', (req, res) => {
    res.render('Error404', {})
})

// Server Port
app.listen(PORT, () => {
    console.log("IT'S ALIVE!!!! on port:", PORT)
})