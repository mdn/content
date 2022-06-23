---
title: CanvasRenderingContext2D.shadowBlur
slug: Web/API/CanvasRenderingContext2D/shadowBlur
page-type: web-api-instance-property
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Property
  - Reference
browser-compat: api.CanvasRenderingContext2D.shadowBlur
---
{{APIRef}}

The
**`CanvasRenderingContext2D.shadowBlur`**
property of the Canvas 2D API specifies the amount of blur applied to shadows. The
default is `0` (no blur).

> **Note:** Shadows are only drawn if the
> {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}} property is set to
> a non-transparent value. One of the `shadowBlur`,
> {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}, or
> {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}} properties must
> be non-zero, as well.

## Value

A non-negative float specifying the level of shadow blur, where `0` represents no blur and larger numbers represent increasingly more blur. This value doesn't correspond to a number of pixels, and is not affected by the current transformation matrix. The default value is `0`. Negative, {{jsxref("Infinity")}}, and {{jsxref("NaN")}} values are ignored.

## Examples

### Adding a shadow to a shape

This example adds a blurred shadow to a rectangle. The `shadowColor`
property sets its color, and `shadowBlur` sets its level of blurriness.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Shadow
ctx.shadowColor = 'red';
ctx.shadowBlur = 15;

// Rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(20, 20, 150, 100);
```

#### Result

{{ EmbedLiveSample('Adding_a_shadow_to_a_shape', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### WebKit/Blink-specific notes

In WebKit- and Blink-based browsers, the non-standard and deprecated method
`ctx.setShadow()` is implemented besides this property.

```js
setShadow(width, height, blur, color, alpha);
setShadow(width, height, blur, graylevel, alpha);
setShadow(width, height, blur, r, g, b, a);
setShadow(width, height, blur, c, m, y, k, a);
```

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
