const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
const postsController=require('../controllers/posts_Controller');
module.exports=router;

router.get('/',homeController.home);
router.get('/posts',postsController.posts);
router.use('/users',require('./users'));