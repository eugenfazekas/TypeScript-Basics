function add(a, b) {
    return a + b;
}
var sum = add(1, 2);
console.log(sum);
// to execute js " node functions.js"
// if c-parameter empty, c = 2        : // typesafety , function always will return number
// Parameters:  c = 2 or c : number = 2
function add2(a, b, c) {
    if (c === void 0) { c = 2; }
    return a + b + c;
}
var sum2 = add2(1, 2); // = 5
console.log(sum2);
var sum3 = add2(1, 2, 4); // = 7
console.log(sum3);
