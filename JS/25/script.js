"use strict";
// let map = new Map();
// map.set("1", "str1");
// map.set(1, "num1");
// map.set(true, "bool1");
// map.set({}, 'object');

// alert(map.size); //4

// let john = { name: 'John' };
// let visitsCountMap = new Map();
// visitsCountMap.set(john, 123);
// alert(visitsCountMap.get(john));

// map.set("a", "str a")
//    .set(14, "num 14");

// let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук",    50]
// ]);

// for (let vegetable of recipeMap.keys()) {
//     alert(vegetable);
// }

// for (let vegetable of recipeMap.values()) {
//     alert (vegetable);
// }

// for (let vegetable of recipeMap) {
//     alert (vegetable);
// }

// map = new Map([
//     ['1',  'str1'],
//     [1,    'num1'],
//     [true, 'bool1']
// ]);
  
// alert( map.get('1') ); // str1

// let obj = {
//     name: "John",
//     age: 30,
// };

// map = new Map(Object.entries(obj));

// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
// ]);
  
// // now prices = { banana: 1, orange: 2, meat: 4 }

// alert(prices.orange); // 2

///////////////////////////////////////////////////

// let set = new Set();

// let john = { name: 'John'};
// let pete = { name: 'Pete'};
// let mary = { name: 'Mary'};

// set.add(john)
// set.add(pete)
// set.add(mary)
// set.add(john)
// set.add(mary)

// alert(set.size); //3
// set.forEach((value, valueAgain, set) => {
//     alert(value);
// });

//task 1
// function unique(arr) {
//     return Array.from(new Set(arr));
// }

//task 2
function aclean(arr) {
    let map = new Map()

    for (let str of arr) {
        let sorted = str.toLowerCase().split('').sort().join('');
        map.set(sorted, str);
    }

    return Array.from(map.values());
}