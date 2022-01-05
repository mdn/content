---
title: CanvasRenderingContext2D.currentTransform
slug: Web/API/CanvasRenderingContext2D/currentTransform
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Experimental
  - Property
  - Reference
  - Deprecated
browser-compat: api.CanvasRenderingContext2D.currentTransform
---
{{deprecated_header}}{{non-standard_header}}

The
**`CanvasRenderingContext2D.currentTransform`**
property of the Canvas 2D API returns or sets a {{domxref("DOMMatrix")}} (current
specification) or {{domxref("SVGMatrix")}} {{deprecated_inline}} (old specification)
object for the current transformation matrix.

## Syntax

```js
ctx.currentTransform [= value];
```

- `value`
  - : A {{domxref("DOMMatrix")}} or {{domxref("SVGMatrix")}} {{deprecated_inline}} object
    to use as the current transformation matrix.

## Examples

### Manually changing the matrix

This example uses the `currentTransform` property to set a transformation
matrix. A rectangle is then drawn using that transformation.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let matrix = ctx.currentTransform;
matrix.a = 1;
matrix.b = 1;
matrix.c = 0;
matrix.d = 1;
matrix.e = 0;
matrix.f = 0;
ctx.currentTransform = matrix;
ctx.fillRect(0, 0, 100, 100);
```

#### Result

{{ EmbedLiveSample('Manually_changing_the_matrix', 700, 180) }}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this property: {{domxref("CanvasPattern")}}
- {{domxref("SVGMatrix")}}
- {{domxref("DOMMatrix")}}
