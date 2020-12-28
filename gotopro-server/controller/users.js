const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('./../config/config');
//MODEL
const User = require("./../models/User");

const userLogin = async ( req, res ) => {
  

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }
    
    const { email, password } = req.body;
    try{
        let user = await User.findOne({
            email
        });
        //CHECK USER
        if(!user)
            return res.status(400).json({
                message: "Tài khoản không tồn tại"
        });
        //COMPARE PASSWORD
        const isMatch = await bcrypt.compare(password, user.password); 

        if(!isMatch)
            return res.status(400).json({
                message: "Sai mật khẩu"
            });

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            config.jwtSecret,
            {
                expiresIn: 3600
            },
            ( err, token ) => {
                if ( err ) throw err;
                res.status(200).json({
                    token
                });
            }
        );

    } catch ( err ) {
        console.error( err );
        res.status(500).json({
            message: "Máy chủ đang bận"
        });
    } 

};

const userSignup = async ( req, res ) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {
        username,
        email,
        password,
        fullname,
    } = req.body;
    try{
        let user = await User.findOne({
            email
        });
        if(user){
            return res.status(400).json({
                msg: "Tài khoản đã tồn tại"
            });
        }

        user = new User({
            username,
            email,
            password,
            fullname
        });

        const salt = await bcrypt.genSalt(config.saltRounds);
        user.password = await bcrypt.hash(password, salt);

        await user.save()

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            config.jwtSecret, 
            {
                expiresIn: 10000
            },
            ( err, token ) => {
                if ( err ) throw err;
                res.status(200).json({
                    token
                }); 
            }
        );

    }catch(err){
        console.log(err.message);
        res.status(500).send("Không thể đăng ký tài khoản");

    }
};

const userGetMe = async ( req, res ) => {
    try{
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch ( err ) {
        console.log(err);
        res.send({ message: "Có lỗi khi tải thông tải người dùng" });
    }
};

module.exports = { userLogin, userSignup, userGetMe };