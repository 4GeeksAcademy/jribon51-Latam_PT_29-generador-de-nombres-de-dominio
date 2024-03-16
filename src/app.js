/*
ejercicio numero 1

thegreatjogger.com
thegreatracoon.com
ourgreatjogger.com
ourgreatracoon.com
thebigjogger.com
thebigracoon.com
ourbigjogger.com
ourbigracoon.com

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];


for(let i=0;i<pronoun.length;i++){

  for(let j=0;j<adj.length;j++){

    for(let k=0;k<noun.length;k++){
      console.log(pronoun[i] + adj[j] + noun[k] +".com");
    }
  }

}

otra forma de entregar el mismo ejercicio numero 1
  

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for(let p of pronoun){
  for(let a of adj){
    for(let n of noun){
      console.log(p+a+n+".com");  
    }
  }

}


*/

/* ejercicio dos cambio de extension

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racom'];
let extensiones=['.com', '.net', '.org', '.io', '.gov', '.edu', '.info', '.biz', '.co', '.tv','.es'];




for(let p of pronoun){
  for(let a of adj){
    for(let n of noun){
      console.log(p+a+n+extensiones[Math.floor(Math.random()*extensiones.length)]);  
    }
  }

}

*/

//ejercicio Agrega "domain hacks" donde la extensión forma parte del dominio

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["aico", "jogger", "racom", "puedes"];
let extensiones = [
  "com",
  "net",
  "org",
  "io",
  "gov",
  "edu",
  "info",
  "biz",
  "co",
  "tv",
  "es",
];

let dominio = "";

for (let valoPronoun of pronoun) {
  for (let valorAdj of adj) {
    for (let valorNoun of noun) {
      dominio = valoPronoun + valorAdj + valorNoun;

      let resultado = "";

      for (let ValorExtensiones of extensiones) {
        let largoExtension = ValorExtensiones.length;
        let rebanadaDominio = dominio.slice(
          dominio.length - largoExtension,
          dominio.length
        );
        if (rebanadaDominio == ValorExtensiones) {
          let arreglo = dominio.split("");
          arreglo.splice(arreglo.length - largoExtension, 0, ".");
          resultado = arreglo.join("");
        }
      }

      if (resultado == "") {
        resultado =
          valoPronoun +
          valorAdj +
          valorNoun +
          "." +
          extensiones[Math.floor(Math.random() * extensiones.length)];
        console.log(resultado);
      } else {
        console.log(resultado);
      }
    }
  }
}
