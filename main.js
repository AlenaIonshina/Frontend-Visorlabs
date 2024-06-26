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
   
    const objKeys1 = Object.keys(obj1);
    const objKeys2 = Object.keys(obj2);

    if( objKeys1.length !== objKeys2.length) return false;

    for ( let key of objKeys1) {
        if (!(key in obj2)) {
            return false;
    }

    const val1 = obj1[key];
    const val2 = obj2[key];

    if ( val1 === 'object' && val2 === 'object') {
        if (!deepEqual(val1,val2)){
            return false;
        }
    } else if ( val1 !== val2 ) { 
        return false; 
    }
}
    return true;
}

console.log (deepComparison(obj1,obj2));
console.log (deepComparison(obj1,obj3));

