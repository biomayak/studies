"use strict";
let user = {
    name: "John",
    age: 30,
};

user.sayPrivet = function() {
    alert("Привет!");
};
user.sayPrivet();//Привет

user.sayPoka = () => alert("Пока!");
user.sayPoka();//Пока

user = {
    name: "Jane",
    sayName() {
        alert(this.name);
    },
};
user.sayName();

let admin = { name: "Ivan" };
let notAdmin = { name: "Andrey" };

function sayMyName() {
    alert(this.name);
}



admin.f = sayMyName;
notAdmin.f = sayMyName;

admin.f();//Ivan
notAdmin.f();//Andrey