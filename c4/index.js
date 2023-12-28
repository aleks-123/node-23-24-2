const readWrite = require('./readWrite.js');

(async () => {
  try {
    //*JSON = JavaScript Object Notation - najcesto se koristi za prenos na podatoci vo veb aplikacii
    //*E mnogu slichen so samiot javascript i programata moze mnogu lesno da konvertira json data vo native javascript object

    const test = 'aaaa';
  } catch (err) {
    console.log(err);
  }
})();

//? student [ime, prezime, prosek, grad]
//?1 Dodavanje na student od fajlot
//?2 Brishenje na student od fajlot
//?3 Menuvanje na podatooci na student od fajlot
//?4 Chitanje na site studenti od fajlot

//? - treba da dodame student vo gajlot
//? 1. Da ja vchitate celata sodrzina od fajlot | fs,readFile
//? 2. da ja konvertirate sodrzinata od obichen tekst vo js niza / objekt | JSON.parse
//? 3. Treba da gi dodadete podatocite na studentot vo nizata | Array.push
//? 4. Nizata od js niza / objekt treba da bide konvertirana vo tekst | JSON.stringify
//? 5. Tekstot treba da vide zachuvan vo fajlot | fs.writeFile

//? - Imeto na studentt treba da bide smeneto od AAA vo AAB
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodvetniot clen | Array.map
//? 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.strinify
//? 5. Tekstot treba da vide zachuuvan fo fajlot | fs.writeFile

//? - Treba da se izbrishe student od fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obicchen tekst vo js niza/objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da go izbrishite samo soodvetniot clen | Array.filter
//? 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
//? 5. Tekstot treba da bide zachuvan vo fajlot | fs.writeFile
