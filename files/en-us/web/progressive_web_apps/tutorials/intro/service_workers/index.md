---
title: Service worker
slug: Web/Progressive_web_apps/Tutorials/Intro/Service_workers
---

{{PWASidebar}}

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/Intro/Manifest_file", "Web/Progressive_web_apps/Tutorials/Intro/Manifest_file", "Web/Progressive_web_apps/Tutorials/Intro")}}

Thus far, we've written the HTML, CSS, and JavaScript for cycleTracker. We added a manifest file defining colors, icons, URL, and other app features. We have a working web app! But it isn't yet a PWA. In this section, we will write the JavaScript required to convert our fully functional web application into a PWA that can be distributed as a standalone app and works seamlessly offline.

If you haven't already done so, copy the [HTML](https://github.com/mdn/pwa-examples/tree/master/cycletracker/manifest_file/index.html), [CSS](https://github.com/mdn/pwa-examples/tree/master/cycletracker/manifest_file/style.css), and [manifest](https://github.com/mdn/pwa-examples/tree/master/cycletracker/manifest_file/cycletracker.json) JSON file. Save them to files called `index.html`, `styles.css`, and `cycletracker.json`.

In this section, we are creating `sw.js`, the service worker script, that will convert our WA into a PWA. We already have one JavaScript file; the last line in the HTML file calls the `app.js`. This JavaScript provides all the functionality for the standard web application features. Instead of calling the `sw.js` file like we did the `app.js` file with the `src` attribute of {{HTMLElement("script")}}, we will create a relationship between the web app and its service worker by registering the service worker.

At the end of this lesson, you will have a fully functional PWA; a progressively enhanced web application that is fully installable that works even when the user is offline.

## Service worker responsibilities

The service worker is what makes the application work offline while making sure the application is always up to date. To do this well, the service worker must include the following:

- Version number (or another updateable unique identifier)
- List the resources needed for offline function.
- Version name for the application's cache

The service worker is also responsive for:

- Installing the cache when the app is installed
- Updating itself and the other application file as needed
- Remove files that are no longer used.

### Version number

Once the PWA is installed on the user's machine, the only way to guarantee updated files are retrieved is for there to be a change in the service worker. If a change is made to any other PWA resource — if the HTML is updated, a bug is fixed in the CSS, a function is added to `app.js`, an image is compressed to reduce the file save, etc. — the installed PWA will not know it needs to download updated resources. When the service worker is altered in any way, the PWA will know it should update the cache.

While changing any character may technically suffice, a PWA best practice create a version number constant that gets updated sequentially to indicate an update to the file. Updating a version number (or date), provides an official edit to the service worker even if nothing else is changed in the service worker itself and provides developers with a way of identifying app versions.

#### Task

Start a JavaScript file by including a version number:

```JavaScript
const VERSION = "v1";
```

Save the file as `sw.js`

### Offline resource list

The offline cache needs to include the resources used within the PWAs offline experience. While the manifest file may have a multitude of icons listed in various sizes, only include the images and icons used within the app when it is run offline. This may include images used for a splash page as the app loads.

Do not include the service worker file in the list of resources to be cached.

```JavaScript
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/manifest.json",
  "/icon-512x512.png"
];
```

#### Task

Add the list of resources to cache for your PWA to `sw.js` and save the file.

#### Example solution

We include the static resources created in other sections of this tutorial that CycleTracker needs to function when offline. Our current `sw.js` file is:

```JavaScript
const VERSION = "v1";

const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/cycletrack.json",
  "/icons/wheel.svg",
];
```

### Application cache name

We have a version number and we have the files that need to be cached. Before caching the files, we need to create a name of the cache that will be used to store the app's static resources. This cache name should be versioned to insure that when a new version of the app is installed, a new cache will be created and the old one will be deleted.

#### Task

Use the `VERSION` number to create a versioned `CACHE_NAME`, adding it as a constant to `sw.js`.

#### Example solution

We name our cache `period-tracker-` with the current `VERSION` appended. As the constant declaration is on a single line, we put it before the array of resources constant for better legibility.

```JavaScript
const VERSION = "v1";
const CACHE_NAME = `period-tracker-${VERSION}`;

const APP_STATIC_RESOURCES = [ .... ];
```

We have successfully declared our constants; a unique identifier, the list of offline resources as an array, and the application's cache name that changes every time the identifier is updated.

// On install, fill the cache with all the static resources the app needs
// to function.
// The app doesn't need to talk to the server after install.
// All it needs is the HTML home page, a JS file, and a CSS file.
// So we make sure to cache those files on install.
// The install event happens when the app is used for the first time,
// or when a new version of the SW is detected by the browser.
// In the latter case, the old SW is kept around until the new one is
// activated by a new client.

```JavaScript
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(APP_STATIC_RESOURCES);
    })()
  );
});
```

// Activate happens after install, either when the app is used for the
// first time, or when a new version of the SW was installed.
// We use the activate event to delete old caches to avoid running out
// of space.

```JavaScript
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
```

// The app's main fetch handler.
// Listening to the fetch event makes it possible to intercept all requests
// and respond with cached responses instead of going to the network.

```JavaScript
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

## Complete service worker file

Your `app.js` file should look similar to the following JavaScript. Note that when updating any of the resources listed in the `APP_STATIC_RESOURCES` array, the only constant or function that must be updated within this service worker is the value of `VERSION`.

```JavaScript
// The version of the cache.
const VERSION = "v1";

// The name of the cache
const CACHE_NAME = `period-tracker-${VERSION}`;

// The static resources that the app needs to function.
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/app.js",
  "/styles.css",
  "/icons/wheel.svg",
];

// On install, cache the static resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(APP_STATIC_RESOURCES);
    })()
  );
});

// delete old caches on activate
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

// On fetch, intercept server requests
// and respond with cached responses instead of going to network
self.addEventListener("fetch", (event) => {
  // As a single page app, direct app to always go to cached home page.
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

      // If resource isn't in the cache, return a 404.
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
