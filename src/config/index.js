const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    "port" : process.env.PORT || 3000,
    "host" : process.env.HOST || 'localhost',
    "dbUri": process.env.MONGO_URI
}