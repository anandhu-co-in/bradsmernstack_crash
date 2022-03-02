const asyncHandler = require('express-async-handler');
const Goal = require('../models/usermodel')


const registerUser = asyncHandler(async(req,res)=>{
    res.json("register")
})


const login = asyncHandler(async(req,res)=>{
    res.json("login")
})


const getMe = asyncHandler(async(req,res)=>{
    res.json("getme")
})




module.exports={registerUser,login,getMe}
