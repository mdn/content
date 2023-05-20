---
title: DOMRectReadOnly
slug: Web/API/DOMRectReadOnly
page-type: web-api-interface
browser-compat: api.DOMRectReadOnly
---

{{APIRef("Geometry Interfaces")}}

The **`DOMRectReadOnly`** interface specifies the standard properties used by {{domxref("DOMRect")}} to define a rectangle whose properties are immutable.

## Constructor

- {{domxref("DOMRectReadOnly.DOMRectReadOnly","DOMRectReadOnly()")}}
  - : Defined to create a new `DOMRectReadOnly` object. Note that this constructor cannot be called by 3rd party JavaScript; doing so returns an `"Illegal constructor"` {{jsxref('TypeError')}}.

## Instance properties

- {{domxref("DOMRectReadOnly.x")}} {{ReadOnlyInline}}
  - : The x coordinate of the `DOMRect`'s origin.
- {{domxref("DOMRectReadOnly.y")}} {{ReadOnlyInline}}
  - : The y coordinate of the `DOMRect`'s origin.
- {{domxref("DOMRectReadOnly.width")}} {{ReadOnlyInline}}
  - : The width of the `DOMRect`.
- {{domxref("DOMRectReadOnly.height")}} {{ReadOnlyInline}}
  - : The height of the `DOMRect`.
- {{domxref("DOMRectReadOnly.top")}} {{ReadOnlyInline}}
  - : Returns the top coordinate value of the `DOMRect` (usually the same as `y`).
- {{domxref("DOMRectReadOnly.right")}} {{ReadOnlyInline}}
  - : Returns the right coordinate value of the `DOMRect` (usually the same as `x + width`).
- {{domxref("DOMRectReadOnly.bottom")}} {{ReadOnlyInline}}
  - : Returns the bottom coordinate value of the `DOMRect` (usually the same as `y + height`).
- {{domxref("DOMRectReadOnly.left")}} {{ReadOnlyInline}}
  - : Returns the left coordinate value of the `DOMRect` (usually the same as `x`).

## Static methods

- {{domxref("DOMRectReadOnly.fromRect()")}}
  - : Creates a new `DOMRect` object with a given location and dimensions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMPoint")}}
