"use strict";

// let arr = [];
// arr[0] = 'Apple';
// alert(arr[0]); //Apple
// alert(arr.length); //1
// arr[1] = 'Orange';
// alert(arr); //Apple, Orange

// arr.push('Pineapple');
// alert(arr); //Apple, Orange, Pineapple
// arr.shift(); //Orange, Pineapple
// arr.pop(); //Orange
// arr.unshift('Apple'); //Apple, Orange
// arr.unshift('Pineapple'); //Pineapple, Apple, Orange

// for (let fruit of arr) {
//     alert(fruit);
// }

// arr[123] = 'Tomato';
// alert(arr.length); //124
// arr.length = 3;
// alert(arr); //Pineapple, Apple, Orange
// arr.length = 124;
// alert(arr); //Pineapple, Apple, Orange

// let vegs = new Array('Tomato', 'Cucumber', 'Onion');

// arr = [1, 2, 3];

// alert( arr ); // 1,2,3
// alert( String(arr) === '1,2,3' ); // true

// alert( [] + 1 ); // "1"
// alert( [1] + 1 ); // "11"
// alert( [1,2] + 1 ); // "1,21"

// task 1
// let styles = ['Jazz', 'Blues'];
// styles.push('Rock\'n\'Roll');
// styles[Math.floor(styles.length / 2)] = 'Classic';
// alert(styles.shift());
// styles.unshift('Rap', 'Reggae');
// alert(styles)

// task 2
// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// arr[2]();

// task 3
// function sumInput() {
//     let arr = [];
//     let num;
//     let sum = 0;
  
//     while(true) {
//       num = prompt("Введите число", 0);
//       if (!isFinite(num) || num === null || num === '') break;
//       arr.push(+num);
//     }

//     for (let i of arr) {
//         sum += (i);
//     }

//     return sum;
// }

// alert(sumInput())

// task 4

function getMaxSubSum(arr) {

    let sum = 0;
    let maxSum = 0;

    for (let num of arr) {
        sum += num;
        if (sum > maxSum) maxSum = sum;
        if (sum < 0) sum = 0;
    }

    return maxSum;
}
