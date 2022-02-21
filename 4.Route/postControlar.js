exports.getAllPost = (req, res) => {
  res.send("All Posts  Listner");
};
exports.getSinglePost = (req, res) => {
  res.send(`Post ${req.params.postId} Listner`);
};
exports.createNewPost = (req, res) => {
  res.send("Post Created has been successful");
};
exports.updatePost = (req, res) => {
  res.send(`Post ${req.params.postId} has been update successful`);
};
exports.deletePost = (req, res) => {
  res.send(`Post ${req.params.postId} has been delete successful`);
};
