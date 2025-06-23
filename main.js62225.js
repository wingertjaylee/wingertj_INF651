// This the array where the movies will be kept
let movielist = [];

//Adds a movie to the watchlist array and updates the display
function addMovie(title) {
    if (movieTitle !== " ") {
        watchlist.push(title);//add the movie to the list array
        showMovies(); //Updates the list on the page
    }
}

//This function removes a movie based on its number in the list
function deleteMovie(movieNumber) {
    movielist.splice(movieNumber, 1); // Take it out of the arrat
    showMovies(); //update the list again
}

//This function shows all the movies in the list
function showMovies () {
    let movieListElement = document.getElementById("movie-list");
    movieListElement.innerHTML = ""; //Clear what's already there

    for (let i = 0; i < movielist.lemgth; i++) {
        let listItem = document.createElement("li");// Create a new list item
        listItem.textContent = movieList[i]; // Set the text to the movie title

        let removeButton = document.onclick = function () {
            deleteMovie(i); // Call the delete function with the index
        };
        listItem.appendChild(removeButton); // Add the button to the list item
        movieListElement.appendChild(listItem); // Add the list item to the movie list
    }
}

//This connects the button to the addMovie Function
let addButton = document.getElementById("add-movie-btn");
addButton = document.onclick = function () {
let inputBox = document.getElementById("movie-name");
    let movieTitle = inputBox.value; // Get the value from the input box
    addMovie(movieTitle);
    inputBox.value = ""; // Clear the input box after adding the movie
    };