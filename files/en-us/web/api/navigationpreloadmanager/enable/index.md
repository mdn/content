---
title: NavigationPreloadManager.enable()
slug: Web/API/NavigationPreloadManager/enable
tags:
  - API
  - Method
  - Reference
  - Offline
  - Service Workers
  - NavigationPreloadManager
  - Experimental
browser-compat: api.NavigationPreloadManager.enable
---
{{ServiceWorkerSidebar}}{{SeeCompatTable}}

The **`enable()`** method of the {{domxref("NavigationPreloadManager")}} interface is used to enable preloading of resources managed by the service worker.
It returns a promise that resolves with `undefined`.

The method should be called in the service worker's `activate` event handler (before the `fetch` event handler can be called).

If this method succeeds, resources will be automatically be fetched as soon as user navigation results in a GET request for a resource in the `scope` of the registered service worker (see {{domxref("ServiceWorkerContainer.register()")}}).
This can happen in parallel with the service worker being started, ensuring that much of the file may already have been retrieved when the service worked is ready to start processing `fetch()` requests.

## Syntax

```js
enable()
```

### Return Value

A {{jsxref("Promise")}} that resolves with {{jsxref('undefined')}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : There is no active worker associated with the registration to which this {{domxref("NavigationPreloadManager")}} belongs.

## Examples

The code below shows how to enable preloading, after first using {{domxref("ServiceWorkerRegistration.navigationPreload")}} to test that it is supported.

```js
addEventListener('activate', event => {
  event.waitUntil(async function() {
    if (self.registration.navigationPreload) {
      // Enable navigation preloads!
      await self.registration.navigationPreload.enable();
    }
  }());
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

{{domxref("NavigationPreloadManager.disable()")}}