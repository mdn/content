---
title: Progressive web app structure
slug: Web/Progressive_web_apps/App_structure
tags:
  - App shell
  - PWAs
  - Progressive web apps
  - Service Workers
  - Streams
  - Structure
  - js13kGames
  - progressive
---
{{PreviousMenuNext("Web/Progressive_web_apps/Introduction", "Web/Progressive_web_apps/Offline_Service_workers", "Web/Progressive_web_apps")}}

Now that we know the theory behind PWAs, let's look at the recommended structure of an actual app. We will start with analyzing the [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) application, why it is built that way, and what benefits it brings.

## Architecture of an app

There are two main, different approaches to rendering a website — on the server or on the client. They both have their advantages and disadvantages, and you can mix the two approaches to some degree.

- Server-side rendering (SSR) means a website is rendered on the server, so it offers quicker first load, but navigating between pages requires downloading new HTML content. It works great across browsers, but it suffers in terms of time navigating between pages and therefore general perceived performance — loading a page requires a new round trip to the server.
- Client-side rendering (CSR) allows the website to be updated in the browser almost instantly when navigating to different pages, but requires more of an initial download hit and extra rendering on the client at the beginning. The website is slower on an initial visit, but can be faster to navigate.

Mixing SSR with CSR can lead to the best results — you can render a website on the server, cache its contents, and then update the rendering on the client-side as and when needed. The first page load is quick because of the SSR, and the navigation between pages is smooth because the client can re-render the page with only the parts that have changed.

PWAs can be built using any approach you like, but some will work better than the others. The most popular approach is the "app shell" concept, which mixes SSR and CSR in exactly the way described above, and in addition follows the "offline first" methodology which we will explain in detail in upcoming articles and use in our example application. There is also a new approach involving the [Streams API](/en-US/docs/Web/API/Streams_API), which we'll mention briefly.

## App shell

The App shell concept is concerned with loading a minimal user interface as soon as possible and then caching it so it is available offline for subsequent visits before then loading all the contents of the app. That way, the next time someone visits the app from the device, the UI loads from the cache immediately and any new content is requested from the server (if it isn't available in the cache already).

This structure is fast, and also feels fast as the user sees "something" instantly, instead of a loading spinner or a blank page. It also allows the website to be accessible offline if the network connection is not available.

We can control what is requested from the server and what is retrieved from the cache with a [service worker](/en-US/docs/Web/API/Service_Worker_API), which will be explained in detail in the next article — for now let's focus on the structure itself.

### Why should I use it?

This architecture allows a website to benefit the most from all the PWA features — it caches the app shell and manages the dynamic content in a way that greatly improves the performance. In addition to the basic shell, you can add other features such as [add to home screen](/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen) or [push notifications](/en-US/docs/Web/API/Push_API), safe in the knowledge that the app will still work OK if they are not supported by the user's browser — this is the beauty of progressive enhancement.

The website feels like a native app with instant interaction and solid performance while keeping all the benefits of the web.

### Being linkable, progressive and responsive by design

It's important to remember the PWA advantages and keep them in mind when designing the application. The app shell approach allows websites to be:

- Linkable: Even though it behaves like a native app, it is still a website — you can click on the links within the page and send a URL to someone if you want to share it.
- Progressive: Start with the "good, old basic website" and progressively add new features while remembering to detect if they are available in the browser and gracefully handle any errors that crop up if support is not available. For example, an offline mode with the help of service workers is just an extra trait that makes the website experience better, but it's still perfectly usable without it.
- Responsive: Responsive web design also applies to progressive web apps, as both are mainly for mobile devices. There are so many varied devices with browsers — it's important to prepare your website so it works on different screen sizes, viewports or pixel densities, using technologies like [viewport meta tag](/en-US/docs/Web/HTML/Viewport_meta_tag), [CSS media queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries), [Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout), and [CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout).

## Different concept: streams

An entirely different approach to server- or client-side rendering can be achieved with the [Streams API](/en-US/docs/Web/API/Streams_API). With a little help from service workers, streams can greatly improve the way we parse content.

The app shell model requires all the resources to be available before the website can start rendering. It's different with HTML, as the browser is actually streaming the data already and you can see when the elements are loaded and rendered on the website. To have the JavaScript "operational", however, it has to be downloaded in its entirety.

The Streams API allows developers to have direct access to data streaming from the server — if you want to perform an operation on the data (for example, adding a filter to a video), you no longer need to wait for all of it to be downloaded and converted to a blob (or whatever) — you can start right away. It provides fine-grained control — the stream can be started, chained with another stream, cancelled, checked for errors, and more.

In theory, streaming is a better model, but it's also more complex, and at the time of writing (March 2018) the Streams API is still a work-in-progress and not yet fully available in any of the major browsers. When it is available, it will be the fastest way of serving the content — the benefits are going to be huge in terms of performance.

For working examples and more information, see the [Streams API documentation](/en-US/docs/Web/API/Streams_API).

## Structure of our example application

The [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) website structure is quite simple: it consists of a single HTML file ([index.html](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/index.html)) with basic CSS styling ([style.css](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/style.css)), and a few images, scripts, and fonts. The folder structure looks like this:

![Folder structure of js13kPWA.](js13kpwa-directory.png)

### The HTML

From the HTML point of view, the app shell is everything outside the content section:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>js13kGames A-Frame entries</title>
  <meta name="description" content="A list of A-Frame entries submitted to the js13kGames 2017 competition, used as an example for the MDN articles about Progressive Web Apps.">
  <meta name="author" content="end3r">
  <meta name="theme-color" content="#B12A34">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta property="og:image" content="https://js13kgames.com/img/js13kgames-banner.png">
  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="style.css">
  <link rel="manifest" href="js13kpwa.webmanifest">
  <script src="data/games.js" defer></script>
  <script src="app.js" defer></script>
</head>
<body>
<header>
  <p><a class="logo" href="https://js13kgames.com"><img src="img/js13kgames.png" alt="js13kGames"></a></p>
</header>
<main>
  <h1>js13kGames A-Frame entries</h1>
  <p class="description">List of games submitted to the <a href="https://js13kgames.com/aframe">A-Frame category</a> in the <a href="https://2017.js13kgames.com">js13kGames 2017</a> competition. You can <a href="https://github.com/mdn/pwa-examples/blob/master/js13kpwa">fork js13kPWA on GitHub</a> to check its source code.</p>
  <button id="notifications">Request dummy notifications</button>
  <section id="content">
    // Content inserted in here
  </section>
</main>
<footer>
  <p>© js13kGames 2012-2018, created and maintained by <a href="https://end3r.com">Andrzej Mazur</a> from <a href="https://enclavegames.com">Enclave Games</a>.</p>
</footer>
</body>
</html>
```

The {{htmlelement("head")}} section contains some basic info like title, description and links to CSS, web manifest, games content JS file, and app.js — that's where our JavaScript application is initialized. The {{htmlelement("body")}} is split into the {{htmlelement("header")}} (containing linked image), {{htmlelement("main")}} page (with title, description and place for a content), and {{htmlelement("footer")}} (copy and links).

The app's only job is to list all the A-Frame entries from the js13kGames 2017 competition. As you can see it is a very ordinary, one page website — the point is to have something simple so we can focus on the implementation of the actual PWA features.

### The CSS

The CSS is also as plain as possible: it uses {{cssxref("@font-face")}} to load and use a custom font, and it applies some simple styling of the HTML elements. The overall approach is to have the design look good on both mobile (with a responsive web design approach) and desktop devices.

### The main app JavaScript

The app.js file does a few things we will look into closely in the next articles. First of all it generates the content based on this template:

```js
const template = `<article>
  <img src='data/img/placeholder.png' data-src='data/img/SLUG.jpg' alt='NAME'>
  <h3>#POS. NAME</h3>
  <ul>
  <li><span>Author:</span> <strong>AUTHOR</strong></li>
  <li><span>Twitter:</span> <a href='https://twitter.com/TWITTER'>@TWITTER</a></li>
  <li><span>Website:</span> <a href='http://WEBSITE/'>WEBSITE</a></li>
  <li><span>GitHub:</span> <a href='https://GITHUB'>GITHUB</a></li>
  <li><span>More:</span> <a href='http://js13kgames.com/entries/SLUG'>js13kgames.com/entries/SLUG</a></li>
  </ul>
</article>`;
let content = '';
for (let i = 0; i < games.length; i++) {
  let entry = template.replace(/POS/g, (i + 1))
    .replace(/SLUG/g, games[i].slug)
    .replace(/NAME/g, games[i].name)
    .replace(/AUTHOR/g, games[i].author)
    .replace(/TWITTER/g, games[i].twitter)
    .replace(/WEBSITE/g, games[i].website)
    .replace(/GITHUB/g, games[i].github);
  entry = entry.replace('<a href=\'http:///\'></a>', '-');
  content += entry;
}
document.getElementById('content').innerHTML = content;
```

Next, it registers a service worker:

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/pwa-examples/js13kpwa/sw.js');
}
```

The next code block requests permission for notifications when a button is clicked:

```js
const button = document.getElementById('notifications');
button.addEventListener('click', () => {
  Notification.requestPermission().then((result) => {
    if (result === 'granted') {
      randomNotification();
    }
  });
});
```

The last block creates notifications that display a randomly-selected item from the games list:

```js
function randomNotification() {
  const randomItem = Math.floor(Math.random() * games.length);
  const notifTitle = games[randomItem].name;
  const notifBody = `Created by ${games[randomItem].author}.`;
  const notifImg = `data/img/${games[randomItem].slug}.jpg`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}
```

### The service worker

The last file we will quickly look at is the service worker: sw\.js — it first imports data from the games.js file:

```js
self.importScripts('data/games.js');
```

Next, it creates a list of all the files to be cached, both from the app shell and the content:

```js
const cacheName = 'js13kPWA-v1';
const appShellFiles = [
  '/pwa-examples/js13kpwa/',
  '/pwa-examples/js13kpwa/index.html',
  '/pwa-examples/js13kpwa/app.js',
  '/pwa-examples/js13kpwa/style.css',
  '/pwa-examples/js13kpwa/fonts/graduate.eot',
  '/pwa-examples/js13kpwa/fonts/graduate.ttf',
  '/pwa-examples/js13kpwa/fonts/graduate.woff',
  '/pwa-examples/js13kpwa/favicon.ico',
  '/pwa-examples/js13kpwa/img/js13kgames.png',
  '/pwa-examples/js13kpwa/img/bg.png',
  '/pwa-examples/js13kpwa/icons/icon-32.png',
  '/pwa-examples/js13kpwa/icons/icon-64.png',
  '/pwa-examples/js13kpwa/icons/icon-96.png',
  '/pwa-examples/js13kpwa/icons/icon-128.png',
  '/pwa-examples/js13kpwa/icons/icon-168.png',
  '/pwa-examples/js13kpwa/icons/icon-192.png',
  '/pwa-examples/js13kpwa/icons/icon-256.png',
  '/pwa-examples/js13kpwa/icons/icon-512.png',
];
const gamesImages = [];
for (let i = 0; i < games.length; i++) {
  gamesImages.push(`data/img/${games[i].slug}.jpg`);
}
const contentToCache = appShellFiles.concat(gamesImages);
```

The next block installs the service worker, which then actually caches all the files contained in the above list:

```js
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(contentToCache);
  })());
});
```

Last of all, the service worker fetches content from the cache if it is available there, providing offline functionality:

```js
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) { return r; }
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});
```

### The JavaScript data

The games data is present in the data folder in a form of a JavaScript object ([games.js](https://github.com/mdn/pwa-examples/blob/master/js13kpwa/data/games.js)):

```js
const games = [
  {
    slug: 'lost-in-cyberspace',
    name: 'Lost in Cyberspace',
    author: 'Zosia and Bartek',
    twitter: 'bartaz',
    website: '',
    github: 'github.com/bartaz/lost-in-cyberspace'
  },
  {
    slug: 'vernissage',
    name: 'Vernissage',
    author: 'Platane',
    twitter: 'platane_',
    website: 'github.com/Platane',
    github: 'github.com/Platane/js13k-2017'
  },
  // ...
  {
    slug: 'emma-3d',
    name: 'Emma-3D',
    author: 'Prateek Roushan',
    twitter: '',
    website: '',
    github: 'github.com/coderprateek/Emma-3D'
  }
];
```

Every entry has its own image in the data/img folder. This is our content, loaded into the content section with JavaScript.

## Next up

In the next article we will look in more detail at how the app shell and the content are cached for offline use with the help from the service worker.

{{PreviousMenuNext("Web/Progressive_web_apps/Introduction", "Web/Progressive_web_apps/Offline_Service_workers", "Web/Progressive_web_apps")}}

{{QuickLinksWithSubpages("/en-US/docs/Web/Progressive_web_apps/")}}
