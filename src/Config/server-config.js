const dotenv = require('dotenv');

dotenv.config();

process.env.PORT = 5000;
module.exports = {
    PORT : process.env.PORT
};