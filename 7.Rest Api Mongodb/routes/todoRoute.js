const todoRoute = require("express").Router();
const {
  getAllTodo,
  getSingleTodo,
  createTodo,
  createMultipleTodo,
  updateTodo,
  deleteTodo,
  deleteMultipleTodo,
} = require("../controllers/todoContrller");

//get all todo
todoRoute.get("/", getAllTodo);

//get all todo
todoRoute.get("/:id", getSingleTodo);

//get all todo
todoRoute.post("/", createTodo);

//get all todo
todoRoute.post("/all", createMultipleTodo);

//get all todo
todoRoute.patch("/:id", updateTodo);

//get all todo
todoRoute.delete("/:id", deleteTodo);

//get all todo
todoRoute.delete("/", deleteMultipleTodo);

module.exports = todoRoute;
