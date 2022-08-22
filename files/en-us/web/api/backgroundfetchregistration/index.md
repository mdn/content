---
title: BackgroundFetchRegistration
slug: Web/API/BackgroundFetchRegistration
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - BackgroundFetchRegistration
  - Experimental
browser-compat: api.BackgroundFetchRegistration
---
{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

The **`BackgroundFetchRegistration`** interface of the {{domxref('Background Fetch API','','',' ')}} represents an individual background fetch.

A `BackgroundFetchRegistration` instance is returned by the {{domxref("BackgroundFetchManager.fetch()")}} or {{domxref("BackgroundFetchManager.get()")}} methods, and therefore there has no constructor.

{{InheritanceDiagram}}

## Properties

The following properties are available synchronously, as convenience properties copied from those in the `BackgroundFetchRegistration` instance.

- {{domxref("BackgroundFetchRegistration.id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string containing the background fetch's ID.
- {{domxref("BackgroundFetchRegistration.uploadTotal")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{jsxref("number")}} containing the total number of bytes to be uploaded.
- {{domxref("BackgroundFetchRegistration.uploaded")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{jsxref("number")}} containing the size in bytes successfully sent, initially `0`.
- {{domxref("BackgroundFetchRegistration.downloadTotal")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{jsxref("number")}} containing the total size in bytes of this download. This is the value set when the background fetch was registered, or `0`.
- {{domxref("BackgroundFetchRegistration.downloaded")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{jsxref("number")}} containing the size in bytes that has been downloaded, initially `0`.
- {{domxref("BackgroundFetchRegistration.result")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an empty string initially, on completion either the string `"success"` or `"failure"`.
- {{domxref("BackgroundFetchRegistration.failureReason")}} {{ReadOnlyInline}} {{Experimental_Inline}}

  - : One of the following strings:

    - `""`
      - : The background fetch has not completed, or was successful.
    - `"aborted"`
      - : The operation was cancelled by the user, or {{domxref("BackgroundFetchRegistration.abort()","abort()")}} was called.
    - `"bad-status"`
      - : A response had a not-ok status (a status outside the range 200-299).
    - `"fetch-error"`
      - : A fetch failed for other reasons, for example CORS, or a network failure.
    - `"quota-exceeded"`
      - : Storage quota was reached during the operation.
    - `"download-total-exceeded"`
      - : The provided `downloadTotal` was exceeded. This value was set when the background fetch was registered.

- {{domxref("BackgroundFetchRegistration.recordsAvailable")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{jsxref("boolean")}} indicating whether the `recordsAvailable` flag is set.

## Methods

- {{domxref("BackgroundFetchRegistration.abort","BackgroundFetchRegistration.abort()")}} {{Experimental_Inline}}
  - : Aborts the background fetch. Returns a {{jsxref("Promise")}} that resolves with `true` if the fetch was successfully aborted.
- {{domxref("BackgroundFetchRegistration.match","BackgroundFetchRegistration.match()")}} {{Experimental_Inline}}
  - : Returns a single {{domxref("BackgroundFetchRecord")}} object which is the first match for the arguments.
- {{domxref("BackgroundFetchRegistration.matchAll","BackgroundFetchRegistration.matchAll()")}} {{Experimental_Inline}}
  - : Returns a {{jsxref("Promise")}} that resolves with an array of {{domxref("BackgroundFetchRecord")}} objects containing requests and responses.

## Events

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`progress`](/en-US/docs/Web/API/BackgroundFetchRegistration/progress_event)  {{Experimental_Inline}}

  - : Fired when there is a change to any of the following properties:
    {{domxref("BackgroundFetchRegistration.uploaded", "uploaded")}},
    {{domxref("BackgroundFetchRegistration.downloaded", "downloaded")}},
    {{domxref("BackgroundFetchRegistration.result", "result")}} or
    {{domxref("BackgroundFetchRegistration.failureReason", "failureReason")}}.

## Examples

The following code creates a `BackGroundFetchRegistration` as `bgFetch`, with an `id` of `"my-fetch"`.

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

Logging the {{domxref("BackgroundFetchRegistration.id","id")}} to the console returns `"my-fetch"`.

```js
console.log(bgFetch.id); // "my-fetch"
```

The {{domxref("BackgroundFetchRegistration.match","match()")}} method can be used to find a particular {{domxref("BackgroundFetchRecord")}} from those that are part of the registration.

```js
bgFetch.match('/ep-5.mp3').then(async (record) => {
  if (!record) {
    console.log('No record found');
    return;
  }

  console.log(`Here's the request`, record.request);
  const response = await record.responseReady;
  console.log(`And here's the response`, response);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
