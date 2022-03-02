const asyncHanlder = require('express-async-handler');


const Goal = require('../models/goalmodel')

//To get all goals
const getGoals = asyncHanlder(async(req,res) => {

    const goals = await Goal.find()

    res.status(200).json(goals)
})




//To add a new goal
const setGoal = asyncHanlder(async (req,res) => {
    if(!req.body.text){
        throw new Error("Please add a text")
    }
    const goal = await Goal.create({text:req.body.text})
    res.status(200).json(goal)
})



//Update a goal using its id in the url
const updateGoal = asyncHanlder(async (req,res) => {

    const goal = await Goal.findById(req.params.id);
    
    if(!goal){
        throw new('Goal not found')
    }
    const updatedGoal= await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
    
    res.status(200).json(updatedGoal)
})


//Delate a goal using its ID
const deleteGoal = asyncHanlder(async (req,res) => {

    const goal = await Goal.findById(req.params.id);
    
    if(!goal){
        throw new('Goal not found for deleting it')
    }

    await goal.remove();
    res.status(200).json({id:req.params.id})
})

module.exports={getGoals,setGoal,updateGoal,deleteGoal}