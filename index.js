const form = document.querySelector("#chrisMovies");

const generateNewElement = function(){
    let item = document.createElement('li');
    let movieName = document.querySelector('#movieName').value;
    let movieYear = document.querySelector('#movieYear').value;
    item.textContent = movieName + ' ' + movieYear;
    return item;
}
const listOfMovies = function(ev){
    ev.preventDefault();
    const list = document.querySelector('#displayMovies');
    list.appendChild(generateNewElement());
    form.reset();
}

form.addEventListener('submit', listOfMovies);



