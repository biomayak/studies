"use strict";
// function pow(x, n) {
//     return (n == 1) ? x : (x * pow(x, n - 1));
// }
// console.log(pow(2, 3));

// let company = {
//     sales: [{
//       name: 'John',
//       salary: 1000
//     }, {
//       name: 'Alice',
//       salary: 600
//     }],
  
//     development: {
//       sites: [{
//         name: 'Peter',
//         salary: 2000
//       }, {
//         name: 'Alex',
//         salary: 1800
//       }],
  
//       internals: [{
//         name: 'Jack',
//         salary: 1300
//       }]
//     }
// };

// function sumSalaries(department) {
//     if (Array.isArray(department)) {
//         return department.reduce((prev, current) => prev + current.salary, 0);
//     } else {
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum += sumSalaries(subdep);
//         }
//         return sum;
//     }
// }
// console.log(sumSalaries(company));

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
// };

// list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };

// // добавление нового элемента в список
// list = { value: "new item", next: list };

// // удаление элемента из списка
// list.next = list.next.next;


// task 1.1
// function sumTo(n) {
//   if (n == 0) {
//     return 0;
//   } else {
//     return n + sumTo(n-1)
//   }
// }

// task 1.2
// function sumTo(n) {
//   let sum = 0;
//   for (let i = 1; i < n + 1; i++) sum += i;
//   return sum
// }

// task 1.3
// function sumTo(n) {
//   return ((n + 1) / 2) * n;
// }

// console.log(sumTo(100));

// task 2
// function factorial(n) {
//   if (n == 1) return 1;
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));

// task 3
// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// console.log(fib(22));

//task 4,5
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// 4.1
// function printList(list) {
//   if (list.next == null) {
//     console.log(list.value);
//     return list;
//   }
//   console.log(list.value)
//   return printList(list.next);
// }

// 4.2
// function printList(list) {
//   let tmp = list;

//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// printList(list);

// }

// 5.1
// function reversePrintList(list) {
//   if (list) {
//     reversePrintList(list.next);
//     console.log(list.value);
//   }

// }

// 5.2
function reversePrintList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) console.log(arr[i]);
}

reversePrintList(list);