require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT

const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

app.listen(PORT, () => {
    console.log("IT'S ALIVE!!!! on port:", PORT)
})