import serverComponent from './serverComponent';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Express from 'express';
require ('babel-register')({
    presets: ['react']
});



//request, response
/*
Express.get('/', (req, res) => {
    var html = ReactDOMServer.renderToString(
        React.createElement(serverComponent)
    );
    res.send(html)
});
*/
Express.use(Express.static(__dirname + '/public'));

Express.listen(3000, () => {
    console.log('server on port 3000');
});

