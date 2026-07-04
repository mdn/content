---
title: "Request: isReloadNavigation property"
short-title: isReloadNavigation
slug: Web/API/Request/isReloadNavigation
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Request.isReloadNavigation
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`isReloadNavigation`** read-only property of the {{domxref("Request")}} interface is a boolean indicating whether the request is a user-triggered reload.

A user-triggered reload can be triggered via a browser control, such as pressing <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd> or clicking the browser's reload button, or programmaically (for example, by calling {{domxref("Location.reload()")}}, {{domxref("History.go()", "History.go(0)")}}, or {{domxref("Navigation.reload()")}}).

This property is primarily used within service worker {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}} event handlers to respond appropriately to reload requests versus non-reload requests.
For example, a reload request indicates that the user expects current data, so it should prefer content from the server over that from a cache.

## Value

A boolean value.

## Examples

### Basic usage

The following example can be used inside a service worker script to check for reloads and respond appropriately.

Inside a {{domxref("ServiceWorkerGlobalScope/fetch_event", "fetch")}} event handler, we first check whether the event's {{domxref("Request.mode")}} is `navigate` and `isReloadNavigation` properties are `true`. If so, this is a reload navigation; we therefore fetch the page from the network to provide an updated version. If that fails, we try retrieving the page from the {{domxref("Cache")}} as a fallback.

If the navigation is not a reload navigation, we try retrieving the page from the `Cache` first, and only fetch from the network if a cached version of the page is not found.

```js
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate" && event.request.isReloadNavigation) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          return response;
        })
        .catch(() => caches.match(event.request)),
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        return cached || fetch(event.request);
      }),
    );
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Navigation API", "", "", 1)}}
