const React = require('react')

function Default(props) {
    return (
        <html>
            <head>
                <title>{props.title || 'Default'}</title>
            </head>
            <body>
                <h1>HTML Rendered!</h1>
                <div className="container">
                    {props.children}
                </div>
            </body>
        </html>
    )
}

module.exports = Default