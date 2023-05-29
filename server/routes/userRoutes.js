const express = require("express");

const router = express.Router();
const {
  getUser,
  createUser,
  deleteUser,
  userLogOut,
  authUser,
  updateUser,
} = require("../controller/userControler");
const { protect } = require("../middleware/auth");

router.post("/", createUser);
router.route("/profile").put(protect, updateUser).get(protect, getUser);
router.delete("/:id", deleteUser);
router.post("/logout", userLogOut);
router.post("/auth", authUser);

module.exports = router;
