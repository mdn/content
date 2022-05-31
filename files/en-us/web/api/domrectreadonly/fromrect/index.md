---
title: DOMRectReadOnly.fromRect()
slug: Web/API/DOMRectReadOnly/fromRect
page-type: web-api-static-method
tags:
  - API
  - DOMRectReadOnly
  - Geometry
  - Method
  - Reference
browser-compat: api.DOMRectReadOnly.fromRect
---
{{APIRef("Geometry Interfaces")}}

The **`fromRect()`** static method of the
{{domxref("DOMRectReadOnly")}} object creates a new `DOMRectReadOnly`
object with a given location and dimensions.

## Syntax

```js
fromRect()
fromRect(rectangle)
```

### Parameters

- `rectangle` {{optional_inline}}

  - : An object specifying the location and dimensions of a rectangle. All properties
    default to `0`. The properties are:

    - `x`: The coordinate of the left side of the rectangle.
    - `y`: The coordinate of the top side of the rectangle.
    - `width`: The width of the rectangle.
    - `height`: The height of the rectangle.

### Return value

An instance of {{domxref("DOMRectReadOnly")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
