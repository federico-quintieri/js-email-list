// Libreria axios importata correttamente
//  console.log(axios);

// Utilizziamo il metodo .get di axios per chiamare URL API

// Il metodo .then server per controllare la risposta situata nel parametro d'ingresso della call back function

// Dentro alla call back function andiamo ad eseguire il codice quando l'api ottiene risposta

// Il parametro response serve per accedere all'oggetto JSON risultato dalla nostra chiamata

// Prendiamo i nostri elementi HTML
const olElement = document.querySelector("ol");
const apiButton = document.getElementById("apiButton");
const numAPIInput = document.getElementById("numAPI");
// console.log(numAPIInput);

// Facciamo una funzione per poter richiamare le chiamate api quando vogliamo
const callAPI = (numAPICall) => {
  // Dentro ad una variabile stringa metteremo tutte le nostre liste da aggiungere all'html
  let stringaHTMLCompleta = "";

  // Con un ciclo for facciamo un certo numero di chiamate API (numAPICall)
  for (let i = 1; i <= numAPICall; i++) {
    // Utilizziamo i metodi .get e .then di axious per gestire la chiamata api ed il suo risultato (response)
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        // Qui dentro ci va il codice eseguito SOLO quando abbiamo ottenuto una risposta dall'api
        // console.log(response.data.response);

        // Facciamo elemento html lista e gli passiamo una proprieta dell'oggetto ottenuto tramite API JSON
        const listaHTML = `<li>${response.data.response}</li>`;

        // Aggiungiamo questo elemento lista all'elemento ul creato prima prima
        stringaHTMLCompleta += listaHTML;
        // console.log(stringaHTMLCompleta);

        // Solo se siamo all'ultima iterazione del ciclo mandiamo la nostra stringa contenente tutte le lista html al nostro elemento ul preso prima (Stiamo assegnando non aggiungendo)
        if (i == numAPICall) {
          olElement.innerHTML = stringaHTMLCompleta;
          // Controlliamo la stringa che viene passata
          console.log(
            "Siamo all'ultimo giro del ciclo e abbiamo la stringa HTML pronta ",
            stringaHTMLCompleta
          );
        }
        // Fin qui siamo dentro al codice che viene eseguito quando otteniamo una risposta dall'api
      });
  }
};

// Chiamo la funzione che mi fa tot numero di chiamate API
callAPI(10);

// Se clicco apiButton mi richiami la funzione che mi fa TOT numero di chiamate API
apiButton.addEventListener("click", (event) => {
  // Impediamo alla pagina di aggiornarsi
  event.preventDefault();

  // Prendo il valore dall'input e lo converto in tipo number
  const numeroAPIDaFare = parseInt(numAPIInput.value);
  // console.log(typeof numeroAPIDaFare);

  // Richiamo la funzione che mi fa un certo numero di chiamate API
  // Il numero di chiamate API da fare lo prendiamo dall'input (numAPIInput)
  callAPI(numeroAPIDaFare);
});

// Versione di GPT che dice di contare le chiamate API eseguite con successo ed alla fine di tutte aggiornare il file html
// const olElement = document.querySelector("ol");
// const apiButton = document.getElementById("apiButton");

// const callAPI = (numAPICall) => {
//   const promises = [];
//   console.log("Array promises: ",promises);

//   // Collect all API calls into an array of promises
//   for (let i = 1; i <= numAPICall; i++) {
//     promises.push(
//       axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
//     );
//   }

//   // Wait for all API calls to complete
//   Promise.all(promises).then((responses) => {
//     // Generate the HTML string using all responses
//     const stringaHTMLCompleta = responses
//       .map((response) => `<li>${response.data.response}</li>`)
//       .join("");

//     // Update the DOM with the complete HTML string
//     olElement.innerHTML = stringaHTMLCompleta;

//     console.log("All API calls completed, HTML updated:", stringaHTMLCompleta);
//   });
// };

// // Call the function initially
// callAPI(5);

// // Add event listener for the button
// apiButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   callAPI(5);
// });
