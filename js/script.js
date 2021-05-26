
var name = prompt ('Inserisci il tuo nome');
// console.log(name);


var surname = prompt ('Inserisci il tuo cognome');
// console.log(surname);

var color = prompt ('Inserisci il tuo colore preferito');
// console.log(color);



var password = name + surname + color + '21';
// console.log(password);

document.getElementById('password').innerHTML += password;

var password_lower = password.toLowerCase()
// console.log(password_lower)

document.getElementById('password').innerHTML += password_lower;