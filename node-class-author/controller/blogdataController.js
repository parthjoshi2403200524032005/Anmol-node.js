const blogModels = require("../model/blogModels.js");
const { ObjectId } = require("mongoose").Types;

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
    const data = await blogModels.findOneAndUpdate({ _id: new ObjectId(id) });
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
};
