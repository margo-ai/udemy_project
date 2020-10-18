
// ПРАКТИЧЕСКОЕ ЗАДАНИЕ 2

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

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

/* let lastWatchedMovie1 = prompt('Один из последних просмотренных фильмов?', '');

let movieRating1 = prompt('На сколько оцените его?', '');

let lastWatchedMovie2 = prompt('Один из последних просмотренных фильмов?', '');

let movieRating2 = prompt('На сколько оцените его?', ''); */


// МОЙ ВАРИАНТ:
/* let movies = {
  [lastWatchedMovie1]: movieRating1,
  [lastWatchedMovie2]: movieRating2 
};
console.log(movies); */

// ВАРИАНТ ЛЕКТОРА:
/* personalMovieDB.movies[lastWatchedMovie1] = movieRating1;
personalMovieDB.movies[lastWatchedMovie2] = movieRating2; */







// ПРАКТИЧЕСКОЕ ЗАДАНИЕ 2

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания




function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', '');
    let movieRating = prompt('На сколько оцените его?', '');
  
    if (lastWatchedMovie != null && movieRating != null && 
      lastWatchedMovie != '' && movieRating != '' && lastWatchedMovie.length < 50) {
      personalMovieDB.movies[lastWatchedMovie] = movieRating;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

// rememberMyFilms();


function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

// detectPersonalLevel();



// ПРАКТИЧЕСКОЕ ЗАДАНИЕ 3

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {    
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();