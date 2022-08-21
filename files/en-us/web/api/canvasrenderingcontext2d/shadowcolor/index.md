---
title: CanvasRenderingContext2D.shadowColor
slug: Web/API/CanvasRenderingContext2D/shadowColor
page-type: web-api-instance-property
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Property
  - Reference
browser-compat: api.CanvasRenderingContext2D.shadowColor
---
{{APIRef}}

The
**`CanvasRenderingContext2D.shadowColor`**
property of the Canvas 2D API specifies the color of shadows.

Be aware that the shadow's rendered opacity will be affected by the opacity of the
{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} color when filling, and
of the {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} color when
stroking.

> **Note:** Shadows are only drawn if the `shadowColor`
> property is set to a non-transparent value. One of the
> {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}},
> {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}, or
> {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}} properties must
> be non-zero, as well.

## Value

A string parsed as a [CSS](/en-US/docs/Web/CSS) {{cssxref("&lt;color&gt;")}} value. The default value is fully-transparent black.

## Examples

### Adding a shadow to shapes

This example adds a shadow to two squares; the first one is filled, and the second one
is stroked. The `shadowColor` property sets the shadows' color, while
`shadowOffsetX` and `shadowOffsetY` set their position relative to
the shapes.

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
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;

// Filled rectangle
ctx.fillRect(20, 20, 100, 100);

// Stroked rectangle
ctx.lineWidth = 6;
ctx.strokeRect(170, 20, 100, 100);
```

#### Result

{{ EmbedLiveSample('Adding_a_shadow_to_shapes', 700, 180) }}

### Shadows on translucent shapes

A shadow's opacity is affected by the transparency level of its parent object (even
when `shadowColor` specifies a completely opaque value). This example strokes
and fills a rectangle with translucent colors.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The resulting alpha value of the fill shadow is `.8 * .2`, or
`.16`. The alpha of the stroke shadow is `.8 * .6`, or
`.48`.

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Shadow
ctx.shadowColor = 'rgba(255, 0, 0, .8)';
ctx.shadowBlur = 8;
ctx.shadowOffsetX = 30;
ctx.shadowOffsetY = 20;

// Filled rectangle
ctx.fillStyle = 'rgba(0, 255, 0, .2)';
ctx.fillRect(10, 10, 150, 100);

// Stroked rectangle
ctx.lineWidth = 10;
ctx.strokeStyle = 'rgba(0, 0, 255, .6)';
ctx.strokeRect(10, 10, 150, 100);
```

#### Result

{{ EmbedLiveSample('Shadows_on_translucent_shapes', 700, 180) }}

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
