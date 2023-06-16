const express = require("express");
const router = express.Router();
const {
  getUserLists,
  createList,
  updateList,
  deleteList,
  setfavList,
  getFavList,
} = require("../controller/listController");

router.route("/:userId").get(getUserLists).post(createList).put(setfavList);
router.route("/:userId/fav").get(getFavList);
router.route("/:id").put(updateList).delete(deleteList);

module.exports = router;
