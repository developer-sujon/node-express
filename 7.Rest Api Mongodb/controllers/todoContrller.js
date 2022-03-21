const Todo = require("../models/Todo");

//get all todo
exports.getAllTodo = async (req, res, next) => {
  try {
    const todos = await Todo.find({});
    res.json({ result: todos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There was an server side error" });
  }
};

//get a todo by id
exports.getSingleTodo = async (req, res, next) => {
  try {
    const todo = await Todo.find({ _id: req.params.id });
    res.json({ result: todo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There was an server side error" });
  }
};

//create a todo
exports.createTodo = async (req, res, next) => {
  try {
    const newTodo = Todo(req.body);
    await newTodo.save();
    res.json({ message: "Todo created successfully", result: newTodo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There was an server side error" });
  }
};

//create Multiple todo
exports.createMultipleTodo = async (req, res, next) => {
  try {
    const newTodos = await Todo.insertMany(req.body);
    res.json({ message: "Todos created successfully", result: newTodos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There was an server side error" });
  }
};

//update todo by id
exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          status: req.body.status,
        },
      },
      { new: true },
    );
    res.json({ message: "Todo Update was successfully", result: todo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There was an server side error" });
  }
};

//delete todo by id
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findOneAndDelete({ id: req.params.id });
    res.json({ message: "Todo Delete was successfully", result: todo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There was an server side error" });
  }
};

//delete multiple todo

exports.deleteMultipleTodo = async (req, res, next) => {
  try {
    const todos = await Todo.deleteMany({});
    res.json({ message: "Todos Delete was successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There was an server side error" });
  }
};
