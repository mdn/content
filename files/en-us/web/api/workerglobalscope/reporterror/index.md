---
title: "WorkerGlobalScope: reportError() method"
short-title: reportError()
slug: Web/API/WorkerGlobalScope/reportError
page-type: web-api-instance-method
browser-compat: api.reportError
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

The **`reportError()`** method of the {{DOMxRef("WorkerGlobalScope")}} interface may be used to report errors to the console or event handlers of global scopes, emulating an uncaught JavaScript exception.

This feature is primarily intended for custom event-dispatching or callback-manipulating libraries.
Libraries can use this feature to catch errors in callback code and re-throw them to the top level handler.
This ensures that an exception in one callback will not prevent others from being handled, while at the same time ensuring that stack trace information is still readily available for debugging at the top level.

See [`window.reportError()`](/en-US/docs/Web/API/Window/reportError) for more information.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("WorkerGlobalScope")}}
- {{DOMxRef("Window.reportError()")}}
- {{DOMxRef("Window/error_event", "error")}} event
- {{DOMxRef("WorkerGlobalScope/error_event", "error")}} event
- {{DOMxRef("HTMLElement/error_event", "error")}} event
