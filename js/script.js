'use strict';

const box = document.getElementById('box');


console.log(box);

//const btns = document.getElementsByTagName('button')[1]; 
// Чтобы записать в переменную только одну кнопку из массива, записываем так 

const btns = document.getElementsByTagName('button'); // вся коллекция кнопок
console.log(btns[0]); // один элемент


const circles = document.getElementsByClassName('circle');
console.log(circles);


const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // берёт самый первый элемент