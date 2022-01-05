---
title: DOMRectReadOnly.fromRect()
slug: Web/API/DOMRectReadOnly/fromRect
tags:
  - API
  - DOM Reference
  - DOMRect
  - DOMRectReadOnly
  - Experimental
  - Geometry
  - Method
  - Reference
  - fromRect()
browser-compat: api.DOMRectReadOnly.fromRect
---
{{APIRef("DOM")}}{{SeeCompatTable}}

The **`fromRect()`** property of the
{{domxref("DOMRectReadOnly")}} interface creates a new `DOMRectReadOnly`
object with a given location and dimensions.

## Syntax

```js
var domRect = DOMRectReadOnly.fromRect(rectangle)
```

### Parameters

- `rectangle` {{optional_inline}}

  - : An object specifying the location and dimensions of a rectangle. All properties
    default to `0`. The properties are:

    - `x`: The coordinate of the left side of the rectangle.
    - `y`: The coordinate of the top side of the rectangle.
    - `width`: The width of the rectangle.
    - `height`: The height of the rectangle.

### Return value

An instance of {{domxref("DOMRect")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
