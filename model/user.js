const mongoose = require("mongoose");
const nodemon = require("nodemon");

const userScheme = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Noto'g'ri ma'lumot kiritilgan"],
    default: "User",
  },
  lastName: {
    type: String,
    required: [true, "Noto'g'ri ma'lumot kiritilgan"],
    default: "User",
  },
  phoneNumber: {
    type: String,
    required: [true, "Noto'g'ri ma'lumot kiritilgan"],
    default: "+9989Xxxxxxxx",
  },
  courseId: {
    type: String,
    required: [true, "Noto'g'ri ma'lumot kiritilgan"],
    default: null,
  },
});

const User = mongoose.model("user", userScheme);
module.exports = User;
