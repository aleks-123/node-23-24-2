//koga kje pristapam na /form ruta da izleze forma
//odkako kje submitiram formata da me prenasoci na studenti pejgot so ruta /studenti kade kje bidat prikazani site studenti
//i da ima funkionalnost da se brishat studentite od tabelata so kopce delete
const express = require('express');
const formular = require('./controllers/formular');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/form', formular.getForm); // kje se prikaze formularot
app.post('/form', formular.postForm); //kje imame funkcionalost za submitiranje - i kje imame redirekt na ruta /studenti
app.get('/studenti', formular.getStudenti);
app.get('/brishi/:broj', formular.getBrishi);

app.listen(10000, (err) => {
  if (err) return console.log(err);
  console.log('Server successfully started on port 10000');
});

//i da se proba da se kreira delete funkcionalnost na vezbata na chas
//Da se kreira blog na ruta /blog
//Za submitiranje na post korisnice da pishat sopstveno ime naslov i tekst
//da ima ruta so /sport
//da ima ruta so /movies

///////////////////////

//?
//10 ruti da se kreiraat
//10 razlicni jsoni za sekoj handler baska
//site da imaat i post i get metodi
//da imate view soodvetno za sekoj handler ili kontoler
