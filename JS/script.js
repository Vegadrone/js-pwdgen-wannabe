/* USER NAME */
/* Creo una variabile il cui valore è inserito
direttamente dall'utente attraverso prompt.
Lo aggiungo tramite document.getElementById ('id').innerHTML 
all'html*/

const userName = prompt ('Inserisci il tuo nome');
document.getElementById ('user-name').innerHTML = userName;
console.log (userName);

/* USER LAST NAME */
/* Creo una variabile il cui valore è inserito
direttamente dall'utente attraverso prompt.
Lo aggiungo tramite document.getElementById ('id').innerHTML 
all'html*/

const userLastName = prompt('Inserisci il tuo cognome');
document.getElementById ('user-last-name').innerHTML = userLastName;
console.log (userLastName);

/* USER FAVORITE COLOR */
/* Creo una variabile il cui valore è inserito
direttamente dall'utente attraverso prompt
Lo aggiungo tramite document.getElementById ('id').innerHTML 
all'html*/
const userFavColor = prompt ('Inserisci il tuo colore preferito');
document.getElementById ('user-favorite-color').innerHTML = userFavColor;
console.log (userFavColor);

/* CURRENT YEAR */
const currentYear = "22"

/* USER NEW PASSWORD */
/* Metto insieme tutte le variabili generate dall'inserimento
dei dati da parte dell'utente e creo una password aggiungendo 
un currentYear.Lo aggiungo tramite document.getElementById ('id').innerHTML 
all'html*/
// Versione con concatenazione attraverso +
// const userNewPassword = userName + userLastName + userFavColor + currentYear;

// Versione con template literal
const userNewPassword = `${userName}${userLastName}${userFavColor}${currentYear}`;
document.getElementById ('user-new-password').innerHTML = userNewPassword;
console.log(userNewPassword);