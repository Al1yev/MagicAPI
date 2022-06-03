const User = require("../model/user.js");

const getAllUsers = async (req, res) => {
  try {
    const data = await User.find();
    if (data.length != 0)
      res.status(200).send({
        message: "Succes",
        body: { data },
      });
    else
      res.status(404).send({
        message: "Data is empty",
      });
  } catch (err) {
    throw err;
  }
};

const getOneUser = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    if (data != null)
      res.status(200).send({
        status: "success",
        body: { data },
      });
    else throw new Error();
  } catch (err) {
    res.status(404).send({ message: "Failed" });
  }
};

const createUser = async (req, res) => {
  try {
    const data = await User.create(req.body);
    res.status(201).json({
      message: "Success",
      body: { data },
    });
  } catch (err) {
    res.status(404).res.json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const data = await User.findByIdAndRemove(req.params.id);
    if (data)
      res.status(204).send({
        message: "Success",
      });
    else throw new Error();
  } catch (err) {
    res.status(404).send({
      message: "Failed",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const data = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (data)
      res.status(200).send({
        message: "Succes",
        body: { data },
      });
    else throw new Error();
  } catch (err) {
    res.status(404).send({
      message: "Failed",
    });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  deleteUser,
  updateUser,
};
