const express = require("express");
const {
  getAllUsers,
  getOneUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controller/users.js");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getOneUser).delete(deleteUser).patch(updateUser);

module.exports = router;
