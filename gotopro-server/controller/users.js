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
    
    const { username, password } = req.body;
    console.log(username + ' : ' + password)
    try{
        let user = await User.findOne({
            username
        });
        //CHECK USER
        if(!user)
            return res.status(400).json({
                auth: false,
                message: "Tài khoản không tồn tại"
        });
        //COMPARE PASSWORD
        const isMatch = await bcrypt.compare(password, user.password); 

        if(!isMatch)
            return res.status(400).json({
                auth: false,
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
                    auth: true,
                    token
                });
            }
        );

    } catch ( err ) {
        console.error( err );
        res.status(500).json({
            auth: false,
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
        userDuties,
    } = req.body;
    const notiToken = '';
    try{
        let user = await User.findOne({
            username
        });
        if(user){
            return res.status(400).json({
                verify: false,
                message: "Sai tài khoản hoặc mật khẩu"
            });
        }

        user = new User({
            username,
            email,
            password,
            fullname,
            userDuties,
            notiToken
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
                    verify: true,
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
        if(user){
            res.status(200).json({ auth: true, data: user});
        }else{
            return res.status(400).json({
                auth: false,
                message: "Mã Token không hợp lệ hoặc đã hết phiên đăng nhập"
            });
        }
    } catch ( err ) {
        console.log(err);
        res.send({ message: "Có lỗi khi tải thông tải người dùng" });
    }
};

const addNotiToken = async (req, res) => {
    try{
        const userid = req.body.userid;
        const notiToken = req.body.notiToken;
        console.log("set noti Token for " + userid);

        const newUpdateId = { _id: userid };
        const newDocUpdate = {
            $set: {
              notiToken: notiToken,
            },
          };
        const options = { upsert: true };

        await User.update( newUpdateId, newDocUpdate, options );

        res.status(201).send({ success: true, message: "Cập nhật NotiToken thành công" });
    }catch(err){
        res.status(500);
        console.log(err);
    }

};

module.exports = { userLogin, userSignup, userGetMe, addNotiToken };