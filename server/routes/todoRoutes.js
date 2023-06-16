const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoControler");

router
  .route("/:listId")
  .get(getTodos)
  .post(createTodo)
  .put(updateTodo)
  .delete(deleteTodo);

module.exports = router;
