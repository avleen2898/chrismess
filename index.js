class App{
    constructor(){
        this.list = document.querySelector('#flicks');
        this.flicks = [];
        this.load();
        const form = document.querySelector("#chrisMovies");
        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            this.handleSubmit(ev);
        });
        
    }

    load(){
        const flicks = JSON.parse(localStorage.getItem('flicks'));

        if(flicks){
            flicks.forEach(flick => this.addFlick(flick));
        }
    }

    save()
    {
        localStorage.setItem('flicks', JSON.stringify(this.flicks));
    }

    //Create a function that creates a span element and adds a class and text content to it
    renderProperty(name, value){
        const span = document.createElement('span');
        span.classList.add(name);
        span.textContent = value;
        return span;
    }

    renderActionButtons(flick, item){
        const actions = document.createElement('div');
        actions.classList.add('actions');

         //Create a button element and append it to each of the list items
         const deleteButton = document.createElement('button');
         deleteButton.innerHTML = '<i class="fas fa-trash-alt" title="delete item"></i>';
         actions.appendChild(deleteButton);
 
         const favButton = document.createElement('button');
         favButton.innerHTML = '<i class="fas fa-heart" title = "favorite item"></i>';
         actions.appendChild(favButton);

         const editButton = document.createElement('button');
         editButton.innerHTML = '<i class="fas fa-edit" title="edit item"></i>';
         actions.appendChild(editButton);       
 
         deleteButton.addEventListener('click', (_ev) =>{
             this.removeFlick(flick, item)
         });
 
         favButton.addEventListener('click', (_ev) =>{
             this.toggleFavorite(flick, item)  
         });

         return actions;
    }

    renderItem(flick){
        //Create a list item to be added  unordered list
        const item = document.createElement('li');

        //Create an array of all the keys in the flick object 
        const properties = Object.keys(flick);

        //For each of the keys, render the property
        properties.forEach((propertyName) => {
            const span = this.renderProperty(propertyName, flick[propertyName]);
            item.appendChild(span);
            item.append(' ');
        });

        const actions = this.renderActionButtons(flick, item);
        item.appendChild(actions);

        return item;
    }

    removeFlick(flick, item)
    {
        //Delete the list item from the unordered list
        this.list.removeChild(item);

        //Find the index of the flick object and delete it from the flicks array
        let i = this.flicks.indexOf(flick);
        this.flicks.splice(i,1);

        this.save();
    }

    toggleFavorite(flick, item){
        item.classList.toggle('favorite');
        let i = this.flicks.indexOf(flick);
        this.flicks[i].favorite = true;

        this.save();
    }

    addFlick(flick){
        //Push the flick object onto the flicks array 
        this.flicks.push(flick);
        const item = this.renderItem(flick);

        if(flick.favorite){
            item.classList.add('favorite');
        }

        //Append the list item to the unordered list 
        this.list.appendChild(item);
    }

    handleSubmit(ev){
        const f = ev.target;

        //Create a flick object that stores the name and year of the movie typed in the form field
        const flick = {
            movieName: f.movieName.value,
            movieYear: f.movieYear.value,
            favorite: false,
        };
        
        this.addFlick(flick);
        this.save();

        f.reset();
        f.movieName.focus();
    }
}

const app = new App();