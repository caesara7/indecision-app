var nameVar = 'oana';
var nameVar = 'diana';
console.log('nameVar', nameVar);


let nameLet = 'cezara';
nameLet = 'caesara';
console.log('nameLet', nameLet);

const nameConst = 'abcd';
console.log('nameConst', nameConst);

// function getPetName(){
//     const petName = 'charlie';
//     return petName;
// }
// const petName = getPetName();
// console.log(petName);

// block scoping

const fullName = 'cezara nitu';
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);