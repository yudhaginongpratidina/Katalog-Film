/* ==============================================================
* Class App dibuat bertujuan untuk menginisialisasi
* komponen-komponen dari Application Shell.
* komponen yang perlu diinisialisasi antara lain
* ----------------------------------------------------------------
* hamburger button : menampilkan drawer content
* drawer content   : menampung navigasi
* main content     : menyembunyikan drawer content ketika di klik
================================================================ */

import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  // MENGINISIALISASI KOMPONEN-KOMPONEN AppShell YANG SUDAH DIMASUKKAN PADA PROPERTY CLASS
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  // UNTUK MERENDER HALAMAN BERDASARKAN URL YANG AKTIF
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
