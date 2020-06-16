class Person {
	firstName : string;
	lastName : string;
	greet(){
		console.log("Hey there!")
	}
}

class Programmer extends Person {
	
	greet() {
		console.log("Hello World!");
	}
	
	greetLikeNormalPeople() {
		this.greet()
	}
	
	greetLikeNormalPeople2() {
		super.greet()
	}
	
}

var aProgrammer = new Programmer();

aProgrammer.greetLikeNormalPeople(); 
aProgrammer.greetLikeNormalPeople2(); 

// we can call functions only from Person class , but methods can be override
var aProgrammer2 : Person = new Programmer();
aProgrammer2.greet();