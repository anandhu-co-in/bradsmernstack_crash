const express=require('express');
const router=express.Router();
const {getGoals,setGoal,updateGoal,deleteGoal}=require('../controllers/goalControllers');
const { protect } = require('../middlewear/authMiddlewear');



router.get('/', protect, getGoals).post('/',protect, setGoal); //Chaining since both routes has same url '/'

router.put('/:id',protect, updateGoal).delete('/:id',protect,deleteGoal);


module.exports = router
