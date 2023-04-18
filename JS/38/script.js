// "use strict";
// // function slow(x) {
// //     // здесь могут быть ресурсоёмкие вычисления
// //     console.log(`Called with ${x}`);
// //     return x;
// // }

// // function cachingDecorator(func) {
// //     let cache = new Map();
    
// //     return function(x) {
// //         if (cache.has(x)) {
// //             return cache.get(x);
// //         }

// //         let result = func(x);// Чтобы работали и методы обёектов - let result = func.call(this, x);

// //         cache.set(x, result);
// //         return result;
// //     };
// // }

// // slow = cachingDecorator(slow);

// // console.log(slow(1));
// // console.log("Again: " + slow(1));

// // console.log(slow(2));
// // console.log("Again: " + slow(2));

// ////////////////// upgraded

// let worker = {
//     slow(min, max) {
//         console.log(`Called with ${min}, ${max}`);
//         return min + max;
//     }
// };

// function cachingDecorator(func, hash) {
//     let cache = new Map();
    
//     return function() {
//         let key = hash(arguments);
//         if (cache.has(key)) {
//             return cache.get(key);
//         }

//         let result = func.call(this, ...arguments);

//         cache.set(x, result);
//         return result;
//     };
// }

// function hash(args) {
//     return [].join.call(args);
// }

// console.log( worker.slow(3, 5) ); // работает
// console.log( "Again " + worker.slow(3, 5) ); // аналогично (из кеша)

//task 1
// function spy(func) {
//     function wrapper(...args) {
//         wrapper.calls.push(args);
//         return func.apply(this. arguments);
//     }

//     wrapper.calls = [];

//     return wrapper;
// }

// function work(a, b) {
//     return a + b; // произвольная функция или метод
// }
  
// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//     console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }


//task 2
// function delay(func, ms) {
//     return function() {
//         setTimeout(() => func.apply(this, arguments), ms);
//     };
// }

// function f(x) {
//     console.log(x);
// }

// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test 1000"); // показывает "test" после 1000 мс
// f1500("test 1500");