import { createApp } from 'vue'
import App from './App.vue'
import * as path from "core-js";

const express = require('express');
const publicPath = path.join(__dirname)


const pp = express()
pp.use(express.static(publicPath))

pp.listen(3000, () => {
    console.log('Server has been started ...')
 })

createApp(App).mount('#app')

const renderer = require('vue-server-renderer').createRenderer()

renderer.renderToString(App, (err, html) => {
    if (err) throw err
    console.log(html)
    })

renderer.renderToString(App).then(html => {
    console.log(html)
}).catch(err => {
    console.error(err)
})

