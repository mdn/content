---
title: InstallEvent
slug: Web/API/InstallEvent
page-type: web-api-interface
tags:
  - API
  - InstallEvent
  - Interface
  - Offline
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - Workers
  - Deprecated
  - Non-standard
browser-compat: api.InstallEvent
---
{{APIRef("Service Workers API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The parameter passed into the {{domxref("ServiceWorkerGlobalScope.install_event", "oninstall")}} handler, the `InstallEvent` interface represents an install action that is dispatched on the {{domxref("ServiceWorkerGlobalScope")}} of a {{domxref("ServiceWorker")}}. As a child of {{domxref("ExtendableEvent")}}, it ensures that functional events such as {{domxref("FetchEvent")}} are not dispatched during installation.

This interface inherits from the {{domxref("ExtendableEvent")}} interface.

{{InheritanceDiagram}}

## Constructor

- {{domxref("InstallEvent.InstallEvent", "InstallEvent()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Creates a new `InstallEvent` object.

## Properties

_Inherits properties from its ancestor, {{domxref("Event")}}_.

- {{domxref("InstallEvent.activeWorker")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns the {{domxref("ServiceWorker")}} that is currently controlling the page.

## Methods

_Inherits methods from its parent, {{domxref("ExtendableEvent")}}_.

## Examples

This code snippet is from the [service worker prefetch sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (see [prefetch running live](https://googlechrome.github.io/samples/service-worker/prefetch/).) The code calls {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}} in {{domxref("ServiceWorkerGlobalScope.install_event", "ServiceWorkerGlobalScope.oninstall")}} and delays treating the {{domxref("ServiceWorkerRegistration.installing")}} worker as installed until the passed promise resolves successfully. The promise resolves when all resources have been fetched and cached, or when any exception occurs.

The code snippet also shows a best practice for versioning caches used by the service worker. Although this example has only one cache, you can use this approach for multiple caches. The code maps a shorthand identifier for a cache to a specific, versioned cache name.

> **Note:** Logging statements are visible in Google Chrome via the "Inspect" interface for the relevant service worker accessed via chrome://serviceworker-internals.

```js
const CACHE_VERSION = 1;
const CURRENT_CACHES = {
  prefetch: `prefetch-cache-v${CACHE_VERSION}`
};

self.addEventListener('install', (event) => {
  const urlsToPrefetch = [
    './static/pre_fetched.txt',
    './static/pre_fetched.html',
    'https://www.chromium.org/_/rsrc/1302286216006/config/customLogo.gif'
  ];

  console.log('Handling install event. Resources to pre-fetch:', urlsToPrefetch);

  event.waitUntil(
    caches.open(CURRENT_CACHES['prefetch']).then((cache) => {
      return cache.addAll(urlsToPrefetch.map((urlToPrefetch) => {
        return new Request(urlToPrefetch, {mode: 'no-cors'});
      })).then(() => {
        console.log('All resources have been fetched and cached.');
      });
    }).catch((error) => {
      console.error('Pre-fetching failed:', error);
    })
  );
});
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("NotificationEvent")}}
- {{jsxref("Promise")}}
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
