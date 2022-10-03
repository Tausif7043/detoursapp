const express = require('express');
const router = express.Router();
const authClass = require('../api/auth');
router
    .post('/register', function(req, res) {
        return authClass.register(req, res)
    })
    .post('/login', function(req, res) {
        return authClass.login(req, res)
    })

module.exports = router;