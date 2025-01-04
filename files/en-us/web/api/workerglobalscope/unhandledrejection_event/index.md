---
title: "WorkerGlobalScope: unhandledrejection event"
short-title: unhandledrejection
slug: Web/API/WorkerGlobalScope/unhandledrejection_event
page-type: web-api-event
browser-compat: api.WorkerGlobalScope.unhandledrejection_event
---

{{APIRef}}{{AvailableInWorkers("worker")}}

The **`unhandledrejection`** event is sent to the global scope (typically {{domxref("WorkerGlobalScope")}}) of a script when a {{jsxref("Promise")}} that has no rejection handler is rejected.

This is useful for debugging and for providing fallback error handling for unexpected situations.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
self.addEventListener("unhandledrejection", (event) => {});
self.onunhandledrejection = (event) => {};
```

## Event type

A {{domxref("PromiseRejectionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Event properties

- {{domxref("PromiseRejectionEvent.promise")}} {{ReadOnlyInline}}
  - : The JavaScript {{jsxref("Promise")}} that was rejected.
- {{domxref("PromiseRejectionEvent.reason")}} {{ReadOnlyInline}}
  - : A value or {{jsxref("Object")}} indicating why the promise was rejected, as passed to {{jsxref("Promise.reject()")}}.

## Examples

### Basic error logging

This example logs information about the unhandled promise rejection to the console.

```js
self.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
```

You can also use the `onunhandledrejection` event handler property to set up the event listener:

```js
self.onunhandledrejection = (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
};
```

### Preventing default handling

Many environments (such as {{Glossary("Node.js")}}) report unhandled promise rejections to the console by default. You can prevent that from happening by adding a handler for `unhandledrejection` events that—in addition to any other tasks you wish to perform—calls {{domxref("Event.preventDefault()", "preventDefault()")}} to cancel the event, preventing it from bubbling up to be handled by the runtime's logging code. This works because `unhandledrejection` is cancelable.

```js
self.addEventListener("unhandledrejection", (event) => {
  // code for handling the unhandled rejection
  // …

  // Prevent the default handling (such as outputting the
  // error to the console)

  event.preventDefault();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Promise rejection events](/en-US/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events)
- {{domxref("PromiseRejectionEvent")}}
- {{jsxref("Promise")}}
- {{domxref("WorkerGlobalScope/rejectionhandled_event", "rejectionhandled")}} event
