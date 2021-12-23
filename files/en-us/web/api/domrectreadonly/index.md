---
title: DOMRectReadOnly
slug: Web/API/DOMRectReadOnly
tags:
  - API
  - DOM Reference
  - DOMRectReadOnly
  - Geometry
  - Geometry Interfaces
  - Interface
  - Read-only
  - Rectangle
  - Reference
browser-compat: api.DOMRectReadOnly
---
{{APIRef("Geometry Interfaces")}}

The **`DOMRectReadOnly`** interface specifies the standard properties used by {{domxref("DOMRect")}} to define a rectangle whose properties are immutable.

## Constructor

- {{domxref("DOMRectReadOnly.DOMRectReadOnly","DOMRectReadOnly()")}}
  - : Defined to create a new `DOMRectReadOnly` object. Note that this constructor cannot be called by 3rd party JavaScript; doing so returns an `"Illegal constructor"` {{jsxref('TypeError')}}.

## Properties

- {{domxref("DOMRectReadOnly.x")}} {{readonlyInline}}
  - : The x coordinate of the `DOMRect`'s origin.
- {{domxref("DOMRectReadOnly.y")}} {{readonlyInline}}
  - : The y coordinate of the `DOMRect`'s origin.
- {{domxref("DOMRectReadOnly.width")}} {{readonlyInline}}
  - : The width of the `DOMRect`.
- {{domxref("DOMRectReadOnly.height")}} {{readonlyInline}}
  - : The height of the `DOMRect`.
- {{domxref("DOMRectReadOnly.top")}} {{readonlyInline}}
  - : Returns the top coordinate value of the `DOMRect` (usually the same as `y`.)
- {{domxref("DOMRectReadOnly.right")}} {{readonlyInline}}
  - : Returns the right coordinate value of the `DOMRect` (usually the same as `x + width`).
- {{domxref("DOMRectReadOnly.bottom")}} {{readonlyInline}}
  - : Returns the bottom coordinate value of the `DOMRect` (usually the same as `y + height`).
- {{domxref("DOMRectReadOnly.left")}} {{readonlyInline}}
  - : Returns the left coordinate value of the `DOMRect` (usually the same as `x`).

## Static methods

- {{domxref("DOMRectReadOnly.fromRect()")}}
  - : Creates a new `DOMRect` object with a given location and dimensions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMPoint")}}
