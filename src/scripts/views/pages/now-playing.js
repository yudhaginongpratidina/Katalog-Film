// IMPORT DATA HASING FACTHING API
import TheMovieDbSource from '../../data/themoviedb-source';

const NowPlaying = {
  async render() {
    return `
        <h2>Now Playing Page</h2>
      `;
  },

  // Fungsi ini akan dipanggil setelah render()
  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    console.log(movies);
  },
};

export default NowPlaying;
