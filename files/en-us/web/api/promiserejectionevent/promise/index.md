---
title: "PromiseRejectionEvent: promise property"
short-title: promise
slug: Web/API/PromiseRejectionEvent/promise
page-type: web-api-instance-property
browser-compat: api.PromiseRejectionEvent.promise
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

The {{domxref("PromiseRejectionEvent")}} interface's
**`promise`** read-only property indicates the JavaScript
{{jsxref("Promise")}} which was rejected. You can examine the event's
{{domxref("PromiseRejectionEvent.reason")}} property to learn why the promise was
rejected.

## Value

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
window.onunhandledrejection = (event) => {
  if (event.reason?.code === "Module not ready") {
    requestIdleCallback((deadline) => {
      loadModule(event.reason.moduleName).then(performStartup);
    });
    event.preventDefault();
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Promise rejection events](/en-US/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- {{jsxref("Promise")}}
- {{domxref("PromiseRejectionEvent")}}
- {{domxref("Window.rejectionhandled_event", "rejectionhandled")}}
- {{domxref("Window.unhandledrejection_event", "unhandledrejection")}}
