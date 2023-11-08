# Fizz Buzz

Questo semplice programma stampa in console e all'interno del dom una serie di numeri tra 1 e 100. Se un numero è multiplo di 3, allora il programma stamperà "Fizz" al posto del numero; per i multipli di 5, il programma stamperà "Buzz"; per i multipli di 3 e 5, il programma stamperà FizzBuzz.

## Descrizione del codice e processo di ragionamento a step con human code

1- Creare un for loop che stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

2- Creare all'interno del dom un div con all'interno una lista senza stile usando javascript

// create a div element
const divElement = document.createElement('div');

// append div to body
document.body.appendChild(divElement);

// create an ul element
const ulElement = document.createElement('ul');

3- Per ogni numero stampato dal for loop, si crea un elemento li contenente il numero. Il li verrà poi aggiunto all'ul.

// for loop from 1 to 100 (included)
for (let i = 1; i <= 100; i++) {
    // create li to be appended to ul
    const liElement = document.createElement('li');
    
    // set li content to current i
    liElement.textContent = i;
    
    // append the li item to ul
    ulElement.appendChild(liElement);
}

4- aggiungere l'ul al body

// append ul to the div
divElement.appendChild(ulElement);

5- Riscriviamo il loop in modo che quando i è multiplo di 3, nel li stampa Fizz; quando è multiplo di 5, stampa Buzz. Se multiplo di 3 e 5, stampa FizzBuzz

for (let i = 1; i <= 100; i++) {
    // create li to be appended to ul
    const liElement = document.createElement('li');
    
    // check if i is multiple of 3 and/or 5
    if (i % 3 === 0 && i % 5 === 0) {
        liElement.textContent = "FizzBuzz";
    } else if (i % 3 === 0) {
        liElement.textContent = "Fizz";
    } else if (i % 5 === 0) {
        liElement.textContent = "Buzz";
    } else {
        liElement.textContent = i;
    }
    
    // append the li item to ul
    ulElement.appendChild(liElement);
}

6- Creo un CSS per dare uno stile al li facendolo apparire come un quadrato. I li sono flex items che wrappano. Per il momento do un solo bg color a tutti i li.

ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}

li {
    width: 50px;
    height: 50px;
    background-color: #1389b2;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

7 - Se il contenuto del li è "Fizz", allora il bg del li sarà di un determinato colore. Stessa cosa per fizz e fizzbuzz. Per fare questo creo in CSS delle classi di bg color con i rispettivi colori per i vari contenuti del li e poi aggiungo la determinata classe al li in base al suo contenuto. Faccio tutto questo dentro al loop.


.bg-fizzbuzz {
    background-color: #f0466f;
}

.bg-fizz {
    background-color: #0cd6a1;
}

.bg-buzz {
    background-color: #ffd166;
}

.bg-number {
    background-color: #1389b2;
}

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
}


