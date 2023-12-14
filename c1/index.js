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
