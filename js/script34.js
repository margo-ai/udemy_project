
// ЛЕКЦИЯ 34 "СОБЫТИЯ НА МОБИЛЬНЫХ УСТРОЙСТВАХ"

// Какие события существуют на мобтльном браузере? Их 6:

// touchstart (возникновение касания) 
// touchmove (если палец при касании начинает двигаться)
// touchend (как только палец оторвался от элемента)
// touchenter (когда ведем пальцем по экрану и наскальзываем на элемент, на который это событие повешено )
// touchleave (когда пальец продолжил скользить и ушел за пределы элемента, на котором висит событие)
// touchcancel (когда точка соприкосновения больше не регистрируется
// на поверхности, например, палец может выйти за пределы браузера)

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End');
    // });


    // touches - это свойство выдает список всех "пальцев", которые сейчас тапнули и держат пальцы на мониторе

    // targetTouches - список пальцев, которые взаимодействуют с конкреным элементом

    // changedTouches - список пальцев, которые участвуют в текущем событии

});