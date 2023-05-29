const express = require("express");
const router = express.Router();
const {
  getUserLists,
  createList,
  updateList,
  deleteList,
} = require("../controller/listController");

router.route("/").get(getUserLists).post(createList);
router.route("/:id").put(updateList).delete(deleteList);

module.exports = router;
