
// Способы добавить обработчики событий
// (1) Использовать атрибут onclick в html-верстке: 
// onclick="alert('Click')"

// (2) Использовать свойства DOM-дерева для событий
const btn = document.querySelector('button');
const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('click');
// };

// btn.onclick = function() {
//     alert('Second click');
// }; // отработает только эта функция, а предыдущая исчезнет

// Ещё один минус - события такого формата нельзя удалить в дальнейшем


// (3) Обработчик событий
// let i = 0;
const deleteElement =  (e) => { // первый аргумент "e/event" - само событие, с ним можно делать что угодно
    // e.target.remove();
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// btn.addEventListener('click', () => {
//     alert('Second click');
// });
// второе действие выполнится после первого


// Всплытие событий - это когда обработчик событий сначала
// срабатывает на самом вложенном элементе, затем на родителей, и дальше выше и выше.


// Как отменять стандартное поведение элемента в браузере?

const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    event.preventDefault(); // preventDefault - отменяет стандартное поведение браузера
    console.log(event.target);
});

// Как повесить один и тот же обработчик событий на разные элементы?
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); // 3ий аргумент - опция
});

