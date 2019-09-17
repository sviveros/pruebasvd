// Ejemplo tomado del video: https://www.youtube.com/watch?v=VxRXlUrV6y0
// Quedo en: 0hh50mm

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// Importando rutas
const unidadesRoutes = require('./routes/unidades');

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// (middlewares) Funciones que se ejecutan antes de las peticiones de los usuarios
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'formulario'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// (routes) Peticiones de los usuarios
app.use("/",unidadesRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`Esta corriendo en el puerto: ${app.get('port')}`);
});