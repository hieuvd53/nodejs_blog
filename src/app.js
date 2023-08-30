const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();

const route = require('./routes');

// database - connect to DB
const db = require('./config/db');
db.connect();

// app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(3000);
