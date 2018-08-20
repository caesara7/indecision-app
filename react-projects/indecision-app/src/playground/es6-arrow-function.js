
/////////////////////////////////////// arrow functions syntax

const square = function (x) {
    return x * x;
};
console.log(square(13));

// const squareArrow = (x) => {
// return x+ x;
// };
const squareArrow = (x) => x+x;
console.log(squareArrow(12));

////////////////////////////////////////////// task
// challenge - use arrow functions
// getFirstName('mike smith') -> 'mike'
// create regular arrow function
// create arrow function using shorthand syntax


const displayFirstName = (fullName) => {
    return fullName.split(' ')[0];
};
console.log(displayFirstName('cezara nitu'));


const getFirstName =(fullName) => fullName.split(' ')[0];
console.log(getFirstName('mike smith'));
