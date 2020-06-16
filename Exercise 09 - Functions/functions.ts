function add (a : number , b : number){
	return a + b;
}

var sum = add(1,2);
console.log(sum);

// to execute js " node functions.js"

// if c-parameter empty, c = 2        : // typesafety , function always will return number
// Parameters:  c = 2 or c : number = 2
function add2 (a, b, c : number = 2) : number {
	return a + b + c ;
}

var sum2 = add2(1,2); // = 5
console.log(sum2);

var sum3 = add2 (1,2,4); // = 7
console.log(sum3);

