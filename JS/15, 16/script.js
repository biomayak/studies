"use strict";


// function User(name, isAdmin = false) {
//     this.name = name;
//     this.isAdmin = isAdmin;
// }
  
// let user = new User("Вася");

// alert(user.name); // Вася
// alert(user.isAdmin); // false


//new.target внутри функции-конструктора возвращает саму функцию,
//если функция была вызвана с помощью new, иначе - undefined
function User(name) {
    if (!new.target) { // в случае, если вы вызвали без оператора new
        return new User(name); // ...добавим оператор new за вас
    }

    this.name = name;
}

let vasya = User("Вася"); // переадресовывает вызовы на new User
alert(vasya.name); // Вася


//return с объектом возвращает объект, в любом другом случае конструктор вернёт this
function BigUser() {
    this.name = "Вася";
    return { name: "Godzilla" };  // <-- возвращает этот объект
}

alert( new BigUser().name );  // Godzilla, получили этот объект

