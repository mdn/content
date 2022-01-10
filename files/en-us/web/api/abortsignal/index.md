---
title: AbortSignal
slug: Web/API/AbortSignal
tags:
  - API
  - AbortSignal
  - DOM
  - Experimental
  - Interface
  - Reference
browser-compat: api.AbortSignal
---
{{APIRef("DOM")}}

The **`AbortSignal`** interface represents a signal object that allows you to communicate with a DOM request (such as a fetch request) and abort it if required via an {{domxref("AbortController")}} object.

## Properties

_The AbortSignal interface also inherits properties from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("AbortSignal.aborted")}} {{readonlyInline}}
  - : A {{Glossary("Boolean")}} that indicates whether the request(s) the signal is communicating with is/are aborted (`true`) or not (`false`).
- {{domxref("AbortSignal.reason")}} {{readonlyInline}}
  - : A JavaScript value providing the abort reason, once the signal has aborted.

## Events

Listen to this event using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`abort`](/en-US/docs/Web/API/AbortSignal/abort_event)
  - : Invoked when the DOM requests the signal is communicating with is/are aborted.
    Also available via the [`onabort`](/en-US/docs/Web/API/AbortSignal/onabort) property.

## Methods

_The **`AbortSignal`** interface inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("AbortSignal.throwIfAborted()")}}
  - : Throws the signal's abort {{domxref("AbortSignal.reason", "reason")}} if the signal has been aborted; otherwise it does nothing.

## Static methods

- {{domxref("AbortSignal.abort()")}}
  - : Returns an **`AbortSignal`** instance that is already set as aborted.

## Examples

The following snippet shows how we might use a signal to abort downloading a video using the [Fetch API](/en-US/docs/Web/API/Fetch_API).

We first create an abort controller using the {{domxref("AbortController.AbortController","AbortController()")}} constructor, then grab a reference to its associated {{domxref("AbortSignal")}} object using the {{domxref("AbortController.signal")}} property.

When the [fetch request](/en-US/docs/Web/API/fetch) is initiated, we pass in the `AbortSignal` as an option inside the request's options object (the `{signal}` below). This associates the signal and controller with the fetch request, and allows us to abort it by calling {{domxref("AbortController.abort()")}}, as seen below in the second event listener.

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

> **Note:** When `abort()` is called, the `fetch()` promise rejects with an "`AbortError`" `DOMException`.

You can find a [full working example on GitHub](https://github.com/mdn/dom-examples/tree/master/abort-api); you can also see it [running live](https://mdn.github.io/dom-examples/abort-api/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developers.google.com/web/updates/2017/09/abortable-fetch) by Jake Archibald
