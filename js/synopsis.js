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