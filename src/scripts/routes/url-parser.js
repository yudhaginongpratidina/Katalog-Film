/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multi-spaces */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
// Objek UrlParser digunakan untuk mengelola URL aktif.
const UrlParser = {

    // Metode ini mengurai URL aktif dengan menggabungkan URL.
    parseActiveUrlWithCombiner() {
      // Mendapatkan URL aktif dan mengubahnya menjadi huruf kecil.
      const url = window.location.hash.slice(1).toLowerCase();

      // Memisahkan URL ke dalam bagian-bagian yang relevan.
      const splitedUrl = this._urlSplitter(url);

      // Menggabungkan kembali bagian-bagian URL menjadi satu URL.
      return this._urlCombiner(splitedUrl);
    },

    // Metode ini mengurai URL aktif tanpa penggabung URL.
    parseActiveUrlWithoutCombiner() {
      // Mendapatkan URL aktif dan mengubahnya menjadi huruf kecil.
      const url = window.location.hash.slice(1).toLowerCase();

      // Memisahkan URL ke dalam bagian-bagian yang relevan.
      return this._urlSplitter(url);
    },

    // Metode internal ini memisahkan URL menjadi bagian-bagian yang sesuai.
    _urlSplitter(url) {
      // Memecah URL menjadi array berdasarkan tanda '/'.
      const urlsSplits = url.split('/');

      // Mengembalikan objek yang berisi bagian-bagian
      // seperti sumber (resource), ID, dan kata kerja (verb).
      return {
        resource: urlsSplits[1] || null, // Mengambil bagian kedua sebagai sumber.
        id: urlsSplits[2] || null,       // Mengambil bagian ketiga sebagai ID.
        verb: urlsSplits[3] || null,     // Mengambil bagian keempat sebagai kata kerja (verb).
      };
    },
  
    // Metode internal ini menggabungkan kembali bagian-bagian URL menjadi satu URL.
    _urlCombiner(splitedUrl) {
      // Menggabungkan bagian-bagian URL dengan '/' sesuai dengan kondisi masing-masing.
      return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') // Menambahkan sumber jika ada.
           + (splitedUrl.id ? '/:id' : '')                           // Menambahkan ID jika ada.
           + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');         // Menambahkan kata kerja (verb) jika ada.
    },
  };
  
export default UrlParser;
  