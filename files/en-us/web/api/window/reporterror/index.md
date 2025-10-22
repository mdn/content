---
title: "Window: reportError() method"
short-title: reportError()
slug: Web/API/Window/reportError
page-type: web-api-instance-method
browser-compat: api.reportError
---

{{APIRef("DOM")}}

The **`reportError()`** method of the {{DOMxRef("Window")}} interface may be used to report errors to the console or event handlers of global scopes, emulating an uncaught JavaScript exception.

This feature is primarily intended for custom event-dispatching or callback-manipulating libraries.
Libraries can use this feature to catch errors in callback code and re-throw them to the top level handler.
This ensures that an exception in one callback will not prevent others from being handled, while at the same time ensuring that stack trace information is still readily available for debugging at the top level.

## Syntax

```js-nolint
reportError(throwable)
```

### Parameters

- `throwable`
  - : Any JavaScript value, but preferably an error object such as a {{jsxref("TypeError")}}.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : The method is called without an error argument.

## Examples

### Feature detection

Feature test for the method using:

```js
if (typeof window.reportError === "function") {
  // function is defined
}
```

### Telemetry

`reportError()` allows asynchronous errors to be reported just like built-in errors. Aggregating all errors at a single point makes it easier to collect telemetry about errors occurring in an application.

For example, a web application might set up a global [`error`](/en-US/docs/Web/API/Window/error_event) event listener to collect all uncaught errors, and send them to a server for analysis, such as by using [Sentry](https://sentry.io/):

```js
window.addEventListener("error", (event) => {
  event.preventDefault(); // Prevent the default logging to console
  Sentry.captureException(event.error);
  console.error("Error encountered:", event.error);
  showToastNotification("An error occurred. Our team has been notified.");
});
```

By default, this listener can listen for uncaught exceptions thrown in synchronous `<script>` execution, `setTimeout` callbacks, event handlers, asynchronous promise callbacks, and so on. Libraries and applications can use `reportError()` to deliver their own errors to this same listener, ensuring that all errors are captured in a consistent manner.

```js
function fetchUser(userId) {
  return fetch(`/api/users?id=${encodeURIComponent(userId)}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch user with ID ${userId}`);
      }
      return response.json();
    })
    .catch((error) => {
      // Report the error to the global error handler
      window.reportError(error);
    });
}
```

By using `reportError()` instead of letting the error go uncaught, subsequent code execution is not interrupted, while still ensuring that the error is logged and can be analyzed. For example, this function can be called in a test runner without extra `try...catch` handling.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Window")}}
- {{DOMxRef("WorkerGlobalScope.reportError()")}}
- {{domxref("Window")}}: {{DOMxRef("Window/error_event", "error")}} event
- {{domxref("WorkerGlobalScope")}}: {{DOMxRef("WorkerGlobalScope/error_event", "error")}} event
- {{domxref("HTMLElement")}}: {{DOMxRef("HTMLElement/error_event", "error")}} event
