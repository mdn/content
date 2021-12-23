---
title: BackgroundFetchManager.fetch()
slug: Web/API/BackgroundFetchManager/fetch
tags:
  - API
  - Method
  - Reference
  - fetch
  - BackgroundFetchManager
  - Experimental
  - Service Workers
  - Fetch
browser-compat: api.BackgroundFetchManager.fetch
---
{{DefaultAPISidebar("Background Fetch API")}}

The **`fetch()`** method of the {{domxref("BackgroundFetchManager")}} interface returns a {{jsxref("Promise")}} that resolves with a {{domxref("BackgroundFetchRegistration")}} object for a supplied array of URLs and {{domxref("Request")}} objects.

## Syntax

```js
let backgroundFetchRegistration = BackgroundFetchManager.fetch(id, requests [,options]);
```

### Parameters

- `id`
  - : A developer-defined identifier that can be passed to the other methods to retrieve a {{domxref("backgroundFetchRegistration")}}.
- `requests`
  - : A {{domxref("RequestInfo")}} object or an array of such objects.
- `options` {{optional_inline}}
  - : A {{domxref("BackgroundFetchOptions")}} object.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("BackgroundFetchRegistration")}} object.

### Exceptions

- TypeError
  - : Raised if no request is provided, if the mode of a request is 'no-cors', if no service worker is present, a request already exists with the requested `id`, or the request fails.
- DOMException

  - : This method may raise a {{domxref("DOMException")}} of the following types:

    | Exception         | Description                                                                     |
    | ----------------- | ------------------------------------------------------------------------------- |
    | `AbortError`      | Indicates the fetch was aborted.                                                |
    | `NotAllowedError` | Indicates that user permission has not been granted to make background fetches. |

## Examples

The following examples shows how to use `fetch()` to create a
{{domxref("BackgroundFetchRegistration")}}. With an active
{{domxref('ServiceWorker', 'service worker')}}, use the
{{domxref('ServiceWorkerRegistration.backgroundFetch')}} property to access the
`BackgroundFetchManager` object and call its `fetch()`
method.

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
