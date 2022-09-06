---
title: AbortController
slug: Web/API/AbortController
page-type: web-api-interface
tags:
  - API
  - AbortController
  - Interface
  - Reference
browser-compat: api.AbortController
---
{{APIRef("DOM")}}

The **`AbortController`** interface represents a controller object that allows you to abort one or more Web requests as and when desired.

You can create a new `AbortController` object using the {{domxref("AbortController.AbortController()", "AbortController()")}} constructor. Communicating with a DOM request is done using an {{domxref("AbortSignal")}} object.

## Constructor

- {{domxref("AbortController()")}}
  - : Creates a new `AbortController` object instance.

## Properties

- {{domxref("AbortController.signal")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("AbortSignal")}} object instance, which can be used to communicate with, or to abort, a DOM request.

## Methods

- {{domxref("AbortController.abort()")}}
  - : Aborts a DOM request before it has completed. This is able to abort [fetch requests](/en-US/docs/Web/API/fetch), consumption of any response bodies, and streams.

## Examples

> **Note:** There are additional examples in the {{domxref("AbortSignal")}} reference.

In the following snippet, we aim to download a video using the [Fetch API](/en-US/docs/Web/API/Fetch_API).

We first create a controller using the {{domxref("AbortController.AbortController","AbortController()")}} constructor, then grab a reference to its associated {{domxref("AbortSignal")}} object using the {{domxref("AbortController.signal")}} property.

When the [fetch request](/en-US/docs/Web/API/fetch) is initiated, we pass in the `AbortSignal` as an option inside the request's options object (the `{signal}` below). This associates the signal and controller with the fetch request and allows us to abort it by calling {{domxref("AbortController.abort()")}}, as seen below in the second event listener.

```js
let controller;
const url = 'video.mp4';

const downloadBtn = document.querySelector('.download');
const abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', () => {
  if (controller) {
    controller.abort();
    console.log('Download aborted');
  }
});

function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;
  fetch(url, { signal })
    .then((response) => {
      console.log('Download complete', response);
    })
    .catch((err) => {
      console.error(`Download error: ${err.message}`);
    });
}
```

> **Note:** When `abort()` is called, the `fetch()` promise rejects with a `DOMException` named `AbortError`.

You can find a [full working example on GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api); you can also see it [running live](https://mdn.github.io/dom-examples/abort-api/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) by Jake Archibald
