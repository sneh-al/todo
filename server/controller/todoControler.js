const asyncHandler = require("express-async-handler");
const Todo = require("../Modals/Todo");

//@desc Get User todos
//@route GET /api/v1/todos
//@access private
const getTodos = asyncHandler(async (req, res) => {
  const listId = req.params.listId;
  let todos = await Todo.findOne({ list: listId });
  if (todos) {
    res.json({ message: "found  list", todos });
  } else {
    todos = new Todo({
      list: listId,
      todos: [],
    });
    await todos.save();
    res.json({ message: "Created new list", todos });
  }
});

//@desc Create new  todo
//@route POST /api/v1/todos/
//@access private
const createTodo = asyncHandler(async (req, res) => {
  const listId = req.params.listId;
  let todos = await Todo.findOne({ list: listId });
  todos.todos = [...todos.todos, req.body.todo];
  await todos.save();
  res.json({ message: "Created new list", todos });
});

//@desc Update   todo
//@route PUT /api/v1/todos/:id
//@access private
const updateTodo = asyncHandler(async (req, res) => {
  const listId = req.params.listId;
  let todos = await Todo.findOne({ list: listId });

  if (req.body.action === "setStatus") {
    let item = todos.todos.find((todo) => todo.id === req.body.todoId);
    if (item === undefined) {
      return res.json({
        message: "Todo not found",
        id: req.body.todoId,
        type: "error",
      });
    }
    todos.todos = todos.todos.map((todo) =>
      todo.id === req.body.todoId
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo
    );
    await todos.save();
    res.json({
      message: "Status updated successfully",
      id: req.body.todoId,
      type: "success",
    });
  } else {
    let item = todos.todos.find((todo) => todo.id === req.body.todoId);
    if (item === undefined) {
      return res.json({
        message: "Todo not found",
        id: req.body.todoId,
        type: "error",
      });
    }
    todos.todos = todos.todos.map((todo) =>
      todo.id === req.body.todoId ? { ...todo, title: req.body.text } : todo
    );
    await todos.save();
    res.json({
      message: "Todo updated",
      id: req.body.todoId,
      type: "success",
    });
  }
});

//@desc Delete   todo
//@route DELETE /api/v1/todos/:id
//@access private
const deleteTodo = asyncHandler(async (req, res) => {
  const listId = req.params.listId;
  let todos = await Todo.findOne({ list: listId });
  todos.todos = todos.todos.filter((todo) => todo.id !== req.body.id);
  await todos.save();
  res.json({ message: "To do deleted", id: req.body.id });
});
module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
