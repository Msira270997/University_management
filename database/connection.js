const mysql = require('mysql2');

const dbConfig = {
    host: 'mysql',
    user: 'root',
    password: '123456',
    database: 'university',
    port: '3306'
}

const pool = mysql.createPool(dbConfig);

createConnection = function () {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) {
                console.log(err)
                reject(err)
                if (conn) {
                    conn.release()
                }
                return
            };

            if (conn) {
                console.log("Conexion exitosa")
                resolve(conn)
            };
        })
    })
};

module.exports.createConnection = createConnection;