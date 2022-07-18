---
title: CanvasRenderingContext2D.setTransform()
slug: Web/API/CanvasRenderingContext2D/setTransform
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.setTransform
---
{{APIRef}}

The
**`CanvasRenderingContext2D.setTransform()`**
method of the Canvas 2D API resets (overrides) the current transformation to the
identity matrix, and then invokes a transformation described by the arguments of this
method. This lets you scale, rotate, translate (move), and skew the context.

> **Note:** See also the {{domxref("CanvasRenderingContext2D.transform()",
    "transform()")}} method; instead of overriding the current transform matrix, it
> multiplies it with a given one.

## Syntax

```js
setTransform(a, b, c, d, e, f)
setTransform(matrix)
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

`setTransform()` has two types of parameter that it can accept. The older
type consists of several parameters representing the individual components of the
transformation matrix to set:

- `a` (`m11`)
  - : Horizontal scaling. A value of `1` results in no scaling.
- `b` (`m12`)
  - : Vertical skewing.
- `c` (`m21`)
  - : Horizontal skewing.
- `d` (`m22`)
  - : Vertical scaling. A value of `1` results in no scaling.
- `e` (`dx`)
  - : Horizontal translation (moving).
- `f` (`dy`)
  - : Vertical translation (moving).

The newer type consists of a single parameter, `matrix`, representing a 2D
transformation matrix to set (technically, a `DOMMatrixInit` object; any
object will do as long as it contains the above components as properties).

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

ctx.setTransform(1, .2, .8, 1, 0, 0);
ctx.fillRect(0, 0, 100, 100);
```

#### Result

{{ EmbedLiveSample('Skewing_a_shape', 700, 180) }}

### Retrieving and passing a DOMMatrix object

In the following example, we have two {{htmlelement("canvas")}} elements. We apply a
transform to the first one's context using the first type of `setTransform()`
and draw a square on it, then retrieve the matrix from it using
{{domxref("CanvasRenderingContext2D.getTransform()")}}.

We then apply the retrieved matrix directly to the second canvas context by passing the
`DOMMatrix` object directly to `setTransform()` (i.e. the second
type), and draw a circle on it.

#### HTML

```html
<canvas width="240"></canvas>
<canvas width="240"></canvas>
```

#### CSS

```css
canvas {
  border: 1px solid black;
}
```

#### JavaScript

```js
const canvases = document.querySelectorAll('canvas');
const ctx1 = canvases[0].getContext('2d');
const ctx2 = canvases[1].getContext('2d');

ctx1.setTransform(1, .2, .8, 1, 0, 0);
ctx1.fillRect(25, 25, 50, 50);

let storedTransform = ctx1.getTransform();
console.log(storedTransform);

ctx2.setTransform(storedTransform);
ctx2.beginPath();
ctx2.arc(50, 50, 50, 0, 2 * Math.PI);
ctx2.fill();
```

#### Result

{{ EmbedLiveSample('Retrieving_and_passing_a_DOMMatrix_object', "100%", 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.transform()")}}
