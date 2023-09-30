import 'regenerator-runtime';

// IMPORT STYLE CSS
import '../styles/style.css';
import '../styles/responsive.css';

// IMPORT APP
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'), // TOMBOL MENU
  drawer: document.querySelector('#navigationDrawer'), // ISI NAVIGASI
  content: document.querySelector('#root'), // ISI CONTENT
});

// MERENDER ULANG SESUAI URL
window.addEventListener('hashchange', () => {
  app.renderPage();
});

// MEMASTIKAN HALAMAN WEB TELAH DIMUAT SEPENUHNYA
window.addEventListener('load', () => {
  app.renderPage();
});

console.log('Setup Sukses Cuy');
