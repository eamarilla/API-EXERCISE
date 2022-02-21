const { createUser, getUsers, getUsersById, login } = require('./user.controller');
const router = require('express').Router();
const { checkToken } = require('../../auth/validation_token');
 
router.post('/', checkToken, createUser);
router.get('/', checkToken, getUsers);
router.get('/:id', checkToken, getUsersById);
router.post('/login', login);

module.exports = router;