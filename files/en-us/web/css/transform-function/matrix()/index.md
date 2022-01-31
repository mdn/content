---
title: matrix()
slug: Web/CSS/transform-function/matrix()
tags:
  - CSS
  - CSS Function
  - CSS Transforms
  - Function
  - Reference
browser-compat: css.types.transform-function.matrix
---
{{CSSRef}}

The **`matrix()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) defines a homogeneous 2D transformation matrix. Its result is
a {{cssxref("&lt;transform-function&gt;")}} data type.

> **Note:** `matrix(a, b, c, d, tx, ty)` is a shorthand for
> `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)`.

## Syntax

The `matrix()` function is specified with six values. The constant values are implied and not passed as
parameters; the other parameters are described in the column-major order.

```css
matrix(a, b, c, d, tx, ty)
```

### Values

- _a_ _b_ _c_ _d_
  - : Are {{cssxref("&lt;number&gt;")}}s describing the linear transformation.
- _tx_ _ty_
  - : Are {{cssxref("&lt;number&gt;")}}s describing the translation to apply.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Cartesian coordinates on ℝ^2</th>
      <th scope="col">Homogeneous coordinates on ℝℙ^2</th>
      <th scope="col">Cartesian coordinates on ℝ^3</th>
      <th scope="col">Homogeneous coordinates on ℝℙ^3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mrow><mi>a</mi> </mrow></mtd><mtd><mrow><mi>c</mi> </mrow></mtd></mtr
              ><mtr
                ><mtd><mrow><mi>b</mi> </mrow></mtd><mtd><mrow><mi>d</mi></mrow></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
      <td>
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mrow><mi>a</mi> </mrow></mtd><mtd><mrow><mi>c</mi> </mtd
                ><mtd><mrow><mi>tx</mi> </mrow></mtd></mtr
              ><mtr
                ><mtd><mrow><mi>b</mi> </mrow></mtd><mtd><mrow><mi>d</mi> </mtd
                ><mtd><mrow><mi>ty</mi> </mrow></mtd></mtr
              ><mtr
                ><mtd><mrow><mn>0</mn> </mrow></mtd><mtd><mrow><mn>0</mn> </mtd
                ><mtd><mrow><mn>1</mn></mrow></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mrow><mi>a</mi> </mrow></mtd><mtd><mrow><mi>c</mi> </mtd
                ><mtd><mrow><mi>tx</mi> </mrow></mtd></mtr
              ><mtr
                ><mtd><mrow><mi>b</mi> </mrow></mtd><mtd><mrow><mi>d</mi> </mtd
                ><mtd><mrow><mi>ty</mi> </mrow></mtd></mtr
              ><mtr
                ><mtd><mrow><mn>0</mn> </mrow></mtd><mtd><mrow><mn>0</mn> </mtd
                ><mtd><mrow><mn>1</mn></mrow></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mrow><mi>a</mi> </mrow></mtd><mtd><mrow><mi>c</mi> </mtd
                ><mtd><mrow><mn>0</mn> </mrow></mtd><mtd><mrow><mi>tx</mi> </mrow></mtd></mtr
              ><mtr
                ><mtd><mrow><mi>b</mi> </mrow></mtd><mtd><mrow><mi>d</mi> </mtd
                ><mtd><mrow><mn>0</mn> </mrow></mtd><mtd><mrow><mi>ty</mi> </mrow></mtd></mtr
              ><mtr
                ><mtd><mrow><mn>0</mn> </mrow></mtd><mtd><mrow><mn>0</mn> </mtd
                ><mtd><mrow><mn>1</mn> </mrow></mtd><mtd><mrow><mn>0</mn> </mrow></mtd></mtr
              ><mtr
                ><mtd><mrow><mn>0</mn> </mrow></mtd><mtd><mrow><mn>0</mn> </mtd
                ><mtd><mrow><mn>0</mn> </mrow></mtd><mtd><mrow><mn>1</mn></mrow></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[a b c d tx ty]</code></td>
    </tr>
  </tbody>
</table>

The values represent the following functions:
`matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() )`

## Examples

### HTML

```html
<div>Normal</div>
<div class="changed">Changed</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.changed {
  transform: matrix(1, 2, -1, 1, 80, 80);
  background-color: pink;
}
```

### Result

{{EmbedLiveSample("Examples", 350, 350)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [`matrix3d()`](/en-US/docs/Web/CSS/transform-function/matrix3d())
- [Understanding the CSS Transforms
  Matrix](https://dev.opera.com/articles/understanding-the-css-transforms-matrix/)
