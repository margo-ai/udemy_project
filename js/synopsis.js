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

const num = 51;
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
}