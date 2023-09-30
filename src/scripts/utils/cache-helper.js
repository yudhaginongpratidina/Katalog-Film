import CONFIG from '../globals/config';

const CacheHelper = {
  /**
   * Mencache asset untuk app shell.
   * @param {Array} requests - Daftar permintaan untuk dicache.
   */
  async cachingAppShell(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },

  /**
   * Menghapus cache lama kecuali CACHE_NAME saat ini.
   */
  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  /**
   * Merevalidasi cache untuk permintaan tertentu.
   * @param {Request} request - Permintaan yang akan direvalidasi.
   * @returns {Response} - Respons cache atau respons dari jaringan.
   */
  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(request);
      return response;
    }
    return this._fetchRequest(request);
  },

  /**
   * Membuka cache dengan CACHE_NAME yang ditentukan.
   * @returns {Cache} - Cache yang dibuka.
   */
  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  /**
   * Mengambil permintaan dan menangani caching.
   * @param {Request} request - Permintaan yang akan diambil.
   * @returns {Response} - Respons dari jaringan.
   */
  async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(request);
    return response;
  },

  /**
   * Menambahkan permintaan ke dalam cache.
   * @param {Request} request - Permintaan yang akan dicache.
   */
  async _addCache(request) {
    const cache = await this._openCache();
    cache.add(request);
  },
};

export default CacheHelper;
