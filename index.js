const form = document.querySelector("#chrisMovies");

const listOfMovies = function(ev){
    ev.preventDefault();
    const list = document.querySelector('#displayMovies');
    let item = document.createElement('li');
    let movieName = document.querySelector('#movieName').value;
    let movieYear = document.querySelector('#movieYear').value;
    item.textContent = movieName + ' ' + movieYear;
    list.appendChild(item);
    form.reset();
}

form.addEventListener('submit', listOfMovies);



