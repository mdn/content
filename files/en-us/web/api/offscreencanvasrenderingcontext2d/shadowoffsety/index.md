---
title: OffscreenCanvasRenderingContext2D.shadowOffsetY
slug: Web/API/OffscreenCanvasRenderingContext2D/shadowOffsetY
page-type: web-api-instance-property
tags:
  - API
  - Canvas
  - OffscreenCanvasRenderingContext2D
  - Property
  - Reference
browser-compat: api.OffscreenCanvasRenderingContext2D.shadowOffsetY
---

{{APIRef}}

The
**`OffscreenCanvasRenderingContext2D.shadowOffsetY`**
property of the Canvas 2D API specifies the distance that shadows will be offset
vertically.

> **Note:** Shadows are only drawn if the
> {{domxref("OffscreenCanvasRenderingContext2D.shadowColor", "shadowColor")}} property is set to
> a non-transparent value. One of the {{domxref("OffscreenCanvasRenderingContext2D.shadowBlur","shadowBlur")}},
> {{domxref("OffscreenCanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}},
> or `shadowOffsetY` properties must be non-zero, as well.

## Value

A float specifying the distance that shadows will be offset vertically. Positive values are down, and negative are up. The default value is `0` (no vertical offset). {{jsxref("Infinity")}} and {{jsxref("NaN")}} values are ignored.

## Examples

### Moving a shadow vertically

This example adds a blurred shadow to a rectangle. The
{{domxref("OffscreenCanvasRenderingContext2D.shadowColor", "shadowColor")}} property sets its
color, `shadowOffsetY` sets its offset 25 units towards the bottom, and
{{domxref("OffscreenCanvasRenderingContext2D.shadowBlur", "shadowBlur")}} gives it a blur level
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
ctx.shadowOffsetY = 25;
ctx.shadowBlur = 10;

// Rectangle
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 150, 80);
```

#### Result

{{ EmbedLiveSample('Moving_a_shadow_vertically', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this property: {{domxref("OffscreenCanvasRenderingContext2D")}}
- {{domxref("OffscreenCanvasRenderingContext2D.shadowOffsetX")}}
- {{domxref("OffscreenCanvasRenderingContext2D.shadowColor")}}
- {{domxref("OffscreenCanvasRenderingContext2D.shadowBlur")}}
