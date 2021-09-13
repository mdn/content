---
title: PromiseRejectionEvent.promise
slug: Web/API/PromiseRejectionEvent/promise
tags:
  - API
  - HTML DOM
  - JavaScript
  - Promise
  - Promise Rejection Events
  - PromiseRejectionEvent
  - Promises
  - Property
  - Reference
  - events
browser-compat: api.PromiseRejectionEvent.promise
---
{{APIRef("HTML DOM") }}

The {{domxref("PromiseRejectionEvent")}} interface's
**`promise`** read-only property indicates the JavaScript
{{jsxref("Promise")}} which was rejected. You can examine the event's
{{domxref("PromiseRejectionEvent.reason")}} property to learn why the promise was
rejected.

## Syntax

```js
promise = PromiseRejectionEvent.promise
```

### Value

The JavaScript {{jsxref("Promise")}} which was rejected, and whose rejection went
unhandled.

## Examples

This example listens for unhandled promises and, if the
{{domxref("PromiseRejectionEvent.reason", "reason")}} is an object with a
`code` field containing the text "Module not ready", it sets up an idle
callback that will retry the task that failed to execute correctly.

{{domxref("event.preventDefault()")}} is called to indicate that the promise has now
been handled.

```js
window.onunhandledrejection = function(event) {
  if (event.reason.code && event.reason.code == "Module not ready") {
    window.requestIdleCallback(function(deadline) {
      loadModule(event.reason.moduleName)
        .then(performStartup);
    });
    event.preventDefault();
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SectionOnPage("/en-US/docs/Web/JavaScript/Guide/Using_promises", "Promise
    rejection events")}}
- {{jsxref("Promise")}}
- {{domxref("PromiseRejectionEvent")}}
- {{event("rejectionhandled")}}
- {{event("unhandledrejection")}}
