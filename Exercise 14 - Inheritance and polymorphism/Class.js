var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log("Hey there!");
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log("Hello World!");
    };
    Programmer.prototype.greetLikeNormalPeople = function () {
        this.greet();
    };
    Programmer.prototype.greetLikeNormalPeople2 = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
var aProgrammer = new Programmer();
aProgrammer.greetLikeNormalPeople();
aProgrammer.greetLikeNormalPeople2();
// we can call functions only from Person class , but methods can be override
var aProgrammer2 = new Programmer();
aProgrammer2.greet();
