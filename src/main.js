import { createApp } from 'vue'
import App from './App.vue'

import * as path from "core-js";
import StartHello from "@/components/StartHello";

function fjs () {
    createApp(App).mount('#app');
}
export default {
    name: 'JS',
    components: {
        function: fjs()
    }
}

/*export default {
    name: 'JS',
    components: {
        js
    }
};*/
/*const server = require('express')();
const template = require('fs').readFileSync('.index.template.html', 'utf-8f');
const renderer = require('vue-server-renderer').createRenderer({
    template,
});
const context = {
    title:'vue ssr',
    meta:'' +
        '<meta name="keyword" content="vue,ssr">'+
        '<meta name="description" content="vue ssr demo">'+
    '',
};

server.get('*', (req,res) => {
    createApp(App).mount('#app');

    renderer.renderToString(App, context, (err, html) => {
            console.log(html);
            if (err) {
                res.status(500).end('Internal Server Error')
                return;
            }
            res.end(html);
        });
})
server.listen(8080);*/

