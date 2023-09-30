import 'regenerator-runtime';

// IMPORT STYLE CSS
import '../styles/style.css';
import '../styles/responsive.css';

// IMPORT APP
import App from './views/app';

// IMPORT SERVICE WORKER REGISTER
import swRegister from './utils/sw-register';

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
  swRegister();
});

console.log('Setup Sukses Cuy');
