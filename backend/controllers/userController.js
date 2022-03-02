const asyncHandler = require('express-async-handler');
const User = require('../models/usermodel');

const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');



//Register new user 
const registerUser = asyncHandler(async(req,res)=>{


    const {name,email,password} = req.body

    if(!name||!email||!password){
        throw new('Please include name,email or password')
    }
     
    const userExists= await User.findOne({email})

    if(userExists){
        throw new('User alredy exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await User.create({
        name,
        email,
        password:hashedPassword
    })

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email
        })
    }
    else{
        res.status(400);
        throw new('user returned empty after creating user. Some problem!')
    }

    res.json("register")
})



//Login user
const login = asyncHandler(async(req,res)=>{

    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password,user.password))){

        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error('Login failed. Invalid credentials')
    }

})


//Get current user
const getMe = asyncHandler(async(req,res)=>{

    const {_id,name,email} = await User.findById(req.user.id)

    res.status(201).json({
        id:_id,
        name:name,
        email:email
    })

    res.json("getme")
})



const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})
}


module.exports={registerUser,login,getMe}
