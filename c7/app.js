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
const formular = require('./controller/formular');
const test = require('./controller/test');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/test', test.getView);
app.get('/', formular.getViewHome);
app.post('/', formular.postForm);

app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log('Service started on port 10000');
});

//? DA SE KREIRA TODO APLIKACIJA
