---
title: "CustomStateSet: forEach() method"
short-title: forEach()
slug: Web/API/CustomStateSet/forEach
page-type: web-api-instance-method
browser-compat: api.CustomStateSet.forEach
---

{{APIRef("Web Components")}}

The **`forEach()`** method of the {{domxref("CustomStateSet")}} interface executes a provided function for each value in the `CustomStateSet` object.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : Function to execute for each element, taking three arguments:
    - `value`, `key`
      - : The current element being processed in the `CustomStateSet`. As there are no keys in a `CustomStateSet`, the value is passed for both arguments.
    - `set`
      - : The `CustomStateSet` which `forEach()` was called upon.
- `thisArg`
  - : Value to use as `this` when executing `callbackFn`.

### Return value

Undefined.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
