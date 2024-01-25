const authorModels = require("../model/authorModel.js");
const { ObjectId } = require("mongoose").Types;
const bcrypt = require("bcrypt");

const createauthorData = async function (req, res) {
  try {
    const {
      title,
      firstName,
      lastName,
      email,
      password,
      address,
      mobileNumber,
      isActive,
    } = req.body;

    if (!email) {
      return res.send({ message: "Please enter email" });
    }

    if (!mobileNumber) {
      return res.send({ message: "Please enter mobile number" });
    }

    const salt = await bcrypt.genSaltSync(10);
    console.log("salt", salt);
    const hashPassword = await bcrypt.hash(password, salt);
    console.log("hashPassword", hashPassword);

    const demoData = await authorModels.create({
      title,
      firstName,
      lastName,
      email,
      password: hashPassword,
      address,
      mobileNumber,
      isActive,
    });

    res.status(201).send({
      message: "Profile created successfully",
      success: true,
      demoData,
    });
  } catch (err) {
    console.log("createDemoData", err.message);
    res.send({ message: "Something went wrong in createDemoData" });
  }
};

const loginauthor = async function (req, res) {
  try {
    const { email, password } = req.body;
    const data = await authorModels.findOne({ email: email });
    if (!email) {
      return res.send({ message: "Please enter email" });
    }

    if (!password) {
      return res.send({ message: "Please enter Password" });
    }
    if (!data) {
      return res.send({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, data.password);
    console.log('isMatch',isMatch )
   if(!isMatch) {
      return res.send({ message: "Password not matched" });
    }
    res.send({ message: "User found successfully" });
    console.log('data', data)
  } catch (err) {
    console.log("createDemoData", err.message);
    res.send({ message: "Something went wrong in createDemoData" });
  }
};
const findAllauthor = async function (req, res) {
  try {
    // const { firstName } = req.query;
    // console.log("firstName", req.query);
    const { isActive } = req.query;
    console.log("isActive", typeof isActive);
    const Allauthor = await authorModels.find({ isActive: isActive });
    // const authorcount = await authorModels.countDocuments();

    res.status(200).send({
      message: "Users fetched successfully",
      // count: authorcount,
      Allauthor,
    });
  } catch (err) {
    console.log("findAllUsers", err.message);
    res.send({ message: "Something went wrong in findAllUsers" });
  }
};

const findSingleauthor = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("id", typeof id);

    const data = await authorModels.findById({ _id: new ObjectId(id) });

    if (!data) {
      return res.status(404).send({ message: "author data not found" });
    }

    res.status(200).send({ message: "Data fetched successfully", data });
  } catch (err) {
    console.log("getSingleUser", err.message);
    res.send({
      message: "Something went wrong in getSingleUser",
      success: false,
    });
  }
};

const updateauthor = async (req, res) => {
  try {
    // const author = req.params.id;
    const { id } = req.params;

    const {
      title,
      lastName,
      firstName,
      email,
      password,
      address,
      mobileNumber,
      isActive,
    } = req.body;

    console.log("req.body", req.body);

    // if (!age) {
    //     return res.send({ message: "Please provide the new age for update" });
    // }

    const updatedData = await authorModels.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        title,
        lastName,
        firstName,
        email,
        password,
        address,
        mobileNumber,
        isActive,
      },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send({
      message: "Age updated successfully",
      updatedData,
    });
  } catch (err) {
    console.log("updatedData", err.message);
    res
      .status(500)
      .send({ message: "Something went wrong in updatedData", success: false });
  }
};

const deleteauthor = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedauthor = await authorModels.findOneAndDelete({
      _id: new ObjectId(id),
    });

    if (!deletedauthor) {
      return res.status(404).send({ message: "User not found" });
    }

    res.send({ message: "User deleted successfully" });
  } catch (err) {
    console.log("deleteUser", err.message);
    res.status(500).send({ message: "Something went wrong in deleteUser" });
  }
};

module.exports = {
  createauthorData,
  findAllauthor,
  findSingleauthor,
  updateauthor,
  deleteauthor,
  loginauthor
};

// status code

// 200 - ok
// 201 - created
// 202 - accepted
// 204 - no content
// 400 - bad request
// 404 - not found
// 500 - server error
