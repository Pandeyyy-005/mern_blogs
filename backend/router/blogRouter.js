const express=require('express')
const { showBlog, addBlog, updateBlog, deleteBlog, showBlogs } = require('../controller/blogController')
const router=express.Router()
router.get("/:id",showBlog)
router.get("/",showBlogs)
router.post("/add",addBlog)
router.put("/:id",updateBlog)
router.delete("/:id",deleteBlog)
module.exports=router