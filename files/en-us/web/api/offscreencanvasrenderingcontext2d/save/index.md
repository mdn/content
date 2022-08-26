---
title: OffscreenCanvasRenderingContext2D.save()
slug: Web/API/OffscreenCanvasRenderingContext2D/save
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - OffscreenCanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.OffscreenCanvasRenderingContext2D.save
---

{{APIRef}}

The
**`OffscreenCanvasRenderingContext2D.save()`**
method of the Canvas 2D API saves the entire state of the canvas by pushing the current
state onto a stack.

### The drawing state

The drawing state that gets saved onto a stack consists of:

- The current transformation matrix.
- The current clipping region.
- The current dash list.
- The current values of the following attributes:
  {{domxref("OffscreenCanvasRenderingContext2D.strokeStyle", "strokeStyle")}},
  {{domxref("OffscreenCanvasRenderingContext2D.fillStyle", "fillStyle")}},
  {{domxref("OffscreenCanvasRenderingContext2D.globalAlpha", "globalAlpha")}},
  {{domxref("OffscreenCanvasRenderingContext2D.lineWidth", "lineWidth")}},
  {{domxref("OffscreenCanvasRenderingContext2D.lineCap", "lineCap")}},
  {{domxref("OffscreenCanvasRenderingContext2D.lineJoin", "lineJoin")}},
  {{domxref("OffscreenCanvasRenderingContext2D.miterLimit", "miterLimit")}},
  {{domxref("OffscreenCanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}},
  {{domxref("OffscreenCanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}},
  {{domxref("OffscreenCanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}},
  {{domxref("OffscreenCanvasRenderingContext2D.shadowBlur", "shadowBlur")}},
  {{domxref("OffscreenCanvasRenderingContext2D.shadowColor", "shadowColor")}},
  {{domxref("OffscreenCanvasRenderingContext2D.globalCompositeOperation",
    "globalCompositeOperation")}}, {{domxref("OffscreenCanvasRenderingContext2D.font", "font")}},
  {{domxref("OffscreenCanvasRenderingContext2D.textAlign", "textAlign")}},
  {{domxref("OffscreenCanvasRenderingContext2D.textBaseline", "textBaseline")}},
  {{domxref("OffscreenCanvasRenderingContext2D.direction", "direction")}},
  {{domxref("OffscreenCanvasRenderingContext2D.imageSmoothingEnabled",
    "imageSmoothingEnabled")}}.

## Syntax

```js
save();
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Saving the drawing state

This example uses the `save()` method to save the default state and
`restore()` to restore it later, so that you are able to draw a rect with the
default state later.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Save the default state
ctx.save();

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// Restore the default state
ctx.restore();

ctx.fillRect(150, 40, 100, 100);
```

#### Result

{{ EmbedLiveSample('Saving_the_drawing_state', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("OffscreenCanvasRenderingContext2D")}}
- {{domxref("OffscreenCanvasRenderingContext2D.restore()")}}
