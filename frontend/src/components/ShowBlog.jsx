import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const ShowBlog = () => {
 const [blog,setBlog]=useState({})
 const {id}=useParams()
 const navigate=useNavigate()
 const handleDelete=()=>{
  axios.delete(`http://localhost:4000/blog/${id}`)
  .then(()=>navigate('/'))
  .catch((err)=>console.log(err))
 }
  useEffect(()=>{
        axios.get(`http://localhost:4000/blog/blog/${id}`)
        .then((res)=>setBlog(res.data))
        .catch((err)=>console.log(err))
    },[])
  return (
    <>
  <div
    className="container"
  >
    <div
      className="row justify-content-center align-items-center g-2"
    >
      <div className="col">
        <div className="card">
          <img className="card-img-top" src={blog.imageUrl} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">Title:{blog.title}</h4>
            <p className="card-text">Content:{blog.content}</p>
            <h5 className="card-title">Author Name:{blog.author}</h5>
            <NavLink
              name=""
              id=""
              className="btn btn-primary"
              to="/"
              role="button"
              >Back to home</NavLink>
            <NavLink
              name=""
              id=""
              className="btn btn-primary"
              to={`/edit/${id}`}
              role="button"
              >Edit</NavLink>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleDelete}
            >
              Delete
            </button>
            
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
      
    </>
  )
}

export default ShowBlog
