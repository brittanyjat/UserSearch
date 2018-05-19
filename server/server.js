require('dotenv').config();
const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , morgan = require('morgan')
    , controller = require('./controller')
    , Sequelize = require('sequelize')
    , db = require('./db');

const { SERVER_PORT, DATABASE_URI } = process.env;

app.use(morgan('combined'));
app.use(bodyParser.json());

// app.use(express.static(`${__dirname}/../build`));

app.set('db', db);

app.post('/person', controller.addUser);
app.get('/person', controller.getUser);

db.sequelize.sync().then(() => {
    app.listen(SERVER_PORT, () => {
        console.log(`Serving on port: ${SERVER_PORT}`);
    });
});