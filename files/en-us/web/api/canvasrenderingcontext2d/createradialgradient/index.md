---
title: "CanvasRenderingContext2D: createRadialGradient() method"
short-title: createRadialGradient()
slug: Web/API/CanvasRenderingContext2D/createRadialGradient
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.createRadialGradient
---

{{APIRef}}

The
**`CanvasRenderingContext2D.createRadialGradient()`**
method of the Canvas 2D API creates a radial gradient using the size and coordinates of
two circles.

This method returns a {{domxref("CanvasGradient")}}. To be applied to a shape, the
gradient must first be assigned to the {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}
or {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} properties.

> **Note:** Gradient coordinates are global, i.e., relative to the current
> coordinate space. When applied to a shape, the coordinates are NOT relative to the
> shape's coordinates.

## Syntax

```js-nolint
createRadialGradient(x0, y0, r0, x1, y1, r1)
```

The `createRadialGradient()` method is specified by six parameters, three
defining the gradient's start circle, and three defining the end circle.

### Parameters

- `x0`
  - : The x-axis coordinate of the start circle.
- `y0`
  - : The y-axis coordinate of the start circle.
- `r0`
  - : The radius of the start circle. Must be non-negative and finite.
- `x1`
  - : The x-axis coordinate of the end circle.
- `y1`
  - : The y-axis coordinate of the end circle.
- `r1`
  - : The radius of the end circle. Must be non-negative and finite.

### Return value

A radial {{domxref("CanvasGradient")}} initialized with the two specified circles.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown when non-finite values are passed in parameter.
- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown when a negative radius is passed in parameter.

## Examples

### Filling a rectangle with a radial gradient

This example initializes a radial gradient using the
`createRadialGradient()` method. Three color stops between the gradient's two
circles are then created. Finally, the gradient is assigned to the canvas context, and
is rendered to a filled rectangle.

#### HTML

```html
<canvas id="canvas" width="200" height="200"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create a radial gradient
// The inner circle is at x=110, y=90, with radius=30
// The outer circle is at x=100, y=100, with radius=70
const gradient = ctx.createRadialGradient(110, 90, 30, 100, 100, 70);

// Add three color stops
gradient.addColorStop(0, "pink");
gradient.addColorStop(0.9, "white");
gradient.addColorStop(1, "green");

// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 160, 160);
```

#### Result

{{ EmbedLiveSample('Filling_a_rectangle_with_a_radial_gradient', 700, 240) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
- {{domxref("CanvasRenderingContext2D.createConicGradient()")}}
