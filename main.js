// let game = 'Sonic'; // global variable

// console.log(game);

// function title() {
//     console.log(`${game}`);
// }

// title();

// if (true) {
//     console.log(`${game}`);
// }

// function a() {
//     let game = 'Sonic'; // local variable also called functional scope
//     console.log(game);
// }

// a();

// if (true) {
//     let game = 'Mario';
//     console.log(game);
// }

// let x = 10;
// console.log(x);

// if (true) {
//     let x = 2;
//     console.log(x);
// }

// console.log(x);

// video task 1
// let firstName = 'John';
// let lastName = 'Smith';
// let age = 30;

// console.log(firstName, lastName, age);

// function person() {
//     console.log(`${firstName} ${lastName} is ${age} years old`);
// }

// person();

// video task 2
// function person() {
//     let firstName = 'John';
//     let lastName = 'Smith';
//     let age = 30;
//     let country = 'England';

//     console.log(`${firstName} ${lastName} is ${age} years old and lives in ${country}`);
// }

// person();

// video task 3 - answer = no, I did not encounter a problem
// let firstName = 'James';

// console.log(firstName);

// video task 4 answer:
// the code will return:
// Mario
// Sonic
let game = 'Sonic';

if (true) {
    let game = 'Mario';
    console.log(game);
}

console.log(game);