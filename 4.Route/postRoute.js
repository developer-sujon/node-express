const postRoute = require("express").Router();
const {
  getAllPost,
  getSinglePost,
  createNewPost,
  updatePost,
  deletePost,
} = require("./postControlar");

//get all post example.com/posts methud GET
postRoute.get("/", getAllPost);

//get single post example.com/posts methud GET
postRoute.get("/:postId", getSinglePost);

//post a posts example.com/posts methud POST
postRoute.post("/", createNewPost);

//update post in posts example.com/posts methud PATCH/PUT
postRoute.patch("/:postId", updatePost);

//delete post in posts example.com/posts methud PATCH/DeLETE
postRoute.delete("/:postId", deletePost);

module.exports = postRoute;