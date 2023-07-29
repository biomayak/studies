"use strict";
// let user = {
//     firstName: 'John',
// };

// function func() {
//     console.log(this.firstName)
// }

// let funcUser = func.bind(user);
// funcUser();

// function mul(a, b) {
//     return a * b;
// }

// let double = mul.bind(null, 2);

// function partial (func, ...argsBound) {
//     return function(...args) {
//         return func.call(this, ...argsBound, args)
//     }
// }

//task 1
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'Вася',
  
//     loginOk() {
//       alert(`${this.name} logged in`);
//     },
  
//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },
  
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//task 2
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'John',
  
//     login(result) {
//       alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false));

