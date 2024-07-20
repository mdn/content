---
title: "AbortController: AbortController() constructor"
short-title: AbortController()
slug: Web/API/AbortController/AbortController
page-type: web-api-constructor
browser-compat: api.AbortController.AbortController
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`AbortController()`** constructor creates a new {{domxref("AbortController")}} object instance.

## Syntax

```js-nolint
new AbortController()
```

### Parameters

None.

## Examples

In the following snippet, we aim to download a video using the [Fetch API](/en-US/docs/Web/API/Fetch_API).

We first create a controller using the {{domxref("AbortController.AbortController","AbortController()")}} constructor, then grab a reference to its associated {{domxref("AbortSignal")}} object using the {{domxref("AbortController.signal")}} property.

When the [fetch request](/en-US/docs/Web/API/Window/fetch) is initiated, we pass in the `AbortSignal` as an option inside the request's options object (the `{ signal }` below). This associates the signal and controller with the fetch request and allows us to abort it by calling {{domxref("AbortController.abort()")}}, as seen below in the second event listener.

```js
const controller = new AbortController();
const signal = controller.signal;

const url = "video.mp4";
const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  controller.abort();
  console.log("Download aborted");
});

function fetchVideo() {
  fetch(url, { signal })
    .then((response) => {
      console.log("Download complete", response);
    })
    .catch((err) => {
      console.error(`Download error: ${err.message}`);
    });
}
```

> **Note:** When `abort()` is called, the `fetch()` promise rejects with an `AbortError`.

You can find a [full working example on GitHub](https://github.com/mdn/dom-examples/tree/main/abort-api); you can also see it [running live](https://mdn.github.io/dom-examples/abort-api/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
