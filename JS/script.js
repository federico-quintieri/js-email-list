// Libreria axios importata correttamente
//  console.log(axios);

// Utilizziamo il metodo .get di axios per chiamare URL API

// Il metodo .then server per controllare la risposta situata nel parametro d'ingresso della call back function

// Dentro alla call back function andiamo ad eseguire il codice quando l'api ottiene risposta

// Il parametro response serve per accedere all'oggetto JSON risultato dalla nostra chiamata

// Prendiamo i nostri elementi HTML
const ulElement = document.querySelector("ul");
const apiButton = document.getElementById("apiButton");

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
          ulElement.innerHTML = stringaHTMLCompleta;
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
callAPI(5);

// Se clicco apiButton mi richiami la funzione che mi fa TOT numero di chiamate API
apiButton.addEventListener("click", (event) => {
  // Impediamo alla pagina di aggiornarsi
  event.preventDefault();

  // Richiamo la funzione che mi fa un certo numero di chiamate API
  callAPI(5);
});
