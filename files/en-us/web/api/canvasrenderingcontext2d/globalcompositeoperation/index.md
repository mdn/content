---
title: CanvasRenderingContext2D.globalCompositeOperation
slug: Web/API/CanvasRenderingContext2D/globalCompositeOperation
page-type: web-api-instance-property
tags:
  - API
  - Blending
  - Canvas
  - CanvasRenderingContext2D
  - Compositing
  - Property
  - Reference
browser-compat: api.CanvasRenderingContext2D.globalCompositeOperation
---
{{APIRef}}

The
**`CanvasRenderingContext2D.globalCompositeOperation`**
property of the Canvas 2D API sets the type of compositing operation to apply when
drawing new shapes.

See also [Compositing and clipping](/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing) in the [Canvas Tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial).

## Value

A string identifying which of the compositing or blending mode operations to use.

### Operations

{{EmbedLiveSample("Compositing_example", 750, 6900, ""
  ,"Web/API/Canvas_API/Tutorial/Compositing/Example")}}

## Examples

### Changing the composite operation

This example uses the `globalCompositeOperation` property to draw two
rectangles that exclude themselves where they overlap.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.globalCompositeOperation = 'xor';

ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);
```

#### Result

{{ EmbedLiveSample('Changing_the_composite_operation', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### WebKit/Blink-specific notes

- In WebKit- and Blink-based Browsers, a non-standard and deprecated method
  `ctx.setCompositeOperation()` is implemented besides this property.
- Support for `"plus-darker"` and `"darker"` were removed in
  Chrome 48. Developers looking for a replacement should use `"darken"`.

### Gecko-specific notes

- An early Canvas specification draft specified the value `"darker"`.
  However, Firefox removed support for `"darker"` in version 4
  ({{bug(571532)}}). See also [this blog post](https://dropshado.ws/post/77229081704/firefox-doesnt-support-canvas-composite-darker) that suggests using `"difference"` as a way to achieve a
  similar affect to `"darker"`.

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
