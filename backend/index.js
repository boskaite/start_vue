import JS from 'C:/xampp/up'

const http = require('http');

const html = '<!doctype>\n' +
    '  <head>\n' +
    '    <meta charset="utf-8">\n' +
    '    <link rel="stylesheet" href="style.css">\n' +
    '    <title><%= htmlWebpackPlugin.options.title %></title>\n' +
    '  </head>\n' +
    '  <body>\n' +
    '    <h1>Hello! It is the first page</h1>\n' +
    '      <button>Enter on me</button>\n' +
    '    <script src="main.js"></script>\n' +
    '  </body>\n' +
    '</html>\n';
const css = '' +
    'body {\n' +
        'margin: 0;\n' +
        'padding: 0;\n' +
        'text-align: center;\n' +
    '}\n' +
    'h1 {\n' +
        'background-color: #42b983;\n' +
        'color: white;\n' +
        'padding: 5.em;\n' +
        'font-family: Consoles\n' +
    '}\n';
//const js = require('C:/xampp/htdocs/amicum/start_vue/src/main');
/*"const button = document.querySelector('button');\n" +
    "button.addEventListener('click', event => alert('Node.js in run'));\n" ;*/


http.createServer((req, res) => {
    switch (req.url)
    {
        case '/':
         res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(html);
            break;
        case '/style.css':
         res.writeHead(200, { 'Content-Type': 'text/css'});
            res.end(css);
            break;
        case '/main.js':
          res.writeHead(200, { 'Content-Type': 'text/javascript'});
            res.end(JS);
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain'});
            res.end('404 Not found');
    }
}).listen(3000, () => console.log('Server is worker'));




/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})*/


