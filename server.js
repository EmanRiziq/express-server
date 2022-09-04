'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello');
})
app.post('/person', createPerson)

function start(port) {
    app.listen(3000, () => console.log(`server up a wake on `, port));
}


function createPerson(req, res) {
   res.send(req.body.age+5)
}

module.exports = {
    app: app,
    start: start
}