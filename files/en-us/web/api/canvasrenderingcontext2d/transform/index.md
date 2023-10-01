---
title: "CanvasRenderingContext2D: transform() method"
short-title: transform()
slug: Web/API/CanvasRenderingContext2D/transform
page-type: web-api-instance-method
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

```js-nolint
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

- `a` (`m11`)
  - : The cell in the first row and first column of the matrix.
- `b` (`m12`)
  - : The cell in the second row and first column of the matrix.
- `c` (`m21`)
  - : The cell in the first row and second column of the matrix.
- `d` (`m22`)
  - : The cell in the second row and second column of the matrix.
- `e` (`m41`)
  - : The cell in the first row and third column of the matrix.
- `f` (`m42`)
  - : The cell in the second row and third column of the matrix.

If a point originally had coordinates <math><semantics><mrow><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></mrow><annotation encoding="TeX">(x, y)</annotation></semantics></math>, then after the transformation it will have coordinates <math><semantics><mrow><mo>(</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>c</mi><mi>y</mi><mo>+</mo><mi>e</mi><mo>,</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi><mo>+</mo><mi>f</mi><mo>)</mo></mrow><annotation encoding="TeX">(ax + cy + e, bx + dy + f)</annotation></semantics></math>. This means:

- `e` and `f` control the horizontal and vertical translation of the context.
- When `b` and `c` are `0`, `a` and `d` control the horizontal and vertical scaling of the context.
- When `a` and `d` are `1`, `b` and `c` control the horizontal and vertical skewing of the context.

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
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.transform(1, 0.2, 0.8, 1, 0, 0);
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
