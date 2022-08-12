---
title: CanvasRenderingContext2D.moveTo()
slug: Web/API/CanvasRenderingContext2D/moveTo
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.moveTo
---
{{APIRef}}

The
**`CanvasRenderingContext2D.moveTo()`**
method of the Canvas 2D API begins a new sub-path at the point specified by the given
`(x, y)` coordinates.

## Syntax

```js
moveTo(x, y)
```

### Parameters

- `x`
  - : The x-axis (horizontal) coordinate of the point.
- `y`
  - : The y-axis (vertical) coordinate of the point.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Creating multiple sub-paths

This example uses `moveTo()` to create two sub-paths within a single path.
Both sub-paths are then rendered with a single `stroke()` call.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The first line begins at (50, 50) and ends at (200, 50). The second line begins at (50,
90\) and ends at (280, 120).

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50, 50);   // Begin first sub-path
ctx.lineTo(200, 50);
ctx.moveTo(50, 90);   // Begin second sub-path
ctx.lineTo(280, 120);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Creating_multiple_sub-paths', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
