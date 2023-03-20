"use strict";
// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null,
// };

// let json = JSON.stringify(student);

// console.log(typeof json);
// console.log(json)

// let user = {
//     sayHi() { // будет пропущено
//       alert("Hello");
//     },
//     [Symbol("id")]: 123, // также будет пропущено
//     something: undefined // как и это - пропущено
// };

// console.log( JSON.stringify(user) ); // {} (пустой объект)

//////////////////////////////////////////////////////////////////

// let room = {
//     number: 23
// };
  
// let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup sссылается на room
// };
  
// room.occupiedBy = meetup;

// console.log( JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
// }));

//////////////////////////////////////////////

// let user = {
//     name: "John",
//     age: 25,
//     roles: {
//       isAdmin: false,
//       isEditor: true
//     }
// };

// console.log(JSON.stringify(user, null, 2));

//////////////////////////////////////////////

// let room = {
//     number: 23,
//     toJSON() {
//       return this.number;
//     }
// };
  
// let meetup = {
//     title: "Conference",
//     room
// };
  

// console.log( JSON.stringify(room) ); // 23
// console.log( JSON.stringify(meetup) );

// let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// user = JSON.parse(user);

// console.log( user.friends[1] ); // 1

///////////////////////////////////////////////////

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// console.log( meetup.date.getDate() );

//task 1

// let user = {
//     name: "Василий Иванович",
//     age: 35
// };

// let jsonUser = JSON.stringify(user);

// let userCopy = JSON.parse(jsonUser);

// console.log(typeof jsonUser)
// console.log(typeof userCopy)

//task 2
let room = {
    number: 23
    //occupiedBy: meetup
};
  
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};
  
  // цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;
  
console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}, 2));