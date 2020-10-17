/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let lastWatchedMovie1 = prompt("Один из последних просмотренных фильмов?");
console.log(lastWatchedMovie1);

let movieRating1 = prompt("На сколько оцените его?");
console.log(movieRating1);

let lastWatchedMovie2 = prompt("Один из последних просмотренных фильмов?");
console.log(lastWatchedMovie2);

let movieRating2 = prompt("На сколько оцените его?");
console.log(movieRating2);

let movies = {
  [lastWatchedMovie1]: movieRating1,
  [lastWatchedMovie2]: movieRating2 
};
console.log(movies);