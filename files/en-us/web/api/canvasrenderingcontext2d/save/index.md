---
title: "CanvasRenderingContext2D: save() method"
short-title: save()
slug: Web/API/CanvasRenderingContext2D/save
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.save
---

{{APIRef}}

The
**`CanvasRenderingContext2D.save()`**
method of the Canvas 2D API saves the entire state of the canvas by pushing the current
state onto a stack.

### The drawing state

The drawing state that gets saved onto a stack consists of:

- The current transformation matrix.
- The current clipping region.
- The current dash list.
- The current values of the following attributes:
  {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}},
  {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}},
  {{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha")}},
  {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}},
  {{domxref("CanvasRenderingContext2D.lineCap", "lineCap")}},
  {{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin")}},
  {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}},
  {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}},
  {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}},
  {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}},
  {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}},
  {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}},
  {{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation")}},
  {{domxref("CanvasRenderingContext2D.font", "font")}},
  {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}},
  {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}},
  {{domxref("CanvasRenderingContext2D.direction", "direction")}},
  {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}}.

## Syntax

```js-nolint
save()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Saving the drawing state

This example uses the `save()` method to save the current state and
`restore()` to restore it later, so that you are able to draw a rect with the
current state later.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Save the current state
ctx.save();

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// Restore to the state saved by the most recent call to save()
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

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.restore()")}}
