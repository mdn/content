---
title: "MediaKeyStatusMap: forEach() method"
short-title: forEach()
slug: Web/API/MediaKeyStatusMap/forEach
page-type: web-api-instance-method
browser-compat: api.MediaKeyStatusMap.forEach
---

{{APIRef("Encrypted Media Extensions")}}

The **`forEach()`** method of the
{{domxref("MediaKeyStatusMap")}} interface calls callback once for each key-value pair
in the status map, in insertion order. If an argument is present it will be passed to
the callback.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callbackFn`

  - : Function to execute for each element, taking three arguments:

    - `currentValue`
      - : The current element being processed in the array.
    - `index` {{optional_inline}}
      - : The index of the current element being processed in the array.
    - `array` {{optional_inline}}
      - : Which array `forEach()` is being applied to.

- `thisArg` {{optional_inline}}
  - : Value used as `this` when executing `callback`.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
