const React = require('react')
const Default = require('./layouts/Default')

function Index ({ breads, bakers, title }) {
    return (
        <Default title={title}>
            <h1>Index Page</h1>
            <div className='bakers'>
                <h2>Bakers</h2>
                <ul>
                    {
                        bakers.map(baker => {
                            return (
                                <li key={baker._id}>
                                    <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='breads'>
                <h2>Breads</h2>
                <ul>
                    {
                        breads.map(bread => {
                            return (
                                <li key={bread._id}>
                                    <a href={`/breads/${bread._id}`}>{bread.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="newButton">
                    <a href="/breads/new"><button>Add a new bread</button></a>
                </div>
            </div>
        </Default>
    )
}

module.exports = Index