---
title: "BackgroundFetchManager: fetch() method"
short-title: fetch()
slug: Web/API/BackgroundFetchManager/fetch
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BackgroundFetchManager.fetch
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`fetch()`** method of the {{domxref("BackgroundFetchManager")}} interface initiates a background fetch operation, given one or more URLs or {{domxref("Request")}} objects.

## Syntax

```js-nolint
fetch(id, requests)
fetch(id, requests, options)
```

### Parameters

- `id`
  - : A developer-defined identifier that can be passed to the other methods to retrieve the {{domxref("BackgroundFetchRegistration")}} for this operation.
- `requests`

  - : A `RequestInfo` object or an array of `RequestInfo` objects.

    Each `RequestInfo` object is a {{domxref("Request")}} object or a string that will be given as the `input` argument to the {{domxref("Request.Request()", "Request()")}} constructor.

- `options` {{optional_inline}}

  - : An object which will be used to customize the fetch progress dialog that the browser shows to the user. It has the following properties:

    - `title`
      - : A string that will be used as the title for the progress dialog.
    - `icons`
      - : An array of objects, each representing an icon that the browser may use for the progress dialog. Each object has the following properties:
        - `src`
          - : A string representing a URL to the icon file.
        - `sizes`
          - : A string representing the sizes of the image, expressed using the same syntax as the [`sizes`](/en-US/docs/Web/HTML/Element/link#sizes) attribute of the [`<link>`](/en-US/docs/Web/HTML/Element/link) element. {{optional_inline}}
        - `type`
          - : A string representing the {{Glossary("MIME")}} type of the icon. {{optional_inline}}
        - `label`
          - : A string representing the accessible name of the icon. {{optional_inline}}
    - `downloadTotal`

      - : A number representing the estimated total download size, in bytes, for the fetch operation. This is used to show the user how big the download is and to show the user download progress.

        As soon as the total download size exceeds `downloadTotal`, then the fetch is aborted.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("BackgroundFetchRegistration")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Raised if no request is provided, if the mode of a request is 'no-cors', if no service worker is present, a request already exists with the requested `id`, or the request fails.
- `AbortError` {{domxref("DOMException")}}
  - : Indicates that the fetch was aborted.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Indicates that user permission has not been granted to make background fetches.

## Examples

The following example shows how to use `fetch()` to initiate a background fetch operation. With an active
{{domxref('ServiceWorker', 'service worker', "", "nocode")}}, use the
{{domxref('ServiceWorkerRegistration.backgroundFetch')}} property to access the
`BackgroundFetchManager` object and call its `fetch()`
method.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episode 5: Interesting things.",
      icons: [
        {
          sizes: "300x300",
          src: "/ep-5-icon.png",
          type: "image/png",
          label: "Downloading a show",
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    },
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
