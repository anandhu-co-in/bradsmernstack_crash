const express=require('express');
const router=express.Router();
const {getGoals,setGoal,updateGoal,deleteGoal}=require('../controllers/goalControllers')



router.get('/', getGoals).post('/',setGoal); //Chaining since both routes has same url '/'

router.put('/:id',updateGoal).delete('/:id',deleteGoal);


module.exports = router
