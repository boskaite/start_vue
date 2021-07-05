import http from 'http'
import path from 'path'
import fs from 'fs'

let __dirname = path.resolve();

http.createServer((req, res) => {
    switch (req.url)
    {
        case '/':
         res.writeHead(200, { 'Content-Type': 'text/html'});
            const html = fs.createReadStream(__dirname+'/index.html');
            html.pipe(res); //res.end(html);
            break;
        case '/style.css':
         res.writeHead(200, { 'Content-Type': 'text/css'});
            const css = fs.createReadStream(__dirname + '/style.css');
            css.pipe(res); //res.end(css);
            break;
        case '/main.js':
          res.writeHead(200, { 'Content-Type': 'text/javascript'});
            const js = fs.createReadStream(__dirname + '/hello_button.js');
            js.pipe(res); //res.end(js);
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


