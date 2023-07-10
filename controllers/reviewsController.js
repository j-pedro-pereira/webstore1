const { sequelize } = require("../models/index");
const { DataTypes } = require("sequelize");

const Review = require("../models/reviewsModel")(sequelize, DataTypes);

const addNewReview = async (req, res) => {
  let info = {
    rating: req.body.rating,
    description: req.body.description,
  };

  const review = await Review.create(info);
  res.status(200).send(review);
  console.log(review);
};

const getAllReviews = async (req, res) => {
  let reviews = await Review.findAll({});
  res.status(200).send(reviews);
};

const getSingleReview = async (req, res) => {
  let id = req.params.id;
  let review = await Review.findOne({ where: { id: id } });
  res.status(200).send(review);
};

const updateReview = async (req, res) => {
  let id = req.params.id;
  const review = await Review.update(req.body, { where: { id: id } });

  res.status(200).send(review);
};

const removeReview = async (req, res) => {
  let id = req.params.id;
  await Review.destroy({ where: { id: id } });
  res.status(200).send("Delete Review successfull.");
};

module.exports = {
  addNewReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  removeReview,
};