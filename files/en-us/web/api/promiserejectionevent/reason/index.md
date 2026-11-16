---
title: "PromiseRejectionEvent: reason property"
short-title: reason
slug: Web/API/PromiseRejectionEvent/reason
page-type: web-api-instance-property
browser-compat: api.PromiseRejectionEvent.reason
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

The {{domxref("PromiseRejectionEvent")}} **`reason`** read-only
property is any JavaScript value or {{jsxref("Object")}} which provides the reason
passed into {{jsxref("Promise.reject()")}}. This in theory provides information about
why the promise was rejected.

## Value

A value or object which provides information you can use to understand why the promise
was rejected. This could be anything from an error code to an object with text, links,
and whatever else you might wish to include.

## Examples

```js
window.onunhandledrejection = (e) => {
  console.log(e.reason);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Promise")}}
- {{domxref("PromiseRejectionEvent")}}
- {{domxref("Window.rejectionhandled_event", "rejectionhandled")}}
- {{domxref("Window.unhandledrejection_event", "unhandledrejection")}}
