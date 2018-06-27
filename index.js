const form = document.querySelector("#chrisMovies");

const renderProperty = function(value)
{
    const item = document.createElement('li');
    item.textContent = value;
    return item;
}

const handleSubmit = function(ev){
    ev.preventDefault();
    const list1 = document.querySelector('#displayMovies');
    const list2 = document.querySelector('#displayYears');
    const movieName = renderProperty(document.querySelector('#movieName').value);
    const movieYear = renderProperty(document.querySelector('#movieYear').value);

    list1.appendChild(movieName);
    list2.appendChild(movieYear);

    //Create object of form elements here 
    //Call forEach on each of the keys of the object
    form.reset();
}

form.addEventListener('submit', handleSubmit);



