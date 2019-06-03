$(document).ready(function(){

    // create a request and assign it to a variable
    var request = new XMLHttpRequest();

    // open a connection to https://ghibliapi.herokuapp.com and get the information
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

    // accesing the data
    request.onload = function () {
        var data = JSON.parse(this.response);

        data.forEach(movie => {
            // send the movie title into console log
            console.log(movie.title);
        });
    }
     // send the request
    request.send();
})