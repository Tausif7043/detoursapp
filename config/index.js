
'use strict';
const path = require("path");
const envFilePath = path.resolve(__dirname, '../.env');
const env = require("dotenv").config({ path: envFilePath });
module.exports =  {
    env: env.parsed
}