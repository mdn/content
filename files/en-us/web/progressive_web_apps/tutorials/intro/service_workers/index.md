---
title: Service worker
slug: Web/Progressive_web_apps/Tutorials/Intro/Service_workers
---

{{PWASidebar}}

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/Intro/Manifest_file", "Web/Progressive_web_apps/Tutorials/Intro")}}

Thus far, we've written the HTML, CSS, and JavaScript for cycleTracker. We added a manifest file defining colors, icons, URL, and other app features. We have a working web app! But it isn't yet a PWA. In this section, we will write the JavaScript required to convert our fully functional web application into a PWA that can be distributed as a standalone app and works seamlessly offline.

If you haven't already done so, copy the [HTML](https://github.com/mdn/pwa-examples/tree/master/cycletracker/manifest_file/index.html), [CSS](https://github.com/mdn/pwa-examples/tree/master/cycletracker/manifest_file/style.css), and [manifest](https://github.com/mdn/pwa-examples/tree/master/cycletracker/manifest_file/cycletracker.json) JSON file. Save them to files called `index.html`, `styles.css`, and `cycletracker.json`.

In this section, we are creating `sw.js`, the service worker script, that will convert our WA into a PWA. We already have one JavaScript file; the last line in the HTML file calls the `app.js`. This JavaScript provides all the functionality for the standard web application features. Instead of calling the `sw.js` file like we did the `app.js` file with the `src` attribute of {{HTMLElement("script")}}, we will create a relationship between the web app and its service worker by registering the service worker.

At the end of this lesson, you will have a fully functional PWA; a progressively enhanced web application that is fully installable that works even when the user is offline.

## Service worker responsibilities

The service worker is what makes the application work offline while making sure the application is always up to date. To do this well, the service worker should include the following:

- Version number (or other identifier)
- List of resources to cache.
- Cache version name

The service worker is also responsive for:

- Installing the cache when the app is installed
- Updating itself and the other application file as needed
- Remove files that are no longer used.

We achieve these tasks by reacting to three service worker events, including the

- [`fetch`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/fetch_event),
- [`install`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/install_event), and
- [`activate`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/activate_event) events.

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

For a good offline experience, the list of cached files should include all the resources used within the PWAs offline experience. While the manifest file may have a multitude of icons listed in various sizes, the application cache only needs to include the assets used by the app in offline mode.

```JavaScript
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/icon-512x512.png"
];
```

You don't need to include the various icons that are used by all the different operating systems and devices in the list. But do include any images that are used within the app, including assets to used within any splash pages that may be visible if the app is slow as the app loads or used in any "you need to connect to the internet for the full experience" type pages.

Do not include the service worker file in the list of resources to be cached.

#### Task

Add the list of resources to be cached for the CycleTracker PWA to `sw.js`.

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

We included the `wheel.svg` icon, even though our current application doesn't use it, incase you are enhancing the PWA UI, such as displaying the logo when there is no period data.

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

We have successfully declared our constants; a unique identifier, the list of offline resources as an array, and the application's cache name that changes every time the identifier is updated. Now let's focus on installing, updating, and deleting unused cached resources.

### Saving the cache on PWA installation

When a user installs a PWA, there is an `install` event. We want to listen for this event, filling the cache with the PWA's static resources upon installation. Every time the app is installed, including the first installation and any time a change is made to the service worker, the install event occurs.

The `install` event happens when the app is used for the first time, or when a new version of the service worker is detected by the browser. When an older service worker is being replaced by a new one, the old service worker is used as the PWA's service worker until the new service work is activated.

Only available in secure contexts, the [`caches`](/en-US/docs/Web/API/caches) global property returns a {{domxref("CacheStorage")}} object associated with the current context. The {{domxref("CacheStorage.open()")}} method returns a {{jsxref("Promise")}} that resolves to the {{domxref("Cache")}} object matching name of the cache, passed as a parameter.

The {{domxref("Cache.addAll()")}} method takes as it's parameter an array of URLs, retrieves them, then adds the responses to the given cache. The [`waitUntil()`](/en-US/docs/Web/API/ExtendableEvent/waitUntil) method tells the browser that work is ongoing until the promise settles, and it shouldn't terminate the service worker if it wants that work to complete.

```JavaScript
self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
      const cache = await caches.open("cacheName_identifier");
      cache.addAll([
        "/",
        "/index.html"
        "/styles.css"
        "/app.js"
      ]);
    })()
  );
});
```

#### Task

Add an install event listener that retrieves and stores the files listed in `APP_STATIC_RESOURCES` into the cache named `CACHE_NAME`.

#### Example solution

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

### Updating the PWA and deleting old caches

As mentioned, when an existing service worker is being replaced by a new one, the existing service worker is used as the PWA's service worker until the new service work is activated. We use the `activate` event to delete old caches to avoid running out of space. We iterate over named {{domxref("Cache")}} objects, deleting all but the current one, and the set the service worker as the [`controller`](/en-US/docs/Web/API/ServiceWorkerContainer/controller) for the PWA.

We listen for the current service worker's global scope [`activate`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/activate_event) event.

We get the names of the existing named caches. We use the {{domxref("CacheStorage.keys()")}} method (again accessing `CacheStorage` through the global {{domxref("caches")}} property) which returns a {{jsxref("Promise")}} that resolves with an array containing strings corresponding to all of the named {{domxref("Cache")}} objects in the order they were created.

We use the [`Promise.all()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) method is to iterate thru that list name promises. The `all()` method takes as input a list of iterable promises and returns a single Promise. For each name in the list of named cachees, check if the cache is the currently active cache. If not, delete it with the `Cache` [`delete()`](/en-US/docs/Web/API/Cache/delete) method.

The last line, the `await clients.claim()` uses the [`claim()`](/en-US/docs/Web/API/Clients/claim) method of the [`Clients`](/en-US/docs/Web/API/Clients) interface to enable our service worker to set itself as the controller for our PWA. The `claim()` method enables the service worker to "claim control" of all clients within its scope. This way, clients loaded in the same scope don't need to be reloaded.

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

#### Task

Add the above `activate` eventListener to your `sw.js` file.

### The fetch event

We can take advantage of the [`fetch`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) event, to prevent an installed PWA from making requests if the user is online. Listening to the fetch event makes it possible to intercept all requests and respond with cached responses instead of going to the network. Most applications don't require this behavior. In fact, many business models want users to regularly make server requests for tracking and marketing purposes. So, while intercepting requests may be an anti-pattern for some, to improve the privacy of our CycleTracker app, we don't want the app to make unnecessary server requests.

As our PWA is a only a single page, for page navigation requests, we go back to the `index.html` home page. There are no other pages and we don't ever want to go to the server. If the Fetch API's [`Request`](/en-US/docs/Web/API/Request) readonly [`mode`](/en-US/docs/Web/API/Request/mode) property is `navigate`, meaning it's looking for a web page, we use the FetchEvent's `respondWith()`]() method to prevents the browser's default fetch handling, providing our own response promise employing the [`caches.match()`](/en-US/docs/Web/API/CacheStorage/match) method.

For all other request modes, we open the caches as done in the [install event response](#saving-the-cache-on-pwa-installation), instead passing the event request to the same `match()` method. It checks if the request is a key for a stored {{domxref("Response")}}. If yes, it returns the cached response. If not, we return a [404 status](/en-US/docs/Web/HTTP/Status/404) as a response.

Using the [`Response()`](/en-US/docs/Web/API/Response/Response) constructor to pass a `null` body and a `status: 404` as options, doens't mean there is an error in our PWA. Rather, everything we need should already be in the cache, and if it isn't, we're not going to the server to resolve this non-issue.

```JavaScript
self.addEventListener("fetch", (event) => {
  // when seeking an HTML page
  if (event.request.mode === "navigate") {
    event.respondWith(caches.match("/"));
    return;
  }

  // For every other request type
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        // Return the cached response if it's available.
        return cachedResponse;
      } else {
        return new Response(null, { status: 404 });
      }
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
      } else {
        // If resource isn't in the cache, return a 404.
        return new Response(null, { status: 404 });
      }
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

If the property is supported, we can then use the [`register()`](/en-US/docs/Web/API/ServiceWorkerContainer/register) method of the service worker API's [`ServiceWorkerContainer`](/en-US/docs/Web/API/ServiceWorkerContainer) interface.

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

## We're done!

At its core, a PWA is a web application that can be installed is progressively enhanced to work offline. We created a fully functional web application. We then added the two features - a manifest file and a service worker - required to convert it to a PWA. If you want to share your app with others, make it available via a secure connection. Alternatively, if you just want to use the cycle tracker yourself, [create a local development environment](/en-US/docs/Web/Progressive_web_apps/Tutorials/Intro/Secure_connection), [install the PWA](/en-US/docs/Web/Progressive_web_apps/Guides/Installing), and enjoy! Once installed, you no longer need to run localhost.

Congratulations!

{{PreviousMenu("Web/Progressive_web_apps/Tutorials/Intro/Manifest_file", "Web/Progressive_web_apps/Tutorials/Intro")}}
