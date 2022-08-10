---
title: CanvasRenderingContext2D.direction
slug: Web/API/CanvasRenderingContext2D/direction
page-type: web-api-instance-property
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Property
  - Reference
browser-compat: api.CanvasRenderingContext2D.direction
---
{{APIRef}}

The
**`CanvasRenderingContext2D.direction`**
property of the Canvas 2D API specifies the current text direction used to draw text.

## Value

Possible values:

- `"ltr"`
  - : The text direction is left-to-right.
- `"rtl"`
  - : The text direction is right-to-left.
- `"inherit"`
  - : The text direction is inherited from the {{HTMLElement("canvas")}} element or the
    {{domxref("Document")}} as appropriate. Default value.

The default value is `"inherit"`.

## Examples

### Changing text direction

This example draws two pieces of text. The first one is left-to-right, and the second
is right-to-left. Note that "Hi!" in `ltr` becomes "!Hi" in `rtl`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.font = '48px serif';
ctx.fillText('Hi!', 150, 50);
ctx.direction = 'rtl';
ctx.fillText('Hi!', 150, 130);
```

#### Result

{{ EmbedLiveSample('Changing_text_direction', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this property: {{domxref("CanvasRenderingContext2D")}}
