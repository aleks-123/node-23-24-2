// fs
const fs = require('fs'); // modul za rabota so fajlovi

//! SYNCHRON
const vchituvanjeNaTekst = fs.readFileSync('./text.txt', 'utf-8');
console.log(vchituvanjeNaTekst);
const podatok = `Ova sakame da go zapishime vo nashiot kompjuter ${2 + 2}`;

fs.writeFileSync('./novTekst.txt', podatok);
fs.writeFileSync('./novTekst1.txt', 'primer broj 2');

//!callback
function pozdrav(ime, callback) {
  console.log(`Zdravo, ${ime}`);
  callback();
}

function chao() {
  console.log('Chao!');
}

pozdrav('Mirko', chao);

//!ASYNC
// const vchituvanjeNaTekst = fs.readFileSync('./text.txt', 'utf-8');

fs.readFile('./text.txt', 'utf-8', (err, text) => {
  if (err) {
    return console.log('ima greshka');
  }
  console.log(`Async verzija ${text}`);
});

console.log('test');

fs.writeFile('./asynhronWrite.txt', 'async text', 'utf-8', (err) => {
  console.log('uspesno');
});

//! Promise patter

//Chekor br.1
//* definirame ime na prmis funkcijata
// const fileWrite = () => {};

//Chekor br.2
//* funkcijata kje ni vrati nov promis
// const fileWrite = () => {
//   return new Promise();
// };

//Chekor br.3
//* Kje kreirame executor funkcija vo promisot
// const fileWrite = () => {
//   return new Promise(() => {});
// };

//Chekor br.4
//* Kje vnesime dva parametri success i fail koi se callback funkcii
// const fileWrite = () => {
//   return new Promise((success, fail) => {});
// };

//Chekor br.5
//* Kje ja zapishime fs.writeFile funkcijata vnatre vo egzekucionata funkcija
// const fileWrite = () => {
//   return new Promise((success, fail) => {
//     fs.writeFile('data.txt', 'Hello world from node', 'utf-8', (err) => {
//       if (err) return console.log(err);
//       console.log('Zapisot e napraven');
//     });
//   });
// };

//Chekor br.6
//* Vo ovoj slucah ako imame errr kje se aktivira fail funkcijata ako ne kje se aktivira success funkcijata
// const fileWrite = () => {
//   return new Promise((success, fail) => {
//     fs.writeFile('data.txt', 'Hello world from node!', 'utf-8', (err) => {
//       if (err) return fail(err);
//       return success();
//     });
//   });
// };

//!Chekor br.7
//Kreiranje na modularna funkcija koja kje moze da funkcionira so parametri
const fileWrite = (filename, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(filename, data, 'utf-8', (err) => {
      if (err) return fail(err);
      return success();
    });
  });
};

const fileRead = (filename) => {
  return new Promise((success, fail) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

const main = async () => {
  try {
    await fileWrite('data1.txt', 'Nov fajl zapis od promise!');
    await fileWrite('data4.txt', 'Nov fajl zapis od promise!');
    await fileWrite('data3.txt', 'Nov fajl zapis od promise!');
    await fileWrite('data2.txt', 'Nov fajl zapis od promise!');
    const primer = await fileRead('text.txt');
    console.log(primer);
  } catch (err) {
    console.log(err);
  }
};

main();
//! Promisot moze da bide
//Pending: Incijaljna sostojba, ne e ni ispolent i odbien promisot
//Fulfilled ili success: Oznacuva deka operacijata zavrshila uspesno
//Rejected ili fail: Oznachuva deka operacijata zavrsila so greska

const imenik = [
  {
    ime: 'Pero Presoki',
    telefon: 223305,
  },
  {
    ime: 'Janko Jankoski',
    telefon: 232305,
  },
  {
    ime: 'Stanko Stankovski',
    telefon: 222555,
  },
];

(async () => {
  try {
    const imenikData = JSON.stringify(imenik);
    await fileWrite('imenik.json', imenikData);
    let dataString = await fileRead('imenik.json');
    let data = JSON.parse(dataString);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();

//?
