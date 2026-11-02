const blogModel = require("../models/blogModels");

const addBlog=async (req,resp) => {
    try {
        const {title,content,imageUrl,author}=req.body
       const data= await blogModel.create({title,content,imageUrl,author})
        resp.json(data)
    } catch (error) {
        console.log(error);
    }
}
const updateBlog=async (req,resp) => {
    try {
        await blogModel.findByIdAndUpdate(req.params.id,req.body)
        resp.json("data updated")
    } catch (error) {
        console.log(error);
        
    }
}
const deleteBlog=async (req,resp) => {
    try {
        const data=await blogModel.findByIdAndDelete(req.params.id)
        if (data!=null) {
            resp.json("data deleted")
        } else {
            resp.json("no record found")
        }
    } catch (error) {
        console.log(error);
        
    }
}
const showBlog=async (req,resp) => {
    try {
        const data=await blogModel.findById(req.params.id)
        if (data!=null) {
            resp.json(data)
        } else {
            resp.json("no records found")
        }
    } catch (error) {
        console.log(error);
        
    }
}
const showBlogs=async (req,resp) => {
    try {
        const data=await blogModel.find()
        if (data!=null) {
            resp.json(data)
        } else {
            resp.json("no records found")
        }
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={addBlog,updateBlog,deleteBlog,showBlog,showBlogs}