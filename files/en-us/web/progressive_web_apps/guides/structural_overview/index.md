---
title: Structural overview of progressive web apps
slug: Web/Progressive_web_apps/Guides/Structural_overview
---

{{PWASidebar}}

While progressive web apps (PWAs) can do anything any web content can do, they need to have a particular structure and include specific components in order to be recognized as a web app that can be used both on the web and installed and run as a local application. In this structural overview, we'll look at the features that make up a standard web application, as well as some design patterns you can follow when building your PWA.

## Architecture of an app

There are two main, different approaches to rendering a website — on the server or on the client. They both have their advantages and disadvantages, and you can mix the two approaches to some degree.

- **Server-side rendering** (**SSR**) means a website is rendered on the server, so it offers quicker first load, but navigating between pages requires downloading new HTML content. It works great across browsers, but it suffers in terms of time navigating between pages and therefore general perceived performance — loading a page requires a new round trip to the server.
- **Client-side rendering** (**CSR**) allows the website to be updated in the browser almost instantly when navigating to different pages, but requires more of an initial download hit and extra rendering on the client at the beginning. The website is slower on an initial visit, but can be faster to navigate.

The best results tend to come when you use both client-side and server-side rendering; you can render a website on the server, cache its contents, and then update the rendering on the client side as needed. The first page load is quick because of the SSR, and the navigation between pages is smooth because the client can re-render the page with only the parts that have changed.

PWAs can be built using any approach you like, but some will work better than the others. The most popular approach is the **app shell** concept, which mixes SSR and CSR in exactly the way described above, and in addition follows the "offline first" methodology which we will explain in detail in upcoming articles and use in our example application. There is also a new approach involving the [Streams API](/en-US/docs/Web/API/Streams_API), which we'll mention briefly.

## The app shell concept

The **app shell** concept is concerned with loading a minimal user interface and content as soon as possible, caching it so it's available offline for subsequent visits before then loading the remainder of the app's contents. That way, the next time someone visits the app from the device, the UI loads from the cache immediately and any new content is requested from the server (if it isn't available in the cache already).

This structure is fast, and also feels fast as the user sees "something" instantly, instead of a loading spinner or a blank page. It also allows the website to be accessible offline if the network connection is not available.

We can control what is requested from the server and what is retrieved from the cache with a [service worker](/en-US/docs/Web/API/Service_Worker_API), which will be explained in detail in the next article — for now let's focus on the structure itself.

### Benefits of the app shell pattern

This architecture allows a website to benefit the most from all the PWA features — it caches the app shell and manages the dynamic content in a way that greatly improves the performance. In addition to the basic shell, you can add other features such as [push notifications](/en-US/docs/Web/API/Push_API), safe in the knowledge that the app will still work OK if they are not supported by the user's browser — this is the beauty of progressive enhancement.

The website feels like a native app with instant interaction and solid performance while keeping all the benefits of the web.

### Being linkable, progressive, and responsive by design

It's important to remember the PWA advantages and keep them in mind when designing the application. The app shell approach allows websites to be:

- Linkable: Even though it behaves like a native app, it is still a website — you can click on the links within the page and send a URL to someone if you want to share it.
- Progressive: Start with the "good, old basic website" and progressively add new features while remembering to detect if they are available in the browser and gracefully handle any errors that crop up if support is not available. For example, an offline mode with the help of service workers is just an extra trait that makes the website experience better, but it's still perfectly usable without it.
- Responsive: Responsive web design also applies to progressive web apps, as both are mainly for mobile devices. There are so many varied devices with browsers — it's important to prepare your website so it works on different screen sizes, viewports or pixel densities, using technologies like the [viewport meta tag](/en-US/docs/Web/HTML/Viewport_meta_tag), [CSS media queries](/en-US/docs/Web/CSS/Media_Queries), [Flexbox](/en-US/docs/Learn/CSS/CSS_layout/Flexbox), and [CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout).

## Another approach: Streams

An entirely different approach to server- or client-side rendering can be achieved with the [Streams API](/en-US/docs/Web/API/Streams_API). With a little help from service workers, streams can greatly improve the way we parse content.

The app shell model requires all the resources to be available before the website can start rendering. It's different with [HTML](/en-US/docs/Web/HTML), as the browser is actually streaming the data already and you can see when the elements are loaded and rendered on the website. To have the JavaScript actually work, however, it has to be downloaded in its entirety.

The Streams API allows developers to have direct access to data streaming from the server. If you want to perform an operation on the data (for example, adding a filter to a video), you no longer need to wait for all of it to be downloaded and converted to a blob (or whatever). Instead, you can start right away. It provides fine-grained control: the stream can be started, chained with another stream, canceled, checked for errors, and more.

In theory, streaming is a better model than the app shell model, but it's also more complex, and the Streams API isn't yet fully supported by any of the major browsers. Once it's available, however, it will be the fastest way to serve your app's content. The performance benefits will be truly spectacular.

For working examples and more information, see the [Streams API documentation](/en-US/docs/Web/API/Streams_API).
