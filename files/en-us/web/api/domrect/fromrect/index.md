---
title: DOMRect.fromRect()
slug: Web/API/DOMRect/fromRect
page-type: web-api-static-method
tags:
  - API
  - DOMRect
  - Geometry
  - Method
  - Reference
browser-compat: api.DOMRect.fromRect
---
{{APIRef("Geometry Interfaces")}}

The **`fromRect()`** static method of the
{{domxref("DOMRect")}} object creates a new `DOMRect`
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

An instance of {{domxref("DOMRect")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
