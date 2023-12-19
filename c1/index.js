console.log('Welcome Node.JS from terminal');
console.log('1');
console.log('2');
console.log('3');

//! Funkcionalni deklaracii
function sobirok(a, b) {
  return a + b;
}

//! Funkcionalni ekspresii
const proizvod = function (a, b) {
  return a * b;
};

//! Fat-Arrow functions
const razlika = (a, b) => a - b;

// !Methodi
const ucenik = {
  ime: 'Trajan',
  pozdrav: function () {
    console.log(`Zdravo, ${this.ime}`);
  },
};

ucenik.pozdrav();

//! IIFE Imidiately invoked function expressions
(function () {
  console.log('Ova e nashiot taen kod');
})();

//? Zadacha broj 1
//? Da se kreira funkcijalna ekspresija so ime c2f koja kje konvertira celziusovi stepeni vo garenhaht

//? Zadacha broj 2
//? Da se kreira Fat Arrow Function so ime f2c koja kje konvertira farenhajt vo celzius,
//? i koja vo megju vreme kje logira ako temperaturata e pod 0, kje logira deka temperaturata e niska,
//? od 0 do 22 stepeni kje logira deka temperaturata e nomrlana i nad 22 stepeni kje logira temperaturata e pokachena
//? NAPOMENA FUNCKIJATA TREBA DA GO VRATI BROJOT VO STEPENI

//? Zadacha broj 3
//? Da se kreira metoda vo objekt kade shto objektot bi imal 2 parametri prviot bi bil broj 1 so nekakva vrednost i vtoriot parametar bi bil boj2, metodata bi se vikala zbir kade sto kje treba da gi soberi prviot i vtoriot parametar od objektot

//? Da se kreira kalkutaor koj sto kje sobira, odzema, mnozi i deli, so upotreba na switch
//? Pojasnuvanje da se kreira funkcija so switch

//! TYPEOF
console.log(typeof undefined); //Undefined
console.log(typeof 230); //Number
console.log(typeof 'Type'); //String
console.log(typeof null); //Object
console.log(typeof '23'); //String
console.log(typeof +'23'); //Number
console.log(console.log); //Function log
console.log(typeof false); //Boolean

//! BOOLEAN - TRUE, FALSE
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean(-2)); //true
console.log(Boolean('')); //false
console.log(Boolean(+'0')); //false

console.log(2 > 1); //true
console.log(2 < 1); //false

console.log(2 == '2'); //true
console.log(2 === '2'); //false
console.log(2 != 1); //true

console.log(!true);

//! || i &&

//! or(ili)
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
//! and
console.log(true && false); //false
console.log(true && true); //true

//! Ternary operators
// uslov ? uslovot ako e tocen : uslovot ako e netocen
const godini = 16;
const vozrast = godini >= 18 ? 'Polnoletno' : 'Ne e polnoletno';
console.log(vozrast);

//! Working with arrays
const arrayEden = [5, 2, 4, 6, 7];
const arrayPrazen = [];
//? Da se logira sekoj broj poedinecno
//? Da se napolni arrayPrazen so site elementi od arrayEden + 1

for (let i = 0; i > 10; i--) {
  console.log(arrayEden[i]);
}

let test = [10, 5, 13, 8, 2, 6];

//! Implementacija na gotovi higher-order functions vo JavaScript
//map, forEach, reduce, filter i sort

//! forEach vrshi iteracija na sekoj element vo arrayot znaci ne go modificira po default tuku samo go izminuva no ako sakame togash mozeme da go modificirame arrayot
// test.forEach((item, index) => console.log(item));
test.forEach((item, index, arr) => (arr[index] = item + 10));
console.log(test);

const test2 = [3, 6, 2, 1, 20];
//! MAP metoda taa izminuva niza i kreira nova niza
const rezultat = test2.map((item, i) => {
  return item + i;
});

//! REDUCE reducira/namaluva/sumira niza na eden edinstven rezultat
const reduceRezultat = test2.reduce((acc, s) => {
  return acc + s;
}, 100);
console.log(`suma sumarum ${reduceRezultat}`);

//! SORT - sortira elementi vo niza spored dadena funkcija za sortiranje
test2.sort((a, b) => b - a);
console.log(`Descending way: ${test2}`);

//! FILTER vrakja niza od elementi koi odgovaraat na postaveniot uslov
const testFilter = test2.filter((item) => {
  return item > 5;
});
console.log(testFilter);

//! FIND vrakja element od nizata koj odgovoara na postaveniot uslov
const testFind = test2.find((item) => {
  return item == 100;
});

console.log(testFind);

//! Kopiranje na array
const array1 = [2, 3, 4, 5];
const array2 = [2, 1, 0, 2, 45, 6];
//  [2, 3, 4, 5,2, 1, 0, 2, 45, 6]

const array3 = [...array1, ...array2];
console.log(array3);

const obj1 = {
  item1: 'First',
  item2: 'Second',
};
const newObject = {
  ...obj1,
  item3: 'third',
};

console.log(newObject);

//! Destruction(razlozuvanje) on Array
const arra1 = [1, 2, 3];
const [a, b, c] = arra1;
console.log(c);

const arr2 = [50, 100, 200, 300, 500];
const [element, ...remainingElements] = arr2;
console.log(element);
console.log(remainingElements);

//! Destruction on Objects
const myObject = { produkt: 'Smoki', cena: 120 };
const { produkt: novoIme, cena } = myObject;
console.log(novoIme, cena);

//? DOMASNA ZADACHA
const studenti = [
  { ime: 'Bojan', prosek: 6.2, grad: 'Skopje' },
  { ime: 'Vesna', prosek: 9.7, grad: 'Skopje' },
  { ime: 'Atanas', prosek: 10, grad: 'Skopje' },
  { ime: 'Elena', prosek: 6.2, grad: 'Bitola' },
  { ime: 'Muhamed', prosek: 10, grad: 'Kumanovo' },
  { ime: 'Dzejlan', prosek: 9.2, grad: 'Kumanovo' },
  { ime: 'Milim', prosek: 7.2, grad: 'Kumanovo' },
  { ime: 'Selim', prosek: 7.8, grad: 'Kichevo' },
  { ime: 'Martina', prosek: 5.2, grad: 'Tetovo' },
  { ime: 'Simona', prosek: 5.2, grad: 'Bitola' },
  { ime: 'Stojmir', prosek: 6.2, grad: 'Strumica' },
  { ime: 'Mitre', prosek: 8, grad: 'Pehcevo' },
  { ime: 'Damjan', prosek: 5, grad: 'Shtip' },
  { ime: 'Aleksandar', prosek: 7, grad: 'Veles' },
];
//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7 pordedeni po ime(rasyechki)
//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjachki
//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek
//? 4. Vkupen prosek na studenti koi se od Kumanovo
//? 5. Prosek na prosecite od gradovite Skopje i Ohrid
//? 6. Da se dodade usgte eden student so ime Goran prosek 8.3 i Strumica
//? 7. Da se izbrishe prviot student vo studenti
//? 8. Da se kreira nov array kade shto studentite od Ohrid, Skopje i Kumanovo kade shto ocenkite so prosek se za 1 pogolem (Dinamichki)
