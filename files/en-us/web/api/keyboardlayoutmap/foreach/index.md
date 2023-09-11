---
title: "KeyboardLayoutMap: forEach() method"
short-title: forEach()
slug: Web/API/KeyboardLayoutMap/forEach
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.KeyboardLayoutMap.forEach
---

{{APIRef("Keyboard API")}}{{SeeCompatTable}}

The **`forEach()`** method of the
{{domxref('KeyboardLayoutMap')}} interface executes a provided function once for
each element of the map.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callbackFn`

  - : The function to execute for each element, taking three arguments:

    - `currentValue`
      - : The value of the current element being processed.
    - `index` {{optional_inline}}
      - : The index of the current element being processed.
    - `array` {{optional_inline}}
      - : The KeyboardLayoutMap that `forEach()` is being called on.

- `thisArg` {{Optional_inline}}
  - : Value to use as **`this`** (i.e., the reference
    `Object`) when executing `callback`.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
