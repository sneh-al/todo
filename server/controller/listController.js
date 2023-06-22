const asyncHandler = require("express-async-handler");
const List = require("../Modals/list");
const User = require("../Modals/User");

//@desc Get User List
//@route GET /api/v1/lists
//@access private
const getUserLists = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.userId;
    const lists = await List.find({ user: userId });
    res.status(200).json(lists);
  } catch (error) {
    res.status(500);
    throw new Error("An error occurred while retrieving the lists.");
  }
});

//@desc Create new  list
//@route POST /api/v1/lists
//@access private
const createList = asyncHandler(async (req, res) => {
  const newList = new List(req.body);
  await newList.save();
  res.status(201).json(newList);
});

//@desc Update   List
//@route PUT /api/v1/lists/:id
//@access private
const updateList = asyncHandler(async (req, res) => {
  const id = req.params.id;

  let list = await List.findOne({ _id: id });

  list.name = req.body.name;
  await list.save();

  res.status(200).json({ message: "list updated" });
});

//@desc Delete   List
//@route DELETE /api/v1/Lists/:id
//@access private
const deleteList = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deletedTodo = await List.findOneAndDelete({ _id: id });
  if (!deletedTodo) {
    // Handle case where the todo with the given ID was not found
    throw new Error("Todo not found");
  }
  res.status(200).json({ message: "List Deleted" });
});

//@desc Set Faviourite List
//@route Set Fav /api/v1/Lists/:id
//@access private
const setfavList = asyncHandler(async (req, res) => {
  const id = req.params.userId;
  const user = await User.findById(id);
  if (user) {
    user.favourite = req.body;
    const updatedUser = await user.save();
    res.status(200).json(updatedUser.favourite);
  } else {
    res.status(401);
    throw new Error("Invalid  password");
  }

  res.status(200).json({ message: id });
});

const getFavList = asyncHandler(async (req, res) => {
  const id = req.params.userId;
  const user = await User.findById(id);
  if (user) {
    res.status(200).json(user.favourite);
  } else {
    res.status(401);
    throw new Error("NOt  FOund");
  }

  res.status(200).json({ message: id });
});
module.exports = {
  getUserLists,
  createList,
  updateList,
  deleteList,
  setfavList,
  getFavList,
};
