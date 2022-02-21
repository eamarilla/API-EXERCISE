const { verify } = require('jsonwebtoken');

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get('authorization');
        if (token) {
            token = token.slice(7);
            verify(token, 'qwe1234', (err, decoded) => {
                if (err) {
                    res.status(401);
                    res.json({
                        code: 401,
                        message: 'Invalid token'
                    });
                }else{
                    next();
                }
            });
        }else{
            res.status(403);
            res.json({
                code: 403,
                message: '¡Access denied!'
            });
        }
    }
}