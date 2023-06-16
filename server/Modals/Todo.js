const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    list: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
      required: true,
    },
    todos: [
      {
        title: {
          type: String,
          required: true,
        },

        isCompleted: {
          type: Boolean,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
