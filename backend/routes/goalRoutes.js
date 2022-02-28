const express=require('express');
const router=express.Router();
const {getGoals,setGoal,putGoal,deleteGoal}=require('../controllers/goalControllers')



router.get('/', getGoals).post('/',setGoal); //Chaining since both routes has same url '/'

router.put('/:id',putGoal).delete('/:id',deleteGoal);


module.exports = router
