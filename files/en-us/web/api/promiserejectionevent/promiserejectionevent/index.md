---
title: "PromiseRejectionEvent: PromiseRejectionEvent() constructor"
short-title: PromiseRejectionEvent()
slug: Web/API/PromiseRejectionEvent/PromiseRejectionEvent
page-type: web-api-constructor
browser-compat: api.PromiseRejectionEvent.PromiseRejectionEvent
---

{{APIRef("HTML DOM")}}

The **`PromiseRejectionEvent()`**
constructor returns a new {{domxref("PromiseRejectionEvent")}} object, which
represents events fired when a JavaScript {{jsxref("Promise")}} is rejected.

With promise rejection events, it becomes possible to detect and report promises which
fail and whose failures go unnoticed. It also becomes easier to write a global handler
for errors.

There are two types of `PromiseRejectionEvent`:
{{domxref("Window.unhandledrejection_event", "unhandledrejection")}} is sent by the JavaScript runtime when a promise is
rejected but the rejection goes unhandled. A {{domxref("Window.rejectionhandled_event", "rejectionhandled")}}event is
emitted if a promise is rejected but the rejection is caught by a rejection handler.

## Syntax

```js-nolint
new PromiseRejectionEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `rejectionhandled` or `unhandledrejection`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `promise`
      - : The {{jsxref("Promise")}} that was rejected.
    - `reason`
      - : Any value or {{jsxref("Object")}} which represents the reason the promise was
        rejected. This can be anything from a numeric error code to an error
        string to an object which contains detailed information
        describing the situation resulting in the promise being rejected.

### Return value

A new `PromiseRejectionEvent` object configured as specified by the parameters.

## Examples

This example creates a new {{domxref("Window.unhandledrejection_event", "unhandledrejection")}} event for the promise
`myPromise` with the reason being the string "My house is on fire". The
`reason` could just as easily be a number, or even an object with detailed
information including the home address, how serious the fire is, and the phone number of
an emergency contact who should be notified.

```js
let myRejectionEvent = new PromiseRejectionEvent("unhandledrejection", {
  promise: myPromise,
  reason: "My house is on fire",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise")}}
- {{domxref("PromiseRejectionEvent")}}
