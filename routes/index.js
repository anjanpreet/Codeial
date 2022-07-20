const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
console.log("router1 loaded");
module.exports=router;

router.get('/',homeController.home);
router.use('/users',require('./users'));