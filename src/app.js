/* Un middleware es una funcion que se ejecuta
antes de que llegue a las rutas */

const path  = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//Connecting to DB
mongoose.connect('mongodb://localhost/crud_express')
   .then(db => console.log('Database connected'))
   .catch(err => console.log(err));

//Importing routes
const iRoutes = require('./routes/index');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({entended:false}));

//Routes
app.use('/', iRoutes);

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});