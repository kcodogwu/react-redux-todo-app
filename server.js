'use strict';

// load modules
import http from 'http';
import app from './app';

const server = http.createServer(app);

const startServer = () => {
    server.listen(app.get('port'), () => {
        console.log(`Listening on port ${ app.get('port') } in ${ app.get('env') } mode; Press Ctrl+C to cancel`);
    });
};

startServer();