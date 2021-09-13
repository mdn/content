---
title: AbortController()
slug: Web/API/AbortController/AbortController
tags:
  - API
  - AbortController
  - Constructor
  - Experimental
  - Fetch
  - Reference
browser-compat: api.AbortController.AbortController
---
{{APIRef("DOM")}}

The **`AbortController()`** constructor creates a new {{domxref("AbortController")}} object instance.

## Syntax

```js
var controller = new AbortController();
```

### Parameters

None.

## Examples

In the following snippet, we aim to download a video using the [Fetch API](/en-US/docs/Web/API/Fetch_API).

We first create a controller using the {{domxref("AbortController.AbortController","AbortController()")}} constructor, then grab a reference to its associated {{domxref("AbortSignal")}} object using the {{domxref("AbortController.signal")}} property.

When the [fetch request](/en-US/docs/Web/API/fetch) is initiated, we pass in the `AbortSignal` as an option inside the request's options object (the `{signal}` below). This associates the signal and controller with the fetch request and allows us to abort it by calling {{domxref("AbortController.abort()")}}, as seen below in the second event listener.

```js
var controller = new AbortController();
var signal = controller.signal;

var downloadBtn = document.querySelector('.download');
var abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchVideo);

abortBtn.addEventListener('click', function() {
  controller.abort();
  console.log('Download aborted');
});

function fetchVideo() {
  ...
  fetch(url, {signal}).then(function(response) {
    ...
  }).catch(function(e) {
   reports.textContent = 'Download error: ' + e.message;
  })
}
```

> **Note:** When `abort()` is called, the `fetch()` promise rejects with an `AbortError`.

You can find a [full working example on GitHub](https://github.com/mdn/dom-examples/tree/master/abort-api); you can also see it [running live](https://mdn.github.io/dom-examples/abort-api/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
