'use scrict';

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);


// Методы classList (в методах в скаобках нужен аргумент):

// console.log(btns[0].classList.item(0)); // получаем класс, который распологается под определенным индексом

// Добавить класс:
// console.log(btns[1].classList.add('red'));

// Удалить класс:
// console.log(btns[0].classList.remove('blue'));

// Переключатель классов (если не было, то появляется, и наоборот):
// console.log(btns[0].classList.toggle('blue'));

// Можно добавлять несколько классов:
// console.log(btns[0].classList.add('red', 'kokoko'));

// Метод contains
// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});


// свойство className - устаревшее, его лучше не использовать:
// console.log(btns[0].className);


// Делигирование событий - чтобы назначить обработчик событий
// всем элементам (какой-либо группы), мы назначаем обработчик их родителю:
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Hello');
    }
});

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.matches("button.red")) {
//         console.log('Hello');
//     }
// });

// С помощью forEach
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

/* Лучше делать делегирование событий с помощью targetName (стр. 47-51),
т.к. этот вариант учитывает элементы, которые добавляются уже позже из скрипта.
А forEach такие элементы не учитывает! */