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
}

export default App;
