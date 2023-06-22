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

router.route("/:userId").get(getUserLists).post(createList);
router.route("/:id").put(updateList).delete(deleteList);
router.route("/:userId/fav").get(getFavList);

module.exports = router;
