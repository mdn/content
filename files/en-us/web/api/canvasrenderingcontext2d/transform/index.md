---
title: CanvasRenderingContext2D.transform()
slug: Web/API/CanvasRenderingContext2D/transform
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.transform
---
{{APIRef}}

The
**`CanvasRenderingContext2D.transform()`**
method of the Canvas 2D API multiplies the current transformation with the matrix
described by the arguments of this method. This lets you scale, rotate, translate
(move), and skew the context.

> **Note:** See also the
> {{domxref("CanvasRenderingContext2D.setTransform()", "setTransform()")}} method, which
> resets the current transform to the identity matrix and then invokes
> `transform()`.

## Syntax

```js
transform(a, b, c, d, e, f)
```

The transformation matrix is described by: <math><semantics><mrow><mo>[</mo>
<mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi>
</mtd><mtd><mi>c</mi>
</mtd><mtd><mi>e</mi>
</mtd></mtr><mtr><mtd><mi>b</mi>
</mtd><mtd><mi>d</mi>
</mtd><mtd><mi>f</mi>
</mtd></mtr><mtr><mtd><mn>0</mn>
</mtd><mtd><mn>0</mn>
</mtd><mtd><mn>1</mn>
</mtd></mtr></mtable><mo>]</mo>
</mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a &#x26; c &#x26; e \\ b &#x26; d
&#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{array} \right]</annotation></semantics></math>

### Parameters

- `a` (m11)
  - : Horizontal scaling. A value of `1` results in no scaling.
- `b` (m12)
  - : Vertical skewing.
- `c` (m21)
  - : Horizontal skewing.
- `d` (m22)
  - : Vertical scaling. A value of `1` results in no scaling.
- `e` (dx)
  - : Horizontal translation (moving).
- `f` (dy)
  - : Vertical translation (moving).

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Skewing a shape

This example skews a rectangle both vertically (`.2`) and horizontally
(`.8`). Scaling and translation remain unchanged.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.transform(1, .2, .8, 1, 0, 0);
ctx.fillRect(0, 0, 100, 100);
```

#### Result

{{ EmbedLiveSample('Skewing_a_shape', 700, 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.setTransform()")}}
