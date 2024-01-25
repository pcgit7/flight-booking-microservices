const express = require('express');
const bodyParser = require('body-parser');


const { ServerConfig , Logger } = require('./config');
const apiRoutes = require('./Routes');

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api',apiRoutes);
    app.listen(ServerConfig.PORT, () => {
        console.log("Listning on port" , ServerConfig.PORT);
        Logger.info('Successfully started the server', {});
    });
};

setupAndStartServer();

