---
title: SVGPoint
slug: Web/API/SVGPoint
page-type: web-api-interface
status:
  - deprecated
browser-compat: api.SVGPoint
---

{{APIRef("SVG")}}{{Deprecated_Header}}

> **Warning:** `SVGPoint` is deprecated.
> Use {{domxref("DOMPoint")}} or {{domxref("DOMPointReadOnly")}} instead.

An `SVGPoint` represents a 2D or 3D point in the SVG coordinate system.

## Syntax

```js-nolint
createSVGPoint()
```

### Value

The returned value is an `SVGPoint` object.

## Example

```js
// Create an SVGPoint in the user coordinate system
let s = document.getElementById("SVG-ElementID").createSVGPoint();

// Then, set the x and y values of the returned SVGPoint object
// (which is the variable `s`)
s.y = 10;
s.x = 10;
```

## Browser compatibility

{{Compat}}
