class Person {
	
	// In constructor will be created class member filds
	//private firstName : string;
	//private lastName : string;
	
	constructor(private firstName: string, private lastName: string) {
		console.log(firstName + " " + lastName);
	}
	
	greet(){
		console.log("Hey there!")
	}
	
	getFirstName(){
		return this.firstName;
	}
	
	setFirstName(firstName : string) {
		this.firstName = firstName;
	}
	
	getLastName(){
		return this.lastName;
	}
	
	setLastName(lastName : string) {
		this.lastName = lastName;
	}
}

class Programmer extends Person {
	
	greet() {
		console.log("Hello World!");
	}
	
	greetLikeNormalPeople2() {
		super.greet()
	}
}

var aProgrammer: Person = new Programmer("John","Doe");
aProgrammer.greet();


