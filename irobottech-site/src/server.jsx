//import serverComponent from './serverComponent';
//import ReactDOMServer from 'react-dom/server';
//import React from 'react';
//import Express from 'express';
const express = require('express');
const app = express();

/*
require ('babel-register')({
    presets: ['react']
});
*/

app.listen(3000, () => {
    console.log('server on port 3000');
});

