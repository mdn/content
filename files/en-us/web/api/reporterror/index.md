---
title: reportError()
slug: Web/API/reportError
tags:
  - API
  - Method
  - Reference
  - Global
  - Errors
browser-compat: api.reportError
---
{{APIRef}} {{AvailableInWorkers}}

The **`reportError()`** global method may be used to report errors to the console or global event handlers, emulating an uncaught JavaScript exception.

This feature is primarily intended for custom event-dispatching or callback-manipulating libraries.
Libraries can use this feature to catch errors in callback code and re-throw them to the top level handler.
This ensures that an exception in one callback will not prevent others from being handled, while at the same time ensuring that stack trace information is still readily available for debugging at the top level.

<!-- {{EmbedInteractiveExample("pages/js/self-reporterror.html")}} -->

## Syntax

```js
self.reportError(throwable);
```

### Parameters

- `throwable`
  - : An error object such as a {{jsxref("TypeError")}}.

### Return value

Void.


### Exceptions

- {{jsxref("TypeError")}}
  - : The method is called without an error argument.


## Example

Feature test for the method using:

```js
if (typeof self.reportError == 'function') {
  // function is defined
}
```

The following code shows how you might create and report an error, and how it may be caught using either the global `onerror` handler ({{domxref("GlobalEventHandlers.onerror")}}) or by adding a listener for the `error` event.
Note that the handler assigned to `onerror` must return `true` to stop the event propagating further.

```js
var newError = new Error('Some error message', "someFile.js", 11);
self.reportError(newError);

window.onerror = function(message, source, lineno, colno, error) {
  console.log('message:' + error.message + ', lineno: ' + lineno );
  return true;
};

self.addEventListener('error', (error) => {
    console.log(error.filename);
});

// Output
// > "message:Some error message, lineno: 11"
// > "someFile.js"
```


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


## See also

- [`Window`](/en-US/docs/Web/API/Window#methods_implemented_from_elsewhere)
- [`WorkerGlobalScope`](/en-US/docs/Web/API/WorkerGlobalScope#methods_implemented_from_elsewhere)
- {{domxref("GlobalEventHandlers/onerror","GlobalEventHandlers.onerror")}}
- [error](/en-US/docs/Web/API/Element/error_event) event
