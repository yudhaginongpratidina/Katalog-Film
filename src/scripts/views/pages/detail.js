// IMPORT URL PARSER
import UrlParser from '../../routes/url-parser';

// IMPORT DATA HASING FACTHING API
import TheMovieDbSource from '../../data/themoviedb-source';

const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>
      `;
  },

  // Fungsi ini akan dipanggil setelah render()
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    console.log(movie);
  },
};

export default Detail;
