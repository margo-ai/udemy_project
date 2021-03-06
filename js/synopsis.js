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
// const obj = {
//   name: "John",
//   age: 25,
//   isMarried: false
// };

// чтобы получить значение определенного свойства:
// метод 1 (через точку):
// console.log(obj.name);
// метод 2 (через квадратные скобки):
// console.log(obj["name"]);

// массив - это не отдельный тип данных, это частный случай обхъекта (одна из разновидностей)
// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);


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

// let incr = 10,
//     decr = 10;

// // оператор инкремента:
// incr++; //постфиксная форма записи
// ++incr; //префиксная форма записи

// // оператор декремента:
// decr--; //постфиксная форма записи
// --decr; //префиксная форма записи

// console.log(incr);
// console.log(decr);

// // % - возвращает остаток от операции
// console.log(5%2);

// // == - знак равенства:
// console.log(2*4 == 8);

// // === - строгое равенство:
// console.log(2*4 === 8);

// // && - оператор "и":
// const isChecked = true,
//       isClose = true;

// console.log(isChecked && isClose);


// // || - оператор "или":
// const isChecked1 = true,
//       isClose1 = false;

// console.log(isChecked1 || isClose1);


// // ! - оператор отрицания:
// const isChecked2 = false,
//       isClose2 = false;

// console.log(isChecked2 || !isClose2);


// ЛЕКЦИЯ 13 "УСЛОВИЯ":

// if (1 == 1) {
//   console.log('Ok!');
// } else {
//   console.log('Error');
// }


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
// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }



// ЛЕКЦИЯ 16 "ФУНКЦИИ"

// Функции - это наши действия в javascript
// В скобках пишутся аргументы - это данные, которые функция использует внутри себя

// let num = 20;

// function showFirstMessage(text) {
//   console.log(text);
//   let num = 10;
//   console.log(num);
// }

// showFirstMessage('Hello World!');

// console.log(num);

// Замыкание функции - сама функция вместе со всеми внешними переменными, которые ей доступны


// function decloration (вид функции) - создается до начала выполнения скрипта, можно вызвать перед объявлением:

// function calc(a, b) {
//   return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));


// function ret() {
//   let num = 50;
//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// function expression (вид функции) - создается только тогда, когда доходит поток кода,
// можно вызвать только после объявления:

// const logger = function () {
//   console.log('Hello!');
// };
//
// logger();


// Стрелочные функции:
// const calc1 = (a, b) => a + b;

// console.log(calc1(5, 7));




// ЛЕКЦИЯ 17 "МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ"
// Методы - это вспомогательные функции, свойства - это вспомогательные значения
// const str = "test";
// const arr1 = [1, 2, 3, 4, 5];

// в данном случае, свойство - это length. Свойства пишутся через точку. А методы - вызываются.
// console.log(arr1.length);
// console.log(str[2]);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str);

// const fruit = "Some fruit";

// Этот метод должен принимать какой-то аргумент в скобках
// console.log(fruit.indexOf("q"));

// const logg = "Hello world";

// 6 - это начало строки (от), т.е. слова world, 10 - это конец строки (до), 10 не включается
// console.log(logg.slice(6, 10));
// console.log(logg.slice(-5, -1)); // то же самое

// похоже на slice, не поддерживает отрицательные значения
// console.log(logg.substring(6, 11));

// в отличие от slice, во втором аргументе указываем длину, а не индекс последнего символа
// console.log(logg.substr(6, 5));


// ЧИСЛА (СВОЙСТВА И МЕТОДЫ):

// const num2 = 12.2;

// округление к ближайшему целому
// console.log(Math.round(num2));


// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));








// ЛЕКЦИЯ 19 "Callback-функции":
// function first() {
//   // Do something
//   setTimeout(function() {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// Callback-функция - это функция, которая должна быть
// выполнена после того, как другая функция завершила свое выполнение

// function learnJS(lang, callback) {
//   console.log(`Я учу: ${lang}`);
//   callback();
//  }

//  function done() {
//   console.log('Я прошел этот урок');
//  }

//  learnJS('Javascript', done);







 // ЛЕКЦИЯ 20 "ОБЪЕКТЫ, ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ"


//  const options = {
//    name: 'test',
//    width: 1024,
//    heigth: 1024,
//    colors: {
//      border: 'black',
//      bg: 'red'
//    },
//    makeTest: function() { // Можно создавать методы в объектах самостоятельно
//      console.log("Test");
//    }
//  };

//  options.makeTest();

// Деструктуризация объекта:
// const {border, bg} = options.colors;
// console.log(border);



//  console.log(options.name);

//  delete options.name;

//  console.log(options);


// Для счетчика свойств:
// let counter = 0;

// // for... in - цикл, проходящий через свойства объектов
//  for (let key in options) {
//    if (typeof(options[key]) == 'object') {
//      for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       counter++;
//      }
//    } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//    }
//  }

//  console.log(counter);

 // Методы - это действия, которые можно совершить с объектами

 // Этот метод возвращает массив из перечисляемых свойств переданного обекта:
// console.log(Object.keys(options).length);
// Этот метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value]:
// console.log(Object.entries(options));








// ЛЕКЦИЯ 21 "МАССИВЫ И ПСЕВДОМАССИВЫ"

// const array = [2, 13, 26, 8, 10];

// array.sort(compareNum);
// console.log(array);

// function compareNum(a, b) {
//   return a - b;
// }

//array[99] = 0; // так лучше не делать!!!
// console.log(array.length); // length состоит из "последнего индекса массива + 1"
// console.log(array);


// Метод, который удаляет последний элемент из массива:
// array.pop();

// Метод, который добавляет элемент в конец массива:
// array.push(10);
// console.log(array);

// Перебор массива:
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// for of - другая конструкция перебора. Такая конструкция работает с массивами, псевдомассивами:
// for (let value of array) {
//   console.log(value);
// }

// Метод перебора массива "for each":
// array.forEach(function(item, i, array) {
//   console.log(`${i}: ${item} внутри массива ${array}`);
// });


// Метод "for each" используется чаще, но у метода "for of" есть плюс - здесь можно использоваться brake и continue.


// Метод "split" (делает из строки массив):
// const string = prompt("", "");
// const products = string.split(", ");
//console.log(products);

// Метод "sort" - метод сортировки:
// products.sort(); // сортирует элементы как строки

// Обратная операция - join (делает из массива строку)
// console.log(products.join('; '));


/* Псевдомассив - это объект, который похож на массив.
У него есть числовые свойства, как у массивов. А также свойство length.
Хоть псевдомассивы и похожи на массивы, все же это обычные объекты. У них нет свойств,
и методов массивов, таких как forEach, join, slice и др.:
 */







 // ЛЕКЦИЯ 22 "ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ, Spread оператор"

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);


// const obj2 = {
//   a: 5,
//   b: 1
// };

/* const copy = obj2; // сюда кладется ссылка на obj2
copy.a = 10; // модифицируя копию, мы изменяем сам объект (называется "передача по ссылке")

console.log(copy);
console.log(obj2);
 */
// в объектах передается не сама структура объекта, а ссылка на объект



// Но как скопировать объект (массивов и т.д.)?
// Создаем копию объекта через "for... in"

// function copy (mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//       objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

/* const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; // в этом случае "c.x" поменялось в двух случаях, т.к. мы создали поверхностную копию

console.log(newNumbers); // в копии значение ключа "a" поменялось на 10
console.log(numbers);// а в оригинале не поменялось
 */


// второй способ копирования объекта - через Object.assign():

// const add = {
//   d: 17,
//   e: 20
// };
// попробуем соединить объекты "numbers" и "add"
// console.log(Object.assign(numbers, add)); // первым аргументом - объект,
// в который помещаем, а вторым - тот,
// который помещаем в первый

// таким же образом можно создать новый объект: в этом случае первым аргументом делаем пустой объект:
// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add); // здесь "d" не меняется
// console.log(clone); // а здесь меняется


// // Создание копии массива:
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'daffcfdcfc';
// console.log(newArray);
// console.log(oldArray);


// Использование оператора разворота (spread) - новый вариант создания копии объектов:
// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

//       console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// num = [2, 5, 7];

// log(...num); // с помощью spread, функция запустится не с массивом, а с тремя отдельными сущностями


// еще один способ создания поверхностных копий объектов
// const array1 = ["a", "b"];

// const newArray2 = [...array1];

// const q = {
//   one: 1,
//   two: 2
// };

// const newObj = {...q};











// ЛЕКЦИЯ 23 " ОСНОВЫ ООП, прототипно-ориентированное наследование"

// let str1 = "some";
// let strObj = new String(str1);

// console.log(typeof(str1));
// console.log(typeof(strObj));


// console.dir([1,2,3]);

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function () {
//     console.log("Hello");
//   }
// };

// const john = Object.create(soldier); // создаем новый объект john, который будет наследоваться от soldier

// const john = {
//   health: 100
// };

// нам нужно сделать так, чтобы john наследовал все свойства soldier,
// но оставлял свои индивидуальные свойства (например, здоровье)

// устаревший формат (пока еще встречается, но лучше не использовать в новых проектах):
// john.__proto__ = soldier;

// Новый формат - object.create, object.getPrototypeOf, object.setPrototypeOf:
// Object.setPrototypeOf(john, soldier);// первый аргумент - кому назначаем прототип,
// второй - объект, прототип которого устанавливаем
// Установили прототип для john от soldier

// console.log(john.armor);
// john.sayHello();







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
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// 2)
// console.log(typeof(5 + '')); // при сложении со строкой получается строка

// const number = 5;

// console.log("https://vk.com/catalog/" + number);

// const fontSize = 26 + 'px';


// To number:
// 1)
// console.log(typeof(Number('5')));

// 2) (унарный плюс)
// console.log(typeof(+'5'));

// 3)
// console.log(typeof(parseInt("15px", 10)));


// let answ = +prompt("Hello", "");
// всё, что мы получаем от пользователя, всегда типа данных "строка"


// To boolean:
// 0, '', null, undefined, NaN; // это всё false. Всё остальное в JS - это true (пустые массивы, строки и т.д.)

// 1)
// let switcher = null;
// if (switcher) {
//   console.log('Working...');
// }

// switcher = 1;
// if (switcher) {
//   console.log('Working...');
// }

// // 2)
// console.log(typeof(Boolean('5')));

// // 3)
// console.log(typeof(!!"4444")); // !! - делают boolean












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
// console.log([] + 1 + 2);
// Ответ: 12

// (5)
// Что выведет этот код: alert( "1"[0] )?
// alert( "1"[0]);
// Ответ: 1

// (6)
// Чему равно 2 && 1 && null && 0 && undefined ?

// console.log(2 && 1 && null && 0 && undefined); // "И" запинается на лжи
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
// const aaa = [1, 2, 3];
// const bbb = [1, 2, 3];

// console.log(aaa == bbb);
// Ответ: нет, не равны

// (10)
// Что выведет этот код: alert( +"Infinity" );?
// alert( +"Infinity");
// Ответ: Infinity (число)

// (11)
// Верно ли сравнение: "Ёжик" > "яблоко"?
// console.log("Ёжик" > "яблоко");
// Ответ: нет, false

// (12)
// Чему равно 0 || "" || 2 || undefined || true || falsе?
// console.log(0 || "" || 2 || undefined || true || falsе); // "ИЛИ" запинается на правде
// Ответ: 2






// ЛЕКЦИЯ 31 "СОБЫТИЯ И ИХ ОБРАБОТЧИКИ"
// События - это сигнал от браузера о том, что что-то на странице произошло









// МОДАЛЬНОЕ ОКНО С ФОРМОЙ

 // const modalTrigger = document.querySelectorAll('[data-modal]');
 // const modal = document.querySelector('.modal');

 // вариант через toggle:

 // modalTrigger.addEventListener('click', () => {
 //     // modal.classList.add('show');
 //     // modal.classList.remove('hide');
 //     modal.classList.toggle('show');
 //     document.body.style.overflow = 'hidden';
 // });

 // modalCloseBtn.addEventListener('click', () => {
 //     // modal.classList.add('hide');
 //     // modal.classList.remove('show');
 //     modal.classList.toggle('show');
 //     document.body.style.overflow = '';
 // });

 // function openModal() {
 //     modal.classList.add('show');
 //     modal.classList.remove('hide');
 //     document.body.style.overflow = 'hidden';
 //     clearInterval(modalTimerId);
 // }
 //
 // modalTrigger.forEach(btn => {
 //         btn.addEventListener('click', openModal);
 // });
 //
 // function closeModal() {
 //     modal.classList.add('hide');
 //     modal.classList.remove('show');
 //     document.body.style.overflow = '';
 // }
 //
 //
 //
 // modal.addEventListener('click', (e) => {
 //     if (e.target === modal || e.target.getAttribute('data-close') == '') {
 //         closeModal();
 //     }
 // });
 //
 //
 // document.addEventListener('keydown', (e) => {
 //     if (e.code === "Escape" && modal.classList.contains('show')) {
 //         closeModal();
 //     }
 // });
 //
 //
 // const modalTimerId = setTimeout(openModal, 50000);
 //
 // function showModalByScroll() {
 //     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
 //         openModal();
 //         window.removeEventListener('scroll', showModalByScroll);
 //     }
 // }
 //
 // window.addEventListener('scroll', showModalByScroll);

 //  {once: true}  // чтобы наше событие выполнилось только один раз











// ЛЕКЦИЯ 35 "Async, defer, динамические скрипты"

// В HTML:
// <body>
//   <script defer src="hs/script.js"></script>
//   <p>Hello world</p>
//   <p>Seond message</p>
// </body>

// В JS:
// const p = document.querySelectorAll('p');
// console.log(p);

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



// function loadScript(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.async = false; // скрипты ниже будут выполняться друг за другом
//     document.body.append(script);
// }

// loadScript("js/test.js");
// loadScript("js/some.js");










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
		// console.log(now.setHours(18));
		// console.log(now);

		// браузер ориентируется на локальную дату, а консоль программная - на UTC

		// const now = new Date('2020-05-01'); //(1)
		// new Date.parse('2020-05-01'); // (2)
		// (1) и (2) - это то же самое



		// let start = new Date();

		// for (let i = 0; i < 100000; i++) {
		//   let some = i ** 3;
		// }

		// let end = new Date();

		// alert(`Цикл отработал за ${end - start} миллисекунд`)










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


// const ivan = new User('Ivan', 28); // внутри переменной теперь не функция, а объект;
// с помощью new создаем новый объект
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


// Используем классы для карточек

	 // class MenuCard {
	 //     constructor(src, alt, title, descr, price, parentSelector, ...classes) {
	 //         this.src = src;
	 //         this.alt = alt;
	 //         this.title = title;
	 //         this.descr = descr;
	 //         this.price = price;
	 //         this.classes = classes;
	 //         this.parent = document.querySelector(parentSelector);
	 //         this.transfer = 27;
	 //         this.changeToUAH();
	 //     }
	 //
	 //     changeToUAH() {
	 //         this.price = this.price * this.transfer;
	 //     }
	 //
	 //     render() {
	 //         const element = document.createElement('div');
	 //         if (this.classes.length === 0) {
	 //             this.element = 'menu__item';
	 //             element.classList.add(this.element);
	 //         } else {
	 //             this.classes.forEach(className => element.classList.add(className));
	 //         }
	 //
	 //         element.innerHTML = `
	 //             <img src=${this.src} alt=${this.alt}>
	 //             <h3 class="menu__item-subtitle">${this.title}</h3>
	 //             <div class="menu__item-descr">${this.descr}</div>
	 //             <div class="menu__item-divider"></div>
	 //             <div class="menu__item-price">
	 //                 <div class="menu__item-cost">Цена:</div>
	 //                 <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
	 //             </div>
	 //         `;
	 //         this.parent.append(element);
	 //     }
	 // }

	 // можно использовать такой синтаксис:
	 // const div = new MenuCard();
	 // div.render();

	 // другой способ (мы этот объект нигде не сохраняем как переменную, испоьлзуем один раз):
	 // new MenuCard(
	 //     "img/tabs/vegy.jpg",
	 //     "vegy",
	 //     'Меню "Фитнес"',
	 //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
	 //     9,
	 //     '.menu .container',
	 //     'menu__item'
	 // ).render();
	 //
	 // new MenuCard(
	 //     "img/tabs/elite.jpg",
	 //     "elite",
	 //     'Меню “Премиум”',
	 //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
	 //     14,
	 //     '.menu .container',
	 //     'menu__item'
	 // ).render();
	 //
	 // new MenuCard(
	 //     "img/tabs/post.jpg",
	 //     "post",
	 //     'Меню "Постное"',
	 //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
	 //     21,
	 //     '.menu .container',
	 //     'menu__item'
	 // ).render();
	 //
	 // new MenuCard(
	 //     "img/tabs/balance.jpg",
	 //     "balance",
	 //     'Меню "Сбалансированное"',
	 //     'Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.',
	 //     11,
	 //     '.menu .container',
	 //     'menu__item'
	 // ).render();




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









// ЛЕКЦИЯ 52 "AJAX И ОБЩЕНИЕ С СЕРВЕРОМ"

// 1) Самый первый вариент AJAX - Xmlhttprequest

// const inputRub = document.querySelector('#rub'),
//       inputUsd = document.querySelector('#usd');

	// request.open(method, url, async, login, pass); // этот метод собирает настройки,
	// которые помогут в будущем сделать запрос
	// первый аргумент - метод (get, post), второй - путь к серверу (url),
	// третий - асинхронность (асинхронный код - тот, который не блокирует остальной).
	// Если вдруг нужно сделать запрос не асинхронным
	// (чтобы сперва получили данные с сервера, а после отрабатывался остальной код), то 3-им аргументом ставим false
	// AJAX запросы по умолчанию являются синхронным кодом.
	// Некоторые запросы мы можем делать только имея логин и пароль.

// inputRub.addEventListener('input', () => {
// 	// теперь нужно сделать запрос на сервер
// 	const request = new XMLHttpRequest(); // конструктор, который создает новый объект
// 	request.open('GET', 'js/current.json'); // настройки

// 	// указываем, что именно мы передаем на сервер (или получаем):
// 	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// 	// если POST:
// 	// request.send(body);
// 	request.send(); // отправляем запрос

// 	request.addEventListener('load', () => {
// 		// это событие отслеживает готовность нашего запроса в текущий момент
// 		if (request.status === 200) {
// 			console.log(request.response);
// 			const data = JSON.parse(request.response);
// 			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); // сколько количество наков после точки - 2
// 		} else {
// 			inputUsd.value = "Что-то пошло не так";
// 		}

// 	});

	// Свойства объекта XMLHttpRequest:
	// status - статус запроса (404 и т.д.)
	// statusText - текстовое описание ответа от сервера
	// response - ответ от сервера (здесь лежит ответ, который задал нам бекенд разработчик)
	// readyState - текущее состояние объекта










	// ЛЕКЦИЯ 53 "РЕАЛИЗАЦИЯ СКРИПТА ОТПРАВКИ ДАННЫХ НА СЕРВЕР"

	// const forms = document.querySelectorAll('form');

	//     const message = {
	//         loading: 'Загрузка...',
	//         success: 'Спасибо! Скоро мы с вами свяжемся',
	//         failure: 'Что-то пошло не так...'
	//     };

	//     // осталось подвязать под каждую форму функцию postData
	//     forms.forEach(item => {
	//         postData(item);
	//     });

			// Но куда помещать это сообщение?
			// Очень частая практика: при отправке запроса мы создаём блок на странице,
			// куда выводим сообщение, картинку и т.д., и чаще всего он добавляется к форме

			// function postData(form) {
			//     form.addEventListener('submit', (e) => {
			//         e.preventDefault(); // отменяем стандартное поведение браузера при submit, т.е. перезагрузку страницы
			//         // надо всегда ставить такую команду в AJAX-запросах, чтобы не было казусов

			//         let statusMessage = document.createElement('div');
			//         statusMessage.classList.add('status');
			//         statusMessage.textContent = message.loading;
			//         form.append(statusMessage);


			//         const request = new XMLHttpRequest();
			//         request.open('POST', 'server.php');

			//         // можно было бы взять форму, все инпуты, взять их value,
			//         // перебрать, сформировать объекты, но это очень муторно. Для этого всего есть механизмы
			//         // Самый простой способ - объект formData .
			//         // Не всегда нужно передавать в формате JSON. Есть всего2 формата:
			//         // (1) formData
			//         // (2) JSON
			//         // В каком формате будем передавать, можно обговаривать
										// уже непосредственно с бекендером, с которым работаем

			//         // formData - объект, помогающий с определенной формы быстро сформировать все данные,
			//         // которые заполнил пользователь (также в формате ключ-значение)

			//         // заголовок запроса "что именно приходит на сервер?":
			//         // request.setRequestHeader('Content-type', 'multipart/form-data');
			//         // при отправке XMLHttp запроса через formData заголовок не нужен!!!

			//         const formData = new FormData(form); // внутрь помещаем форму, из которой нужно собрать данные
			//         // !!! Важный момент!!! если мы понимаем, что данные будут отправляться на сервер,
			//         // то в верстке в инпуте ВСЕГДА нужно указывать атрибут name (например, name="name").
			//         // Иначе formData не сможет найти этот инпут, взять из него value и сформировать правильно объект

			//         request.send(formData); // отправляем данные на сервер;
								// в скобочках уже есть body, и это объект formData
			//         request.addEventListener('load', () => { // отслеживаем конечую загрузку нашего запроса
			//             if (request.status === 200) {
			//                 console.log(request.response);
			//                 statusMessage.textContent = message.success;
			//                 form.reset(); //  очищаем форму после отправки на сервер
			//                 setTimeout(() => {
			//                     statusMessage.remove();
			//                 }, 2000); // убираем сообщение о статусе через 2 секунды
			//                 setTimeout(() => {
			//                     closeModal();
			//                 }, 4000); // модальное окно закрывается через 4 секунды
			//             } else {
			//                 statusMessage.textContent = message.failure;
			//             }
			//         });
			//     });
			// }

			// при работе на локальном сервере надо каждый раз (после каких-либо изменений) сбрасывать cash,
			// чтобы все изменения применились, так как сервер запоминает старые изменения,
			// чтобы каждый раз их не подгружать (это и называется cash)
			// Чтобы сбросить кэш, нужно использовать комбинацию клавиш: shift + F5

			// При отправке формы в консоли получаем array(0){}, это значит, что данные на сервер дошли (вроде как).
			// Но сервер ответил пустыми данными. Это значит, что даные до него не дошли.
			// Данные не дошли из-за заголовка (setRequestHeader).
			// !!!ВНИМАНИЕ! Когда мы используем связку "XMLHttpRequest + formData",
			// то заголовок устанавливать не нунжно, он устанавливается автоматически!!
			// Именно из-за этой проблемы у нас произошла ошибка при отправке данных.


			// Если сервер принимает данные не в обычном формате, а в JSON, то нужно немного переделать код
			// PHP нативно не умеет работать с типом данных JSON. Чаще всего такие данные
			// отправляются на сервера с использованием, например Node.js.
			// Но с таким типом данных можно работать, сделав некоторые манипуляции в php


			// Отправка через JSON:
		//   const forms = document.querySelectorAll('form');

		// const message = {
		//     loading: 'Загрузка...',
		//     success: 'Спасибо! Скоро мы с вами свяжемся',
		//     failure: 'Что-то пошло не так...'
		// };


		// forms.forEach(item => {
		//     postData(item);
		// });

		// function postData(form) {
		//     form.addEventListener('submit', (e) => {
		//         e.preventDefault();

		//         let statusMessage = document.createElement('div');
		//         statusMessage.classList.add('status');
		//         statusMessage.textContent = message.loading;
		//         form.append(statusMessage);


		//         const request = new XMLHttpRequest();
		//         request.open('POST', 'server.php');

		//         request.setRequestHeader('Content-type', 'application/json');


		//         const formData = new FormData(form);

		//         const object = {};
		//         formData.forEach(function(value, key){
		//             object[key] = value;
		//         });
		//         const json = JSON.stringify(object);

		//         request.send(json);
		//         request.addEventListener('load', () => {
		//             if (request.status === 200) {
		//                 console.log(request.response);
		//                 statusMessage.textContent = message.success;
		//                 form.reset();
		//                 setTimeout(() => {
		//                     statusMessage.remove();
		//                 }, 2000);
		//                 setTimeout(() => {
		//                     closeModal();
		//                 }, 4000);
		//             } else {
		//                 statusMessage.textContent = message.failure;
		//             }
		//         });
		//     });
		// }










// ЛЕКЦИЯ 55 "PROMISE (ES6)"^
// Промисы:
		// когда мы создаем промисы, то коллбек функция обычно принимает 2 аргумента - resolve и reject

		// console.log('Запрос данных...');

		// const req = new Promise(function(resolve, reject) {
		//     setTimeout(() => {
		//         console.log('Подготовка данных...');

		//         const product = {
		//             name: 'TV',
		//             price: 2000
		//         };
		//         resolve(product);
		//     }, 2000);
		// });

		// // then нужен для того, чтобы отрабатывать положительный результат (resolve)
		// // catch нужен для того, чтобы отрабатывать reject
		// // finally нужен, чтобы показать какие действия произвести при любом исходе
		// req.then((product) => {
		//     return new Promise((resolve, reject) => {
		//         setTimeout(() => {
		//             product.status = 'order';
		//             resolve(product);
		//         }, 2000);
		//     }).then(data => {
		//         data.modify = true;
		//         return data;
		//     }).then((data) => {
		//         console.log(data);
		//     }).catch(() => {
		//         console.error('Произошла ошибка');
		//     }).finally(() => {
		//         console.log('Finally');
		//     });
		// });


	//   const test = time => {
	//     return new Promise(resolve =>{
	//         setTimeout(() => resolve(), time);
	//     });
	// };

	// test(1000).then(() => console.log('1000 ms'));
	// test(2000).then(() => console.log('2000 ms'));

	// первый метод промиса - all. Он ждет выполнение всех промисов, и уже потом что-то делает:
	// Promise.all([test(1000), test(2000)]).then(() => {
	//     console.log('All');
	// });

	// получаем All - значит, оба промиса выполнились

	// второй метод промиса - race. Выполняется, когда самый первый промис отработал:
	// Promise.race([test(1000), test(2000)]).then(() => {
	//     console.log('All');
	// });
















		// ЛЕКЦИЯ 56 "FETCH API"

		// Fetch API - знание promise + общение с сервером
		// API (application programming interface) - это набор данных и возможностей,
		// которые предоставляет нам какое-то готовое решение.
		// Самый банальный API, который мы уже встречали - DOM API - это различные методы,
		// которые позволяют нам работать с элементами на странице

		// https://jsonplaceholder.typicode.com/

		// fetch('https://jsonplaceholder.typicode.com/todos/1') // URL, на который будем посылать запрос
		// // Если больше никаких параметров не указывать, то это будет GET запрос
		// // Раньше мы использовали json.parse, чтобы отформатировать полученные данные,
		// // но у jsonplaceholder уже есть встроенные механизмы
		// .then(response => response.json()) // этот метод форматирует json в обычный
		// // javascript объект, который дальше можно использовать;
		// // эта команда возвращает нам промис
		// .then(json => console.log(json));



		// Что касается POST запроса:
		// URL оставляем такой же, и вторым аргументом - объект с настройками, которые мы будем задавать.
		// Этот объект содержит много различных свойств, но самые обязательные только 2:
		// (1) метод, (2) body, которое мы будем отправлять

		// fetch('https://jsonplaceholder.typicode.com/posts', {
		//     method: "POST",
		//     // сюда можем поместить как строку, так и объект;
		//     // форматируем его в JSON формат, и отправим его при помощи fetch;
		//     // желательно указывать также и заголовки, которые будут определять, какой контент мы отправляем
		//     body: JSON.stringify({name: 'Alex'}),
		//     headers: {
		//         'Content-type': 'application/json'
		//     }
		//     // теперь нужно выбрать url, куда будем все это отправлять    })
		// })
		// .then(response => response.json())
		// .then(json => console.log(json));









		// Отправка запроса formData (обычный объект JS) через Fetch

		// function postData(form) {
		//         form.addEventListener('submit', (e) => {
		//             e.preventDefault(); // отменяем стандартное поведение браузера при submit, т.е. перезагрузку страницы
		//             // надо всегда ставить такую команду в AJAX-запросах, чтобы не было казусов

		//             let statusMessage = document.createElement('img');
		//             statusMessage.src = message.loading;
		//             statusMessage.style.cssText = `
		//                 display: block;
		//                 margin: 0 auto;
		//             `;

		//             form.insertAdjacentElement('afterend', statusMessage);


		//             const formData = new FormData(form);

		//             // const object = {};
		//             // formData.forEach(function(value, key){
		//             //     object[key] = value;
		//             // }); // когда мы получили обычный объект, а не Data,
													// то уже на нём можем использовать ковертацию JSON
		//             // const json = JSON.stringify(object);


		//             fetch('server.php', {
		//                 method: "POST",
		//                 // headers: {
		//                 //     'Content-type': 'application/json'
		//                 // },
		//                 body: formData
		//             }).then(data => data.text())
		//             .then(data => {
		//                 console.log(data);
		//                 showThanksModal(message.success);
		//                 statusMessage.remove();
		//             }).catch(() => {
		//                 showThanksModal(message.failure);
		//             }).finally(() => {
		//                 form.reset();
		//             });

		//         });
		//     }


		//     function showThanksModal(message) {
		//         const prevModalDialog = document.querySelector('.modal__dialog');
		//         prevModalDialog.classList.add('hide');
		//         openModal();

		//         const thanksModal = document.createElement('div');
		//         thanksModal.classList.add('modal__dialog');
		//         thanksModal.innerHTML = `
		//             <div class="modal__content">
		//                 <div class="modal__close" data-close>×</div>
		//                 <div class="modal__title">${message}</div>
		//             </div>
		//         `;

		//         document.querySelector('.modal').append(thanksModal);
		//         setTimeout(() => {
		//             thanksModal.remove();
		//             prevModalDialog.classList.add('show');
		//             prevModalDialog.classList.remove('hide');
		//             closeModal();
		//         }, 4000);
		//     }


		//     // Отправка запроса в формате JSON через Fetch

		//     function postData(form) {
		//             form.addEventListener('submit', (e) => {
		//                 e.preventDefault(); // отменяем стандартное поведение браузера при submit,
												// т.е. перезагрузку страницы
		//                 // надо всегда ставить такую команду в AJAX-запросах, чтобы не было казусов

		//                 let statusMessage = document.createElement('img');
		//                 statusMessage.src = message.loading;
		//                 statusMessage.style.cssText = `
		//                     display: block;
		//                     margin: 0 auto;
		//                 `;

		//                 form.insertAdjacentElement('afterend', statusMessage);


		//                 const formData = new FormData(form);

		//                 const object = {};
		//                 formData.forEach(function(value, key){
		//                     object[key] = value;
		//                 });




		//                 fetch('server.php', {
		//                     method: "POST",
		//                     headers: {
		//                         'Content-type': 'application/json'
		//                     },
		//                     body: JSON.stringify(object)
		//                 }).then(data => data.text())
		//                 .then(data => {
		//                     console.log(data);
		//                     showThanksModal(message.success);
		//                     statusMessage.remove();
		//                 }).catch(() => {
		//                     showThanksModal(message.failure);
		//                 }).finally(() => {
		//                     form.reset();
		//                 });

		//             });
		//         }


		//         function showThanksModal(message) {
		//             const prevModalDialog = document.querySelector('.modal__dialog');
		//             prevModalDialog.classList.add('hide');
		//             openModal();

		//             const thanksModal = document.createElement('div');
		//             thanksModal.classList.add('modal__dialog');
		//             thanksModal.innerHTML = `
		//                 <div class="modal__content">
		//                     <div class="modal__close" data-close>×</div>
		//                     <div class="modal__title">${message}</div>
		//                 </div>
		//             `;

		//             document.querySelector('.modal').append(thanksModal);
		//             setTimeout(() => {
		//                 thanksModal.remove();
		//                 prevModalDialog.classList.add('show');
		//                 prevModalDialog.classList.remove('hide');
		//                 closeModal();
		//             }, 4000);
		//         }











// ЛЕКЦИЯ 57 "МЕТОДЫ ПЕРЕБОРА МАССИВОВ"

// Метод forEach никогда не возвращает нам новый массив.
// Он просто перебрает какой-то массив.


// Другие методы (они в отличие от forEach ВОЗАРАЩАЮТ НОВЫЙ МАССИВ с примененной фильтрацией):


// (1) filter - фильтрует элементы внутри массива

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// // получаем имена, длина который меньше 5 символов:
// const shortNames = names.filter(function(name) { // name - это каждый отдельный элемент, находящийся внутри массива
// 	return name.length < 5;
// });

// console.log(shortNames);



// (2) map - позволяет взять исходный массив и изменить каждвй элемент внутри него

// const answers = ['IvAn', 'AnnA', 'Hello'];
// const result = answers.map(item => item.toLocaleLowerCase());
// console.log(result);

// Второй вариант, где оставим изначальную переменную (но лучше создавать отдельную переменную):
// let answers = ['IvAn', 'AnnA', 'Hello'];
// answers = answers.map(item => item.toLocaleLowerCase());
// console.log(answers);


// (3) every/some
// some берет массив, перебирает, и если хотя бы какой-то один элемент подходит по условию,
// то мы получаем true или false

// const some = [4, 5, 7];
// console.log(some.some(item => typeof(item) === 'number')); // some - какой-либо элемент из массива

// console.log(some.every(item => typeof(item) === 'number')); // every - каждый элемент массива



// (4) reduce - "схлопывание" элементов массива

// const array2 = [4, 5, 1, 3, 2, 6];

// // Два аргумента, которые подставляются автоматически
// // Первый аргумент - sum - сумма всех элементов аргумента
// // current - текущая сумма, т.е.:
// // Изначально sum = 0, но при каждом запуске функции сумма увеличивается засчет перехода к следующему числу.
// // На первом "заходе" sum - 0, current = 4, а уже на втором заходе sum - 4, current 5, и так далее.
// const res = array2.reduce((sum, current) => sum + current, 3);
// // метод reduce может принимать ещё один аргумент - начальное значение. В этом случае вместо sum будет 3
// console.log(res);


// Как работает reduce со строками?
// const array2 = ['apple', 'pear', 'plum'];
// // const res = array2.reduce((sum, current) => sum + ', ' + current); // первый способ - через сложение строк
// // второй способ - через интерполяцию
// const res = array2.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);



// Как можно применить на практике? Пример:
// Например, нам нужно вытянуть имена людей.
// const object = {
// 	ivan: 'person',
// 	ann: 'person',
// 	dog: 'animal',
// 	cat: 'animal'
// };

// // const newArr = Object.entries(object); // получается массив, который содержит массивы
// const newArr = Object.entries(object)
// .filter(item => item[1] === 'person')// выводим только те массивы, которые содержат 'person
// .map(item => item[0]); // получаем новый масив, где только имена
// //теперь нужно получить имена (первые элементы)
// console.log(newArr);




// ЛЕКЦИЯ 59 "пОЛУЧЕНИЕ ДАННЫХ С СЕРВЕРА. ASYNC/AWAIT (ES8)"

// первый вариант формирование карточек с данными с сервера
// getResource('http://localhost:3000/menu')
		//     .then(data => {
		//         data.forEach(({img, altimg, title, descr, price} )=> {
		//             // вызываем конструктор MenuCard
		//             // последним аргументом указываем родителя, куда это все помещаем
		//             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
		//         });
		//     });


// второй вариант (больше подходит для того, чтобы что-то построить один раз).
// он не создает классы, а формирует верстку "на лету"
// getResource('http://localhost:3000/menu')
//             .then(data => createCard(data));
//
//         function createCard(data) {
//             data.forEach(({img, altimg, title, descr, price}) => {
//                 const element = document.createElement('div');
//
//                 element.classList.add('menu__item');
//                 element.innerHTML = `
//                     <img src=${img} alt=${altimg}>
//                     <h3 class="menu__item-subtitle">${title}</h3>
//                     <div class="menu__item-descr">${descr}</div>
//                     <div class="menu__item-divider"></div>
//                     <div class="menu__item-price">
//                         <div class="menu__item-cost">Цена:</div>
//                         <div class="menu__item-total"><span>${price}</span> грн/день</div>
//                     </div>
//                 `;
//
//                 document.querySelector('.menu .container').append(element);
//             });
//         }









// ЛЕКЦИЯ 60 "ЧТО ТАКОЕ БИБЛИОТЕКИ. БИБЛИОТЕКА AXIOS"

// Axios - библиотека, помогающая работать с запросами


// Через Fetch:

// class MenuCard {
//         constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//             this.src = src;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.price = price;
//             this.classes = classes;
//             this.parent = document.querySelector(parentSelector);
//             this.transfer = 27;
//             this.changeToUAH();
//         }
//
//         changeToUAH() {
//             this.price = this.price * this.transfer;
//         }
//
//         render() {
//             const element = document.createElement('div');
//             if (this.classes.length === 0) {
//                 this.element = 'menu__item';
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }
//
//             element.innerHTML = `
//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.title}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>
//             `;
//             this.parent.append(element);
//         }
//     }
//
//     const getResource = async (url) => { // res - это промис
//         const res = await fetch(url);
//
//         // свойства promise, которые скажут, что произошла ошибка при отправке запроса (reject).
//         // т.к. fetch покажет ошибку, только если отсутствует соединение
//         if (!res.ok) { // если результат res не ok
//            throw new Error(`Could not fetch ${url}, status: ${res.status}`); // "выкидываем" ошибку
//         }
//
//         return await res.json();
//     };
//
//     getResource('http://localhost:3000/menu')
//         .then(data => {
//             data.forEach(({img, altimg, title, descr, price} )=> {
//                 // вызываем конструктор MenuCard
//                 // последним аргументом указываем родителя, куда это все помещаем
//                 new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
//             });
//         });





// Через Anxios:

// function bindPostData(form) {
//   form.addEventListener('submit', (e) => {
//       e.preventDefault(); // отменяем стандартное поведение браузера при submit, т.е. перезагрузку страницы
//       // надо всегда ставить такую команду в AJAX-запросах, чтобы не было казусов

//       let statusMessage = document.createElement('img');
//       statusMessage.src = message.loading;
//       statusMessage.style.cssText = `
//           display: block;
//           margin: 0 auto;
//       `;

//       form.insertAdjacentElement('afterend', statusMessage);


//       const formData = new FormData(form);

//       const json = JSON.stringify(Object.fromEntries(formData.entries()));
//       // entries берет каждое свойство и формирует из него массив
//       // обратный метод - fromEntries


//       postData('http://localhost:3000/requests', json)
//       .then(data => {
//           console.log(data);
//           showThanksModal(message.success);
//           statusMessage.remove();
//       }).catch(() => {
//           showThanksModal(message.failure);
//       }).finally(() => {
//           form.reset();
//       });

//   });











// ЛЕКЦИЯ 61 "СОЗДАЕМ СЛАЙДЕР НА САЙТЕ, ВАРИАНТ 1"

// const slides = document.querySelectorAll('.offer__slide');
// const prev = document.querySelector('.offer__slider-prev');
// const next = document.querySelector('.offer__slider-next');
// const total = document.querySelector('#total');
// const current = document.querySelector('#current');
// let slideIndex = 1;

// showSlides(slideIndex);

// if (slides.length < 10) {
//     total.textContent = `0${slides.length}`;
// } else {
//     total.textContent = slides.length;
// }

// function showSlides(n) {
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }

//     slides.forEach(item => item.style.display = 'none');

//     slides[slideIndex - 1].style.display = 'block';

//     if (slides.length < 10) {
//         current.textContent = `0${slideIndex}`;
//     } else {
//         current.textContent = slideIndex;
//     }
// }

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// prev.addEventListener('click', () => {
//     plusSlides(-1);
// });

// next.addEventListener('click', () => {
//     plusSlides(1);
// });




// ВТОРОЙ ВАРИАНТ СЛАЙДЕРА (БИБЛИОТЕКА SLICK):
// const slides = document.querySelectorAll('.offer__slide');
//     const slider = document.querySelector('.offer__slider');
//     const prev = document.querySelector('.offer__slider-prev');
//     const next = document.querySelector('.offer__slider-next');
//     const total = document.querySelector('#total');
//     const current = document.querySelector('#current');
//     let slideIndex = 1; // для первого варианта
//
//     const slidesWrapper = document.querySelector('.offer__slider-wrapper');
//     const slidesField = document.querySelector('.offer__slider-inner');
//     const width = window.getComputedStyle(slidesWrapper).width;
//     let offset = 0; // для второго варианта, чтобы измерять количество слайдов и текущий слайд

// if (slides.length < 10) {
//         total.textContent = `0${slides.length}`;
//         current.textContent = `0${slideIndex}`;
//     } else {
//         total.textContent = slides.length;
//         current.textContent = slideIndex;
//     }
//
//     slidesField.style.width = 100 * slides.length + '%';
//     slidesField.style.display ='flex';
//     slidesField.style.transition = '0.5s all';
//
//     slidesWrapper.style.overflow = 'hidden';
//
//     slides.forEach(slide => {
//         slide.style.width = width;
//     });
//
//     next.addEventListener('click', () => {
//         if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
//             offset = 0;
//         } else {
//             offset += +width.slice(0, width.length - 2);
//         }
//
//         slidesField.style.transform = `translateX(-${offset}px)`;
//
//         if (slideIndex == slides.length) {
//             slideIndex = 1;
//         } else {
//             slideIndex++;
//         }
//
//         if (slides.length < 10) {
//             current.textContent = `0${slideIndex}`;
//         } else {
//             current.textContent = slideIndex;
//         }
//     });
//
//
//
//     prev.addEventListener('click', () => {
//         if (offset == 0) {
//             offset = +width.slice(0, width.length - 2) * (slides.length - 1);
//         } else {
//             offset -= +width.slice(0, width.length - 2);
//         }
//
//         slidesField.style.transform = `translateX(-${offset}px)`;
//
//         if (slideIndex == 1) {
//             slideIndex = slides.length;
//         } else {
//             slideIndex--;
//         }
//
//         if (slides.length < 10) {
//             current.textContent = `0${slideIndex}`;
//         } else {
//             current.textContent = slideIndex;
//         }
//     });












// ЛЕКЦИЯ 64 "КАК СОХРАНИТЬ ДАННЫЕ БЕЗ БД. РАБОТА С LocalStorage"

// LocalStorage можно использовать:
// если человек устанавливает настройки сайта, и при повторном заходе на сайт
// все настройки останутся на местах (или данные формы, место просмотра видео, где пользователь остановился и т.д.)
// объект localstorage находится внутри только одного домена и служит для хранения локальных данных
// у localstorage есть ограничение - максимум 5 мб данных


// чтобы записать новый ключ есть команда setItem:
// localStorage.setItem('number', 5); // первый аргумент - название ключа, второй - значение

// // вторая команда - получать данные из localstorage:
// console.log(localStorage.getItem('number'));

// // удалить ключ:
// localStorage.removeItem('number');

// console.log(localStorage.getItem('number')); // получаем null

// // 4-ая команда - clear (полностью очищаем локальное хранилище)
// localStorage.clear();


// const checkbox = document.querySelector('#checkbox'),
//       form = document.querySelector('form'),
//       change = document.querySelector('#color');

// задача: сохранить в локальных настройках чекбокс (чтобы всегда было отмечено "запомнить меня")
// и смену цвета (чтобы он тоже сохранился)

// сделаем так, что когда пользователь заходит на страницу, то идет автоиатическая проверка локалстореджа,
// и если такм есть нужный нам ключ, то переставляем галочку в позицию cheched

// if (localStorage.getItem('isChecked')) {
// 	checkbox.checked = true;
// }

// if (localStorage.getItem('bg') === 'changed') {
// 	form.style.backgroundColor = 'pink';
// }

// checkbox.addEventListener('change', () => {
// 	localStorage.setItem('isChecked', true);
// });

// change.addEventListener('click', () => {
// 	if (localStorage.getItem('bg') === 'changed') {
// 		localStorage.removeItem('bg');
// 		form.style.backgroundColor = '#fff';
// 	} else {
// 		localStorage.setItem('bg', 'changed');
// 		form.style.backgroundColor = 'pink';
// 	}
// });

// const person = {
// 	name: 'Alex',
// 	age: 25
// };

// через JSON.parse записываем в локалсторедж
// const serializedPerson = JSON.stringify(person);
// localStorage.setItem('Alex', serializedPerson);

// console.log(JSON.parse(localStorage.getItem('Alex')));

// вариант без JSON, а напрямую:
// const serializedPerson = JSON.stringify(person);
// localStorage.setItem('Alex', person);

// console.log(localStorage.getItem('Alex'));








// ЛЕКЦИЯ 65 "РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ"
// Регулярные выражения работают со строками - удаляют, заменяют части слова,
// ищут кусочки строк, ограничивают ввод определенных знаков и т.д.

// Регуляное выражение состоит из 2-ух частей - паттерн и флаги.
// Паттерн - это шаблон того, что мв ищем, удаляем и т.д.

// Регулярные выражения можно создать несколькими синтаксисами:
// (1) С помощью конструкторов:
// new RegExp('pattern', 'flags'); // им обычно никто не пользуется, т.к. есть более короткий вариант:
// /pattern/flags

// первый метод - search:
// const ans = prompt('Введите ваше имя');

// мы хотим найти все маленькие буквы "н"
// const reg = /n/ig; // шаблон того, что мы ищем
// Классические флаги:
// i - если мы хотим что-то найти вне зависимости от регистра
// g - т.е. global, пытаемся найти сразц несколько вхождений (например, все буквы, а не только первую встретившуюся)
// m - многострочный режим
// флаги можно комбинировать, например, im, igm и т.д.
// console.log(ans.search(reg)); // внутрь скобок мы помещаем то регулярное выражение, которое будем искать

// например, вводим "Ann" и получаем 1, т.к. это первая позиция, по которой мы получили результат


// Второй метод - match. Когда используем match, мы получаем массив
// console.log(ans.match(reg));

// Третий метод - replace:
// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*")); // . - точка - абсолютно все элементы попадут в строку, * - то, на что заменяем
// console.log(pass.replace(/\./g, "*")); // чтобы заменить именно точку,
// нужо ее "экранировать" (поставить слеш перед ней)
// в скобках 2 аргумента: первый - что мы заменяем, второй - на что мы изменяем.
// В первый аргумент мы можем поместить регулярное выражение


// console.log('12-34-56'.replace(/-/g, ':')); // например, мы хотим убрать все дефисы и поменять на двоеточие


// У регулярных выражений есть свои методы, например, метод test:
// test возвращает либо true, либо false. Он ищет совпадения
// const ans = prompt('Введите ваше имя');
// const reg = /n/ig;
// console.log(reg.test(ans));

// В регулярных выражениях есть классы:
// (1) \d - digit - цифры
// (2) \w - word - ищем все слова и буквы
// (3) \s - space - пробелы

// Будем находить только числа:
// const ans = prompt('Введите ваше число');
// const reg = /\d/g;
// console.log(ans.match(reg));

// Еще пример:
// const str = 'My name is R2D2';
// console.log(str.match(/\w\d\w\d/i));

// Обратные классы (не числа, не буквы, не пробелы):
// \D, \W, \S - просто пишем большой регистр, и это становится "не цифры, не буквы, не пробелы"











// ЛЕКЦИ 68 "ГЕТТЕРЫ И СЕТТЕРЫ (СВОЙСТВА ОБЪЕКТОВ)"
// Свойства объекта делятся на:
// (1) Свойства-данные (всё, что использовали до данного момента). Просто описывают объект
// (2) Свойства-аксессоры. Комплекс, позволяющий как присваивать, так и получать значения

// const person = {
//   name: "Alex",
//   age: 25,

//   get userAge() {
//     return this.age;
//   },

//   set userAge(num) {
//     this.age = num;
//   }
// };

// console.log(person.userAge = 30);
// console.log(person.userAge);

// Т.е. свойства-аксессоры - это свойства, которые мы можем получить из уже имеющихся (как fullName из name и surname),
// или присвоить (set)
// Снаружи свойство-аксессор выглядит как обычное свойство.
// В этом и заключается смысл свойств-аксессоров.
// Мы не вызываем user.fullName как функцию, а читаем как обычное свойство
// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
// 	  return `${this.name} ${this.surname}`;
//   }
// };

// console.log(user.fullName);








// ЛЕКЦИЯ 69 "ИНКАПСУЛЯЦИЯ"
// Инкапсуляция - один из принципов ООП

// Инкапсуляция - отделение и сокрытие от внешнего мира внутренностей программы;
// объект хранит свое состояние в приватном порядке; только методы объекта имеют доступ для его изменения


// Функция-конструктор:
// function User(name, age) {
// 	this.name = name;
// 	let userAge = age;

// 	this.say = function() {
// 	console.log(`Имя пользователя ${this.name}, возраст ${userAge}`);
// 	};

// 	this.getAge = function() {
// 		return userAge;
// 	};

// 	this.setAge = function(age) {
// 		if (typeof age === 'number' && age > 0 && age < 110) {
// 			userAge = age;
// 		} else {
// 			console.log('Недопустимое значение!');
// 		}
// 	};
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge());


// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());

// ivan.say();



// Классы:
// class User {
// 	constructor(name, age) {
// 		this.name = name;
// 		this._age = age;
// 	}

// 	#surname = 'Petrov'; // с помощью решетки свойство становится приватным

// 	say = () => {
// 	console.log(`Имя пользователя ${this.name} ${this.#surname}, возраст ${this._age}`);
// 	}

// 	get age() {
// 		return this._age;
// 	}

// 	set age(age) {
// 		if (typeof age === 'number' && age > 0 && age < 110) {
// 			this._age = age;
// 		} else {
// 			console.log('Недопустимое значение!');
// 		}
// 	}
// }

// const ivan = new User('Ivan', 27);
// // console.log(ivan.age);
// // ivan.age = 99;
// // console.log(ivan.age);
// console.log(ivan.surname);
// ivan.say();










// ЛЕКЦИЯ 70 "ПРИЕМ МОДУЛЬ, как и зачем его использовать"

// Два способа создания модулей:
// (1) Использование анонимной самовызывающейся функции
// const number = 1; // записываем переменную в глобальную область видимости
// (function(){
// 	let number = 2;
// 	console.log(number);
// 	console.log(number + 3);
// }()); // анонимная самовызывающаяся функция

// console.log(number);


// //(2) Испоьзование "объектного интерфейса"
// const user = (function(){
// 	const privat = function() {
// 		console.log('I am privat!');
// 	};

// 	return {
// 		sayHello: privat
// 	};
// }());

// user.sayHello();













// ЛЕКЦИЯ 72 "ES6 Modules"

// main.js:

// export let one =1;
//
// // другой вариант экспорта:
// let two = 2;
//
// export {two}; // обязательно фмгурные скобки
//
// // export function sayHi() {
// //   console.log('Hello');
// // }
//
// // экспорт по умолчанию:
// export default function sayHi() {
//   console.log('Hello');
// }
//
//
// // script.js:
//
// import {one, two} from './main';
//
// // когда импортируем файл можно его прям здесь и переименовать:
// // import {one as first} from './main';
// // console.log(first);
// console.log(`${one} and ${two}`);
//
// // Затем собираем через webpack в терминале командой "npx webpack"
//
// // Можно испортировать всё (например, тут 2 переменные и функция) и назвать это:
// import * as data from './main.js';
//
// // то, что мы экспортировали по умолчанию:
// import sayHi from './main.js';
// sayHi();


// после настройки экспортов и импортов мы можем подключить скрипт на страницу:
// <script type='module' src="./js/main.js"></script> // сперва подключ. main.js, т.к. из него идут импорты
// <script type='module' src="./js/script.js"></script>







// ЛЕКЦИЯ 73 "ФИКСИМ БАГИ"
// В скриптовых файлах новый стандарт экспорта:
// export default calc; // default - значит по умолчанию

// прежний формат:
// module.exports = calc;






// ЛЕКЦИЯ 75 "ОШИБКИ. КАК ИЗБЕЖАТЬ "ПОЛОМКИ" СВОЕГО КОДА"

// try {
// 	console.log('Normal');
// 	console.log(a);
// 	console.log('result');
// } catch(error) {
// 	console.log(error.name);
// 	console.log(error.message);
// 	console.log(error.stack);
// } finally {
	
// }

// // В случае ниже после ошибки дальнейший скрипт не выполнится
// console.log(a);
// console.log('Still normal');



// ПРИМЕР
// У нас 2 html файла - index и contacts

// try {
// 	document.querySelector('.active').addEventListener('cick', () => {
// 		console.log('click');
// 	});
// } catch(e) {
// 	console.log(e);
// }

// console.log('normal');










// ЛЕКЦИЯ 77 "СОВРЕМЕННЫЕ БИБЛИОТЕКИ И ФРЕЙМВОРКИ"


// Отличие библиотеки от фрэймворка - библиотека более гибкое понятие.
// Это готовое решение (Реакт и т.д.). В работе с библиотеками нет никаких ограничений: используем только тогда,
// когда необходимо в любой части сайта или приложения. Мы подстраиваем библиотеку под свою работу.
// С фреймворками - наоборот. Когда к проекту подключаем фрэймворк, то уже он будет диктовать все правила.
// Фреймворк - обширное понятие, которое, можно сказать, формирует целую философию, как именно создавать проект.
// Здесь уже невозможно отклоняться от какой-то структуры проекта, компонентов и т.п.
// Фрэймворк диктует правила, как работать. 

// Фреймворки создают SPA (single page application), которые работают прям в браузере




// (1) Angular
// Это javascript-фрэймворк, основанный на typesctipt.
// Typescript - это отдельный язык программирования, который компилиуется в обычный javascript.
// Пишем на typescript, и он превращается в обычный JS.
// В плане производительности, Angular считается самым тяжелым из всех 3-х фрэймворков (включая React и Vue.js).
// Он может работать немного медленнее, чем все остальные,
// т.к. в него много чего включено.
// Порог вхождения в Angular самый высокий. Разработчки Angular - Google.


// Что необходимо выучить, чтобы начать работу с Angular:
// (1) node.js
// (2) Typescript
// (3) Webpack
// (4) MVC pattern (шаблон проектирования, используется для создания приложений)
// (5) Angular




// (2) React (это уже библиотека)
// В своем синтаксисе он использует комбинацию JS и вёрстки.
// Разработчик React - Facebook
// По трендам и вакансиям реакт стоит на первом месте.

// Что нужно знать, чтобы работать с React?
// (1) JSX (препроцессор)
// (2) Babel (при помощи него компилируется JSX)
// (3) Webpack
// (4) Node.js
// (5) React




// (3) Vue.js (это фрэймворк, достаточно молодой)
// Vue довольно прост в обучении.

// Что нужно знать, чтобы работать с Vue?
// (1) Webpack
// (2) Node.js
// (3) Vue

// ИТОГ:
// 1 - Если хочется подробную документацию и поддержку, т.е. легче всего что-то загуглить,
// не заморачиваться, а просто брать и использовать инструмент,
// работать на крупномасштабных проектах, то лучше выбрать Angular.
// 2 - Если вы цените гибкость и настройку под себя, под конкретный проект, под скорость работы,
// любите писать всё на чистом JS и не боитесь смешивать его с html, то вам дорога в React.
// 3 - Если хочется относительно легко и быстро научиться писать чистый красивый код,
// использовать самый легковесный и быстрый инструмент, то нужно выбрать Vue.









// ЛЕКЦИЯ 79 "ФУНКЦИИ-ГЕНЕРАТОРЫ"
// function* generator() {
// 	yield 'S';
// 	yield 'c';
// 	yield 'r';
// 	yield 'i';
// 	yield 'p';
// 	yield 't';
// }

// const str = generator();

// console.log(str.next());

// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next().value);


// function* count(n) {
// 	for (let i = 0; i < n; i++) {
// 		yield i;
// 	}
// }

// for (let k of count(7)) {
// 	console.log(k);
// }

// const counter = count(7);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);













// ЛЕКЦИЯ 81 "Event loop, подробная работа асинхронных и синхонных операций"

// console.log(1);

// setTimeout(() => {
// 	console.log('timeout');
// }, 4000);

// setTimeout(() => {
// 	console.log('timeout_4000');
// }, 4000);

// console.log(2);

// Асинхронные операции это:
//(1) Операции, которые запускаются через какое-то определенное количество времени (setTimeout, setInterval)
// (2) Любые запросы на сервер
// (3) Коллбэки - тоже асинхронные (click, scroll submit и т.д. происходят асинхронно)

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


// Web Apis - контейнер, который служит для запоминания информации
// (например, что какая-то функция должна выполниться через такое-то количество времени)
// Call Stack - там, где в данный момент обрабатываются операции
// Callback Queue - "очередь" операций (параллельно выполняться они не могут)

// let k = 0;

// function count() {
// 	for (let i = 0; i < 1e9; i++) {
// 		k++;
// 	}	

// 	alert('done');
// }
// count();


// Что выполнится сначала?

// setTimeout(() => {
// 	console.log(1);
// }, 0);

// console.log(2);

// Ответ: 2 1

// Почему?
// 1- сперва выполнится синхронный код, т.к. асинхронный сперва попадает в Web Apis
// 2 - когда JS видит 0, он автоматически подставляет 4 миллисекунды
















// ЛЕКЦИЯ 82 "РАБОТАЕМ С ГОТОВЫМ КОДОМ (ГОТОВЫМИ РЕШЕНИЯМИ)"

// Лучше использовать те плагины и те готовые решения, которые не используют какие-то завивсимости.
// Слайдеры:
// 1 - tiny slider (на чистом JS)
// 2 - slick slider (подтягивает jQuery)
// 3 - Owl Carousel (подтягивает jQuery)
// 4 - Galleria.js 
// 5 - Fotorama
// 6 - Glide.js
// 7 - Swiper.js


// Попробуем установить tiny-slider:

// import { tns } from "./node_modules/tiny-slider/src/tiny-slider";



tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true
  });



  // Библиотека для работы с touch событиями - Hammer.js











	


	// ЗНАКОМИМСЯ С REACT.JS. СТАНДАРТЫ ES6-8

	
// Современное значение переменных:
// let a = 0;
// console.log(a);



// Использование стрелочных функций: 

// let obj = {
// 	number: 5,
// 	sayNumber: function() {
// 		say = () => {
// 			console.log(this);
// 		}
// 		say();
// 	}
// }

// obj.sayNumber();



// // Метод перебора массива filter:
// let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// let shortNames = names.filter((name) => {
// 	return name.length < 5
// });

// console.log(shortNames);



// // Метод перебора массива Map:
// let answers = ['IvAn', 'AnnA', 'HeLLo'];

// answers = answers.map((item) => item.toLowerCase());

// console.log(answers);


// // Использование интерполяции:
// console.log(`Пользователь ${name}, ${age} лет`);


// // Использование значения по умолчанию:
// function fetchData(data, count) {
// 	count = count || 0;
// 	console.log(`Данные: ${data} в количестве ${count}`);
// }

// fetchData('something');



// // REST оператор для того, чтобы сворачивать аргументы:
// function max (a, b, ...numbers) {
// 	console.log(numbers);
// }

// max(3, 4, 67, 97);


// // Spread операторы для разворота массивов:
// const arr1 = [1, 2, 5];
// const arr2 = [43, 2, 6];

// const res = Math.max(...arr1, ...arr2);
// console.log(res);


// // Spread операторы для разворота объектов:
// const avatar = 'Photo';

// const user = {
// 	name: 'default',
// 	pass: 'qwerty',
// 	rights: 'user'
// }

// const admin = {
// 	name: 'admin',
// 	pass: 'root'
// }

// // const result = Object.assign({}, user, admin);
// const result = {...user, ...admin, avatar}

// console.log(result);

// const x = 25, y = 10;

// // Как объект создавался раньше:
// const coords = {
// 	x: x,
// 	y: y,
// 	calcSq: function () {
// 		console.log(this.x*this.y);
// 	}
// }

// // Как его можно создать сейчас:
// const coords = {x, y,
// 	calcSq() {
// 		console.log(this.x*this.y);
// 	}
// }

// coords.calcSq();

// console.log(coords);



// // Деструктуризация объектов:

// const user = {
// 	name: {
// 		first: 'Sam',
// 		second: 'Smith'
// 	},
// 	pass: 'qwerty',
// 	rights: 'user'
// }

// // const userName = user.name;

// const {name:{first, second}, pass, rights} = user; // после знака присваивания - название объекта, из которого вытаискиваем данные и "отдаем" в переменные

// console.log(first, second);


// // Классический паттерн при работе с функциями:
// function  connect({
// 	host = 'localhost',
// 	port = 3000,
// 	user = 'default'} = {}) {
// 		console.log(`host: ${host}, port: ${port}, user: ${user}`);
// }

// connect();




// // Деструктуризация массивов:

// const numbers = [[3, 5], [6, 6]];

// const [[a, b], [c, d]] = numbers;

// console.log(a, b, c, d);




// const country = {
// 	name: 'England',
// 	population: 2000000,
// 	gender: {
// 		male: ['15%', '40%'], // население до 18 лет и после
// 		female: ['16%', '29%']
// 	}	
// }

// const {gender: {male: [maleUnder18, maleAdult], female: [femUnder18, femAdult]}} = country;

// console.log(maleUnder18, femAdult);