---
title: "CanvasRenderingContext2D: shadowOffsetX property"
short-title: shadowOffsetX
slug: Web/API/CanvasRenderingContext2D/shadowOffsetX
page-type: web-api-instance-property
browser-compat: api.CanvasRenderingContext2D.shadowOffsetX
---

{{APIRef}}

The
**`CanvasRenderingContext2D.shadowOffsetX`**
property of the Canvas 2D API specifies the distance that shadows will be offset
horizontally.

> **Note:** Shadows are only drawn if the
> {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}} property is set to
> a non-transparent value. One of the {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}, `shadowOffsetX`, or
> {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}} properties must
> be non-zero, as well.

## Value

A float specifying the distance that shadows will be offset horizontally. Positive values are to the right, and negative to the left. The default value is `0` (no horizontal offset). {{jsxref("Infinity")}} and {{jsxref("NaN")}} values are ignored.

## Examples

### Moving a shadow horizontally

This example adds a blurred shadow to a rectangle. The
{{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}} property sets its
color, `shadowOffsetX` sets its offset 25 units to the right, and
{{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}} gives it a blur level
of 10.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Shadow
ctx.shadowColor = "red";
ctx.shadowOffsetX = 25;
ctx.shadowBlur = 10;

// Rectangle
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 150, 100);
```

#### Result

{{ EmbedLiveSample('Moving_a_shadow_horizontally', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
