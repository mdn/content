---
title: DOMPoint()
slug: Web/API/DOMPoint/DOMPoint
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Coordinates
  - DOM
  - DOMPoint
  - Geometry
  - Geometry Interfaces
  - Point
  - Reference
browser-compat: api.DOMPoint.DOMPoint
---
{{APIRef("DOM")}}

The **`DOMPoint()`** constructor
creates and returns a new {{domxref("DOMPoint")}} object, given the values for some or
all of its properties.

You can also create a `DOMPoint` by calling the
{{domxref("DOMPoint.fromPoint()")}} static function. That function accepts any object with the required parameters, including a `DOMPoint` or
{{domxref("DOMPointReadOnly")}}.

## Syntax

```js
new DOMPoint()
new DOMPoint(x)
new DOMPoint(x, y)
new DOMPoint(x, y, z)
new DOMPoint(x, y, z, w)
```

### Parameters

- `x` {{optional_inline}}
  - : The `x` coordinate for the new `DOMPoint`.
- `y` {{optional_inline}}
  - : The `y` coordinate for the new `DOMPoint`.
- `z` {{optional_inline}}
  - : The `z` coordinate for the new `DOMPoint`.
- `w` {{optional_inline}}
  - : The perspective value of the new `DOMPoint`.

## Examples

This example creates a `DOMPoint` representing the top-left corner of the
current window, then creates a second point based on the first, which is then offset by
100 pixels both vertically and horizontally.

```js
const windTopLeft = new DOMPoint(window.screenX, window.screenY);
const newTopLeft = DOMPoint.fromPoint(windTopLeft);
newTopLeft.x += 100;
newTopLeft.y += 100;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMPointReadOnly.DOMPointReadOnly", "DOMPointReadOnly()")}}
- {{domxref("DOMRect")}}
- {{domxref("DOMMatrix")}}
