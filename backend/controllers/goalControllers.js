const asyncHanlder = require('express-async-handler');


const getGoals = asyncHanlder(async(req,res) => {
    res.status(200).json({message:"Get goals controller"})
})

const setGoal = asyncHanlder(async (req,res) => {
    if(!req.body.text){
        throw new Error("Please add a text")
    }
    res.status(200).json({message:"Set goals controller"})
})

const putGoal = asyncHanlder(async (req,res) => {
    res.status(200).json({message:`Update goal id ${req.params.id}`})
})

const deleteGoal = asyncHanlder(async (req,res) => {
    res.status(200).json({message:`delete goal id ${req.params.id}`})
})

module.exports={getGoals,setGoal,putGoal,deleteGoal}