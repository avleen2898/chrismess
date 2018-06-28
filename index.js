class App{
    constructor(){
        const form = document.querySelector("#chrisMovies");
        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            this.handleSubmit(ev);
        });
        this.flicks = [];
    }

    //Create a function that creates a span element and adds a class and text content to it
    renderProperty(name, value){
        const span = document.createElement('span');
        span.classList.add(name);
        span.textContent = value;
        return span;
    }

    renderItem(flick){

        //Create a list item to be added to the unordered list
        const item = document.createElement('li');

        //Create an array of all the keys in the flick object 
        const properties = Object.keys(flick);

        //For each of the keys, render the property
        properties.forEach((propertyName) => {
            const span = this.renderProperty(propertyName, flick[propertyName]);
            item.appendChild(span);
            item.append(' ');
        });
        return item;
    }

    handleSubmit(ev){
        const f = ev.target;

        //Create a flick object that stores the name and year of the movie typed in the form field
        const flick = {
            movieName: f.movieName.value,
            movieYear: f.movieYear.value,
        };
        
        //Push the flick object onto the flicks array 
        this.flicks.push(flick);
       
        const list = document.querySelector('#flicks');
        const item = this.renderItem(flick);
        
        //Append the list item to the unordered list 
        list.appendChild(item);

        //Create a button element and append it to each of the list items
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete item';
        item.appendChild(deleteButton);

        const favButton = document.createElement('button');
        favButton.textContent = 'Favorite item';
        item.appendChild(favButton);

        deleteButton.addEventListener('click', () =>{
            
            //Delete the list item from the unordered list
            list.removeChild(item);

            //Find the index of the flick object and delete it from the flicks array
            let i = this.flicks.indexOf(flick);
            this.flicks.splice(i,1);
        });

        favButton.addEventListener('click', () =>{
            item.style.fontSize = '25px';
            item.style.border = '2px dashed green';
            let i = this.flicks.indexOf(flick);
            this.flicks[i].favorite = 'Yes';
        });

        f.reset();
        f.movieName.focus();
    }
}

const app = new App();







