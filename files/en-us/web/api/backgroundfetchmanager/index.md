---
title: BackgroundFetchManager
slug: Web/API/BackgroundFetchManager
tags:
  - API
  - Interface
  - Reference
  - BackgroundFetchManager
  - Experimental
  - Service Workers
  - Fetch
browser-compat: api.BackgroundFetchManager
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`BackgroundFetchManager`** interface of the {{domxref('Background Fetch API','','',' ')}} is a map where the keys are background fetch IDs and the values are {{domxref("BackgroundFetchRegistration")}} objects.

## Properties

None.

## Methods

- {{domxref('BackgroundFetchManager.fetch','fetch()' )}}
  - : Returns a {{jsxref("Promise")}} that resolves with a {{domxref("BackgroundFetchRegistration")}} object for a supplied array of URLs and {{domxref("Request")}} objects.
- {{domxref('BackgroundFetchManager.get','get()')}}
  - : Returns a {{jsxref("Promise")}} that resolves with the {{domxref("BackgroundFetchRegistration")}} associated with the provided `id` or {{jsxref("undefined")}} if the `id` is not found.
- {{domxref('BackgroundFetchManager.getIDs','getIDs()')}}
  - : Returns the IDs of all registered background fetches.

## Examples

The example below shows how to get an instance of {{domxref("BackgroundFetchManager")}} from a {{domxref("ServiceWorkerRegistration")}} object and calls `fetch()` to download a video in the background.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch('my-fetch', ['/ep-5.mp3', 'ep-5-artwork.jpg'], {
    title: 'Episode 5: Interesting things.',
    icons: [{
      sizes: '300x300',
      src: '/ep-5-icon.png',
      type: 'image/png',
    }],
    downloadTotal: 60 * 1024 * 1024,
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
