const express=require('express');
const router = express.Router();
const {registerUser,getMe,login} = require('../controllers/userController');
const { protect } = require('../middlewear/authMiddlewear');

router.post('/',registerUser)
router.post('/login',login)
router.post('/me',protect,getMe)

module.exports = router