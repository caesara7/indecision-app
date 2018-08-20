// arguments object -no longer bound with arrow functions

const add = function(a, b){
    return a+b;
};

console.log(add(4, 8));

// this keyword -no longer bound

const user = {
    name : 'cezara',
    cities: ['slatina', 'bucharest', 'budapest', 'athens', 'rhodes'],
    printPlacesLived: function(){
        return this.cities.map((city) => {
            return this.name + ' has lived in '+ city;
        });

        //  declare a variable so we can have access to the all properties inside of the object
        // const that = this;
        // this.cities.forEach((city) =>{
        //     console.log(that.name + ' has lived in ' + city)
        // });
    }
};
console.log(user.printPlacesLived());


// challenge area
// numbers - array of numbers
// multiplyBy -single number
// multiply - return a new array where the number have been multiplied

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply: function () {
        return this.numbers.map((number) => number * this.multiplyBy);

    }
};

console.log(multiplier.multiply());  // [1, 2, 3] 2 [2, 4, 6]