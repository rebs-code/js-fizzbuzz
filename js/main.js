"use strict";

// create a div element
const divElement = document.createElement('div');
divElement.classList.add('container', 'main-container');

// append div to body
document.body.appendChild(divElement);

// create an ul element
const ulElement = document.createElement('ul');

//append ul to div with class main-container
divElement.appendChild(ulElement);

for (let i = 1; i <= 100; i++) {
    // create li to be appended to ul
    const liElement = document.createElement('li');
    
    // check if i is multiple of 3 and/or 5
    if (i % 3 === 0 && i % 5 === 0) {
        liElement.textContent = "FizzBuzz";
        liElement.classList.add('bg-fizzbuzz');
    } else if (i % 3 === 0) {
        liElement.textContent = "Fizz";
        liElement.classList.add('bg-fizz');
    } else if (i % 5 === 0) {
        liElement.textContent = "Buzz";
        liElement.classList.add('bg-buzz');
    } else {
        liElement.textContent = i;
        liElement.classList.add('bg-number');
    }
    
    // append the li item to ul
    ulElement.appendChild(liElement);
};
