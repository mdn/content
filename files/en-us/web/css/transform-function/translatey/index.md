---
title: translateY()
slug: Web/CSS/transform-function/translateY
page-type: css-function
browser-compat: css.types.transform-function.translateY
---

{{CSSRef}}

The **`translateY()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) repositions an element vertically on the 2D plane. Its result
is a {{cssxref("&lt;transform-function&gt;")}} data type.

{{EmbedInteractiveExample("pages/css/function-translateY.html")}}

> **Note:** `translateY(ty)` is equivalent to
> `translate(0, ty)` or
> `translate3d(0, ty, 0)`.

## Syntax

```css
/* <length-percentage> values */
transform: translateY(200px);
transform: translateY(50%);
```

### Values

- `<length-percentage>`
  - : The value is a {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} representing the ordinate of the
    translating vector. A percentage value refers to the height of the reference box defined by the
    {{cssxref("transform-box")}} property.

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
        <p>
          A translation is not a linear transformation in ℝ^2 and can't be
          represented using a Cartesian-coordinate matrix.
        </p>
      </td>
      <td>
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mn>1</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd>
                <mtd><mi>t</mi></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd></mtr
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
                ><mtd><mn>1</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd>
                <mtd><mi>t</mi></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd></mtr
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
                ><mtd><mn>1</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mi>t</mi></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd>
                <mtd><mn>0</mn></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[1 0 0 1 0 t]</code></td>
    </tr>
  </tbody>
</table>

### Formal syntax

```css
translateY({{cssxref("&lt;length-percentage&gt;")}})
```

## Examples

### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translateY(10px);
  background-color: pink;
}
```

### Result

{{EmbedLiveSample("Examples", 250, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("translate")}}
