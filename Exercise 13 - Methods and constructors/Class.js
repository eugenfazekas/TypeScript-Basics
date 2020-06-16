var Person = /** @class */ (function () {
    /* Only one constructor allowed
   constructor() {
       this.firstName = " ";
       this.lastName = " ";
   }
   */
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
var aPerson = new Person("John", "Doe");
console.log(aPerson.getFullName());
/*
var aPerson = new Person();
aPerson.firstName = "John";
aPerson.lastName = "Doe";
console.log(aPerson.getFullName());
*/ 
