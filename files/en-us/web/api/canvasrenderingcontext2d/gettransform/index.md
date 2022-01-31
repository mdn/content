---
title: CanvasRenderingContext2D.getTransform()
slug: Web/API/CanvasRenderingContext2D/getTransform
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.getTransform
---
{{APIRef}}

The
**`CanvasRenderingContext2D.getTransform()`**
method of the Canvas 2D API retrieves the current transformation matrix being applied to
the context.

## Syntax

```js
let storedTransform = ctx.getTransform();
```

### Parameters

None.

### Return value

A {{domxref("DOMMatrix")}} object.

The transformation matrix is described by: <math><semantics><mrow><mo>[</mo>
<mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mrow><mi>a</mi>
</mrow></mtd><mtd><mrow><mi>c</mi>
</mrow></mtd><mtd><mrow><mi>e</mi>
</mrow></mtd></mtr><mtr><mtd><mrow><mi>b</mi>
</mrow></mtd><mtd><mrow><mi>d</mi>
</mrow></mtd><mtd><mrow><mi>f</mi>
</mrow></mtd></mtr><mtr><mtd><mrow><mn>0</mn>
</mrow></mtd><mtd><mrow><mn>0</mn>
</mrow></mtd><mtd><mrow><mn>1</mn>
</mrow></mtd></mtr></mtable><mo>]</mo>
</mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a &#x26; c &#x26; e \\ b &#x26; d
&#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{array} \right]</annotation></semantics></math>

> **Note:** The returned object is not live, so updating it will not
> affect the current transformation matrix, and updating the current transformation
> matrix will not affect an already returned `DOMMatrix`.

## Examples

In the following example, we have two {{htmlelement("canvas")}} elements. We apply a
transform to the first one's context using
{{domxref("CanvasRenderingContext2D.setTransform()")}} and draw a square on it, then
retrieve the matrix from it using `getTransform()`.

We then apply the retrieved matrix directly to the second canvas context by passing the
`DOMMatrix` object directly to `setTransform()`, and draw a circle
on it.

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

{{ EmbedLiveSample('Examples', "100%", 180) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.transform()")}}
