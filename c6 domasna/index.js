//?Servis koj kje obrabotuva ruti od sledniot tip
//? 15 iminja po zelba
//? /ime/bojan

//? parno: da, karakteri: 5,soglaski:2, samogalski: 3

//* Kreriranje na http protokol
const http = require('http');

//* Kreiranje na server
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.url.split('/'));
  const [_, path, name] = req.url.split('/');
  if (!name) {
    res.end('invalid URL');
    return;
  }
  const brojNaBukvi = name.length;
  const eParen = brojNaBukvi % 2 === 0 ? 'da' : 'ne';
  const samogalski = ['a', 'e', 'i', 'o', 'u'];
  // ['m', 'a', 'r', 'k', 'o'];
  const bukviArray = name.split('');
  let samoglaskiBroj = 0;

  for (let i = 0; i < bukviArray.length; i++) {
    if (samogalski.includes(bukviArray[i])) {
      samoglaskiBroj++;
    }
  }
  const soglaskiBroj = brojNaBukvi - samoglaskiBroj;

  res.end(
    `parno: ${eParen}, karakteri: ${brojNaBukvi}, soglaski: ${soglaskiBroj}, samoglaski: ${samoglaskiBroj}`
  );
});

//* Slushanje na toj server so nekoja odredena porta
server.listen(10000, (err) => {
  if (err) console.log(err);
  console.log('Server has started on port 10000');
});
