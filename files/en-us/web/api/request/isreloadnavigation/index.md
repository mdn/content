---
title: "Request: isReloadNavigation property"
short-title: isReloadNavigation
slug: Web/API/Request/isReloadNavigation
page-type: web-api-instance-property
browser-compat: api.Request.isReloadNavigation
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`isReloadNavigation`** read-only property of the {{domxref("Request")}} interface is a boolean indicating whether the request is a user-triggered reload.

A user-triggered reload is made via a programmatic reload (for example, by calling {{domxref("Location.reload()")}}, {{domxref("History.go()", "History.go(0)")}}, or {{domxref("Navigation.reload()")}}), or via a browser control such as pressing <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd> or clicking the browser's reload button.

This property is primarily used within service worker {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}} event handlers to respond appropriately to reload requests versus non-reload requests.

## Value

A boolean value.

## Examples

### Basic usage

The following example can be used inside a service worker script to check for reloads and respond appropriately.

Inside a {{domxref("ServiceWorkerGlobalScope/fetch_event", "fetch")}} event handler, we check whether the event's {{domxref("Request.mode")}} is `navigate`, and if so, whether `isReloadNavigation` is `true`. If so, we've definitely got a reload navigation, so we fetch the page from the network to provide an updated version. If that fails, we try retrieving the page from the {{domxref("Cache")}} as a fallback.

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
