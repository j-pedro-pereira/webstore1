const { sequelize } = require("../models/index");
const { DataTypes } = require("sequelize");

const Product = require("../models/productModel")(sequelize, DataTypes);


const addNewProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
  console.log(product);
};

const getAllProducts = async (req, res) => {
  const product = await Product.findAll({});
  res.send(product);
};

const getSingleProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });

  res.status(200).send(product);
};

const removeProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send("Product destroyed");
};

module.exports = {
    addNewProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    removeProduct,
};
