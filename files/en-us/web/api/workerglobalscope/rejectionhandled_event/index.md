---
title: "WorkerGlobalScope: rejectionhandled event"
short-title: rejectionhandled
slug: Web/API/WorkerGlobalScope/rejectionhandled_event
page-type: web-api-event
browser-compat: api.WorkerGlobalScope.rejectionhandled_event
---

{{APIRef}}{{AvailableInWorkers("worker")}}

The **`rejectionhandled`** event is sent to the script's global scope (typically {{domxref("WorkerGlobalScope")}}) whenever a rejected {{jsxref("Promise")}} is handled late, i.e., when a handler is attached to the promise after its rejection had caused an {{domxref("WorkerGlobalScope.unhandledrejection_event", "unhandledrejection")}} event.

This can be used in debugging and for general application resiliency, in tandem with the `unhandledrejection` event, which is sent when a promise is rejected but there is no handler for the rejection at the time.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
self.addEventListener("rejectionhandled", (event) => {});
self.onrejectionhandled = (event) => {};
```

## Event type

A {{domxref("PromiseRejectionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Event properties

- {{domxref("PromiseRejectionEvent.promise")}} {{ReadOnlyInline}}
  - : The {{jsxref("Promise")}} that was rejected.
- {{domxref("PromiseRejectionEvent.reason")}} {{ReadOnlyInline}}
  - : A value or {{jsxref("Object")}} indicating why the promise was rejected, as passed to {{jsxref("Promise.reject()")}}.

## Example

You can use the `rejectionhandled` event to log promises that get rejected to the console, along with the reasons why they were rejected:

```js
self.addEventListener("rejectionhandled", (event) => {
  console.log(`Promise rejected; reason: ${event.reason}`);
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
- {{domxref("WorkerGlobalScope/unhandledrejection_event", "unhandledrejection")}}
