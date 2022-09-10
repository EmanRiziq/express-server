'use strict';

const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express();
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Hello');
})
app.post('/person', createPerson)


function start(port) {
    app.listen(port, () => console.log(`server up a wake`));
}

function createPerson(req, res) {
    console.log(req.body)
    const { age } = req.body.data;
    console.log(age)

    res.status(201).send(`${parseInt(age) + 5}`);
}

module.exports = {
    app: app,
    start: start
}