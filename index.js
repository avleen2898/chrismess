const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');

const changeHeading1 = function(){
    const heading1 = document.querySelector('h1');
    heading1.textContent = "A whole mess of Chrisses making a mess of Christmas?";
}
const changeHeading2 = function(){
    const heading2 = document.querySelector('#description');
    heading2.textContent = "This might just turn into the messiest Christmas mess time?";
}

button1.addEventListener('click', changeHeading1);
button2.addEventListener('click', changeHeading2);