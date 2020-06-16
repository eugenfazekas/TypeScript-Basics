function echo<T>(arg: T): T {
	return arg;
}

class Person {
	firstName : string;
	lastName : string;

	constructor(firstName : string, lastName : string){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	getFullName() {
		return this.firstName + ' ' + this.lastName;
	}
}

class Admin extends Person {
	
}

class Manager extends Person { 

}

let admin = new Admin ('a','a');
let manager = new Manager ('b','b'); 

function personEcho<T extends Person>(person: T): T {
	return person;
}

var foo = personEcho(admin);