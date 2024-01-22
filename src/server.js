const express = require('express');

const app = express();

const { ServerConfig , Logger } = require('./Config');
const apiRoutes = require('./Routes');

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log("Listning on port" , ServerConfig.PORT);
    Logger.info('Successfully started the server', {});
});
