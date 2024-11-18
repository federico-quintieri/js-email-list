// Libreria axios importata correttamente
//  console.log(axios);

// Devo generare 10 indirizzi mail e stamparli in una lista

// Api da utilizzare https://flynn.boolean.careers/exercises/api/random/mail

// Utilizziamo il metodo .get di axios per chiamare URL API
// Il metodo .then server per controllare la risposta situata nel Parametro d'ingresso della call back function
// Dentro alla call back function andiamo ad eseguire il codice quando l'api ottiene risposta
// Il parametro response serve per accedere all'oggetto JSON risultato dalla nostra chiamata
axios
  .get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => {
    console.log(response.data.response);
  });
