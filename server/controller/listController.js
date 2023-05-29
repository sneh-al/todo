const asyncHandler = require("express-async-handler");

//@desc Get User List
//@route GET /api/v1/lists
//@access private
const getUserLists = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "list list" });
});

//@desc Create new  list
//@route POST /api/v1/lists
//@access private
const createList = asyncHandler(async (req, res) => {
  const todo = req.body;
  res.status(200).json({ message: "list created" });
});

//@desc Update   List
//@route PUT /api/v1/lists/:id
//@access private
const updateList = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "list updated" });
});

//@desc Delete   List
//@route DELETE /api/v1/Lists/:id
//@access private
const deleteList = asyncHandler(async (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: id });
});
module.exports = { getUserLists, createList, updateList, deleteList };
