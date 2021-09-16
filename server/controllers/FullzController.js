const Fullz = require("../models/Fullz");

exports.addFullz = (req, res) => {
  const newFullz = new Fullz({
    bin: req.body.bin,
    vendor: req.body.vendor,
    cardname: req.body.cardname,
    price: req.body.price,
    date: req.body.exp_date
  });
  newFullz
    .save()
    .then(fullz => {
      res.json(fullz);
    })
    .catch(err => console.log(err));
}

exports.updateFullz = async (req, res) => {
  let upFullz = await Fullz.findById({ _id: req.params.id });

  upFullz.bin = req.body.bin;
  upFullz.price = req.body.price;
  upFullz.cardname = req.body.cardname;
  upFullz.vendor = req.body.vendor;
  upFullz.date = req.body.exp_date;

  upFullz
    .save()
    .then(product => {
      res.json(product);
    })
    .catch(err => console.log(err));
}

exports.getFullz = (req, res) => {
  Fullz.find({}, (err, products) => {
    res.json({ products });
  })
}