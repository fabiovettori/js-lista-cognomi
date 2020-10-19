// JSnack 8.
// Creare un array contenente dei cognomi in ordine casuale.
// Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
// Stampare la lista dei cognomi in ordine alfabetico e comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato).


var listUser = ['rossi', 'bianchi', 'gialli', 'blu'];
var userInput = prompt('Insert your surname');
listUser.push(userInput);
listUser.sort();
listUser.forEach((item) => {
    console.log(item);
});
console.log('you are in position n. ' + listUser.indexOf(userInput));
