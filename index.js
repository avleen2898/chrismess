const form = document.querySelector("#chrisMovies");

const generateNewMovie = function(){
    let movie = document.createElement('li');
    let movieName = document.querySelector('#movieName').value;
    movie.textContent = movieName;
    return movie;
}
const generateNewYear = function(){
    let year = document.createElement('li');
    let movieYear = document.querySelector('#movieYear').value;
    year.textContent = movieYear;
    return year;
}
const listOfMovies = function(ev){
    ev.preventDefault();
    const list1 = document.querySelector('#displayMovies');
    const list2 = document.querySelector('#displayYears');
    list1.appendChild(generateNewMovie());
    list2.appendChild(generateNewYear());
    form.reset();
}

form.addEventListener('submit', listOfMovies);



