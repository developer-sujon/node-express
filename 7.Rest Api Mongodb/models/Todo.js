const { Schema, model } = require("mongoose");

const todoSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    status: {
      type: String,
      require: true,
      trim: true,
      enum: ["active", "inavtive"],
    },
    date: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true },
);

const Todo = new model("Todo", todoSchema);

module.exports = Todo;
