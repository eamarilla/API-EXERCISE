require('dotenv').config();

const express = require('express');
const app = express();
const jsonwebtoken = require('jsonwebtoken');
const morgan = require('morgan');

// Configuraciones de API
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json());

// Rutas
app.use('/api/bands', require('./api/bands/band.routes'));
app.use('/api/users', require('./api/users/user.routes'));

// Inicializamos el servidor
app.listen(process.env.APP_PORT, () => {
    console.log(`Server on port ${process.env.APP_PORT}`);
});