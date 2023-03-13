"use strict";
// let now = new Date();
// // 0 соответствует 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// alert( Jan01_1970 );

// // теперь добавим 24 часа и получим 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// alert( Jan02_1970 );

// let date = new Date("2017-01-26");
// alert(date);
// // Время не указано, поэтому оно ставится в полночь по Гринвичу и
// // меняется в соответствии с часовым поясом места выполнения кода
// // Так что в результате можно получить
// // Thu Jan 26 2017 11:00:00 GMT+1100 (восточно-австралийское время)
// // или
// // Wed Jan 25 2017 16:00:00 GMT-0800 (тихоокеанское время)

// new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00
// new Date(2011, 0, 1); // то же самое, так как часы и проч. равны 0
// date = new Date(2011, 0, 1, 2, 3, 4, 567);
// alert( date ); // 1.01.2011, 02:03:04.567

// date = Date.now();
// alert(+date); // количество миллисекунд, то же самое, что date.getTime()

// let start = new Date(); // начинаем отсчёт времени

// // выполняем некоторые действия
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = Date.now(); // заканчиваем отсчёт времени

// alert( `Цикл отработал за ${end - start} миллисекунд` );

// let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

// alert(ms); // 1327611110417 (таймстамп)

// date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

// alert(date);

//task 1
// let date = new Date(2012, 1, 20, 3, 12);
// alert( date );

//task 2
// function getWeekDay(date) {
//     switch (date.getDay()) {
//         case 0:
//           return('ВС');
//         case 1:
//           return('ПН');
//         case 2:
//           return('ВТ');
//         case 3:
//           return('СР');
//         case 4:
//           return('ЧТ');
//         case 5:
//           return('ПТ');
//         case 6:
//           return('СБ');
//       }
// }

//task 3
// function getLocalDay(date) {
//     if (date.getDay() == 0) return 7;
//     return date.getDay();
// }

//task 4
// function getDateAgo(date, days) {
//     result = new Date(date);
//     result.setDate(date.getDate() - days);
//     return result.getDate();
// }

//task 5
// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }

//task 6
// function getSecondsToday() {
//     let date = new Date();
//     return date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds();
// }

// alert(getSecondsToday());

//task 7
// function getSecondsToTomorrow() {
//     let today = new Date();
//     let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);
//     let diff = tomorrow - today;
//     return Math.round(diff / 1000);
// }

// alert(getSecondsToTomorrow());

//task 8
// function formatDate(date) {
//     now = new Date();
//     diff = now - date;
//     if (diff / 1000 < 1) {
//         return "прямо сейчас";
//     } else if (diff / 1000 / 60 < 1) {
//         return `${Math.round(diff / 1000)} сек. назад`;
//     } else if (diff / 1000 / 60 / 60 < 1) {
//         return `${Math.round(diff / 1000 / 60)} мин. назад`;
//     } else {
//         return `${('00'+date.getDate()).slice(-2)}.${('00'+ (date.getMonth() + 1)).slice(-2)}.${date.getFullYear() % 100} ${date.getHours()}:${date.getMinutes()}`;
//     }
// }