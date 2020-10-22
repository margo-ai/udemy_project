'use strict';

const box = document.getElementById('box');


console.log(box);

//const btns = document.getElementsByTagName('button')[1]; 
// Чтобы записать в переменную только одну кнопку из массива, записываем так 

const btns = document.getElementsByTagName('button'); // вся коллекция кнопок
console.log(btns[0]); // один элемент

const circles = document.getElementsByClassName('circle');
console.log(circles);
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart'); // если ищем элемент внутри родителя,
// который уже есть в переменной, то можно не document, а именно родителя (в данном случае - wrapper)

const oneHeart = wrapper.querySelector('.heart'); // берёт самый первый элемент



// прописываем инлайн стили (которые в файле html у элемента в style)
box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


// как менять свойство всех элементов одного массива - через цикл:
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }


// другой метод - перебирающий (forEach):
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


// Методы для работы с элементами страницы
const div = document.createElement('div'); // внутри скобок - название тега, который мы создаём;
// пока существует только внутри JS, на странице его нет

// как создать текстовые узлы (элементы без оболочки тега):
const text = document.createTextNode('Тут был я');

// Обычно элементы стилизуют с помощью переключения/добавления классов (не инлайновые стили, а css стили):
div.classList.add('black'); // созданный элемент застилизован

// Как поместить элемент на страницу?
// document.body.append(div); // помещаем созданный div в конец body
wrapper.append(div); // помещаем в конец wrapper
// wrapper.prepend(div); // помещаем в начало wrapper

// hearts[0].before(div); // помещаем перед конкретно указанным элементом
// hearts[0].after(div); // помещаем после конкретно указанного элемента

// circles[0].remove(); // удалить элемент на странице

// Заменить один элемент другим:
// hearts[0].replaceWith(circles[0]); // в скобочках указываем элемент, который мы перемащаем


// УСТАРЕВШИЕ МЕТОДЫ (ЕЩЕ ВСТРЕЧАЮТСЯ В КОДЕ)
// wrapper.appendChild(div); // вставляем элемент на страницу
// wrapper.insertBefore(div, hearts[1]); // помещаем элемент перед каким-либо

// wrapper.removeChild(hearts[0]); // удаляем элемент на странице: нужен родитель в начале

// wrapper.replaceChild(circles[0], hearts[0]); // первый аргумент - что мы перемещаем, второй - вместо чего

// Как добавлять содержимое в созданный html?
div.innerHTML = "<h1>Hello world</h1>"; // помещаем любой инлайн элемент
// внутрь созданного элемента (с html структурой)

// div.textContent = "Hello"; // здесь только текст

/* textContent используем для того, чтобы получить от пользователя
либо записать на страницу только текст, innerHTML - когда предполагается работа с html структурой */


// Как вставить кусок html кода перед или после определенных элементов:
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');
// первый аргумент - , второй - тот HTML, который хотим вставить
/* beforebegin - вставка html кода перед элементов div (который указали в начале),
afterbegin - в начале нашего элемента, beforeend - перед концом элемента, afterend - после элемента */


