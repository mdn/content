---
title: MediaKeyStatusMap.forEach()
slug: Web/API/MediaKeyStatusMap/forEach
tags:
  - API
  - EncryptedMediaExtensions
  - MediaKeyStatusMap
  - Method
  - Reference
  - forEach()
browser-compat: api.MediaKeyStatusMap.forEach
---
{{APIRef("EncryptedMediaExtensions API")}}{{SeeCompatTable}}

The **`forEach`** property of the
{{domxref("MediaKeyStatusMap")}} interface calls callback once for each key-value pair
in the status map, in insertion order. If an argument is present it will be passed to
the callback.

## Syntax

```js
mediaKeyStatusMap.forEach(callback[, thisArg])
```

### Parameters

- `callback`

  - : Function to execute for each element, taking three arguments:

    - `currentValue`
      - : The current element being processed in the array.
    - `index`
      - : The index of the current element being processed in the array.
    - `array`
      - : Which array `forEach()` is being applied to.

- `thisArg {{Optional_inline}}`
  - : Value used as `this` when executing `callback`.

### Returns

{{jsxref('undefined')}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
