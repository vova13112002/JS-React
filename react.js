'use strict';
let numberofFilms;


function start() {
  numberofFilms = +prompt('Скільк фільмів ви вже подивилися?', '');

  while (numberofFilms == "" || numberofFilms == null || isNaN(numberofFilms)) {
    numberofFilms = +prompt('Скільк фільмів ви вже подивилися?', '');
  }
}
start();

const personalMovieDB = {
  count: numberofFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
function rememberMyFilms() {
  for (let i = 0; i < numberofFilms; i++) {
    const a = prompt('Один з послідніх переглянутих фільмів?', ''),
      b = prompt('На скільки оціните його?', '');
    personalMovieDB.movies[a] = b;

    console.log(personalMovieDB);
    if (a != null && b != null && a.length != 0 && b.length != 0 && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log(personalMovieDB);
    } else {
      alert('Eror');
      i--;
    }

  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Переглянуто дуже мало фільмів");

  }
  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Ви класичний глядач");

  }
  else if (personalMovieDB.count >= 30) {
    alert("Ви кіноман")

  }
  else {
    alert('Eror')
  }
}

detectPersonalLevel()

function showMyDb(hidden) {
if(!hidden){
      console.log(personalMovieDB.privat)
  }
}

const genres='';
function writeYourGenres(){
  for(let i=1;i<=3;i++){
    const g=prompt(`Ваш любий жанр под номером ${i}`);
    personalMovieDB.genres[i-1]=genre;
  }
}





console.log(personalMovieDB);
