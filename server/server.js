require('dotenv').config();
const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , morgan = require('morgan')
    , actions = require('./actions')
    , Sequelize = require('sequelize');

const { SERVER_PORT, DATABASE_URI } = process.env;

app.use(morgan('combined'));
app.use(bodyParser.json());

// app.use(express.static(`${__dirname}/../build`));

const sequelize = new Sequelize(DATABASE_URI, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: true
    }
})

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.People = require('./models/People')(sequelize, Sequelize);

app.set('db', db);

app.post('/person', actions.addUser);
app.get('/person', actions.getUser);

db.sequelize.sync().then(() => {
    app.listen(SERVER_PORT, () => {
        console.log(`Serving on port: ${SERVER_PORT}`);
    });
});