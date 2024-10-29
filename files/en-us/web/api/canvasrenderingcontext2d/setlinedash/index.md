---
title: "CanvasRenderingContext2D: setLineDash() method"
short-title: setLineDash()
slug: Web/API/CanvasRenderingContext2D/setLineDash
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.setLineDash
---

{{APIRef}}

The **`setLineDash()`** method of the Canvas 2D API's
{{domxref("CanvasRenderingContext2D")}} interface sets the line dash pattern used when
stroking lines. It uses an array of values that specify alternating lengths of lines
and gaps which describe the pattern.

> [!NOTE]
> To return to using solid lines, set the line dash list to an
> empty array.

## Syntax

```js-nolint
setLineDash(segments)
```

### Parameters

- `segments`
  - : An {{jsxref("Array")}} of numbers that specify distances to alternately draw a
    line and a gap (in coordinate space units). If the number of elements in the array
    is odd, the elements of the array get copied and concatenated. For example,
    `[5, 15, 25]` will become `[5, 15, 25, 5, 15, 25]`. If the
    array is empty, the line dash list is cleared and line strokes return to being
    solid.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Basic example

This example uses the `setLineDash()` method to draw a dashed line above a
solid line.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Dashed line
ctx.beginPath();
ctx.setLineDash([5, 15]);
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();

// Solid line
ctx.beginPath();
ctx.setLineDash([]);
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Basic_example', 700, 180) }}

### Some common patterns

This example illustrates a variety of common line dash patterns.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The `drawDashedLine()` function created below makes the drawing of multiple
dashed lines simple. It receives a pattern array as its only parameter.

```js
function drawDashedLine(pattern) {
  ctx.beginPath();
  ctx.setLineDash(pattern);
  ctx.moveTo(0, y);
  ctx.lineTo(300, y);
  ctx.stroke();
  y += 20;
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let y = 15;

drawDashedLine([]);
drawDashedLine([1, 1]);
drawDashedLine([10, 10]);
drawDashedLine([20, 5]);
drawDashedLine([15, 3, 3, 3]);
drawDashedLine([20, 3, 3, 3, 3, 3, 3, 3]);
drawDashedLine([12, 3, 3]); // Equals [12, 3, 3, 12, 3, 3]
```

#### Result

{{ EmbedLiveSample('Some_common_patterns', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
