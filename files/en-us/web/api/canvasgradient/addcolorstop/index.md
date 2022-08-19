---
title: CanvasGradient.addColorStop()
slug: Web/API/CanvasGradient/addColorStop
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - CanvasGradient
  - Gradients
  - Method
  - Reference
browser-compat: api.CanvasGradient.addColorStop
---
{{APIRef("Canvas API")}}

The **`CanvasGradient.addColorStop()`** method adds a new color stop,
defined by an `offset` and a `color`, to a given canvas gradient.

## Syntax

```js
addColorStop(offset, color)
```

### Parameters

- `offset`
  - : A number between `0` and `1`, inclusive, representing the
    position of the color stop. `0` represents the start of the gradient and
    `1` represents the end.
- `color`
  - : A [CSS](/en-US/docs/Web/CSS) {{cssxref("&lt;color&gt;")}} value
    representing the color of the stop.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if `offset` is not between 0 and 1 (both included).
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if `color` cannot be parsed as a CSS {{cssxref("&lt;color&gt;")}} value.

## Examples

### Adding stops to a gradient

This example uses the `addColorStop` method to add stops to a linear
{{domxref("CanvasGradient")}} object. The gradient is then used to fill a rectangle.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'green');
gradient.addColorStop(.7, 'white');
gradient.addColorStop(1, 'pink');
ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 200, 100);
```

#### Result

{{ EmbedLiveSample('Adding_stops_to_a_gradient', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasGradient")}}
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
