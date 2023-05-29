const asyncHandler = require("express-async-handler");

//@desc Get User todos
//@route GET /api/v1/todos
//@access private
const getTodos = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "todo list" });
});

//@desc Create new  todo
//@route POST /api/v1/todos/
//@access private
const createTodo = asyncHandler(async (req, res) => {
  const todo = req.body;
  res.status(200).json({ message: todo });
});

//@desc Update   todo
//@route PUT /api/v1/todos/:id
//@access private
const updateTodo = asyncHandler(async (req, res) => {
  const todo = req.body,
    id = req.params.id;

  res.status(200).json({ message: { id, todo } });
});

//@desc Delete   todo
//@route DELETE /api/v1/todos/:id
//@access private
const deleteTodo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: id });
});
module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
