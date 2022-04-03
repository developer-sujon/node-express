const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: new Date(),
    },
    contacts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Contact",
      },
    ],
  },
  {
    timestamps: true,
  },
);

const User = new mongoose.model("User", userSchema);

module.exports = User;
