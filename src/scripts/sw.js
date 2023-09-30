import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// DAFTAR ASET YANG AKAN DI CACHING
const assetsToCache = [
  './',
  './icons/maskable_icon.png',
  './icons/maskable_icon_x48.png',
  './icons/maskable_icon_x72.png',
  './icons/maskable_icon_x96.png',
  './icons/maskable_icon_x128.png',
  './icons/maskable_icon_x192.png',
  './icons/maskable_icon_x384.png',
  './icons/maskable_icon_x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

// MELAKUKAN CACHING
self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

// MENGHAPUS CACHE YANG SUDAH TIDAK DIGUNAKAN
self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

// CACHING DENGAN STATERGI STALE WHILE REALIDATE
self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
