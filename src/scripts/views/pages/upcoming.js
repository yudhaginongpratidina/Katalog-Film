// IMPORT DATA HASING FACTHING API
import TheMovieDbSource from '../../data/themoviedb-source';

// IMPORT TEMPLATE MOVIE
import { createMovieItemTemplate } from '../templates/template-creator';

const Upcoming = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Upcoming in Cinema</h2>
        <div id="movies" class="movies"></div>
      </div>
    `;
  },

  // Fungsi ini akan dipanggil setelah render()
  async afterRender() {
    const movies = await TheMovieDbSource.upcomingMovies();

    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Upcoming;
