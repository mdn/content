---
title: scale3d()
slug: Web/CSS/transform-function/scale3d
page-type: css-function
browser-compat: css.types.transform-function.scale3d
---

{{CSSRef}}

The **`scale3d()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) defines a transformation that resizes an element in 3D space.
Because the amount of scaling is defined by a vector, it can resize different dimensions at different scales. Its
result is a {{cssxref("&lt;transform-function&gt;")}} data type.

{{EmbedInteractiveExample("pages/css/function-scale3d.html")}}

This scaling transformation is characterized by a three-dimensional vector. Its coordinates define how much scaling
is done in each direction. If all three coordinates are equal, the scaling is uniform (_isotropic_) and the
aspect ratio of the element is preserved (this is a [homothetic transformation](https://en.wikipedia.org/wiki/Homothetic_transformation)).

When a coordinate value is outside the \[-1, 1] range, the element grows along that dimension; when inside, it
shrinks. If it is negative, the result a [point reflection](https://en.wikipedia.org/wiki/Point_reflection)
in that dimension. A value of 1 has no effect.

## Syntax

The `scale3d()` function is specified with three values, which represent the amount of scaling to be
applied in each direction.

```css
scale3d(sx, sy, sz)
```

### Values

- `sx`
  - : Is a {{cssxref("&lt;number&gt;")}} representing the abscissa of the scaling vector.
- `sy`
  - : Is a {{cssxref("&lt;number&gt;")}} representing the ordinate of the scaling vector.
- `sz`
  - : Is a {{cssxref("&lt;number&gt;")}} representing the z-component of the scaling vector.

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
      <td colspan="2">
        This transformation applies to the 3D space and can't be represented on
        the plane.
      </td>
      <td>
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mi>sz</mi></mtd></mtr
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
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mi>sz</mi> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Without changing the origin

#### HTML

```html
<div>Normal</div>
<div class="scaled">Scaled</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: perspective(500px) scale3d(2, 0.7, 0.2) translateZ(100px);
  background-color: pink;
}
```

#### Result

{{EmbedLiveSample("Without_changing_the_origin","200","200")}}

### Translating the origin of the transformation

#### HTML

```html
<div>Normal</div>
<div class="scaled">Scaled</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: perspective(500px) scale3d(2, 0.7, 0.2) translateZ(100px);
  transform-origin: left;
  background-color: pink;
}
```

#### Result

{{EmbedLiveSample("Translating_the_origin_of_the_transformation","200","200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [`scaleZ()`](/en-US/docs/Web/CSS/transform-function/scaleZ)
- [`translate3d()`](/en-US/docs/Web/CSS/transform-function/translate3d)
- [`rotate3d()`](/en-US/docs/Web/CSS/transform-function/rotate3d)
- Individual transform properties:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
