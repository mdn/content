---
title: CanvasRenderingContext2D.textAlign
slug: Web/API/CanvasRenderingContext2D/textAlign
page-type: web-api-instance-property
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Property
  - Reference
browser-compat: api.CanvasRenderingContext2D.textAlign
---
{{APIRef}}

The
**`CanvasRenderingContext2D.textAlign`**
property of the Canvas 2D API specifies the current text alignment used when drawing
text.

The alignment is relative to the `x` value of the
{{domxref("CanvasRenderingContext2D.fillText", "fillText()")}} method. For example, if
`textAlign` is `"center"`, then the text's left edge will be at
`x - (textWidth / 2)`.

## Value

Possible values:

- `"left"`
  - : The text is left-aligned.
- `"right"`
  - : The text is right-aligned.
- `"center"`
  - : The text is centered.
- `"start"`
  - : The text is aligned at the normal start of the line (left-aligned for left-to-right
    locales, right-aligned for right-to-left locales).
- `"end"`
  - : The text is aligned at the normal end of the line (right-aligned for left-to-right
    locales, left-aligned for right-to-left locales).

The default value is `"start"`.

## Examples

### General text alignment

This example demonstrates the three "physical" values of the `textAlign`
property: `"left"`, `"center"`, and `"right"`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
canvas.width = 350;
const ctx = canvas.getContext('2d');
const x = canvas.width / 2;

ctx.beginPath();
ctx.moveTo(x, 0);
ctx.lineTo(x, canvas.height);
ctx.stroke();

ctx.font = '30px serif';

ctx.textAlign = 'left';
ctx.fillText('left-aligned', x, 40);

ctx.textAlign = 'center';
ctx.fillText('center-aligned', x, 85);

ctx.textAlign = 'right';
ctx.fillText('right-aligned', x, 130);
```

#### Result

{{ EmbedLiveSample('General_text_alignment', 700, 180) }}

### Direction-dependent text alignment

This example demonstrates the two direction-dependent values of the
`textAlign` property: `"start"` and `"end"`. Note that
the {{domxref("CanvasRenderingContext2D.direction", "direction")}} property is manually
specified as `"ltr"`, although this is also the default for English-language
text.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.font = '30px serif';
ctx.direction = 'ltr';

ctx.textAlign = 'start';
ctx.fillText('Start-aligned', 0, 50);

ctx.textAlign = 'end';
ctx.fillText('End-aligned', canvas.width, 120);
```

#### Result

{{ EmbedLiveSample('Direction-dependent_text_alignment', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
