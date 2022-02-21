const { create, getUsers, getUsersById, getUserByEmail } = require('./user.service');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

module.exports ={
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 500,
                    message: 'Error database connection'
                })
            }
            return res.status(200).json({
                success: 200,
                data: results
            })
        });
    },
    getUsersById: (req, res) => {
        const id = req.params.id;
        getUsersById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    message: 'Record not found'
                })
            }
            return res.json({
                data: results
            })
        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                data: results
            })
        })
    },
    login: (req, res) => {
        const body = req.body;
        getUserByEmail(body.email, (err, results) => {
            if (err) {
                res.status(500);
                console.log(err);
            }
            if (!results) {
                return res.status(401).json({
                    code: 401,
                    data: 'Invalid password or email'
                })
            }
            console.log(results);
            const result = compareSync(body.password, results.user_password);
            if (result) {
                result.password = undefined;
                const jsontoken = sign({result: results}, 'qwe1234', {
                    expiresIn: '40m'
                });
                return res.status(200).json({
                    code: 200,
                    message: 'Login successfully',
                    token: jsontoken
                });
            }else{
                return res.status(401).json({
                    code: 401,
                    data: 'Invalid password or email'
                });
            }
        });
    }
}