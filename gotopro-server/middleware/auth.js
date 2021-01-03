const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = ( req, res, next ) => {
    const token = req.header("x-access-token");
    if(!token) return res.status(401).json({ auth: false, message: "Lỗi khi xác minh" });

    try { 
        jwt.verify(token, config.jwtSecret, ( err, decoded ) => {
            if ( err ) {
                res.status(401).json({ auth: false, message: "Có lỗi trong quá trình xác minh token" })
            }else{
                req.user = decoded.user;
                next();
            }
        });
        
    } catch ( err ) {
        console.error(err);
        res.status(500).send({ message: "Mã Token không hợp lệ" })
    }
}