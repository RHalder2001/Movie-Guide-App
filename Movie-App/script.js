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
  }
};

// Function to show movie data on screen
const showMovieData = (data) => {
  const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster } = data;

  const movieElement = document.createElement('div');
  movieElement.innerHTML = 
       `<h2>${Title}</h2>
        <p><strong>Rating: &#11088</strong>${imdbRating}</p>`



    //creating Movie Genre with div
    const movieGenreElement =document.createElement('div')
     movieGenreElement.classList.add('movie-genre')

     Genre.split(",").forEach(element=>{
      const p=document.createElement('p')
      p.innerText=element;
      movieGenreElement.appendChild(p)

     })

   

  movieContainer.appendChild(movieElement);
  movieElement.appendChild(movieGenreElement);

};






searchFrom.addEventListener('submit', (e) => {
  e.preventDefault();
  const movieName = inputBox.value.trim();
  if (movieName !== '') {
    getMovieInfo(movieName);
  }
})
