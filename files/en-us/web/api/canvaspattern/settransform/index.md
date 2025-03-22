---
title: "CanvasPattern: setTransform() method"
short-title: setTransform()
slug: Web/API/CanvasPattern/setTransform
page-type: web-api-instance-method
browser-compat: api.CanvasPattern.setTransform
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The **`CanvasPattern.setTransform()`** method uses a {{domxref("DOMMatrix")}} object as the pattern's transformation matrix and invokes it on the pattern.

## Syntax

```js-nolint
setTransform(matrix)
```

### Parameters

- `matrix`
  - : A {{domxref("DOMMatrix")}} to use as the pattern's transformation matrix.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using the `setTransform` method

This is a code snippet which uses the `setTransform` method to
create a {{domxref("CanvasPattern")}} with the specified pattern transformation from a
{{domxref("DOMMatrix")}}. The pattern gets applied if you set it as the current
{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} and gets drawn onto the
canvas when using the {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}}
method, for example.

```html live-sample___canvas
<canvas id="canvas"></canvas>
```

```js live-sample___canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const matrix = new DOMMatrix([1, 0.2, 0.8, 1, 0, 0]);

const img = new Image();
img.src = "canvas_create_pattern.png";

img.onload = () => {
  const pattern = ctx.createPattern(img, "repeat");
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};
```

{{EmbedLiveSample('canvas', , 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasPattern")}}
- {{domxref("DOMMatrix")}}
