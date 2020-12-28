const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = ( req, res, next ) => {
    const token = req.header("token");
    if(!token) return res.status(401).json({ message: "Lỗi khi xác minh" });

    try { 
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = decoded.user;
        next();
    } catch ( err ) {
        console.error(err);
        res.status(500).send({ message: "Mã Token không hợp lệ" })
    }
}