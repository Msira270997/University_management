const connection = require('./connection')

class users {
  async filterUsers(criteria) {
    try {
      let sql = ` SELECT * FROM users `;
      const params = [];
      let condition = '';

      if (criteria.username) {
        condition += (condition ? ' AND ':' WHERE ') + ' username = ? ';
        params.push(criteria.username);
      };
      if (criteria.role) {
        condition += (condition ? ' AND ':' WHERE ') + ' role = ? ';
        params.push(criteria.role);
      };
      if (criteria.id) {
        condition += (condition ? ' AND ':' WHERE ') + ' id = ? ';
        params.push(criteria.id);
      };

      sql += condition;

      const conn = await connection.createConnection();

      let users = await new Promise((resolve, reject) => {
        conn.query(sql, params, function (err, result) {
          conn.release();
          if (err) {
            reject(err);
            return
          };
          const usersList = [];
          for (let i = 0; i < result.length; i++) {
            usersList.push(result[i]);
          };
          resolve(usersList);
        });
      });

      return users;

    } catch (error) {
      console.log(error)
    };
  };
};

module.exports.users = users;