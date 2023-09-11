const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('login/login', {
    stage: 'Login'
  })
});

router.post('/', function (req, res) {
  console.log(req.body)
});

module.exports = router;