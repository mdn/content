---
title: PromiseRejectionEvent()
slug: Web/API/PromiseRejectionEvent/PromiseRejectionEvent
tags:
  - API
  - Constructor
  - HTML DOM
  - JavaScript
  - PromiseRejectionEvent
  - Promises
  - Reference
  - events
browser-compat: api.PromiseRejectionEvent.PromiseRejectionEvent
---
{{APIRef("HTML DOM")}}

The **`PromiseRejectionEvent()`**
constructor returns a newly created {{domxref("PromiseRejectionEvent")}}, which
represents events fired when a JavaScript {{jsxref("Promise")}} is rejected.

With promise rejection events, it becomes possible to detect and report promises which
fail and whose failures go unnoticed. It also becomes easier to write a global handler
for errors.

There are two types of `PromiseRejectionEvent`:
{{event("unhandledrejection")}} is sent by the JavaScript runtime when a promise is
rejected but the rejection goes unhandled. A {{event("rejectionhandled")}} event is
emitted if a promise is rejected but the rejection is caught by a rejection handler..

## Syntax

```js
promiseRejectionEvent = PromiseRejectionEvent(type, options);
```

### Parameters

_The `PromiseRejectionEvent()` constructor also inherits parameters from
{{domxref("Event.Event", "Event()")}}._

- `type`
  - : A string representing the name of the type of the
    `PromiseRejectionEvent`. This is case-sensitive and should be one of
    {{event("rejectionhandled", '"rejectionhandled"')}} or {{event("unhandledrejection",
    '"unhandledrejection"')}}, to match the event names of the possible (non-synthetic)
    {{domxref("PromiseRejectionEvent")}} events that user agents can actually fire).
- `options`

  - : An {{jsxref("Object")}} specifying details about the rejection which occurred:

    - `promise`
      - : The {{jsxref("Promise")}} that was rejected.
    - `reason`
      - : Any value or {{jsxref("Object")}} which represents the reason the promise was
        rejected. This can be anything from a numeric error code to an error
        {{domxref("DOMString")}} to an object which contains detailed information
        describing the situation resulting in the promise being rejected.

### Return value

A new `PromiseRejectionEvent` configured as specified by the parameters.

## Examples

This example creates a new {{event("unhandledrejection")}} event for the promise
`myPromise` with the reason being the string "My house is on fire". The
`reason` could just as easily be a number, or even an object with detailed
information including the home address, how serious the fire is, and the phone number of
an emergency contact who should be notified.

```js
let myRejectionEvent = new PromiseRejectionEvent("unhandledrejection", {
  promise : myPromise,
  reason : "My house is on fire"
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Promises](/en-US/docs/Archive/Add-ons/Techniques/Promises)
- [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise")}}
- {{domxref("PromiseRejectionEvent")}}
