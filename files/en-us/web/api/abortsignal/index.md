---
title: AbortSignal
slug: Web/API/AbortSignal
page-type: web-api-interface
browser-compat: api.AbortSignal
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`AbortSignal`** interface represents a signal object that allows you to communicate with an asynchronous operation (such as a fetch request) and abort it if required via an {{domxref("AbortController")}} object.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("AbortSignal.aborted")}} {{ReadOnlyInline}}
  - : A {{Glossary("Boolean")}} that indicates whether the request(s) the signal is communicating with is/are aborted (`true`) or not (`false`).
- {{domxref("AbortSignal.reason")}} {{ReadOnlyInline}}
  - : A JavaScript value providing the abort reason, once the signal has aborted.

## Static methods

_Also inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("AbortSignal/abort_static", "AbortSignal.abort()")}}
  - : Returns an `AbortSignal` instance that is already set as aborted.
- {{domxref("AbortSignal/any_static", "AbortSignal.any()")}}
  - : Returns an `AbortSignal` that aborts when any of the given abort signals abort.
- {{domxref("AbortSignal/timeout_static", "AbortSignal.timeout()")}}
  - : Returns an `AbortSignal` instance that will automatically abort after a specified time.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("AbortSignal.throwIfAborted()")}}
  - : Throws the signal's abort {{domxref("AbortSignal.reason", "reason")}} if the signal has been aborted; otherwise it does nothing.

## Events

_Also inherits events from its parent interface, {{DOMxRef("EventTarget")}}._

Listen to this event using {{domxref("EventTarget.addEventListener", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("AbortSignal/abort_event", "abort")}}
  - : Invoked when the asynchronous operations the signal is communicating with is/are aborted.
    Also available via the `onabort` property.

## Examples

### Aborting a fetch operation using an explicit signal

The following snippet shows how we might use a signal to abort downloading a video using the [Fetch API](/en-US/docs/Web/API/Fetch_API).

We first create an abort controller using the {{domxref("AbortController.AbortController","AbortController()")}} constructor, then grab a reference to its associated `AbortSignal` object using the {{domxref("AbortController.signal")}} property.

When the [fetch request](/en-US/docs/Web/API/Window/fetch) is initiated, we pass in the `AbortSignal` as an option inside the request's options object (the `{signal}` below). This associates the signal and controller with the fetch request, and allows us to abort it by calling {{domxref("AbortController.abort()")}}.
Below you can see that the fetch operation is aborted in the second event listener, which triggered when the abort button (`abortBtn`) is clicked.

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

### Aborting a fetch operation with a timeout

If you need to abort the operation on timeout then you can use the static {{domxref("AbortSignal/timeout_static", "AbortSignal.timeout()")}} method.
This returns an `AbortSignal` that will automatically timeout after a certain number of milliseconds.

The code snippet below shows how you would either succeed in downloading a file, or handle a timeout error after 5 seconds.
Note that when there is a timeout the `fetch()` promise rejects with a `TimeoutError` `DOMException`.
This allows code to differentiate between timeouts (for which user notification is probably required), and user aborts.

```js
const url = "video.mp4";

try {
  const res = await fetch(url, { signal: AbortSignal.timeout(5000) });
  const result = await res.blob();
  // …
} catch (err) {
  if (err.name === "TimeoutError") {
    console.error("Timeout: It took more than 5 seconds to get the result!");
  } else if (err.name === "AbortError") {
    console.error(
      "Fetch aborted by user action (browser stop button, closing tab, etc.",
    );
  } else {
    // A network error, or some other problem.
    console.error(`Error: type: ${err.name}, message: ${err.message}`);
  }
}
```

### Aborting a fetch with timeout or explicit abort

If you want to abort from multiple signals, you can use {{domxref("AbortSignal/any_static", "AbortSignal.any()")}} to combine them into a single signal. The following example shows this using {{domxref("Window/fetch", "fetch")}}:

```js
try {
  const controller = new AbortController();
  const timeoutSignal = AbortSignal.timeout(5000);
  const res = await fetch(url, {
    // This will abort the fetch when either signal is aborted
    signal: AbortSignal.any([controller.signal, timeoutSignal]),
  });
  const body = await res.json();
} catch (e) {
  if (e.name === "AbortError") {
    // Notify the user of abort.
  } else if (e.name === "TimeoutError") {
    // Notify the user of timeout
  } else {
    // A network error, or some other problem.
    console.log(`Type: ${e.name}, Message: ${e.message}`);
  }
}
```

> [!NOTE]
> Unlike when using {{domxref("AbortSignal/timeout_static", "AbortSignal.timeout()")}}, there is no way to tell whether the final abort was caused by a timeout.

### Implementing an abortable API

An API that needs to support aborting can accept an `AbortSignal` object, and use its state to trigger abort signal handling when needed.

A {{jsxref("Promise")}}-based API should respond to the abort signal by rejecting any unsettled promise with the `AbortSignal` abort {{domxref("AbortSignal.reason", "reason")}}.
For example, consider the following `myCoolPromiseAPI`, which takes a signal and returns a promise.
The promise is rejected immediately if the signal is already aborted, or if the abort event is detected.
Otherwise it completes normally and then resolves the promise.

```js
function myCoolPromiseAPI(/* …, */ { signal }) {
  return new Promise((resolve, reject) => {
    // If the signal is already aborted, immediately throw in order to reject the promise.
    if (signal.aborted) {
      reject(signal.reason);
      return;
    }

    // Perform the main purpose of the API
    // Call resolve(result) when done.

    // Watch for 'abort' signals
    signal.addEventListener("abort", () => {
      // Stop the main operation
      // Reject the promise with the abort reason.
      reject(signal.reason);
    });
  });
}
```

The API might then be used as shown.
Note that {{domxref("AbortController.abort()")}} is called to abort the operation.

```js
const controller = new AbortController();
const signal = controller.signal;

startSpinner();

myCoolPromiseAPI({ /* …, */ signal })
  .then((result) => {})
  .catch((err) => {
    if (err.name === "AbortError") return;
    showUserErrorMessage();
  })
  .then(() => stopSpinner());

controller.abort();
```

APIs that do not return promises might react in a similar manner.
In some cases it may make sense to absorb the signal.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- [Abortable Fetch](https://developer.chrome.com/blog/abortable-fetch/) by Jake Archibald
