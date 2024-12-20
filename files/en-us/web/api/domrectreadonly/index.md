---
title: DOMRectReadOnly
slug: Web/API/DOMRectReadOnly
page-type: web-api-interface
browser-compat: api.DOMRectReadOnly
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`DOMRectReadOnly`** interface specifies the standard properties (also used by {{domxref("DOMRect")}}) to define a rectangle whose properties are immutable.

## Constructor

- {{domxref("DOMRectReadOnly.DOMRectReadOnly","DOMRectReadOnly()")}}
  - : Defined to create a new `DOMRectReadOnly` object.

## Instance properties

- {{domxref("DOMRectReadOnly.x")}} {{ReadOnlyInline}}
  - : Returns the x coordinate of the `DOMRectReadOnly`'s origin.
- {{domxref("DOMRectReadOnly.y")}} {{ReadOnlyInline}}
  - : Returns the y coordinate of the `DOMRectReadOnly`'s origin.
- {{domxref("DOMRectReadOnly.width")}} {{ReadOnlyInline}}
  - : Returns the width of the `DOMRectReadOnly`.
- {{domxref("DOMRectReadOnly.height")}} {{ReadOnlyInline}}
  - : Returns the height of the `DOMRectReadOnly`.
- {{domxref("DOMRectReadOnly.top")}} {{ReadOnlyInline}}
  - : Returns the top coordinate value of the `DOMRectReadOnly` (usually the same as `y`).
- {{domxref("DOMRectReadOnly.right")}} {{ReadOnlyInline}}
  - : Returns the right coordinate value of the `DOMRectReadOnly` (usually the same as `x + width`).
- {{domxref("DOMRectReadOnly.bottom")}} {{ReadOnlyInline}}
  - : Returns the bottom coordinate value of the `DOMRectReadOnly` (usually the same as `y + height`).
- {{domxref("DOMRectReadOnly.left")}} {{ReadOnlyInline}}
  - : Returns the left coordinate value of the `DOMRectReadOnly` (usually the same as `x`).

## Static methods

- {{domxref("DOMRectReadOnly/fromRect_static", "DOMRectReadOnly.fromRect()")}}
  - : Creates a new `DOMRectReadOnly` object with a given location and dimensions.

## Instance methods

- {{domxref("DOMRectReadOnly.toJSON()")}}
  - : Returns a JSON representation of the `DOMRectReadOnly` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMPoint")}}
