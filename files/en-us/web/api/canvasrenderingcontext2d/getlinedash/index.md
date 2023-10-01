---
title: "CanvasRenderingContext2D: getLineDash() method"
short-title: getLineDash()
slug: Web/API/CanvasRenderingContext2D/getLineDash
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.getLineDash
---

{{APIRef}}

The **`getLineDash()`** method of the Canvas 2D API's
{{domxref("CanvasRenderingContext2D")}} interface gets the current line dash pattern.

## Syntax

```js-nolint
getLineDash()
```

### Parameters

None.

### Return value

An {{jsxref("Array")}} of numbers that specify distances to alternately draw a line and
a gap (in coordinate space units). If the number, when setting the elements, is odd, the
elements of the array get copied and concatenated. For example, setting the line dash to
`[5, 15, 25]` will result in getting back
`[5, 15, 25, 5, 15, 25]`.

## Examples

### Getting the current line dash setting

This example demonstrates the `getLineDash()` method.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

As set by {{domxref("CanvasRenderingContext2D.setLineDash()", "setLineDash()")}},
strokes consist of lines that are 10 units wide, with spaces of 20 units in between each
line.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.setLineDash([10, 20]);
console.log(ctx.getLineDash()); // [10, 20]

// Draw a dashed line
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Getting_the_current_line_dash_setting', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
