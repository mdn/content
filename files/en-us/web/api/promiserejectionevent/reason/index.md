---
title: PromiseRejectionEvent.reason
slug: Web/API/PromiseRejectionEvent/reason
tags:
  - API
  - HTML DOM
  - JavaScript
  - PromiseRejectionEvent
  - Promises
  - Property
  - Reference
  - events
  - reason
browser-compat: api.PromiseRejectionEvent.reason
---
{{APIRef("HTML DOM")}}

The {{domxref("PromiseRejectionEvent")}} **`reason`** read-only
property is any JavaScript value or {{jsxref("Object")}} which provides the reason
passed into {{jsxref("Promise.reject()")}}. This in theory provides information about
why the promise was rejected.

## Syntax

```js
reason = PromiseRejectionEvent.reason
```

### Value

A  value or object which provides information you can use to understand why the promise
was rejected. This could be anything from an error code to an object with text, links,
and whatever else you might wish to include.

## Examples

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

- {{jsxref("Promise")}}
- {{domxref("PromiseRejectionEvent")}}
- {{event("rejectionhandled")}}
- {{event("unhandledrejection")}}
