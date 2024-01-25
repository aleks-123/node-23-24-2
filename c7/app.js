//! Arhitektura na softver
// - Organizacija i struktura
// - Podelba na sekotori
// - Polesno testiranje i integracija na edna aplikacija
// - Povtorrna upotreba na kodot
// - Odrzlivost

//! MVC ARHITEKTURA (Model-View-Controller)
//! M - model - Vo modelot stoi logikata za podatocite
//! V - View - View e zagrizen za prezentacija na izgledot
//! C - Controller - Kontrolorot e mozokot na nashata aplikacija, koja vrshi interakcija so mozelot i view

//* EJS(Embedded JavaScript templating)
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

///////
const testData = {
  data1: 'testData1',
  data2: 'testData2',
};

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
///////
app.get('/test', (req, res) => {
  res.render('test', testData);
});

app.get('/', (req, res) => {
  res.render('index', data);
});

app.post('/', (req, res) => {
  console.log(req.body);
  const novStudent = {
    ime: req.body.ime,
    prezime: req.body.prezime,
    prosek: req.body.prosek,
  };
  data.studenti.push(novStudent);
  res.render('index', data);
});

app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log('Service started on port 10000');
});

//? DA SE KREIRA TODO APLIKACIJA
