import {Person} from './Person';

function echo<T>(arg: T): T {
	return arg;
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