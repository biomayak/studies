// "use strict";

// let arr = ['a', 'b', 'c', 'd'];
// arr.splice(0, 1);
// alert(arr);//b, c, d
// arr.splice(1, 2, 'e', 'e','f');
// alert(arr);//b, e, e, f
// arr.splice(2, 0, 'n');
// alert(arr);//b, e, e, n, f
// alert(arr.slice(1,3)); //e, e, n
// let arrCopy = arr.slice();
// let arrBig = arr.concat(arrCopy, 'Hello', asd = () => {alert('hi')});
// arr.forEach(alert);

// let result = arr.find(function(item, index, array) {
//     // если true - возвращается текущий элемент и перебор прерывается
//     // если все итерации оказались ложными, возвращается undefined
// });
// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"},
// ];

// let user = users.find(item => item.id == 1);
// alert(user.name); // Вася
// //arr.findex - по сути, то же самое, но возвращает индекс, на котором был найден элемент, а не сам элемент, и -1, если ничего не найдено.
// //arr.filter - то же самое, только возвращает список из подходящих под условия элементов массива

// result = arr.map(function(item, index, array) {
//     // возвращается новое значение вместо элемента
// });
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths); // 5,7,6

// arr = [ 1, 2, 15 ];
// // метод сортирует содержимое arr
// arr.sort();
// alert(arr);  // 1, 15, 2, потому что сортировка проходит после преобразование в строку каждого элемента

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
// arr = [ 1, 2, 15 ];
// arr.sort(compareNumeric);
// alert(arr);  // 1, 2, 15
// arr = [ 1, 2, 15 ];
// arr.sort((a,b) => a - b);
// alert(arr);  // 1, 2, 15

// arr.reverse();
// alert(arr); //15, 2, 1

// let names = 'John, James, Jack, Julia';
// arr = names.split(', ');
// for (let name of arr) {
//     alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
// }
// let str = arr.join('; ');
// alert (str); //John; James; Jack; Julia

// arr = [1, 2, 3, 4, 5];
// result = arr.reduce((sum, current) => sum + current, 0);
// alert(result); // 15
// // arr.reduceRight - то же самое, но справа налево

// alert(typeof {}); //object
// alert(typeof []); //object
// alert(Array.isArray({})); //false
// alert(Array.isArray([])); //true

// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   }
// };

// users = [
//   {age: 16},
//   {age: 20},
//   {age: 23},
//   {age: 30}
// ];

// // найти пользователей, для которых army.canJoin возвращает true
// let soldiers = users.filter(army.canJoin, army);

// //чаще используется
// //users.filter(user => army.canJoin(user))

// alert(soldiers.length); // 2
// alert(soldiers[0].age); // 20
// alert(soldiers[1].age); // 23

// //task 1
// function camelize(str) {
//     let strArr = str.split('-');
//     strArr = strArr.map((item, index) => {
//         if (index == 0) return item;
//         return item[0].toUpperCase() + item.slice(1);
//     })
//     return strArr.join('');
// }

// //task 2
// function filterRange(arr, a, b) {
//     return arr.filter( (item) => {return (a >= item && item >= b) || (a <= item && item <= b)} );
// }

// //task 3
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i);
//             i--;
//         }
//     }
// }

// //task 4
// function copySorted(arr) {
//     arrCopy = arr.slice(0);
//     return arrCopy.sort();
// }

// //task 5
// function Calculator() {

//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b,
//     }

//     this.calculate = function(str) {
//         let strArr = str.split(' ');
//         a = strArr[0];
//         op = strArr[1];
//         b = strArr[2];

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return this.methods[op](a, b);
//     }

//     this.addMethod = function(key, func) {
//         this.methods[key] = func;
//     }

// }

// //task 6
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// users = [ vasya, petya, masha ];

// names = users.map(user => user.name);

// alert( names ); // Вася, Петя, Маша

//task 7
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

//task 8
// function sortByAge(users) {
//     users.sort((a, b) => +a.age - +b.age);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];
// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

//task 9
// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }

//task 10
// getAverageAge(users) {
//     result = (users.reduce((sum, user) => sum + +user.age, 0)) / users.length;
// }

//task 11
// function unique(arr) {
//     let result = [];
  
//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str);
//       }
//     }
  
//     return result;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O