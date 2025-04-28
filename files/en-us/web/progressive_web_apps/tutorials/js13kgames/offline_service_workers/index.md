---
title: Making PWAs work offline with Service workers
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
page-type: guide
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Now that we've seen what the structure of js13kPWA looks like and have seen the basic shell up and running, let's look at how the offline capabilities using Service Worker are implemented. In this article, we look at how it is used in our [js13kPWA example](https://mdn.github.io/pwa-examples/js13kpwa/) ([see the source code also](https://github.com/mdn/pwa-examples/tree/main/js13kpwa)). We examine how to add offline functionality.

## Service workers explained

Service Workers are a virtual proxy between the browser and the network. They make it possible to properly cache the assets of a website and make them available when the user's device is offline.

They run on a separate thread from the main JavaScript code of our page, and don't have any access to the DOM structure. This introduces a different approach from traditional web programming — the API is non-blocking, and can send and receive communication between different contexts. You are able to give a Service Worker something to work on, and receive the result whenever it is ready using a [Promise](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)-based approach.

Service workers can do more than offering offline capabilities, including handling notifications or performing heavy calculations. Service workers are quite powerful as they can take control over network requests, modify them, serve custom responses retrieved from the cache, or synthesize responses completely.

To learn more about service workers, see [Offline and background operation](/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Service workers in the js13kPWA app

Let's see how the js13kPWA app uses Service Workers to provide offline capabilities.

### Registering the Service Worker

We'll start by looking at the code that registers a new Service Worker, in the app.js file:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./pwa-examples/js13kpwa/sw.js");
}
```

If the service worker API is supported in the browser, it is registered against the site using the {{domxref("ServiceWorkerContainer.register()")}} method. Its contents reside in the sw\.js file, and can be executed after the registration is successful. It's the only piece of Service Worker code that sits inside the app.js file; everything else that is Service Worker-specific is written in the sw\.js file itself.

### Lifecycle of a Service Worker

When registration is complete, the sw\.js file is automatically downloaded, then installed, and finally activated.

#### Installation

The API allows us to add event listeners for key events we are interested in — the first one is the `install` event:

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});
```

In the `install` listener, we can initialize the cache and add files to it for offline use. Our js13kPWA app does exactly that.

First, a variable for storing the cache name is created, and the app shell files are listed in one array.

```js
const cacheName = "js13kPWA-v1";
const appShellFiles = [
  "/pwa-examples/js13kpwa/",
  "/pwa-examples/js13kpwa/index.html",
  "/pwa-examples/js13kpwa/app.js",
  "/pwa-examples/js13kpwa/style.css",
  "/pwa-examples/js13kpwa/fonts/graduate.eot",
  "/pwa-examples/js13kpwa/fonts/graduate.ttf",
  "/pwa-examples/js13kpwa/fonts/graduate.woff",
  "/pwa-examples/js13kpwa/favicon.ico",
  "/pwa-examples/js13kpwa/img/js13kgames.png",
  "/pwa-examples/js13kpwa/img/bg.png",
  "/pwa-examples/js13kpwa/icons/icon-32.png",
  "/pwa-examples/js13kpwa/icons/icon-64.png",
  "/pwa-examples/js13kpwa/icons/icon-96.png",
  "/pwa-examples/js13kpwa/icons/icon-128.png",
  "/pwa-examples/js13kpwa/icons/icon-168.png",
  "/pwa-examples/js13kpwa/icons/icon-192.png",
  "/pwa-examples/js13kpwa/icons/icon-256.png",
  "/pwa-examples/js13kpwa/icons/icon-512.png",
];
```

Next, the links to images to be loaded along with the content from the data/games.js file are generated in the second array. After that, both arrays are merged using the {{jsxref("Array.prototype.concat()")}} function.

```js
const gamesImages = [];
for (let i = 0; i < games.length; i++) {
  gamesImages.push(`data/img/${games[i].slug}.jpg`);
}
const contentToCache = appShellFiles.concat(gamesImages);
```

Then we can manage the `install` event itself:

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[Service Worker] Caching all: app shell and content");
      await cache.addAll(contentToCache);
    })(),
  );
});
```

There are two things that need an explanation here: what {{domxref("ExtendableEvent.waitUntil")}} does, and what the {{domxref("Cache","caches")}} object is.

The service worker does not install until the code inside `waitUntil` is executed. It returns a promise — this approach is needed because installing may take some time, so we have to wait for it to finish.

`caches` is a special {{domxref("CacheStorage")}} object available in the scope of the given Service Worker to enable saving data — saving to [web storage](/en-US/docs/Web/API/Web_Storage_API) won't work, because web storage is synchronous. With Service Workers, we use the Cache API instead.

Here, we open a cache with a given name, then add all the files our app uses to the cache, so they are available next time it loads. Resources are identified by their request URL, which is relative to the worker's {{domxref("WorkerGlobalScope.location", "location", "", 1)}}.

You may notice we haven't cached `game.js`. This is the file that contains the data we use when displaying our games. In reality this data would most likely come from an API endpoint or database and caching the data would mean updating it periodically when there was network connectivity. We won't go into that here, but the [Periodic Background Sync API](/en-US/docs/Web/API/Web_Periodic_Background_Synchronization_API) is good further reading on this topic.

#### Activation

There is also an `activate` event, which is used in the same way as `install`. This event is usually used to delete any files that are no longer necessary and clean up after the app in general. We don't need to do that in our app, so we'll skip it.

### Responding to fetches

We also have a `fetch` event at our disposal, which fires every time an HTTP request is fired off from our app. This is very useful, as it allows us to intercept requests and respond to them with custom responses. For example:

```js
self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});
```

The response can be anything we want: the requested file, its cached copy, or a piece of JavaScript code that will do something specific — the possibilities are endless.

In our example app, we serve content from the cache instead of the network as long as the resource is actually in the cache. We do this whether the app is online or offline. If the file is not in the cache, the app adds it there first before then serving it:

```js
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })(),
  );
});
```

Here, we respond to the fetch event with a function that tries to find the resource in the cache and return the response if it's there. If not, we use another fetch request to fetch it from the network, then store the response in the cache so it will be available there next time it is requested.

The {{domxref("FetchEvent.respondWith")}} method takes over control — this is the part that functions as a proxy server between the app and the network. This allows us to respond to every single request with any response we want: prepared by the Service Worker, taken from cache, modified if needed.

That's it! Our app is caching its resources on install and serving them with fetch from the cache, so it works even if the user is offline. It also caches new content whenever it is added.

## Updates

There is still one point to cover: how do you upgrade a Service Worker when a new version of the app containing new assets is available? The version number in the cache name is key to this:

```js
const cacheName = "js13kPWA-v1";
```

When this updates to v2, we can then add all of our files (including our new files) to a new cache:

```js
contentToCache.push("/pwa-examples/js13kpwa/icons/icon-32.png");

// …

self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(contentToCache);
    })(),
  );
});
```

A new service worker is installed in the background, and the previous one (v1) works correctly up until there are no pages using it — the new Service Worker is then activated and takes over management of the page from the old one.

## Clearing the cache

Remember the `activate` event we skipped? It can be used to clear out the old cache we don't need anymore:

```js
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key === cacheName) {
            return;
          }
          return caches.delete(key);
        }),
      );
    }),
  );
});
```

This ensures we have only the files we need in the cache, so we don't leave any garbage behind; the [available cache space in the browser is limited](/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), so it is a good idea to clean up after ourselves.

## Other use cases

Serving files from cache is not the only feature Service Worker offers. If you have heavy calculations to do, you can offload them from the main thread and do them in the worker, and receive results as soon as they are available. Performance-wise, you can prefetch resources that are not needed right now, but might be in the near future, so the app will be faster when you actually need those resources.

## Summary

In this article we took a simple look at how you can make your PWA work offline with service workers. Be sure to check out our further documentation if you want to learn more about the concepts behind the [Service Worker API](/en-US/docs/Web/API/Service_Worker_API) and how to use it in more detail.

Service Workers are also used when dealing with [push notifications](/en-US/docs/Web/API/Push_API) — this will be explained in a subsequent article.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
