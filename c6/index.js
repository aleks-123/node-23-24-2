//! npm init -y
//?"start": "node index.js" - ova treba da se pishi vo package.json
//! npm run start -- se koristi da se startuva node aplikacijata
//* Povikuvanje na express frejmvorkot
const express = require('express');

//* Inicijalizacija na express aplikacijata
const app = express();

//middelware za post objekti
app.use(express.urlencoded({ extended: true }));

app.get('/zdravo', (req, res) => {
  res.send('Zdravo od get metoda');
});

app.post('/zdravo', (req, res) => {
  res.send('zdravo od post metodda');
});
app.get('/hello', (req, res) => {
  res.send('Hello world');
});

app.get('/zdravo/:ime/:prezime', (req, res) => {
  console.log(req.params);
  res.send(`Zdravo ${req.params.ime} ${req.params.prezime}`);
});

//* Da definirmae dinamicki parametri
//* koj parametri kje si gi hendlame sprema nashite potrebi
app.get('/calculator/:op/:a/:b', (req, res) => {
  switch (req.params.op) {
    case 'sobiranje':
      return res.send(`${Number(req.params.a) + Number(req.params.b)}`);
    case 'odzemanje':
      return res.send(`${Number(req.params.a) - Number(req.params.b)}`);
    case 'delenje':
      return res.send(`${Number(req.params.a) / Number(req.params.b)}`);
    case 'mnozenje':
      return res.send(`${Number(req.params.a) * Number(req.params.b)}`);
    default:
      return res.send('error');
  }
});

app.post('/calculator', (req, res) => {
  console.log(req.body);
  switch (req.body.op) {
    case 'sobiranje':
      return res.send(`${Number(req.body.a) + Number(req.body.b)}`);
    case 'odzemanje':
      return res.send(`${Number(req.body.a) - Number(req.body.b)}`);
    case 'delenje':
      return res.send(`${Number(req.body.a) / Number(req.body.b)}`);
    case 'mnozenje':
      return res.send(`${Number(req.body.a) * Number(req.body.b)}`);
    default:
      return res.send('error');
  }
});

//? Da se kreira get ruta koja kje presmetuva bmi
//? da se kreira post ruta koja kje presmetuva bmi

//? Da se kreira konverter na pari koj kje konvertira eurotodolar, dolartoeuro, mkdtoeuro,eurotomkd so get i post metoda
//? da se kreira ruta koja kje presmetuva dali nekoe ime e parno neprano, i kolku karakteri ima i kolku samoglaski so post metoda
//? Da se kreira ruta koja kako parametar kje prima godina na datum i godina na ragjanje i koja kako respond kje vrakja horoskopski znak soodveten so mesecot so get i post metoda
//? Da se kreira ruta koja kje presmetuva perimetar i plostina na pravoagolnik so poznati dve strani so get i post metoda
//? Da se kreira ruta koja kje presmetuva hipotenuza na triagolnik poznavajki gi dvete pomali strani so get i post metoda
//? Da se kreira ruta koja kje presmetuva nekoj tekst kolku zborovi ima so post metoda

//* taa kreirana aplikacija e slushame na 10000 porta
app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log(`Server started succesfully on port 10000`);
});
