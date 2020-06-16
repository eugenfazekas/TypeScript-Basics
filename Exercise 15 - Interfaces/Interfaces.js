var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return Foo;
}());
var aPerson = new Foo();
var someObj = {
    firstName: "Test",
    lastName: "Test",
    getFullName: function () { return "Test"; }
};
aPerson = someObj;
