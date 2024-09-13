---
title: AbortController
slug: Web/API/AbortController
page-type: web-api-interface
browser-compat: api.AbortController
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`AbortController`** interface represents a controller object that allows you to abort one or more Web requests as and when desired.

You can create a new `AbortController` object using the {{domxref("AbortController.AbortController()", "AbortController()")}} constructor. Communicating with an asynchronous operation is done using an {{domxref("AbortSignal")}} object.

## Constructor

- {{domxref("AbortController.AbortController()", "AbortController()")}}
  - : Creates a new `AbortController` object instance.

## Instance properties

- {{domxref("AbortController.signal")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("AbortSignal")}} object instance, which can be used to communicate with, or to abort, an asynchronous operation.

## Instance methods

- {{domxref("AbortController.abort()")}}
  - : Aborts an asynchronous operation before it has completed. This is able to abort [fetch requests](/en-US/docs/Web/API/Window/fetch), consumption of any response bodies, and streams.

## Examples

> [!NOTE]
> There are additional examples in the {{domxref("AbortSignal")}} reference.

In the following snippet, we aim to download a video using the [Fetch API](/en-US/docs/Web/API/Fetch_API).

We first create a controller using the {{domxref("AbortController.AbortController","AbortController()")}} constructor, then grab a reference to its associated {{domxref("AbortSignal")}} object using the {{domxref("AbortController.signal")}} property.

When the [fetch request](/en-US/docs/Web/API/Window/fetch) is initiated, we pass in the `AbortSignal` as an option inside the request's options object (the `{signal}` below). This associates the signal and controller with the fetch request and allows us to abort it by calling {{domxref("AbortController.abort()")}}, as seen below in the second event listener.

When `abort()` is called, the `fetch()` promise rejects with a `DOMException` named `AbortError`.

```js
let controller;
const url = "video.mp4";

const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
    console.log("Download aborted");
  }
});

async function fetchVideo() {
  controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch(url, { signal });
    console.log("Download complete", response);
    // process response further
  } catch (err) {
    console.error(`Download error: ${err.message}`);
  }
}
```

If the request is aborted after the `fetch()` call has been fulfilled but before the response body has been read, then attempting to read the response body will reject with an `AbortError` exception.

```js
async function get() {
  const controller = new AbortController();
  const request = new Request("https://example.org/get", {
    signal: controller.signal,
  });

  const response = await fetch(request);
  controller.abort();
  // The next line will throw `AbortError`
  const text = await response.text();
  console.log(text);
}
```

You can find a [full working example on GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api); you can also see it [running live](https://mdn.github.io/dom-examples/abort-api/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) by Jake Archibald
