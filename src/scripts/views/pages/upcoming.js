// IMPORT DATA HASING FACTHING API
import TheMovieDbSource from '../../data/themoviedb-source';

const Upcoming = {
  async render() {
    return `
        <h2>Upcoming page</h2>
      `;
  },

  // Fungsi ini akan dipanggil setelah render()
  async afterRender() {
    const movies = await TheMovieDbSource.upcomingMovies();
    console.log(movies);
  },
};

export default Upcoming;
