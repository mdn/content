---
title: PromiseRejectionEvent
slug: Web/API/PromiseRejectionEvent
tags:
  - API
  - HTML DOM
  - Interface
  - JavaScript
  - PromiseRejectionEvent
  - Promises
  - Reference
  - events
browser-compat: api.PromiseRejectionEvent
---
{{APIRef("HTML DOM")}}

The **`PromiseRejectionEvent`** interface represents events which are sent to the global script context when JavaScript {{jsxref("Promise")}}s are rejected. These events are particularly useful for telemetry and debugging purposes.

For details on promise rejection events, see {{SectionOnPage("/en-US/docs/Web/JavaScript/Guide/Using_promises", "Promise rejection events")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("PromiseRejectionEvent.PromiseRejectionEvent", "PromiseRejectionEvent()")}}
  - : Creates a `PromiseRejectionEvent` event, given the type of event ([`unhandledrejection`](/en-US/docs/Web/API/Window/unhandledrejection_event) or [`rejectionhandled`](/en-US/docs/Web/API/Window/rejectionhandled_event)) and other details.

## Properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("PromiseRejectionEvent.promise")}} {{readonlyInline}}
  - : The JavaScript {{jsxref("Promise")}} that was rejected.
- {{domxref("PromiseRejectionEvent.reason")}} {{readOnlyInline}}
  - : A value or {{jsxref("Object")}} indicating why the promise was rejected, as passed to {{jsxref("Promise.reject()")}}.

## Methods

_This interface has no unique methods; inherits methods from its parent {{domxref("Event")}}_.

## Events

- {{Event("rejectionhandled")}}
  - : Fired when a JavaScript {{jsxref("Promise")}} is rejected, and after the rejection is handled by the promise's rejection handling code.
- {{Event("unhandledrejection")}}
  - : Fired when a JavaScript {{jsxref("Promise")}} is rejected but there is no rejection handler to deal with the rejection.

## Examples

This simple example catches unhandled promise rejections and logs them for debugging purposes.

```js
window.onunhandledrejection = function(e) {
  console.log(e.reason);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Promises](/en-US/docs/Archive/Add-ons/Techniques/Promises)
- [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise")}}
- {{domxref("WindowEventHandlers.onrejectionhandled")}}
- {{domxref("WindowEventHandlers.onunhandledrejection")}}
