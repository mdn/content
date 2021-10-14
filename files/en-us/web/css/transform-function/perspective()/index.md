---
title: perspective()
slug: Web/CSS/transform-function/perspective()
tags:
  - CSS
  - CSS Function
  - CSS Transforms
  - Function
  - Reference
browser-compat: css.types.transform-function.perspective
---
{{CSSRef}}

The **`perspective()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) defines a transformation that sets the distance between the
user and the z=0 plane, the perspective from which the viewer would be if the 2-dimensional interface were
3-dimensional. Its result is a {{cssxref("&lt;transform-function&gt;")}} data type.

{{EmbedInteractiveExample("pages/css/function-perspective.html")}}

The `perspective()` transform function is part of the {{cssxref('transform')}} value applied on the
element being transformed. This differs from the {{cssxref('perspective')}} and {{cssxref('perspective-origin')}}
properties which are attached to the parent of a child transformed in 3-dimensional space.

## Syntax

The perspective distance used by `perspective()` is specified by a {{cssxref("&lt;length&gt;")}} value,
which represents the distance between the user and the z=0 plane,
or by `none`.
The z=0 plane is the plane where everything appears
in a 2-dimensional view, or the screen.
Negative values are syntax errors.
Values smaller than `1px` (including zero) are clamped to `1px`.
Values other than `none` cause
elements with positive z positions to appear larger,
and elements with negative z positions to appear smaller.
Elements with z positions equal to or larger than the perspective value
disappear as though they are behind the user.
Large values of perspective represent a small transformation;
small values of `perspective()` represent a large transformation;
`perspective(none)` represents perspective from infinite distance
and no transformation.

```css
perspective(d)
```

### Values

- _d_
  - : Is a {{cssxref("&lt;length&gt;")}} representing the distance from the user to the z=0 plane. If it is 0 or a
    negative value, no perspective transform is applied.

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
        <p>
          This transformation applies to the 3D space and can't be represented
          on the plane.
        </p>
      </td>
      <td>
        This transformation is not a linear transformation in ℝ^3, and can't be
        represented using a Cartesian-coordinate matrix.
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd
                  ><mo>−</mo>
                  <mn>1</mn>
                  <mo>/</mo>
                  <mi>d</mi> </mtd
                ><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

### HTML

```html
<p>Without perspective:</p>
<div class="no-perspective-box">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>

<p>With perspective (9cm):</p>
<div class="perspective-box-far">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>

<p>With perspective (4cm):</p>
<div class="perspective-box-closer">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>
```

### CSS

```css
.face {
  position: absolute;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 100px;
  text-align: center;
}

p + div {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  margin-left: 100px;
}
.no-perspective-box {
  transform: rotateX(-15deg) rotateY(30deg);
}

.perspective-box-far {
  transform: perspective(9cm) rotateX(-15deg) rotateY(30deg);
}

.perspective-box-closer {
  transform: perspective(4cm) rotateX(-15deg) rotateY(30deg);
}

.top {
  background-color: skyblue;
  transform: rotateX(90deg) translate3d(0, 0, 50px);
}

.left {
  background-color: pink;
  transform: rotateY(-90deg) translate3d(0, 0, 50px);
}

.front {
  background-color: limegreen;
  transform: translate3d(0, 0, 50px);
}
```

### Result

{{ EmbedLiveSample('Examples', '250', '350') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
