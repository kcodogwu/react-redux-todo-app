'use strict';

// load modules
import express from 'express';
import path from 'path';

// app setup
const app = express();

app.set('port', process.env.PORT || 3333);
app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

/*
app.use((req, res) => {
    res.type('text/plain')
        .status(404)
        .send('404 - Not Found');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.type('text/plain')
        .status(500)
        .send('500 - Server error');
});
*/

export default app;