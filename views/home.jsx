const React = require('react')
const Default = require('./layouts/default')

function Home() {
    return (
        <Default>
            <h2>Home Page</h2>
            <h3><a href='/breads'>Go to Index Page</a></h3>
        </Default>
    )
}

module.exports = Home