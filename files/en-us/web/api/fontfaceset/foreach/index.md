---
title: FontFaceSet.forEach()
slug: Web/API/FontFaceSet/forEach
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - forEach
  - FontFaceSet
browser-compat: api.FontFaceSet.forEach
---
{{APIRef("CSS Font Loading API")}}

The **`forEach()`** method of the {{domxref("FontFaceSet")}} interface executes a provided function for each value in the `FontFaceSet` object.

## Syntax

```js
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : Function to execute for each element, taking three arguments:
    - `value`, `key`
      - : The current element being processed in the `FontFaceSet`. As there are no keys in a `FontFaceSet`, the value is passed for both arguments.
    - `set`
      - : The `FontFaceSet` which `forEach()` was called on.
- `thisArg`
  - : Value to use as {{jsxref('this')}} when executing `callbackFn`.

### Return value

Undefined.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
