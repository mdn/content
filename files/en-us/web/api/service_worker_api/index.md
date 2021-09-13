---
title: Service Worker API
slug: Web/API/Service_Worker_API
tags:
  - API
  - Landing
  - Offline
  - Overview
  - Reference
  - Service Workers
  - Workers
---
{{ServiceWorkerSidebar}}

Service workers essentially act as proxy servers that sit between web applications, the browser, and the network (when available). They are intended, among other things, to enable the creation of effective offline experiences, intercept network requests and take appropriate action based on whether the network is available, and update assets residing on the server. They will also allow access to push notifications and background sync APIs.

## Service worker concepts and usage

A service worker is an event-driven [worker](/en-US/docs/Web/API/Worker) registered against an origin and a path. It takes the form of a JavaScript file that can control the web-page/site that it is associated with, intercepting and modifying navigation and resource requests, and caching resources in a very granular fashion to give you complete control over how your app behaves in certain situations (the most obvious one being when the network is not available).

A service worker is run in a worker context: it therefore has no DOM access, and runs on a different thread to the main JavaScript that powers your app, so it is non-blocking. It is designed to be fully async; as a consequence, APIs such as synchronous [XHR](/en-US/docs/Web/API/XMLHttpRequest) and [Web Storage](/en-US/docs/Web/API/Web_Storage_API) can't be used inside a service worker.

Service workers only run over HTTPS, for security reasons. Having modified network requests, wide open to _man in the middle_ attacks would be really bad. In Firefox, Service Worker APIs are also hidden and cannot be used when the user is in [private browsing mode](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history).

> **Note:** On Firefox, for testing you can run service workers over HTTP (insecurely); simply check the **Enable Service Workers over HTTP (when toolbox is open)** option in the Firefox Devtools options/gear menu.

> **Note:** Unlike previous attempts in this area such as [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag), service workers don't make assumptions about what you are trying to do, but then break when those assumptions are not exactly right. Instead, service workers give you much more granular control.

> **Note:** Service workers make heavy use of [promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), as generally they will wait for responses to come through, after which they will respond with a success or failure action. The promises architecture is ideal for this.

### Registration

A service worker is first registered using the {{DOMxRef("ServiceWorkerContainer.register()")}} method. If successful, your service worker will be downloaded to the client and attempt installation/activation (see below) for URLs accessed by the user inside the whole origin, or inside a subset specified by you.

### Download, install and activate

At this point, your service worker will observe the following lifecycle:

1.  Download
2.  Install
3.  Activate

The service worker is immediately downloaded when a user first accesses a service worker–controlled site/page.

After that, it is updated when:

- A navigation to an in-scope page occurs.
- An event is fired on the service worker and it hasn't been downloaded in the last 24 hours.

Installation is attempted when the downloaded file is found to be new — either different to an existing service worker (byte-wise compared), or the first service worker encountered for this page/site.

If this is the first time a service worker has been made available, installation is attempted, then after a successful installation, it is activated.

If there is an existing service worker available, the new version is installed in the background, but not yet activated — at this point it is called the _worker in waiting_. It is only activated when there are no longer any pages loaded that are still using the old service worker. As soon as there are no more pages to be loaded, the new service worker activates (becoming the _active worker_). Activation can happen sooner using {{DOMxRef("ServiceWorkerGlobalScope.skipWaiting()")}} and existing pages can be claimed by the active worker using {{DOMxRef("Clients.claim()")}}.

You can listen for the {{domxref("ServiceWorkerGlobalScope/install_event", "install")}} event; a standard action is to prepare your service worker for usage when this fires, for example by creating a cache using the built in storage API, and placing assets inside it that you'll want for running your app offline.

There is also an {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}} event. The point where this event fires is generally a good time to clean up old caches and other things associated with the previous version of your service worker.

Your service worker can respond to requests using the {{DOMxRef("FetchEvent")}} event. You can modify the response to these requests in any way you want, using the {{DOMxRef("FetchEvent.respondWith()")}} method.

> **Note:** Because `install`/`activate` events could take a while to complete, the service worker spec provides a {{domxref("ExtendableEvent.waitUntil", "waitUntil()")}} method. Once it is called on `install` or `activate` events with a promise, functional events such as `fetch` and `push` will wait until the promise is successfully resolved.

For a complete tutorial to show how to build up your first basic example, read [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers).

## Other use case ideas

Service workers are also intended to be used for such things as:

- Background data synchronization.
- Responding to resource requests from other origins.
- Receiving centralized updates to expensive-to-calculate data such as geolocation or gyroscope, so multiple pages can make use of one set of data.
- Client-side compiling and dependency management of CoffeeScript, less, CJS/AMD modules, etc. for development purposes.
- Hooks for background services.
- Custom templating based on certain URL patterns.
- Performance enhancements, for example pre-fetching resources that the user is likely to need in the near future, such as the next few pictures in a photo album.

In the future, service workers will be able to do a number of other useful things for the web platform that will bring it closer towards native app viability. Interestingly, other specifications can and will start to make use of the service worker context, for example:

- [Background synchronization](https://github.com/slightlyoff/BackgroundSync): Start up a service worker even when no users are at the site, so caches can be updated, etc.
- [Reacting to push messages](/en-US/docs/Web/API/Push_API): Start up a service worker to send users a message to tell them new content is available.
- Reacting to a particular time & date.
- Entering a geo-fence.

## Interfaces

- {{DOMxRef("Cache")}} {{Experimental_Inline}}
  - : Represents the storage for {{DOMxRef("Request")}} / {{DOMxRef("Response")}} object pairs that are cached as part of the {{DOMxRef("ServiceWorker")}} life cycle.
- {{DOMxRef("CacheStorage")}} {{Experimental_Inline}}
  - : Represents the storage for {{DOMxRef("Cache")}} objects. It provides a master directory of all the named caches that a {{DOMxRef("ServiceWorker")}} can access, and maintains a mapping of string names to corresponding {{DOMxRef("Cache")}} objects.
- {{DOMxRef("Client")}} {{Experimental_Inline}}
  - : Represents the scope of a service worker client. A service worker client is either a document in a browser context or a {{DOMxRef("SharedWorker")}}, which is controlled by an active worker.
- {{DOMxRef("Clients")}} {{Experimental_Inline}}
  - : Represents a container for a list of {{DOMxRef("Client")}} objects; the main way to access the active service worker clients at the current origin.
- {{DOMxRef("ExtendableEvent")}} {{Experimental_Inline}}
  - : Extends the lifetime of the `install` and `activate` events dispatched on the {{DOMxRef("ServiceWorkerGlobalScope")}}, as part of the service worker lifecycle. This ensures that any functional events (like {{DOMxRef("FetchEvent")}}) are not dispatched to the {{DOMxRef("ServiceWorker")}}, until it upgrades database schemas, and deletes outdated cache entries, etc.
- {{DOMxRef("ExtendableMessageEvent")}} {{Experimental_Inline}}
  - : The event object of a {{domxref("ServiceWorkerGlobalScope/message_event")}} event fired on a service worker (when a channel message is received on the {{DOMxRef("ServiceWorkerGlobalScope")}} from another context) — extends the lifetime of such events.
- {{DOMxRef("FetchEvent")}} {{Experimental_Inline}}
  - : The parameter passed into the {{DOMxRef("ServiceWorkerGlobalScope.onfetch")}} handler, `FetchEvent` represents a fetch action that is dispatched on the {{DOMxRef("ServiceWorkerGlobalScope")}} of a {{DOMxRef("ServiceWorker")}}. It contains information about the request and resulting response, and provides the {{DOMxRef("FetchEvent.respondWith", "FetchEvent.respondWith()")}} method, which allows us to provide an arbitrary response back to the controlled page.
- {{DOMxRef("InstallEvent")}} {{Experimental_Inline}}
  - : The parameter passed into the {{DOMxRef("ServiceWorkerGlobalScope.oninstall", "oninstall")}} handler, the `InstallEvent` interface represents an install action that is dispatched on the {{DOMxRef("ServiceWorkerGlobalScope")}} of a {{DOMxRef("ServiceWorker")}}. As a child of {{DOMxRef("ExtendableEvent")}}, it ensures that functional events such as {{DOMxRef("FetchEvent")}} are not dispatched during installation.
- {{DOMxRef("NavigationPreloadManager")}} {{Experimental_Inline}}
  - : Provides methods for managing the preloading of resources with a service worker.
- {{DOMxRef("Navigator.serviceWorker")}}
  - : Returns a {{DOMxRef("ServiceWorkerContainer")}} object, which provides access to registration, removal, upgrade, and communication with the {{DOMxRef("ServiceWorker")}} objects for the [associated document](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).
- {{DOMxRef("NotificationEvent")}} {{Experimental_Inline}}
  - : The parameter passed into the {{DOMxRef("ServiceWorkerGlobalScope.onnotificationclick", "onnotificationclick")}} handler, the `NotificationEvent` interface represents a notification click event that is dispatched on the {{DOMxRef("ServiceWorkerGlobalScope")}} of a {{DOMxRef("ServiceWorker")}}.
- {{DOMxRef("ServiceWorker")}} {{Experimental_Inline}}
  - : Represents a service worker. Multiple browsing contexts (e.g. pages, workers, etc.) can be associated with the same `ServiceWorker` object.
- {{DOMxRef("ServiceWorkerContainer")}} {{Experimental_Inline}}
  - : Provides an object representing the service worker as an overall unit in the network ecosystem, including facilities to register, unregister, and update service workers, and access the state of service workers and their registrations.
- {{DOMxRef("ServiceWorkerGlobalScope")}}
  - : Represents the global execution context of a service worker.
- {{DOMxRef("ServiceWorkerMessageEvent")}} {{Deprecated_Inline}}
  - : Represents a message sent to a {{DOMxRef("ServiceWorkerGlobalScope")}}. **Note that this interface is deprecated in modern browsers. Service worker messages will now use the {{DOMxRef("MessageEvent")}} interface, for consistency with other web messaging features.**
- {{DOMxRef("ServiceWorkerRegistration")}} {{Experimental_Inline}}
  - : Represents a service worker registration.
- {{DOMxRef("SyncEvent")}} {{Non-standard_Inline}}
  - : The SyncEvent interface represents a sync action that is dispatched on the {{DOMxRef("ServiceWorkerGlobalScope")}} of a ServiceWorker.
- {{DOMxRef("SyncManager")}} {{Non-standard_Inline}}
  - : Provides an interface for registering and listing sync registrations.
- {{DOMxRef("WindowClient")}} {{Experimental_Inline}}
  - : Represents the scope of a service worker client that is a document in a browser context, controlled by an active worker. This is a special type of {{DOMxRef("Client")}} object, with some additional methods and properties available.

## Specifications

| Specification                                           |
| ------------------------------------------------------- |
| [Service Workers](https://w3c.github.io/ServiceWorker/) |

## See also

- [ServiceWorker Cookbook](https://serviceworke.rs)
- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
