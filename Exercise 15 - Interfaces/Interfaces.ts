interface Person{ 
	firstName : string;
	lastName : string;
	getFullName() : string;
}

class Foo implements Person {
	firstName : string;
	lastName : string;
	getFullName() : string {
		return this.firstName + this.lastName;
	}
}

let aPerson : Person = new Foo();

let someObj = {
	firstName : "Test",
	lastName : "Test",
	getFullName: () => "Test"
};

aPerson = someObj; 