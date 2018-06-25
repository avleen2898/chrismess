const button = document.querySelector('button');

const changeHeading = function()
{
    const heading = document.querySelector('h1');
    heading.textContent = "A whole mess of Chrisses making a mess of Christmas?";
}

button.addEventListener('click', changeHeading);