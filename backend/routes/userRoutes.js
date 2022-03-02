const express=require('express');
const router = express.Router();
const {registerUser,getMe,login} = require('../controllers/userController');

router.post('/',registerUser)
router.post('/login',login)
router.post('/me',getMe)

module.exports = router