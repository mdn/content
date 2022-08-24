---
title: CanvasRenderingContext2D.fill()
slug: Web/API/CanvasRenderingContext2D/fill
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.fill
---
{{APIRef}}

The
**`CanvasRenderingContext2D.fill()`**
method of the Canvas 2D API fills the current or given path with the current
{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}.

## Syntax

```js
fill()
fill(path)
fill(fillRule)
fill(path, fillRule)
```

### Parameters

- `fillRule`

  - : The algorithm by which to determine if a point is inside or outside the filling
    region.
    Possible values:

    - `nonzero`
      - : The [non-zero winding rule](https://en.wikipedia.org/wiki/Nonzero-rule).
      Default rule.
    - `evenodd`
      - : The [even-odd winding rule](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

- `path`
  - : A {{domxref("Path2D")}} path to fill.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Filling a rectangle

This example fills a rectangle with the `fill()` method.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.rect(10, 10, 150, 100);
ctx.fill();
```

#### Result

{{ EmbedLiveSample('Filling_a_rectangle', 700, 180) }}

### Specifying a path and a fillRule

This example saves some intersecting lines to a Path2D object. The `fill()`
method is then used to render the object to the canvas. A hole is left unfilled in the
object's center by using the `"evenodd"` rule; by default (with the
`"nonzero"` rule), the hole would also be filled.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Create path
let region = new Path2D();
region.moveTo(30, 90);
region.lineTo(110, 20);
region.lineTo(240, 130);
region.lineTo(60, 130);
region.lineTo(190, 20);
region.lineTo(270, 90);
region.closePath();

// Fill path
ctx.fillStyle = 'green';
ctx.fill(region, 'evenodd');
```

#### Result

{{ EmbedLiveSample('Specifying_a_path_and_a_fillRule', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillStyle")}}
