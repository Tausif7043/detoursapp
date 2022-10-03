
const expressJwt = require('express-jwt'); 
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/api/auth', require('./auth.js'));
}