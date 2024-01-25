const reviewModel = require("../model/reviewModel");
const { ObjectId } = require("mongoose").Types;

const createReview = async (req, res) => {
  try {
    const { rating, blogid, feedback } = req.body;
    const reviewdata = await reviewModel.create({ rating, blogid, feedback });
    res
      .status(201)
      .send({ message: "Review created successfully", reviewdata });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message, success: false });
  }
};

const findAllReview = async (req, res) => {
  try {
    // const { rating } = req.query;
    // const reviewdata = await reviewModel.find({ rating: rating });
    const reviewdata = await reviewModel.find();
    res.status(200).send({ message: "Data fetched successfully", reviewdata });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message, success: false });
  }
};

const findSingleReview = async (req, res) => {
  try {
    const { id } = req.params;
    const reviewdata = await reviewModel.findById({ _id: new ObjectId(id) });
    res.status(200).send({ message: "Data fetched successfully", reviewdata });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message, success: false });
  }
};

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, feedback } = req.body;
    const reviewdata = await reviewModel.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { rating, feedback }
    );
    res.status(200).send({ message: "Data updated successfully", reviewdata });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message, success: false });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const reviewdata = await reviewModel.findOneAndDelete({
      _id: new ObjectId(id),
    });
    res.status(200).send({ message: "Data deleted successfully", reviewdata });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message, success: false });
  }
};
module.exports = {
  createReview,
  findAllReview,
  findSingleReview,
  updateReview,
  deleteReview,
};
