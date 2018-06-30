let cacheName = 'v1'
let cacheFiles = ['./', './index.html', './script.js', './style.css']

self.addEventListener('install', e => {
  console.log('[serviceWorker] installed')
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('[ServiceWorker] Caching cacheFiles')
      return cache.addAll(cacheFiles)
    })
  )
})

self.addEventListener('activate', e => {
  console.log('[ServiceWorker] Activated')

  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(cacheNames.map(thisCacheName))
    })
  )
})

self.addEventListener('fetch', e => {
  console.log('[ServiceWorker] Fetching', e.request.url)
})
