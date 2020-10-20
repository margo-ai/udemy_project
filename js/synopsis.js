// работаем в новых стандартах js
"use strict";


/*const obj = {
  a: 50
};

obj.a = 10;

console.log(obj);*/

// var - устаревший формат записи!!
// нужно использовать let
// const - для неизменяемых переменных


// есть  типы данных примитивные (простые), а есть - объекты (массивы, функции и т.д.)
// помещаем объект в переменную
// данные в фигурных скобках - свойства объекта, действия в фигурных скобках - методы

// описываем свойства объекта (формат "ключ-значение". Ключ - это свойство объекта)
const obj = {
  name: "John",
  age: 25,  
  isMarried: false
};

// чтобы получить значение определенного свойства:
// метод 1 (через точку):
console.log(obj.name);
// метод 2 (через квадратные скобки):
// console.log(obj["name"]);

// массив - это не отдельный тип данных, это частный случай обхъекта (одна из разновидностей)
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);


// запустить сообщение на сайте. Используется для предупреждения пользователя о чем-либо.
// alert('Hi losers');

// спросить пользователя о чем-то (да/нет)
// const result = confirm("Are you here?");
// console.log(result);

// чтобы получить от пользователя конкретный ответ:
// const answer = prompt("Вам есть 18?", "18");
// console.log(answer);

// чтобы проверить тип данных используем "typeof":
// console.log(typeof(answer));

// в основном вся информация, которую мы получаем от пользователя, приходит в виде строк

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');
// promt существует только внутри браузера

// console.log(typeof(answers));



/* ЛЕКЦИЯ 8 "ИНТЕРПОЛЯЦИЯ":

const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const user = "Ivan";

alert(`Привет, ${user}`); */

/* Как работает интерполяция? 
Мы просто создали одну строку и «вставили» в неё в нужные места
константы с помощью знака доллара и фигурных скобок ${ }.
Получился как будто бланк, куда внесены нужные значения.
И нам не нужно больше заботиться об отдельных строках
для знаков препинания и пробелов — все эти символы
просто записаны в этой строке-шаблоне.*/



// ЛЕКЦИЯ 9 "ОПЕРАТОРЫ":

let incr = 10,
    decr = 10;

// оператор инкремента:
incr++; //постфиксная форма записи
++incr; //префиксная форма записи

// оператор декремента:
decr--; //постфиксная форма записи
--decr; //префиксная форма записи

console.log(incr);
console.log(decr);

// % - возвращает остаток от операции
console.log(5%2);

// == - знак равенства:
console.log(2*4 == 8);

// === - строгое равенство:
console.log(2*4 === 8);

// && - оператор "и":
const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);


// || - оператор "или":
const isChecked1 = true,
      isClose1 = false;

console.log(isChecked1 || isClose1);


// ! - оператор отрицания:
const isChecked2 = false,
      isClose2 = false;

console.log(isChecked2 || !isClose2);


// ЛЕКЦИЯ 13 "УСЛОВИЯ":  

if (1 == 1) {
  console.log('Ok!');
} else {
  console.log('Error');
}


// if (num < 49) {
//   console.log('Error');
// } else if (num > 100) {
//   console.log('Много');
// } else {
//   console.log('Ok!');
// }

// тернарный оператор: 
// (условие) ? если true : если false;
// (num === 50) ? console.log('Ok!') : console.log('Error');

/* const num = 51;
switch (num) {
  case 49: 
    console.log('Неверно');
    break;
  case 100:
    console.log('Неверно');
    break;
  case 50:
    console.log('В точку!');
    break;
  default:
    console.log('Не в этот раз');
    break;
} */


// ЛЕКЦИЯ 14 "ЦИКЛЫ":  
// let num = 50;

// Первый вариант цикла:
// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// Второй вариант цикла:
// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// Третий вариант цикла:
for (let i = 1; i < 10; i++) {
  if (i === 6) {
    // break;
    continue;
  }
  console.log(i);   
}



// ЛЕКЦИЯ 16 "ФУНКЦИИ"

// Функции - это наши действия в javascript
// В скобках пишутся аргументы - это данные, которые функция использует внутри себя

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  let num = 10;  
  console.log(num);
}

showFirstMessage('Hello World!');

console.log(num);

// Замыкание функции - сама функция вместе со всеми внешними переменными, которые ей доступны


// function decloration (вид функции) - создается до начала выполнения скрипта, можно вызвать перед объявлением:

function calc(a, b) {
  return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));


function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

// function expression (вид функции) - создается только тогда, когда доходит поток кода,
// можно вызвать только после объявления:

const logger = function () {
  console.log('Hello!');
};

logger();


// Стрелочные функции:
const calc1 = (a, b) => a + b;

console.log(calc1(5, 7));




// ЛЕКЦИЯ 17 "МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ"
// Методы - это вспомогательные функции, свойства - это вспомогательные значения
const str = "test";
const arr1 = [1, 2, 3, 4, 5];

// в данном случае, свойство - это length. Свойства пишутся через точку. А методы - вызываются.
// console.log(arr1.length);
// console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str);

const fruit = "Some fruit";

// Этот метод должен принимать какой-то аргумент в скобках
console.log(fruit.indexOf("q"));

const logg = "Hello world";

// 6 - это начало строки (от), т.е. слова world, 10 - это конец строки (до), 10 не включается
console.log(logg.slice(6, 10));
console.log(logg.slice(-5, -1)); // то же самое

// похоже на slice, не поддерживает отрицательные значения
console.log(logg.substring(6, 11));

// в отличие от slice, во втором аргументе указываем длину, а не индекс последнего символа
console.log(logg.substr(6, 5));


// ЧИСЛА (СВОЙСТВА И МЕТОДЫ):

const num2 = 12.2;

// округление к ближайшему целому
console.log(Math.round(num2));


const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));








// ЛЕКЦИЯ 19 "Callback-функции":
function first() {
  // Do something
  setTimeout(function() {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

// Callback-функция - это функция, которая должна быть
// выполнена после того, как другая функция завершила свое выполнение

function learnJS(lang, callback) { 
  console.log(`Я учу: ${lang}`);
  callback();
 }

 function done() {
  console.log('Я прошел этот урок');
 }

 learnJS('Javascript', done);




 


 // ЛЕКЦИЯ 20 "ОБЪЕКТЫ, ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ"


 const options = {
   name: 'test',
   width: 1024,
   heigth: 1024,
   colors: {
     border: 'black',
     bg: 'red'
   },
   makeTest: function() { // Можно создавать методы в объектах самостоятельно
     console.log("Test");
   }
 };

 options.makeTest();

// Деструктуризация объекта:
const {border, bg} = options.colors;
console.log(border);



//  console.log(options.name);

//  delete options.name;

//  console.log(options);


// Для счетчика свойств:
let counter = 0;

// for... in - цикл, проходящий через свойства объектов
 for (let key in options) {
   if (typeof(options[key]) == 'object') {
     for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
      counter++;
     }
   } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
   }  
 }

 console.log(counter);

 // Методы - это действия, которые можно совершить с объектами

 // Этот метод возвращает массив из перечисляемых свойств переданного обекта:
console.log(Object.keys(options).length);
// Этот метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value]:
console.log(Object.entries(options));








// ЛЕКЦИЯ 21 "МАССИВЫ И ПСЕВДОМАССИВЫ"

const array = [2, 13, 26, 8, 10];

array.sort(compareNum);
console.log(array);

function compareNum(a, b) {
  return a - b;
}

//array[99] = 0; // так лучше не делать!!!
// console.log(array.length); // length состоит из "последнего индекса массива + 1"
// console.log(array);


// Метод, который удаляет последний элемент из массива:
// array.pop();

// Метод, который добавляет элемент в конец массива:
array.push(10);
console.log(array);

// Перебор массива:
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// for of - другая конструкция перебора. Такая конструкция работает с массивами, псевдомассивами:
for (let value of array) {
  console.log(value);
}

// Метод перебора массива "for each":
array.forEach(function(item, i, array) {
  console.log(`${i}: ${item} внутри массива ${array}`);
});


// Метод "for each" используется чаще, но у метода "for of" есть плюс - здесь можно использоваться brake и continue.


// Метод "split" (делает из строки массив):
const string = prompt("", "");
const products = string.split(", ");
//console.log(products);

// Метод "sort" - метод сортировки:
products.sort(); // сортирует элементы как строки

// Обратная операция - join (делает из массива строку)
console.log(products.join('; '));


/* Псевдомассив - это объект, который похож на массив.
У него есть числовые свойства, как у массивов. А также свойство length.
Хоть псевдомассивы и похожи на массивы, все же это обычные объекты. У них нет свойств,
и методов массивов, таких как forEach, join, slice и др.:
 */







 // ЛЕКЦИЯ 22 "ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ, Spread оператор"

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);


const obj2 = {
  a: 5,
  b: 1
};

/* const copy = obj2; // сюда кладется ссылка на obj2
copy.a = 10; // модифицируя копию, мы изменяем сам объект (называется "передача по ссылке")

console.log(copy);
console.log(obj2);
 */
// в объектах передается не сама структура объекта, а ссылка на объект



// Но как скопировать объект (массивов и т.д.)?
// Создаем копию объекта через "for... in"

function copy (mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
      objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

/* const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; // в этом случае "c.x" поменялось в двух случаях, т.к. мы создали поверхностную копию

console.log(newNumbers); // в копии значение ключа "a" поменялось на 10
console.log(numbers);// а в оригинале не поменялось
 */


// второй способ копирования объекта - через Object.assign():

const add = {
  d: 17,
  e: 20
};
// попробуем соединить объекты "numbers" и "add"
console.log(Object.assign(numbers, add)); // первым аргументом - объект,
// в который помещаем, а вторым - тот,
// который помещаем в первый

// таким же образом можно создать новый объект: в этом случае первым аргументом делаем пустой объект:
const clone = Object.assign({}, add); 

clone.d = 20;

console.log(add); // здесь "d" не меняется
console.log(clone); // а здесь меняется


// Создание копии массива:
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'daffcfdcfc';
console.log(newArray);
console.log(oldArray);


// Использование оператора разворота (spread) - новый вариант создания копии объектов:
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

num = [2, 5, 7];

log(...num); // с помощью spread, функция запустится не с массивом, а с тремя отдельными сущностями


// еще один способ создания поверхностных копий объектов
const array1 = ["a", "b"];

const newArray2 = [...array1];

const q = {
  one: 1,
  two: 2
};

const newObj = {...q};











// ЛЕКЦИЯ 23 " ОСНОВЫ ООП, прототипно-ориентированное наследование"

// let str1 = "some";
// let strObj = new String(str1);

console.log(typeof(str1));
console.log(typeof(strObj));


console.dir([1,2,3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  }
};

const john = Object.create(soldier); // создаем новый объект john, который будет наследоваться от soldier

// const john = {
//   health: 100
// };

// нам нужно сделать так, чтобы john наследовал все свойства soldier,
// но оставлял свои индивидуальные свойства (например, здоровье)

// устаревший формат (пока еще встречается, но лучше не использовать в новых проектах):
// john.__proto__ = soldier;

// Новый формат - object.create, object.getPrototypeOf, object.setPrototypeOf:
Object.setPrototypeOf(john, soldier);// первый аргумент - кому назначаем прототип,
// второй - объект, прототип которого устанавливаем
// Установили прототип для john от soldier

// console.log(john.armor);
john.sayHello();







// ЛЕКЦИЯ 25 "ОТЛАВЛИВАЕМ ОШИБКИ В СВОЕМ КОДЕ ПРИ ПОМОЩИ КОНСОЛИ РАЗРАБОТЧИКА. Breakpoints"

/*  С помощью брэйкпоинтов можно "путешествовать" по функциям кода.
Нажав "стрелочка вниз*, можно войти внутрь функции.
Call stack - можем отследить операции, которые привели к текущей строчке.
Scope - переменные, с которыми мы сейчас работаем (глобальные и локальные).
Breakpoints - показывает, где установлены брэйкпоинты.
С остальными познакомимся позже.*/








// ЛЕКЦИЯ 26 "ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ В JS"
// Это возможность одного типа данных превращаться в другой

// To string:
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + '')); // при сложении со строкой получается строка

const number = 5;

console.log("https://vk.com/catalog/" + number);

const fontSize = 26 + 'px';


// To number:
// 1) 
console.log(typeof(Number('5')));

// 2) (унарный плюс)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt("15px", 10)));


let answ = +prompt("Hello", "");
// всё, что мы получаем от пользователя, всегда типа данных "строка"


// To boolean:
// 0, '', null, undefined, NaN; // это всё false. Всё остальное в JS - это true (пустые массивы, строки и т.д.)

// 1)
let switcher = null;
if (switcher) {
  console.log('Working...');
}

switcher = 1;
if (switcher) {
  console.log('Working...');
}

// 2)
console.log(typeof(Boolean('5')));

// 3)
console.log(typeof(!!"4444")); // !! - делают boolean












// ЛЕКЦИЯ 27 "ЗАДАЧИ С СОБЕСЕДОВАНИЙ НЕ ПОНИМАНИЕ ОСНОВ"

// (1)
// Какое будет выведено значение: let x = 5; alert( x++ );?
// let x = 5;
// alert(x++); // если было бы (++x), то 6
// Ответ: 5

// (2)
// Чему равно такое выражение: [ ] + false - null + true?
// console.log(typeof([] + false)); // false (строка)
// console.log(typeof([] + false - null)); // Nan
// console.log([] + false - null + true); // Nan
// Ответ: Nan

// (3)
// Что выведет этот код: let y = 1; let x = y = 2; alert(x);?
// let y = 1;
// let x = y = 2;
// alert(x);
// Ответ: 2

// (4)
// Чему равна сумма [ ] + 1 + 2?
console.log([] + 1 + 2);
// Ответ: 12

// (5)
// Что выведет этот код: alert( "1"[0] )?
alert( "1"[0]);
// Ответ: 1

// (6)
// Чему равно 2 && 1 && null && 0 && undefined ?

console.log(2 && 1 && null && 0 && undefined); // "И" запинается на лжи
// Ответ: null

// (7)
// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
console.log(!!( 1 && 2 ) === (1 && 2)); // !! - превращают выражение в boolean
// Ответ: да

//(8)
// Что выведет этот код: alert( null || 2 && 3 || 4 );?
alert( null || 2 && 3 || 4 ); // "ИЛИ" запинается на правде
// Ответ: 3

// (9)
// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
const aaa = [1, 2, 3];
const bbb = [1, 2, 3];

console.log(aaa == bbb);
// Ответ: нет, не равны

// (10)
// Что выведет этот код: alert( +"Infinity" );?
alert( +"Infinity");
// Ответ: Infinity (число)

// (11)
// Верно ли сравнение: "Ёжик" > "яблоко"?
console.log("Ёжик" > "яблоко");
// Ответ: нет, false

// (12)
// Чему равно 0 || "" || 2 || undefined || true || falsе?
console.log(0 || "" || 2 || undefined || true || falsе); // "ИЛИ" запинается на правде
// Ответ: 2






// ЛЕКЦИЯ 28 "ПОЛУЧЕНИЕ ЭЛЕМЕНТНОВ СО СТРАНИЦЫ"