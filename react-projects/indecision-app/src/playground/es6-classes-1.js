// 1 challenge
// setup the constructor to take the name and age (default to 0)
// getDescription method - 'name is 25 years old'



// 2 challenge
// create a new subclass of Person 'Traveler -> Person'
// add support for homeLocation
//override getGreeting:
// 1. Hi. I m name. I m visiting from Philadelphia
// 2. Hi. I m name .

class Person {
    constructor(name = 'Anonymous', age = 0){
        // this.name = name || 'test';
        // setup defaults
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return 'Hi. I am ' + this.name + '!' + this.age;

        // backtick syntax
        // return  `hi, i am a test ${this.name}` ;
    }
    getDescription(){
        return this.name + ' is '+ this.age+' year(s) old.';

    }
}


class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !! this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += description + ' Their major is ' + this.major;
        }

        return description;
    }

}
class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;

    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting = 'Hi. I am '+ this.name+ '.'+ 'I am visiting from ' + this.homeLocation;
        }
        return greeting;

    }

}

const me = new Traveler('oana', 23, 'Philadelphia');
console.log(me.getGreeting());
const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());






//////////////////////////////////////////////////////////

//  extends is a special keyword
// we have to call the parent constructor function for this we use a special keyword 'super' in a class methods
// super refers to the parent class, in this case the parent class is Person
