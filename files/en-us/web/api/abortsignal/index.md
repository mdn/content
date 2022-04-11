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

{{InheritanceDiagram}}

## Properties

_The AbortSignal interface also inherits properties from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("AbortSignal.aborted")}} {{readonlyInline}}
  - : A {{Glossary("Boolean")}} that indicates whether the request(s) the signal is communicating with is/are aborted (`true`) or not (`false`).
- {{domxref("AbortSignal.reason")}} {{readonlyInline}}
  - : A JavaScript value providing the abort reason, once the signal has aborted.

## Methods

_The **`AbortSignal`** interface inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("AbortSignal.throwIfAborted()")}}
  - : Throws the signal's abort {{domxref("AbortSignal.reason", "reason")}} if the signal has been aborted; otherwise it does nothing.

## Static methods

- {{domxref("AbortSignal.abort()")}}
  - : Returns an **`AbortSignal`** instance that is already set as aborted.
- {{domxref("AbortSignal.timeout()")}}
  - : Returns an **`AbortSignal`** instance that will automatically abort after a specified time.

## Events

Listen to this event using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`abort`](/en-US/docs/Web/API/AbortSignal/abort_event)
  - : Invoked when the DOM requests the signal is communicating with is/are aborted.
    Also available via the `onabort` property.

## Examples

### Aborting a fetch operation using an explicit signal

The following snippet shows how we might use a signal to abort downloading a video using the [Fetch API](/en-US/docs/Web/API/Fetch_API).

We first create an abort controller using the {{domxref("AbortController.AbortController","AbortController()")}} constructor, then grab a reference to its associated {{domxref("AbortSignal")}} object using the {{domxref("AbortController.signal")}} property.

When the [fetch request](/en-US/docs/Web/API/fetch) is initiated, we pass in the `AbortSignal` as an option inside the request's options object (the `{signal}` below). This associates the signal and controller with the fetch request, and allows us to abort it by calling {{domxref("AbortController.abort()")}}.
Below you can see that the fetch operation is aborted in the second event listener, which triggered when the abort button (`abortBtn`) is clicked.

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


### Aborting a fetch operation with a timeout

If you _only_ need to abort the operation on timeout (and not also on a user-triggered signal) then you can use the static {{domxref("AbortSignal.timeout()")}} method.
This returns an `AbortSignal` that will automatically timeout after a certain number of milliseconds.

The pseudo-code below shows how you would either succeed in downloading a file, or handle a timeout error after 5 seconds.
Note that when using this signal, the `fetch()` promise rejects with a "`TimeoutError`" `DOMException`.

```js
try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // ...
} catch (e) {
    if (e.name === "TimeoutError") {
      // Notify the user it took more than 5 seconds to get the result!
    } else {
      // A network error, or some other problem.
      console.log(`Type: ${e.name}, Message: ${e.message}`)
    }
}
```


### Aborting a fetch with timeout or explicit abort

You can't use the approach in the previous section to abort a download using either a user action or a timeout, because `fetch()` isn't designed to combine multiple signals.

If you need to trigger abort in this case, then the usual approach is to trigger {{domxref("AbortController.abort()")}} from both a user control and from a timeout timer.
Note that unlike when using {{domxref("AbortSignal.timeout()")}} you will not be able to differentiate the cause of the abort; the reason is always `AbortError`.

The code snippet shows the basic operation:

```js
try {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 5000)
  const res = await fetch(url, { signal: controller.signal })
  const body = await res.json()
}
catch (e) {
    if (e.name === "AbortError") {
      // Notify the user of abort.
      // Note this will never be a timeout error!
    } else {
      // A network error, or some other problem.
      console.log(`Type: ${e.name}, Message: ${e.message}`)
    }

} finally {
  clearTimeout(timeoutId); 
}
```


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developers.google.com/web/updates/2017/09/abortable-fetch) by Jake Archibald
