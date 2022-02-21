const mysqlConnection = require('../../config/connect');

module.exports = {
    create: (data, callBack) => {
        mysqlConnection.query(
            `INSERT INTO users(user_name, user_email, user_password)
                VALUES(?,?,?)`,
            [
                data.name,
                data.email,
                data.password
            ],
            (error, results, fields) => {
                if (error) {
                    console.log(error);
                    return callBack();
                }
                return callBack(null, results);
            }
        );
    },

    getUsers: callBack => {
        mysqlConnection.query(
            `SELECT user_id, user_name, user_email, user_create, user_status FROM users`,
            [],
            (error, result, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, result);
            } 
        );
    },

    getUsersById: (id, callBack) => {
        mysqlConnection.query(
            `SELECT user_id, user_name, user_email, user_create, user_status FROM users WHERE user_id = ?`,
            [id],
            (error, result, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, result[0]);
            } 
        );
    },

    getUserByEmail: (email, callBack) => {
        mysqlConnection.query(
            `SELECT * FROM users WHERE user_email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
}