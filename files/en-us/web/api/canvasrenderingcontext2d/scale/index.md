---
title: CanvasRenderingContext2D.scale()
slug: Web/API/CanvasRenderingContext2D/scale
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.scale
---
{{APIRef}}

The
**`CanvasRenderingContext2D.scale()`**
method of the Canvas 2D API adds a scaling transformation to the canvas units
horizontally and/or vertically.

By default, one unit on the canvas is exactly one pixel. A scaling transformation
modifies this behavior. For instance, a scaling factor of 0.5 results in a unit size of
0.5 pixels; shapes are thus drawn at half the normal size. Similarly, a scaling factor
of 2.0 increases the unit size so that one unit becomes two pixels; shapes are thus
drawn at twice the normal size.

## Syntax

```js
scale(x, y)
```

### Parameters

- `x`
  - : Scaling factor in the horizontal direction. A negative value flips pixels across the
    vertical axis. A value of `1` results in no horizontal scaling.
- `y`
  - : Scaling factor in the vertical direction. A negative value flips pixels across the
    horizontal axis. A value of `1` results in no vertical scaling.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Scaling a shape

This example draws a scaled rectangle. A non-scaled rectangle is then drawn for
comparison.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The rectangle has a specified width of 8 and a height of 20. The transformation matrix
scales it by 9x horizontally and by 3x vertically. Thus, its final size is a width of 72
and a height of 60.

Notice that its position on the canvas also changes. Since its specified corner is (10,
10\), its rendered corner becomes (90, 30).

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Scaled rectangle
ctx.scale(9, 3);
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 8, 20);

// Reset current transformation matrix to the identity matrix
ctx.setTransform(1, 0, 0, 1, 0, 0);

// Non-scaled rectangle
ctx.fillStyle = 'gray';
ctx.fillRect(10, 10, 8, 20);
```

#### Result

The scaled rectangle is red, and the non-scaled rectangle is gray.

{{ EmbedLiveSample('Scaling_a_shape', 700, 180) }}

### Flipping things horizontally or vertically

You can use `scale(-1, 1)` to flip the context horizontally and
`scale(1, -1)` to flip it vertically. In this example, the words "Hello
world!" are flipped horizontally.

Note that the call to {{domxref("CanvasRenderingContext2D.fillText()", "fillText()")}}
specifies a negative x coordinate. This is to adjust for the negative scaling factor:
`-280 * -1` becomes `280`, and text is drawn leftwards from that
point.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.scale(-1, 1);
ctx.font = '48px serif';
ctx.fillText('Hello world!', -280, 90);
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

#### Result

{{ EmbedLiveSample('Flipping_things_horizontally_or_vertically', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
