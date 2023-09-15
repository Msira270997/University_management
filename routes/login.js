const express = require('express');
let usersDb = require('../database/users');
let bcrypt = require('bcrypt');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('login/login', {
    stage: 'Login'
  })
});

router.post('/', async function (req, res) {
  let users_db = new usersDb.users();
  let model = {
    email: req.body.email
  }

  if (req.body.email && req.body.password) {
    let users = await users_db.filterUsers({email: req.body.email});
    if (!users.length) {
      return res.render('login/login', {
        model: model,
        message: 'Usuario o contraseña incorrectros'
      });
    };

    if (await bcrypt.compare(req.body.password, users[0].password)) {
      console.log('Contraseña correcta')
      if (users[0].role === 'admin') {
        console.log('Usuario admin');
        return res.redirect('/dashboard/admin');
      };
      return res.redirect('/dashboard/user');
    } else {
      return res.redirect('/login');
    };
  } else {
    res.render('login/login', {
      model: model,
      message: 'Debe llenar todos los campos'
    })
  };
});

module.exports = router;