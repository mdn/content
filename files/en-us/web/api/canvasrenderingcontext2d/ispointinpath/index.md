---
title: CanvasRenderingContext2D.isPointInPath()
slug: Web/API/CanvasRenderingContext2D/isPointInPath
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.isPointInPath
---
{{APIRef}}

The
**`CanvasRenderingContext2D.isPointInPath()`**
method of the Canvas 2D API reports whether or not the specified point is contained in
the current path.

## Syntax

```js
isPointInPath(x, y)
isPointInPath(x, y, fillRule)
isPointInPath(path, x, y)
isPointInPath(path, x, y, fillRule)
```

### Parameters

- `x`
  - : The x-axis coordinate of the point to check, unaffected by the current
    transformation of the context.
- `y`
  - : The y-axis coordinate of the point to check, unaffected by the current
    transformation of the context.
- `fillRule`

  - : The algorithm by which to determine if a point is inside or outside the path.
    Possible values:

    - `nonzero`
      - : The [non-zero winding rule](https://en.wikipedia.org/wiki/Nonzero-rule).
      Default rule.
    - `evenodd`
      - : The [even-odd winding rule](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

- `path`
  - : A {{domxref("Path2D")}} path to check against. If unspecified, the current path is
    used.

### Return value

- A boolean value
  - : A Boolean, which is `true` if the specified point is contained in the
    current or specified path, otherwise `false`.

## Examples

### Checking a point in the current path

This example uses the `isPointInPath()` method to check if a point is within
the current path.

#### HTML

```html
<canvas id="canvas"></canvas>
<p>In path: <code id="result">false</code></p>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const result = document.getElementById('result');

ctx.rect(10, 10, 100, 100);
ctx.fill();
result.innerText = ctx.isPointInPath(30, 70);
```

#### Result

{{ EmbedLiveSample('Checking_a_point_in_the_current_path', 700, 220) }}

### Checking a point in the specified path

Whenever you move the mouse, this example checks whether the cursor is in a circular
`Path2D` path. If yes, the circle becomes green, otherwise it is red.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Create circle
const circle = new Path2D();
circle.arc(150, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'red';
ctx.fill(circle);

// Listen for mouse moves
canvas.addEventListener('mousemove', (event) => {
  // Check whether point is inside circle
  const isPointInPath = ctx.isPointInPath(circle, event.offsetX, event.offsetY);
  ctx.fillStyle = isPointInPath ? 'green' : 'red';

  // Draw circle
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fill(circle);
});
```

#### Result

{{ EmbedLiveSample('Checking_a_point_in_the_specified_path', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Gecko-specific note

- Prior to Gecko 7.0 (Firefox 7.0 / Thunderbird 7.0 / SeaMonkey 2.4), this method
  incorrectly failed to multiply the specified point's coordinates by the current
  transformation matrix before comparing it to the path. Now this method works correctly
  even if the context is rotated, scaled, or otherwise transformed.

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
