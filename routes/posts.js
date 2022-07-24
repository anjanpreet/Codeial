const express=require('express');
const router=express.Router();

const postsController=require('../controllers/posts_Controller');
module.exports=router;


router.get('/posts',postsController.posts);
