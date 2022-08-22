---
title: CanvasRenderingContext2D.createLinearGradient()
slug: Web/API/CanvasRenderingContext2D/createLinearGradient
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Gradients
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.createLinearGradient
---
{{APIRef}}

The
**`CanvasRenderingContext2D.createLinearGradient()`**
method of the Canvas 2D API creates a gradient along the line connecting two given
coordinates.

![](mdn-canvas-lineargradient.png)

This method returns a linear {{domxref("CanvasGradient")}}. To be applied to a shape,
the gradient must first be assigned to the
{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} or
{{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} properties.

> **Note:** Gradient coordinates are global, i.e., relative to the current
> coordinate space. When applied to a shape, the coordinates are NOT relative to the
> shape's coordinates.

## Syntax

```js
createLinearGradient(x0, y0, x1, y1)
```

The `createLinearGradient()` method is specified by four parameters defining
the start and end points of the gradient line.

### Parameters

- `x0`
  - : The x-axis coordinate of the start point.
- `y0`
  - : The y-axis coordinate of the start point.
- `x1`
  - : The x-axis coordinate of the end point.
- `y1`
  - : The y-axis coordinate of the end point.

### Return value

A linear {{domxref("CanvasGradient")}} initialized with the specified line.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown when non-finite values are passed as parameters.

## Examples

### Filling a rectangle with a linear gradient

This example initializes a linear gradient using the
`createLinearGradient()` method. Three color stops between the gradient's
start and end points are then created. Finally, the gradient is assigned to the canvas
context, and is rendered to a filled rectangle.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Create a linear gradient
// The start gradient point is at x=20, y=0
// The end gradient point is at x=220, y=0
const gradient = ctx.createLinearGradient(20,0, 220,0);

// Add three color stops
gradient.addColorStop(0, 'green');
gradient.addColorStop(.5, 'cyan');
gradient.addColorStop(1, 'green');

// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 100);
```

#### Result

{{ EmbedLiveSample('Filling_a_rectangle_with_a_linear_gradient', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
- {{domxref("CanvasRenderingContext2D.createConicGradient()")}}
