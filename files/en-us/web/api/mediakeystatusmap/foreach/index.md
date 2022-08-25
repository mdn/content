---
title: MediaKeyStatusMap.forEach()
slug: Web/API/MediaKeyStatusMap/forEach
page-type: web-api-instance-method
tags:
  - API
  - EncryptedMediaExtensions
  - MediaKeyStatusMap
  - Method
  - Reference
  - forEach()
browser-compat: api.MediaKeyStatusMap.forEach
---
{{APIRef("EncryptedMediaExtensions API")}}

The **`forEach`** property of the
{{domxref("MediaKeyStatusMap")}} interface calls callback once for each key-value pair
in the status map, in insertion order. If an argument is present it will be passed to
the callback.

## Syntax

```js
// Arrow function
forEach((currentValue) => { /* … */ } )
forEach((currentValue, index) => { /* … */ } )
forEach((currentValue, index, array) => { /* … */ } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function (currentValue) => { /* … */ })
forEach(function (currentValue, index) => { /* … */ })
forEach(function (currentValue, index, array) => { /* … */ })
forEach(function (currentValue, index, array) => { /* … */ }, thisArg)
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
