const router = require("express").Router();
const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const { findOne } = require("../models/usersModel");


// register new user
router.post("/register",async(res,req)=>{
    console.log(req.body);
    try {
        const existingUser = await findOne({email: req.body.email});
        if(existingUser){
            return res.send({
                message: "User already exists",
                success: false,
                data: null,
            })
        }
        const hashPassword = await hash(req.body.password,10);
        req.body.password = hashPassword;
        const newUser = new User(req.body);
        await newUser.save();
        res.send({
            message: "User registered successfully",
            success: true,
            data: null,
        })
        
    } catch (error) {
        
    }
})


module.exports = router;