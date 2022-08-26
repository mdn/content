---
title: CanvasRenderingContext2D.textBaseline
slug: Web/API/CanvasRenderingContext2D/textBaseline
page-type: web-api-instance-property
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

## Value

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

baselines.forEach((baseline, index) => {
  ctx.textBaseline = baseline;
  const y = 75 + index * 75;
  ctx.beginPath();
  ctx.moveTo(0, y + 0.5);
  ctx.lineTo(550, y + 0.5);
  ctx.stroke();
  ctx.fillText(`Abcdefghijklmnop (${baseline})`, 0, y);
});
```

#### Result

{{ EmbedLiveSample('Comparison_of_property_values', 700, 550) }}

### Comparison of property values on the same line

As with the previous example, this example demonstrates the various `textBaseline` property values, but in this case with all of them lined up horizontally along the same line — to make it easier to see how they differ from each other.

#### HTML

```html
<canvas id="canvas" width="724" height="160"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const baselines = ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'];
ctx.font = '20px serif';
ctx.strokeStyle = 'red';

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(840, 100);
ctx.moveTo(0, 55);
ctx.stroke();

baselines.forEach((baseline, index) => {
  ctx.save();
  ctx.textBaseline = baseline;
  let x = index * 120 + 10;
  ctx.fillText('Abcdefghijk', x, 100);
  ctx.restore();
  ctx.fillText(baseline, x + 5, 50);
});
```

#### Result

{{ EmbedLiveSample('Comparison of property values on the same line', 900, 200) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
