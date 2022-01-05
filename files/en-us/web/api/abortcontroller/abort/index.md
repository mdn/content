---
title: AbortController.abort()
slug: Web/API/AbortController/abort
tags:
  - API
  - AbortController
  - Experimental
  - Fetch
  - Method
  - Reference
  - abort()
browser-compat: api.AbortController.abort
---
{{APIRef("DOM")}}

The **`abort()`** method of the {{domxref("AbortController")}} interface aborts a DOM request before it has completed.
This is able to abort [fetch requests](/en-US/docs/Web/API/fetch), the consumption of any response bodies, or streams.

## Syntax

```js
abort()
abort(reason)
```

### Parameters

- `reason`
  - : The reason why the operation was aborted, which can be any JavaScript value.
    If not specified, the reason is set to "AbortError" {{domxref("DOMException")}}. 

### Return value

Void.

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

> **Note:** When `abort()` is called, the `fetch()` promise rejects with an `Error` of type `DOMException`, with name `AbortError`.

You can find a [full working example on GitHub](https://github.com/mdn/dom-examples/tree/master/abort-api); you can also see it [running live](https://mdn.github.io/dom-examples/abort-api/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
