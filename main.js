// let Array = [2,7,9,34,25,6,9,11,78];

// function newArray (arr) {
//     let arr = [];

//     for ( let i = 0; i <= Array.length; i++ ) {
//         if ( Array[i] % 2 === 0 ) {
//             arr = Array[i] ;
//         }
//     }
// }


// Array.splice(0,3);
// console.log(Array);
// let newArr = Array.splice(0,3);
// console.log (newArr);

// let arr = ["t", "e", "s", "t"];

// console.log( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)

// console.log( arr.slice(-2) ); // s,t (копирует с -2 до конца)

// let arr = [1, 2];

// let arrayLike = {
//   0: "что-то",
//   length: 1
// };

// console.log( arr.concat(arrayLike) );

// let arr = [1, 2];

// let arrayLike = {
//   0: "что-то",
//   1: "ещё",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };

// console.log( arr.concat(arrayLike) );

// const people = [
//     { name: 'Владилен', age: 25, budget: 40000 },
//     { name: 'Елена', age: 17, budget: 3400 },
//     { name: 'Игорь', age: 49, budget: 50000 },
//     { name: 'Михаил', age: 15, budget: 1800 },
//     { name: 'Василиса', age: 24, budget: 25000 },
//     { name: 'Виктория', age: 38, budget: 2300 },
// ] ;   

// for ( let i = 0; i < people.length; i++ ) {
//     console.log(people[i]);
// }

// for ( let person of people ) {
//     console.log(person);
// }

// ForEach

// people.forEach ( function ( person, index, pArr) {
//     console.log(person);
//     console.log(index);
//     console.log(pArr);
// })

// people.forEach ( person => console.log(person));

// Map

// const newPeople = people.map (person => {
//     return person.name;
// });
// console.log(newPeople);

// Filter

// const adults = [];
// for ( let i = 0; i < people.length; i++ ) {
//     if (people[i].age >= 18) {
//         adults.push(people[i]);
//     }
// }

// console.log(adults);

// const adults = people.filter ( person => {
//     if (person.age >= 18) {
//         return true;
//     }
// })
// console.log(adults)

// const adults = people.filter ( person => person.age >= 18) ;
// console.log(adults)

// Reduse
// const amount = people.reduce ((total,person) => {
//     return total + person.budget;
// },0 )
// console.log(amount);



// 1. Дан массив из не упорядоченной последовательности чисел. 
// Написать функцию, которая оставляет только четные значения 
// элементов массива, и записывает в их по убыванию.

let unorderedSequence = [2,7,9,34,25,6,9,11,78];

function filterAndSort (arr) {
    // Фильтруем массив (четные числа)
    const evenNumbers = unorderedSequence.filter ( number => number % 2 === 0) ;
    // Сортируем по убыванию
    evenNumbers.sort ((a,b) => b - a );
    return evenNumbers;
};

console.log (filterAndSort(unorderedSequence));



// 2. Написать функцию, которая находит в массиве строк слова палиндромы

let words = ['привет', 'тут', 'марина', 'топот', 'мадам', 'деревья', 'доход' ];

function palindrom (arr) {
    const palindromeWords = words.filter ( string => {
        if ( string === string.split('').reverse().join('')) {
            return true;
        }
    });
    return palindromeWords;
};

console.log (palindrom(words));

// function palindrom (arr) {
//     const palindromeWords = words.filter ( string => string === string.split('').reverse().join(''));
//     return palindromeWords;
// };

// console.log (palindrom(words));



// 3. Дан массив объектов:
// Написать функцию, которая выводила объект, где ключ - название овоща/фрукта (name), 
// а значение - максимальное встречающееся значение этого фрукта/овоща в коллекции.
// В результирующем значении, name повторяться не должно.

const array = [
    {
     name: 'apple',
     count: '25',
    },
    {
     name: 'potato',
     count: '21',
    },
    {
     name: 'carrot',
     count: '700',
    },
    {
     name: 'apple',
     count: '300',
    },
    {
        name: 'potato',
        count: '11',
       },
];

function fruits (arr) {

    const newFruits = {};

    array.forEach (item => {      

    const itemName = item.name;
    const itemCount = parseInt(item.count);
    
    if ( newFruits[itemName] === undefined ) {
        newFruits[itemName] = itemCount;
    }  else if ( newFruits[itemName] < itemCount ) {
        newFruits[itemName] = itemCount;
    }  
    });
    
    return newFruits;
};

console.log(fruits(array));


// 4. Дан массив из чисел, строк и булевых значений, оставить в массиве только строки, 
// длина которых больше 5 символов.
// Вывести результирующий объект, где ключ будет название строки, а значение ее длина.  

let arr1 = [24, 'привет', true, 'дом', 33, false, 'марина', 'стеклянный', 3, 'тут', true, 'дирижабль', 78];

function objAndString (arr) {
// let newarr = [];

// for ( let i = 0; i < arr1.length; i++ ) {
//     if ( typeof arr1[i] === 'string' && arr1[i].length > 5 ) {
//         newarr.push(arr1[i]);
//     }
// }
let newarr = arr1.filter( item => {
    if (typeof item === 'string' && item.length > 5) {
        return true;
    } ;
})

let newObj = {};

newarr.forEach (item => {
    newObj[item] = item.length;
})
    return newObj;
}

console.log (objAndString(arr1));



// 5. Найти индексы всех вхождений подстроки "hello" в в массиве строк 
// Первоначальный массив: ["abcbabchello", "hello world hello", ‘something’ ]
// Регистр не учитывать.

let strings = ["abcbabchello", "hello world hello", 'something' ] ;


function substringSearch (arr) {

let substring = 'hello';    
let indexes = [];

strings.forEach (string => {
    let start = 0;
    while ((start = string.indexOf(substring, start)) !== -1) {
        indexes.push(string.indexOf(substring, start));
        start += 1;
    }
})
return indexes;
}
console.log (substringSearch(strings));



// 6. Реализуйте функцию union(), которая объединит уникальные элементы всех массивов, переданных ей.
// Пример: union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт
// [1, 2, 3, 101, 10].

function union (...arrays) {
    let newUnion = [];

    arrays.forEach( array => {
        array.forEach(item => {
            newUnion.push(item);
        })
    })
    
    let uniqueElements = [...new Set (newUnion)];
    return uniqueElements;
}

    console.log (union([1, 2, 2, 3], [101, 2, 1, 10], [2, 1]));




// 7. Написать функцию выводящую таблицу умножения (от 1 до 9)

function multiplicationTable() {
    // Заголовок таблицы
    let table = '  |';
    for (let i = 1; i <= 9; i++) {
        table += ' ' + i;
    }
    table += '\n' + '-'.repeat(25) + '\n';

    // Генерация строк таблицы
    for (let i = 1; i <= 9; i++) {
        let row = i + ' |';
        for (let j = 1; j <= 9; j++) {
            row += ' ' + (i * j);
        }
        table += row + '\n';
    }

    // Вывод таблицы
    console.log(table);
}

multiplicationTable();


function multiTab() {
    for ( let i = 1; i <=9; i++ ){
        for( let j = 1; j <= 9; j++ ){
            console.log(`${i} x ${j} = ${i*j}`);
        }
    }
    console.log() ;
}

multiTab();



// 8. Написать функцию, которая делает глубокое сравнение объектов

let obj1 = {
    name: 'Pete',
    size: {
        width: 100,
        heigth: 80,
    },
};

let obj2 = {
    name: 'Pete',
    size: {
        width: 100,
        heigth: 80,
    },
};

let obj3 = {
    name: 'Pete',
    size: {
        width: 100,
        heigth: 90,
    },
};

function deepComparison ( obj1, obj2 ) {
    // Проверяем идентичны ли объекты
    if ( obj1 === obj2) return true;

    // Проверяем типы оъектов
    if ( typeof obj1 !== 'object' || typeof obj2 !== 'object' ) return false;
   
    // Получаем ключи объектов и сверяем их количество
    const objKeys1 = Object.keys(obj1);
    const objKeys2 = Object.keys(obj2);

    if( objKeys1.length !== objKeys2.length) return false;


    for ( let key of objKeys1) {
        // Проверяем существует ли ключ в obj2
        if (!(key in obj2)) {
            return false;
        }

        // Получаем значения ключей
        const val1 = obj1[key];
        const val2 = obj2[key];

        // Если значения являются объектами, вызываем рекурсию
        if ( typeof val1 === 'object' && typeof val2 === 'object') {
            if (!deepComparison(val1,val2)){
                return false;
            }
        } else if ( val1 !== val2 ) {  //Если значения являются примитивными типами, сравниваем просто так
            return false; 
        }
    }

    return true;
}

console.log (deepComparison(obj1,obj2));
console.log (deepComparison(obj1,obj3));
console.log('hello')


// 9. Напишите функцию, которая глубоко находит пересечения объектов 
// и возвращает объекты пересечений в виде массива.

const objA = { a: 1, b: { c: 2 }, d: 4 };
const objC = { a: 1, b: { c: 3 }, f: 4 };

function deepIntersection ( obj1, obj2 ) {
    let uniqueEl = [];

    if ( typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    

    for ( let key of keys1 ){  
        if ( key in obj2 ) {    // Проверяем, присутствует ли ключ в обоих объектах
            
        const value1 = obj1[key];
        const value2 = obj2[key];

        if ( typeof value1 === 'object' && typeof value2 === 'object') {
            const nestedIntersection = deepIntersection(value1, value2);
            // Если есть пересечения, добавляем их в результирующий массив
                if ( nestedIntersection.length > 0 ) {
                    uniqueEl.push({ [key]: nestedIntersection })
                }
                // Если значения равны, добавляем их в результирующий массив
        } else if ( value1 === value2) {
            uniqueEl.push( {[key]: value1} );
        }
    }
    }
    return uniqueEl;
}

console.log (deepIntersection(objA,objC));



// 10.Напишите функцию, которая принимает в себя массив объектов и выводить только уникальные объекты

// let list = [{a: 1}, {b: 2}, {c: 3}, {b: 2}, {b: 2}, {d: 4}, { a: 5}];

// function getUniqueObjects (arr) {

// // let you = [];
// const uniqueKeys = new Set();

// for ( let obj of arr) {
//     for ( let key of Object.keys(obj)) {
//         uniqueKeys.add(key);
//     }
// }
// return uniqueKeys;
// }
// console.log(getUniqueObjects(list));



// 11. Дан массив из чисел. напишите функцию, которая первым значением выводит только 
// четные элементы массива, вторым значением выводит количество нечетных элементов 
// массива с надписью “количество нечетных элементов: “число”, третьим аргументом 
// выводит количество нулей в массиве.

let numbers = [1, 4, 78, 90, 0, 11, 24, 15, 10, 100, 63, 17, 0];

function ofNumbers( arr ) {
    
    let evenNumbers = arr.filter ( elem => elem % 2 === 0 );

    let oddNumber = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] % 2 !== 0 ) {
            oddNumber++;
        }
    }

    let zeroNumber = 0;
    for ( let j = 0; j< arr.length; j++ ) {
        if ( arr[j] === 0 ) {
            zeroNumber++;
        }
    }
    
    console.log (evenNumbers);
    console.log (`количество нечетных элементов:  ${oddNumber}`);
    console.log (`количество количество нулей:  ${zeroNumber}`);
}


ofNumbers(numbers);



// 12. Объедините два массива в один, где второй массив будет вставлен в середину первого массива.

let arrNum = [ 1, 2, 47, 89, 30, 4];
let arrSt = ['hello', 'Pete', 'JS'];

function combiningArrays ( arr1, arr2 ) {
     
    let midleIndex = Math.floor(arrNum.length / 2);
    
    for ( let i = 0; i < arrSt.length; i++ ) {
        arrNum.splice( midleIndex, 0, arrSt[i]);
    }
    console.log( arrNum );
}

combiningArrays(arrNum,arrSt);



// 13. Напишите функцию, которая принимает в себя число. Это число должно выводить число Фибоначчи.
// Пример: func(77) должно выводить 5527939700884757

// fibonacci(0) = 0;
// fibonacci(1) = 1;
// fibonacci(n) = fibonacci(n-1) + fibonacci (n-2);

// function fibonacci(number) {
//     if ( number <= 1 ) {
//         return number;
//     } else {
//         return fibonacci(number-1) + fibonacci(number-2);
//     }
// }

// console.log (fibonacci(6));

function fib(n) {
    let a = 1;
    let b = 1;
    for ( let i = 3; i<= n; i++ ) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(6));
console.log(fib(77));


// 14. Напишите функцию, которая вычисляет экспоненту числа.

function exp (base,n) {
    if ( n === 0 ) {
        return 1;
    } else {
        return Math.pow(base, n).toFixed(2);
    }
}

console.log(exp(1, 0));
console.log(exp(2, 1.5));
console.log(exp(7, 3));


// 15.Напишите функцию, которая выполняет бинарный поиск числа.


const numberArray = [
    1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
   97, 98, 99, 100
 ] ;

 function binarP ( arr, target ) {

    let left = 0;
    let right = arr.length - 1;
    let mid;

    while ( left <= right ) {
        mid = Math.round((right-left) / 2) + left;

        if ( target === arr[mid]) {
            return mid;
        } else if ( target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
 }

 console.log(binarP(numberArray, 78));
 console.log(binarP(numberArray, 120));

