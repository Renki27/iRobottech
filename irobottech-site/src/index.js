import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());

app.listen(3000, () => console.log('Express server esta corriendo sobre el puerto 3000'));

var mysqlConnection = mysql.createConnection({
    host: 'irobottech.com',
    user: 'root',
    password: 'root',
    database: 'irobottechdb',
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB conexion exitosa');
    else
        console.log('DB conexion fallida');
}
);