require('dotenv').config()
const express = require('express')
const breadsController = require('./controllers/breads_controller')

const PORT = process.env.PORT

const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Bread!')
})

app.use('/breads', breadsController)

app.get('*', (req, res) => {
    res.send('Oops ... something went wrong!')
})

app.listen(PORT, () => {
    console.log("IT'S ALIVE!!!! on port:", PORT)
})