---
title: Service worker
slug: Web/Progressive_web_apps/Tutorials/Intro/Service_workers
---

{{PWASidebar}}

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/Intro/Manifest_file", "Web/Progressive_web_apps/Tutorials/Intro/Manifest_file", "Web/Progressive_web_apps/Tutorials/Intro")}}

In the previous section, we wrote the HTML and CSS for cycleTracker, creating a static version of our web app. In this section, we will write the JavaScript required to convert static HTML into a fully functional web application.

If you haven't already done so, copy the [HTML](https://github.com/mdn/pwa-examples/tree/master/cycletracker/manifest_file/index.html), [CSS](https://github.com/mdn/pwa-examples/tree/master/cycletracker/manifest_file/style.css), and [manifest](https://github.com/mdn/pwa-examples/tree/master/cycletracker/manifest_file/cycletracker.json) JSON file. Save them to files called `index.html`, `styles.css`, and `cycletracker.json`.

The last line in the HTML file calls the `app.js` JavaScript file. This is the script we are creating in this section. In this lesson, we will be writing client-side JavaScript code to capture form submissions, locally store submitted data, and populate the past-periods section.

At the end of this lesson, you will have a fully functional app. In future lessons, we will progressively enhance the app to create a fully installable PWA that works even when the user is offline.

## Service worker responsibilities

## Complete service worker file

Your `app.js` file should look similar to this JavaScript:

```JavaScript
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
```

## Register the service worker

Now that our service worker script is complete, we need to register the service worker.

We start by checking that the browser supports the [Service Worker API](/en-US/docs/Web/API/Service_Worker_API) by using [feature detection](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#the_concept_of_feature_detection) for the presence of the [`serviceWorker`](/en-US/docs/Web/API/ServiceWorker) property on the global [`navigator`](/en-US/docs/Web/API/Navigator) object:

```html
<!-- Does "serviceWorker" exist -->
<script>
  if ("serviceWorker" in navigator) {
    // If yes, we register the service worker
  }
</script>
```

If the property is supported, we can then use the [`register()`](/en-US/docs/Web/API/ServiceWorkerContainer/register) method of the service worker API's [`ServiceWorkerContainer`](/en-US/docs/Web/API/ServiceWorkerContainer/) interface.

```html
<script>
  if ("serviceWorker" in navigator) {
    // Register the app's service worker
    // Passing the filename where that worker is defined.
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

While the above suffices for the cycleTracker app needs, the `resgister()` method does return a {{jsxref("Promise")}} that resolves with a {{domxref("ServiceWorkerRegistration")}} object. For a more robust application, error check the registration:

```javascript
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(
    (registration) => {
      console.log("Service worker registration successful:", registration);
    },
    (error) => {
      console.error(`Service worker registration failed: ${error}`);
    }
  );
} else {
  console.error("Service workers are not supported.");
}
```

### Task

Open `index.html` and add the following {{HTMLElement("script")}} after the script to include `app.js` and before the closing `</body>` tag.

```html
<!-- Register the app's service worker. -->
<script>
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

You can try the fully functioning [cycleTrack period tracking web app](https://mdn.github.io/pwa-examples/cycletracker/service_workers) and view the [web app source code](https://github.com/mdn/pwa-examples/tree/master/cycletracker/service_workers) on GitHub. Yes, it works, but it's not a yet PWA.

## Up next

At its core, a PWA is a web application that can be installed is progressively enhanced to work offline. Now that we have a fully functional web application, we add the features required to convert it to a PWA, including the [manifest file](/en-US/docs/Web/Progressive_web_apps/Tutorials/Intro/Manifest_file), [secure connection](/en-US/docs/Web/Progressive_web_apps/Tutorials/Intro/Secure_connection), and [service worker](/en-US/docs/Web/Progressive_web_apps/Tutorials/Intro/Service_workers).

Up first, we create the [cycleTracker's manifest file](/en-US/docs/Web/Progressive_web_apps/Tutorials/Intro/Manifest_file), including the identity, appearance, and iconography for our cycleTracker PWA.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/Intro/Manifest_file", "Web/Progressive_web_apps/Tutorials/Intro/Manifest_file", "Web/Progressive_web_apps/Tutorials/Intro")}}
