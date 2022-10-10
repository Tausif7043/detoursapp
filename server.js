const express = require('express')
const app = express();
const config = require('dotenv/config');
const port = (process.env.NODE_ENV === 'development') ? process.env.PORT : 5000; 

require('./express')(app);
require('./routes')(app);
// require('./error')(app); 

var server = require("http").createServer(app);
server.listen(port, function () {
    console.log("Express server listening on " + port);
});

