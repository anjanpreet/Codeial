const express=require('express');
const router=express.Router();
const usersController=require('../controllers/users_controller');
module.exports=router;
router.get('/profile',usersController.profile);
router.get('/followers',usersController.followers);