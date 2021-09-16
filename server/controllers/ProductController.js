const Product = require("../models/Product");

exports.addProduct = (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    vendor: req.body.vendor,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    date: req.body.exp_date
  });
  newProduct
    .save()
    .then(product => {
      res.json(product);
    })
    .catch(err => console.log(err));
}

exports.updateProduct = async (req, res) => {
  let upProduct = await Product.findById({ _id: req.params.id });

  upProduct.name = req.body.name;
  upProduct.price = req.body.price;
  upProduct.description = req.body.description;
  upProduct.vendor = req.body.vendor;
  upProduct.exp_date = req.body.exp_date;

  upProduct
    .save()
    .then(product => {
      res.json(product);
    })
    .catch(err => console.log(err));
}

exports.getProduct = (req, res) => {
  console.log(req.params.category);
  Product.find({category: req.params.category}, (err, products) => {
    res.json({ products });
  })
}