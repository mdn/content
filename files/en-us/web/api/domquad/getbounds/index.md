---
title: "DOMQuad: getBounds() method"
short-title: getBounds()
slug: Web/API/DOMQuad/getBounds
page-type: web-api-instance-method
browser-compat: api.DOMQuad.getBounds
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The {{domxref("DOMQuad")}} method
`getBounds()` returns a {{domxref("DOMRect")}} object representing the smallest rectangle that fully contains the `DOMQuad` object.

## Syntax

```js-nolint
getBounds()
```

### Parameters

None.

### Return value

A {{domxref("DOMRect")}} with the x, y, width, and height properties, defining the bounding box for the `DOMQuad` based on its corner coordinates.

## Examples

This example creates a {{domxref("DOMQuad")}} with four points, then retrieves its bounding rectangle.

```js
const quad = new DOMQuad(
  { x: 40, y: 25 },
  { x: 180, y: 8 },
  { x: 210, y: 150 },
  { x: 10, y: 180 },
);

const quadBounds = quad.getBounds();
```

![An irregular quadrilateral with none of the sides being vertical or horizontal. Its four corners are marked with red circles. Around this quadrilateral is a dashed rectangle. All sides of this rectangle are vertical or horizontal and tangent the quadrilateral.](./domquad.svg)

The figure shows an irregular quadrilateral represented by a {{domxref("DOMQuad")}}. The four red colored circles represent the {{domxref("DOMPoint")}} attributes `p1` to `p4`. The dashed rectangle represents the bounding rectangle returned by the `getBounds()` method of the {{domxref("DOMQuad")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
