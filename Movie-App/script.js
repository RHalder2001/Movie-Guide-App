const searchFrom = document.querySelector('form');
const movieContainer = document.querySelector('.movie-container');
const inputBox = document.querySelector('.inputBox');

// Function to fetch movie details using OMDB API
const getMovieInfo = async (movie) => {
  try {
    const myApiKey = "81a465b3";
    const url = `https://www.omdbapi.com/?apikey=${myApiKey}&t=${movie}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    showMovieData(data);
  } catch (error) {
    console.log("E: ", error);
    movieContainer.innerHTML="<h2>No Movie Found</h2>"
     movieContainer.classList.remove('movie-container')
    movieContainer.classList.add('noBackground')
  }
};

// Function to show movie data on screen
const showMovieData = (data) => {
  movieContainer.innerHTML = ""
   movieContainer.classList.remove('noBackground')

   //Use Destructuring data(object) come from API
  const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster } = data;

  const movieElement = document.createElement('div');
  movieElement.classList.add('movie-info')
  movieElement.innerHTML =
    `<h2>${Title}</h2>
        <p><strong>Rating: &#11088</strong>${imdbRating}</p>`



  //creating Movie Genre with div
  const movieGenreElement = document.createElement('div')
  movieGenreElement.classList.add('movie-genre')

  Genre.split(",").forEach((element) => {
    const p = document.createElement('p')
    p.innerText = element;
    movieGenreElement.appendChild(p)

  })

  movieElement.appendChild(movieGenreElement);




  movieElement.innerHTML +=
    `<p><strong>Release Data: </strong>${Released}</p>
      <p><strong>Duration: </strong>${Runtime}</p>
      <p><strong>Cast: </strong>${Actors}</p>
      <p><strong>Plot: </strong>${Plot}</p>`



  //Creating div for movie poster
  const moviePosterElement = document.createElement('div')
  moviePosterElement.classList.add('movie-poster')

  moviePosterElement.innerHTML = `<img src="${Poster}"/>`

  movieContainer.appendChild(moviePosterElement);
  movieContainer.appendChild(movieElement);


};






searchFrom.addEventListener('submit', (e) => {
  e.preventDefault();
  const movieName = inputBox.value.trim();
  if (movieName !== '') {
    getMovieInfo(movieName);
  }
  else{
    movieContainer.innerHTML=`<h2> Enter Movie Name To Get Movie Information </h2>`
    movieContainer.classList.remove('movie-container')
    movieContainer.classList.add('noBackground')

  }
movieContainer.classList.add('movie-container')
})
