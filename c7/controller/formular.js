let data = {
  ime: 'Pero',
  prezime: 'Pervoski',
  niza: ['Skopje', 'Solun', 'Kumanovo', 'Tetovo', 'Shtip'],
  studenti: [
    { ime: 'Pero', prezime: 'Perovski', prosek: 9.2 },
    { ime: 'Janko', prezime: 'Jankoski', prosek: 7.3 },
    { ime: 'Mitre', prezime: 'Mitreski', prosek: 8.8 },
    { ime: 'Risto', prezime: 'Ristoski', prosek: 10 },
  ],
};

exports.getViewHome = (req, res) => {
  res.render('index', data);
};

exports.postForm = (req, res) => {
  console.log(req.body);
  const novStudent = {
    ime: req.body.ime,
    prezime: req.body.prezime,
    prosek: req.body.prosek,
  };
  data.studenti.push(novStudent);
  res.render('index', data);
};
