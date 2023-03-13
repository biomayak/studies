// "use stricrt";
// // у нас есть массив с именем и фамилией
// let arr = ["Ilya", "Kantor"]

// // деструктурирующее присваивание
// // записывает firstName=arr[0], surname=arr[1]
// let [firstName, surname] = arr;

// alert(firstName); // Ilya
// alert(surname);  // Kantor

// [firstName, surname] = "Ilya Kantor".split(' ');
// // второй элемент не нужен
// let title
// [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert( title ); // Consul.

// let [a, b, c] = "abc";
// let [one, two, three] = new Set([1, 2, 3]);

// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(' ');

// alert(user.name); // Ilya

// user = new Map();
// user.set("name", "John");
// user.set("age", "30");

// for (let [key, value] of user) {
//   alert(`${key}:${value}`); // name:John, затем age:30
// }

/////////////////////////////////////////////////

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert(name1); // Julius
// alert(name2); // Caesar

// // Обратите внимание, что `rest` является массивом.
// alert(rest[0]); // Consul
// alert(rest[1]); // of the Roman Republic
// alert(rest.length); // 2

// // значения по умолчанию
// let [firstName = "Guest", surname = "Anonymous"] = ["Julius"];

// alert(firstName);    // Julius (из массива)
// alert(surname); // Anonymous (значение по умолчанию)

// [firstName = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

// alert(firstName);    // Julius (из массива)
// alert(surname); // результат prompt

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200,
// };

// // let {title, width, height} = options;

// // alert(title);  // Menu
// // alert(width);  // 100
// // alert(height); // 200

// // { sourceProperty: targetVariable }
// let {width: w, height: h, title} = options;

// // width -> w
// // height -> h
// // title -> title

// alert(title);  // Menu
// alert(w);      // 100
// alert(h);      // 200

//////////////////////////////////////////

// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
// };
  
// // деструктуризация разбита на несколько строк для ясности
// let {
//     size: { // положим size сюда
//         width,
//         height
//     },
//     items: [item1, item2], // добавим элементы к items
//     title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
// } = options;
  
// alert(title);  // Menu
// alert(width);  // 100
// alert(height); // 200
// alert(item1);  // Cake
// alert(item2);  // Donut

//task 1
// let user = {
//     name: "John",
//     years: 30
// };

// let {name, years: age, isAdmin = false} = user;

//task 2
// function topSalary(salaries) {
//     let topName = null;
//     let maxSalary = 0;

//     for (let [name, salary] of Object.entries(salaries)) {
//         if (salary > maxSalary) {
//             topName = name;
//             maxSalary = salary;
//         }
//     }

//     return topName;
// }
