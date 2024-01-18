//! npm init -y
//?"start": "node index.js" - ova treba da se pishi vo package.json
//! npm run start -- se koristi da se startuva node aplikacijata
//* Povikuvanje na express frejmvorkot
const express = require('express');

//* Inicijalizacija na express aplikacijata
const app = express();

app.get('/zdravo', (req, res) => {
  res.send('Zdravo svetu');
});

app.get('/hello', (req, res) => {
  res.send('Hello world');
});

app.get('/zdravo/:ime/:prezime', (req, res) => {
  console.log(req.params);
  res.send(`Zdravo ${req.params.ime} ${req.params.prezime}`);
});

app.get('/calculator/:op/:a/:b', (req, res) => {
  console.log(req.params);
  // so switch da kreirate kalkulator
});

//* da se rekreira od node domasnata c6 domasna so express

//* taa kreirana aplikacija e slushame na 10000 porta
app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log(`Server started succesfully on port 10000`);
});
