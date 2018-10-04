const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
    db.article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbarticle => res.json(dbarticle))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.article
      .findById(req.params.id)
      .then(dbarticle => res.json(dbarticle))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const article = {
      _id: req.body._id,
      title: req.body.headline.main,
      url: req.body.web_url
    };
    db.article
      .create(article)
      .then(dbarticle => res.json(dbarticle))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbarticle => res.json(dbarticle))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.article
      .findById({ _id: req.params.id })
      .then(dbarticle => dbarticle.remove())
      .then(dbarticle => res.json(dbarticle))
      .catch(err => res.status(422).json(err));
  }
};
