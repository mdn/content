---
title: CanvasRenderingContext2D.textBaseline
slug: Web/API/CanvasRenderingContext2D/textBaseline
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Property
  - Reference
browser-compat: api.CanvasRenderingContext2D.textBaseline
---
{{APIRef}}

The
**`CanvasRenderingContext2D.textBaseline`**
property of the Canvas 2D API specifies the current text baseline used when drawing
text.

## Syntax

```js
ctx.textBaseline = "top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom";
```

### Options

Possible values:

- `"top"`
  - : The text baseline is the top of the em square.
- `"hanging"`
  - : The text baseline is the hanging baseline. (Used by Tibetan and other Indic
    scripts.)
- `"middle"`
  - : The text baseline is the middle of the em square.
- `"alphabetic"`
  - : The text baseline is the normal alphabetic baseline. Default value.
- `"ideographic"`
  - : The text baseline is the ideographic baseline; this is the bottom of the body of the
    characters, if the main body of characters protrudes beneath the alphabetic baseline.
    (Used by Chinese, Japanese, and Korean scripts.)
- `"bottom"`
  - : The text baseline is the bottom of the bounding box. This differs from the
    ideographic baseline in that the ideographic baseline doesn't consider descenders.

The default value is `"alphabetic"`.

## Examples

### Comparison of property values

This example demonstrates the various `textBaseline` property values.

#### HTML

```html
<canvas id="canvas" width="550" height="500"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const baselines = ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'];
ctx.font = '36px serif';
ctx.strokeStyle = 'red';

baselines.forEach(function (baseline, index) {
  ctx.textBaseline = baseline;
  const y = 75 + index * 75;
  ctx.beginPath();
  ctx.moveTo(0, y + 0.5);
  ctx.lineTo(550, y + 0.5);
  ctx.stroke();
  ctx.fillText('Abcdefghijklmnop (' + baseline + ')', 0, y);
});
```

#### Result

{{ EmbedLiveSample('Comparison_of_property_values', 700, 550) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
