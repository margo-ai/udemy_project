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
// alert( "1"[0]);
// Ответ: 1

// (6)
// Чему равно 2 && 1 && null && 0 && undefined ?

console.log(2 && 1 && null && 0 && undefined); // "И" запинается на лжи
// Ответ: null

// (7)
// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// console.log(!!( 1 && 2 ) === (1 && 2)); // !! - превращают выражение в boolean
// Ответ: да

//(8)
// Что выведет этот код: alert( null || 2 && 3 || 4 );?
// alert( null || 2 && 3 || 4 ); // "ИЛИ" запинается на правде
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
// console.log(0 || "" || 2 || undefined || true || falsе); // "ИЛИ" запинается на правде
// Ответ: 2






// ЛЕКЦИЯ 31 "СОБЫТИЯ И ИХ ОБРАБОТЧИКИ"
// События - это сигнал от браузера о том, что что-то на странице произошло













// ЛЕКЦИЯ 35 "Async, defer, динамические скрипты"

// В HTML:
// <body>
//   <script defer src="hs/script.js"></script>
//   <p>Hello world</p>
//   <p>Seond message</p>
// </body>

// В JS:
const p = document.querySelectorAll('p');
console.log(p);

/* defer - сообщает браузеру, что он должен продолжать обрабатывать страницу
и загружать скрипт в фоновом режиме, затем = запустить скрипт, когда он загрузится */


// Несколько моментов:
// (1) Скрипты с defer никогда не блокируют страницу
// (2) Скрипты с таким атрибутом всегда выполняются, когда наше DOM-дерево уже готово
// (3) Если 2 скрипта с defer подряд, то сначала загрузится один, а уже после - второй


// Атрибут Async:
// (1) Страница не ждет асинхронных скриптов, они просто загружаются и обрабадываются
// (2) Скрипты не ждут друг друга
// (3) Лучше использовать с async скрипты, которые не зависят от DOM-структуры, и не зависеть от других скриптов


// Скрипты можно создавать из других скриптов
// const script = document.createElement('script');
// script.src = "js/test.js";
// script.async = false; // отключаем возможность async у данного скрипта
// document.body.append(script);

// такие скрипты по умолчанию ведут себя как async



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // скрипты ниже будут выполняться друг за другом
    document.body.append(script);
}

loadScript("js/test.js");
loadScript("js/some.js");










// ЛЕКЦИЯ 39 "Скрипты и время их выполнения, setTimeout и setInterval"

// const timerId = setTimeout(function() {
    //     console.log('Hello');
    // }, 2000); // первый аргумент - функция. которая должна запуститься через определенный промежуток времени
    // второй аргумент - таймаут вызова этой функции в миллисекундах
    
    // const timerId = setTimeout(function(text) {
    //     console.log(text);
    // }, 2000, 'Hello'); // в такой конструкции 3-им аргументом мы можем выводить текст, который передается в функцию

    // const btn = document.querySelector('.btn');
    // let timerId;
    // let i = 0;

    // function myAnimation() {
    //     const elem = document.querySelector('.box');
    //     let pos = 0;

    //     const id = setInterval(frame, 10);
    //     function frame() {
    //         if (pos == 300) {
    //             clearInterval(id);
    //         } else {
    //             pos++;
    //             elem.style.top = pos + "px"; 
    //             elem.style.left = pos + "px";
    //         }
    //     }
    // }


    // btn.addEventListener('click', myAnimation);
    
    // btn.addEventListener('click', () => {
    //     // const timerId = setTimeout(logger, 2000);
    //     timerId = setInterval(logger, 1000);
    // });

    // если функция logger занимает слишком много времени,
    // то после первого "прогона" setInterval не будет ждать секунду, а сразу начнёт второй "круг"

  

    // function logger () {
    //     if (i === 3) {
    //         clearInterval(timerId); // остановить setTimeout
    //     }
    //     console.log('text');
    //     i++;
    // }

    // Рекурсивный вызов setTimeout (в этом случае код всегда будет ждать отведенное ему время):
    // let id = setTimeout(function log() {
    //     console.log('Hello');
    //     id = setTimeout(log, 500);
    // }, 500);










    // ЛЕКЦИЯ 40 "РАБОТА С ДАТАМИ"

    // const now = new Date(); // текущее время 
    // const now = new Date('2020-10-24');   
    // const now = new Date(2020, 5, 1, 20); 
    // const now = new Date(0); // передаем ноль миллисекунд; дата до 01.01.1970
    // Если нужно получить дату до 1970 года, исопьлзуем отрицательное значение миллисекунд:
    // const now = new Date(-99999999999);
    
    // const now = new Date();

    // МЕТОДЫ С ДАТАМИ  :
    // получение компонентов даты:
    // console.log(now.getFullYear()); 
    // месяц (они начинаются с нуля):
    // console.log(now.getMonth()); // поэтому октябрь - это 9
    // дата:
    // console.log(now.getDate()); 
    //getHours
    //getMinutes
    //getSeconds
    //getMilliseconds

    // номер дня недели (нумерация начинается с воскресенья - 0):
    // console.log(now.getDay()); 

    // все эти значения с местного часового поиска
    // чтобы посмотреть время по гринвичу:
    // console.log(now.getUTCHours()); 



    // Другие методы для получения компонентов даты:

    // разница между часовым поясом и UTC (в минутах):
    // console.log(now.getTimezoneOffset());
    // количество миллисикунд с 01.01.1970:
    // console.log(now.getTime());



    // Устанавливаем дату (сеттеры):
    // const now = new Date();
    console.log(now.setHours(18));
    console.log(now);
    
    // браузер ориентируется на локальную дату, а консоль программная - на UTC
    
    const now = new Date('2020-05-01'); //(1) 
    new Date.parse('2020-05-01'); // (2)
    // (1) и (2) - это то же самое



    let start = new Date();

    for (let i = 0; i < 100000; i++) {
      let some = i ** 3;
    }

    let end = new Date();

    alert(`Цикл отработал за ${end - start} миллисекунд`)






    



  //  ЛЕКЦИЯ 45 "ФУНКЦИИ-КОНСТРУКТОРЫ"

// const num = new Number(3);
// const num = new Function(3); // созданием новой функции мы создаем новый объект
// console.log(num);

// ниже - функция-коструктор, и с ее помощью можем создавать новых пользователей;
// такие функции предназначены для конструирования объектов, создания множественных копий
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   // помимо свойств можем помещать сюда и методы, например:
//   this.hello = function() {
//       console.log(`Hello ${this.name}`);
//   };
// }


// User.prototype.exit = function(name) {
//   console.log(`Пользователь ${this.name} ушел`);
// };


// const ivan = new User('Ivan', 28); // внутри переменной теперь не функция, а объект; с помощью new создаем новый объект
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);










// ЛЕКЦИЯ 46 "КОНТЕКСТ ВЫЗОВА. THIS"

// THIS - это ссылка на объект, свойство контекста выполнения кода (global, function или eval),
// которое в нестрогом режиме всегда является ссылкой на объект, а в строгом режиме может иметь любое значение.

// Пример использования с developer.mozilla.org:
// function Car (make, model, year, owner) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.owner = owner;
// }

// function Person(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
// }

// var rand = new Person("Rand McNally", 33, "M");
// var ken = new Person("Ken Jones", 39, "M");

// console.log(rand);

// var car1 = new Car("Eagle", "Talon TSi", 1993, rand);

// console.log(car1);


// Функция может вызываться 4-мя способами (в каждом контекст вызова отличается):
// (1) просто вызов функции
// (2) если мы используем метод внутри объекта, то контекст вызова будет
// ссылаться на этот объект, т.е. контекст у метода объекта - сам объект
// (3) функции-конструкторы (через оператор new)
// эта функция- конструктор создает новый объект
// (4) ручное присваивание this любой функции: call, apply, bind

// ОБО ВСЕХ ПОДРОБНЕЕ:

// (1) просто вызов функции
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);
// если функция просто запускается, то если мы используем в ней контекст,
// то этот контекст будет ссылаться на глобальный объект window

// Обычная функция: this = window, но если стоит 'use strict' - undefined

// Замыкание это функция у которой есть доступ к своей внешней функции по области видимости,
// даже после того, как внешняя функция прекратилась. Это говорит о том, 
// что замыкание может запоминать и получать доступ к переменным, 
// и аргументам своей внешней функции, даже после того, как та прекратит выполнение.


// (2) если мы используем метод внутри объекта, то контекст вызова будет
// ссылаться на этот объект, т.е. контекст у метода объекта - сам объект
//  const obj = {
//      a: 20,
//      b: 15,
//      sum: function() {
//          console.log(this);
//      }
//  };
//  obj.sum();


// (3) функции-конструкторы (через оператор new)
// эта функция- конструктор создает новый объект

// this в конструкторах и классах - это новый экземпляр объекта

// функция, которая задаст тип объекта:
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// // экземпляр объекта, используя  new:
// let ivan = new User('Ivan', 23);


// (4) ручное присваивание this любой функции: call, apply, bind

// function sayName(surname) {
//     console.log(this); // контекст вызова - объект
//     console.log(this.name + surname); // метод, показывающий имя объекта
// }

// const user = {
//     name: 'John'
// };

// Как сделать так, чтобы в функции this ссылалось на user? Этими способами (они по функционалу одинаковые):
// Разница только в способе передачи аргументов
// sayName.call(user, 'Smith'); // через запятую
// sayName.apply(user, ['Smith']); // в массиве


// // Другой метод ручного присвоения контекста (он создает новую функцию):
// function count(num) {
//     return this*num;
// }

// const double = count.bind(2); // двойка передается вместо this
// console.log(double(3)); // в double передаем один аргумент, который будет всегда удваиваться
// console.log(double(13)); // в double передаем один аргумент, который будет всегда удваиваться


// THIS можно применить для работы с обработчиком событий

// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     console.log(this); // в этом случае this - это сам элемент, на котором сработало событие
// });
// когда обработчик события (как коллбэк функция) написан в классическом режиме (functino() {}),
// то контекстом вызова будет сам этот элемент, на котором произошло событие

// в этой функции this обращается к самому элементу:
// btn.addEventListener('click', function(){
//     this.style.backgroundColor = 'red'; // также, как через event.target.
//     // Объект "событие" используется здесь чаще, чем контекст вызова
// });

// вариант с target:
// btn.addEventListener('click', (e) => {
//     e.target.style.backgroundColor = 'red'; // также, как через event.target.
//     // Объект "событие" используется здесь чаще, чем контекст вызова
// });

// // в случае со стрелочной функцией:
// btn.addEventListener('click', () => {
//     this.style.backgroundColor = 'red';
// }); // в этом случае контекст вызова потерялся

// Обработчики событий:
// Когда используем обычный синтаксис через function, мы имеем доступ к this,
// если же используем стрелочную функцию, то контекст вызова меняется
 

// Стрелочные функции (они не иемют контекста вызова. Она будет брать его у своего родителя):
// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//         };

//         say();
//     }
// };

// obj.sayNumber();

// const double = (a) => {
//     return a * 2;
// };

// если тело функции помещается в одну строку, то его можно записать как:
// const double = (a) => a * 2; // return при этом убираем
// console.log(double(4));










// ЛЕКЦИЯ 47 "КЛАССЫ ES6" (появились в новом стандарте ES6)

// Классы - это "красивая обертка" фунций-конструкторов; шаблон, показывающий, что будет делать конкретный компонент

// class Rectangle {
//   constructor(height, width) {
//       this.height = height;
//       this.width = width;  
//   }

//   // метод (посчитаем площадь): 
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// в следующем классе будут те же свойства и метод, как у просто Rectangle,
// и снова дублировать код не нужно, может сделать наследоваемость (с помощью Extends):
// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//       super(height, width); // вызывает супер-конструктор родителя, вызывает то же самое,
//       // чтобы не повторять строки. Одно правило - super всегда должен быть не первом месте!!
//       // В скобках пишем свойства, которые хотим наследовать
//       this.text = text;
//       this.bgColor = bgColor;
//     }

//     //новый метод:
//     showMyProps () {
//       console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');

// div.showMyProps();
// console.log(div.calcArea());


// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

// с помощью классов создали 2 разные конструкции, сконструировали объекты, содержат они один и тот же метод

// Принципы ООП:
// (1) Абстракция - когд мы отделяем концепцию (шаблон, по которому что-то создаем)
// от её экземпляра (созданы на основе концепции)
// (2) Наследование - способность объекта или класса базироваться на другом объекте или классе






// ЛЕКЦИЯ 49 "REST ОПЕРАТОР И ПАРАМЕТРЫ ПО УМОЛЧАНИЮ"
// REST оператор и параметры по умолчанию (ES6)
    // Обратный оператор - spread, он, наоборот, расскладывает массив на отдельные элементы
  //   const log = function(a, b, ...rest) {
  //     console.log(a, b, rest); // остальные параметры собираются в массив
  // };

  // log('basic', 'rest', 'operator', 'usage');

  // параметры по умолчанию (если не передан какой-то аргумент, то можем установить значение по умолчанию):
  // function calcOrDouble(number, basis = 2) {
  //     // basis = basis || 2; // 2 - значение по умолчанию
  //     console.log(number * basis);
  // }
  // в стандарте ES6 параметр по умолчанию можно записывать прямо при объявлении функции (basis = 2, например)

  // calcOrDouble(3);









  
    // ЛЕКЦИЯ 50 "ЛОКАЛЬНЫЕ СЕРВЕРА"
    // http запросы - get и post
    // live server и browser async (html) не позволяют использовать post (live server может только get),
    //  поэтому для тестирования проектов нужны локальные сервера
    // На локальном сервере get и post запросы работают!




    

     // ЛЕКЦИЯ 51 "JSON формат передачи данных, глубокоа клонирование объектов"

    // JSON - это текстовый формат обмена данных, используется также для хранения данных.
    // JSON - это набор пар "ключ-значение"

    // Напрямую отправлять объекты на сервер мы не можем.
    // Сначала мы форматируем на вариант, который можем транспортировать, и уже потом передаем с фронтенда на бекенд

    // const person = {
    //     name: 'Alex',
    //     tel: '+79999999999',
    //     parents: {
    //         mom: 'Olga',
    //         dad: 'Mike'
    //     }
    // };

    // Браузеры имеют встроенные объекты JSON для работы с этими данными. 
    // И в этом встроенном объекте у нас есть как свойства, так и методы. 
    // Метода 2, и один из них stringify
    // Strinfify как раз и превращает объекты js в нужный нам формат.
    // console.log(JSON.parse(JSON.stringify(person)));

    // Все сущности записыватся в двойные кавычки. Теперь эти данные можно отправить на сервер.

    // Теперь обратная ситуация - нам с сервера приходят JSON,
    // и нам нужно превратить его в обычный объект в нашем скрипте.
    // За это отвечает JSON.parse


    // Как сделать глубокую копию объекта "person"? С помощью JSON

    // const clone = JSON.parse(JSON.stringify(person)); // таким образом будет создан глубокий клон
    
    // clone.parents.mom = 'Ann';
    // console.log(person);
    // console.log(clone);
