class Person {
	lastName: string;
	firstName: string;
	
	constructor() {
		this.firstName = "";
		this.lastName = "";
	};
}

let foo = new Person();
foo.firstName = 'Test';