var express = require('express');
// let users = require('../database/users');

let router = express.Router();

router.get('/admin', (req, res) => {
    res.render('dashboard/admin', {
        dashboardType: 'Admin'
    });
});

module.exports = router;