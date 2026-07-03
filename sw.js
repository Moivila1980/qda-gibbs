/* Service worker QDA-Gibbs MM-46 — network-first amb reserva de cau (offline-capable) */
const CACHE = 'qda46-v1';
const SHELL = ['./QDA_Gibbs_Analitzador.html', './manifest.json', './icona-192.png', './icona-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Les API dels models (DeepSeek/OpenRouter/Gemini) mai es toquen: sempre xarxa directa.
  if (url.hostname.includes('deepseek') || url.hostname.includes('openrouter') || url.hostname.includes('googleapis')) return;
  // El lector d'Excel del CDN es desa en cau el primer cop per poder treballar offline.
  const esCDN = url.hostname === 'cdn.sheetjs.com';
  if (url.origin !== location.origin && !esCDN) return;
  e.respondWith(
    fetch(e.request).then(resp => {
      const copia = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, copia)).catch(() => {});
      return resp;
    }).catch(() => caches.match(e.request))
  );
});
