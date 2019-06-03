$(document).ready(function(){

    // get the root div
    const app = document.getElementById('root');

    // create a img element on the vebsite
    const logo = document.createElement('img');

    // setting the logo to logo.png
    logo.src = 'logo.png';

    // creating a div that will contain the information
    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    // and appending it into the app
    app.appendChild(logo);
    app.appendChild(container);

    // create a request and assign it to a variable
    var request = new XMLHttpRequest();

    // open a connection to https://ghibliapi.herokuapp.com and get the information
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

    // accesing the data
    request.onload = function () {
        var data = JSON.parse(this.response);
        if(request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            // create the card div 
            const card = document.createElement('div');
            card.setAttribute('class', 'card')

            // creating the title h1
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            // create a p that will display the information
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300); // limiting the description to 300 char
            p.textContent = `${movie.description}...`;

            // appending the card to the container
            container.appendChild(card)

            // appending the h1 and p into the card
            card.appendChild(h1);
            card.appendChild(p);
        });
        } else {
            const error = document.createElement('marquee');
            errorMessage.textContent = `This is not working!`;
            app.appendChild(errorMessage);
        }
    }
     // send the request
    request.send();
})