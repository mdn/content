---
title: "ServiceWorkerRegistration: backgroundFetch property"
short-title: backgroundFetch
slug: Web/API/ServiceWorkerRegistration/backgroundFetch
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ServiceWorkerRegistration.backgroundFetch
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`backgroundFetch`** read-only property of the
{{domxref("ServiceWorkerRegistration")}} interface returns a reference to a
{{domxref("BackgroundFetchManager")}} object, which can be used to initiate background fetch operations.

## Value

A {{domxref("BackgroundFetchManager")}} object.

## Examples

### Initiating a background fetch

The following code accesses the `backgroundFetch` property and uses it to initiate a background fetch operation.

```js
// main.js
async function requestBackgroundFetch(movieData) {
  const swRegistration = await navigator.serviceWorker.ready;
  const fetchRegistration = await swRegistration.backgroundFetch.fetch(
    "download-movie",
    ["/my-movie-part-1.webm", "/my-movie-part-2.webm"],
    {
      icons: movieIcons,
      title: "Downloading my movie",
      downloadTotal: 60 * 1024 * 1024,
      label: "Downloading a show",
    },
  );
  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
