var greet = require("./greet.js");
greet();

function Person(lastname, firstname) {
    this.lastname = lastname;
    this.firstname = firstname
}



var john = new Person('John', 'Doe');
console.log(john.firstname);

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' '+ this.lastname);
};

john.greet();
console.log(john.__proto__);

(function (var1) {
    console.log("immediately");
    console.log(var1);
}('cool'));

var greetLang = require("./greet/index.js");
greetLang.english();
greetLang.spanish();

var greet1 = require("./greet1");
greet1();