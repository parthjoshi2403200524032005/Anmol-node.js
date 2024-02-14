const blogModels = require("../model/blogModels.js");
const { ObjectId } = require("mongoose").Types;
const jwt = require("jsonwebtoken");

const createblog = async (req, res) => {
  try {
    const { title, discription, category, subcategory, authorid } = req.body;
    const data = await blogModels.create({
      title,
      discription,
      category,
      subcategory,
      authorid,
    });
    res.status(201).send({ message: "Blog created successfully", data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

const loginblog = async (req, res) => {
  try {
    const { category } = req.body;
    const data = await blogModels.findOne({ category: category });
    if (!category) {
      return res.send({ message: "Please enter email" });
    }
    const token = jwt.sign({ category: data.category }, "secret", {
      expiresIn: "20d",
    });
    res.send({ message: "Login successfully", token: token });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};
const getsingleblog = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await blogModels.findById({ _id: new ObjectId(id) });
    res.status(200).send({ message: "Data fetched successfully", data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

const findallblogs = async (req, res) => {
  try {
    const data = await blogModels.find();
    res.status(200).send({ message: "Data fetched successfully", data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};
const updateblog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, discription, category, subcategory } = req.body;
    const data = await blogModels.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { title, discription, category, subcategory }
    );
    res.status(200).send({ message: "Data updated successfully", data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

const deleteblog = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await blogModels.findOneAndDelete({ _id: new ObjectId(id) });
    res.status(200).send({ message: "Data deleted successfully", data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  createblog,
  getsingleblog,
  findallblogs,
  updateblog,
  deleteblog,
  loginblog,
};
