/* USER NAME */
/* Creo una variabile il cui valore è inserito
direttamente dall'utente attraverso prompt*/

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

/* USER NEW PASSWORD */
/* Metto insieme tutte le variabili generate dall'inserimento
dei dati da parte dell'utente e creo una password aggiungendo 
un numero (22).Lo aggiungo tramite document.getElementById ('id').innerHTML 
all'html*/

const userNewPassword = userName + userLastName + userFavColor + 22;
document.getElementById ('user-new-password').innerHTML = userNewPassword
console.log(userNewPassword);