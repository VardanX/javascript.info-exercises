// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

//Ternary Conversion
let a = 3 
let b = 4 
let result = a + b < 4 ? "Below" : "Over";
console.log(result);

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let message = (login === "Employee") ? "Hello":
    (login === "Director")? "Greetings":
    (login === '') ? "No login":
    "";