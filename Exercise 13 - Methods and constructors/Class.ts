class Person {
	firstName : string;
	lastName : string;
	 
	 /* Only one constructor allowed
	constructor() {
		this.firstName = " ";
		this.lastName = " ";
	}
	*/
	constructor(firstName : string, lastName : string){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	getFullName() {
		return this.firstName + ' ' + this.lastName;
	}
}

var aPerson = new Person("John","Doe");
console.log(aPerson.getFullName());

/*
var aPerson = new Person();
aPerson.firstName = "John";
aPerson.lastName = "Doe";
console.log(aPerson.getFullName());
*/