const studentiModel = require('../models/studentiModel');

exports.getForm = (req, res) => {
  res.render('formular');
};

exports.postForm = async (req, res) => {
  const data = {
    ime: req.body.ime,
    prezime: req.body.prezime,
    prosek: req.body.prosek,
  };
  await studentiModel.add(data);
  res.redirect('/studenti');
};

exports.getStudenti = async (req, res) => {
  const data = await studentiModel.list();
  res.render('studenti', { data });
};
