const News = require("../models/News");

exports.addFullz = (req, res) => {
  const newNews = new News({
    info: req.body.info,
    type: req.body.type,
    date: req.body.exp_date
  });
  newNews
    .save()
    .then(fullz => {
      res.json(fullz);
    })
    .catch(err => console.log(err));
}

exports.getFullz = (req, res) => {
  News.find({}, (err, news) => {
    res.json({ news: news });
  })
}