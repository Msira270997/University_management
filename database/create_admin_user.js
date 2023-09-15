const connection = require('./connection');
const bcrypt = require('bcrypt')

createAdminUser = async function (username, password, email) {
  let passwordEncrypt = bcrypt.hashSync(password, 10);
  var conn = await connection.createConnection();
  let params = [username, passwordEncrypt, email, 'admin'];

  conn.query(`INSERT INTO users SET username = ?, password = ?, email = ?, role = ?`, params, function (err, result) {
    conn.release();
    if (err) throw err;

    console.log(`Successful creation the user: ${username}`);
  });
};

createAdminUser(process.argv[2], process.argv[3], process.argv[4]);