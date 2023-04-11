// The version of the cache.
// Whenever the app's source code changes, the version should be updated.
// This ensures that a new cache is created, and the new static files are
// stored into it.
const VERSION = "v1";

// The name of the cache that will be used to store the app's static resources.
// This cache is versioned. When a new version of the app is installed,
// a new cache will be created and the old one will be deleted.
const CACHE_NAME = `period-tracker-${VERSION}`;

// The static resources that the app needs to function.
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/app.js",
  "/styles.css",
  "/icon-512.png",
];

// On install, fill the cache with all the static resources the app needs
// to function.
// The app doesn't need to talk to the server after install.
// All it needs is the HTML home page, a JS file, and a CSS file.
// So we make sure to cache those files on install.
// The install event happens when the app is used for the first time,
// or when a new version of the SW is detected by the browser.
// In the latter case, the old SW is kept around until the new one is
// activated by a new client.
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(APP_STATIC_RESOURCES);
    })()
  );
});

// Activate happens after install, either when the app is used for the
// first time, or when a new version of the SW was installed.
// We use the activate event to delete old caches to avoid running out
// of space.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
      await clients.claim();
    })()
  );
});

// The app's main fetch handler.
// Listening to the fetch event makes it possible to intercept all requests
// and respond with cached responses instead of going to the network.
self.addEventListener("fetch", (event) => {
  // For page navigation requests, always go back to the index.html home page.
  // There is no other page, and we don't ever want to go to the server.
  if (event.request.mode === "navigate") {
    event.respondWith(caches.match("/"));
    return;
  }

  // For all other requests, go to the cache first, and then the network.
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        // Return the cached response if it's available.
        return cachedResponse;
      }

      // If the resource isn't in the cache, just return a 404.
      // Everything we need should already be in the cache.
      return new Response(null, { status: 404 });
    })()
  );
});
