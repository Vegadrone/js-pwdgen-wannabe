/* USER NAME */

const userName = prompt ('Inserisci il tuo nome');
document.getElementById ('user-name').innerHTML = userName;
console.log (userName);

/* USER LAST NAME */

const userLastName = prompt('Inserisci il tuo cognome');
document.getElementById ('user-last-name').innerHTML = userLastName;
console.log (userLastName);

/* USER FAVORITE COLOR */

const userFavColor = prompt ('Inserisci il tuo colore preferito');
document.getElementById ('user-favorite-color').innerHTML = userFavColor;
console.log (userFavColor);

/* USER NEW PASSWORD */

const userNewPassword = userName + userLastName + userFavColor + 22;
document.getElementById ('user-new-password').innerHTML = userNewPassword
console.log(userNewPassword);