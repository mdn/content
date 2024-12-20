---
title: scaleZ()
slug: Web/CSS/transform-function/scaleZ
page-type: css-function
browser-compat: css.types.transform-function.scaleZ
---

{{CSSRef}}

The **`scaleZ()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) defines a transformation that resizes an element along the
z-axis. Its result is a {{cssxref("&lt;transform-function&gt;")}} data type.

{{EmbedInteractiveExample("pages/css/function-scaleZ.html")}}

This scaling transformation modifies the z-coordinate of each element point by a constant factor, except when the
scale factor is 1, in which case the function is the identity transform. The scaling is not isotropic, and the angles
of the element are not conserved. `scaleZ(-1)` defines an [axial symmetry](https://en.wikipedia.org/wiki/Axial_symmetry), with the z-axis passing through the origin
(as specified by the {{cssxref("transform-origin")}} property).

In the above interactive examples, [`perspective: 550px;`](/en-US/docs/Web/CSS/perspective) (to
create a 3D space) and [`transform-style: preserve-3d;`](/en-US/docs/Web/CSS/transform-style)
(so the children, the 6 sides of the cube, are also positioned in the 3D space), have been set on the cube.

> **Note:** `scaleZ(sz)` is equivalent to
> `scale3d(1, 1, sz)`.

## Syntax

```css
scaleZ(s)
```

### Values

- `s`
  - : Is a {{cssxref("&lt;number&gt;")}} representing the scaling factor to apply on the z-coordinate of each point of
    the element.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/en-US/docs/Web/CSS/transform-function#cartesian_coordinates">Cartesian coordinates</a> on <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2</a></th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">Homogeneous coordinates</a> on <a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a></th>
      <th scope="col">Cartesian coordinates on <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3</a></th>
      <th scope="col">Homogeneous coordinates on <a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        This transformation applies to the 3D space and can't be represented on the plane.
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>s</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & s \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>s</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & s & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Formal syntax

{{CSSSyntax}}

## Examples

### HTML

```html
<div>Normal</div>
<div class="perspective">Translated</div>
<div class="scaled-translated">Scaled</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.perspective {
  /* Includes a perspective to create a 3D space */
  transform: perspective(400px) translateZ(-100px);
  background-color: limegreen;
}

.scaled-translated {
  /* Includes a perspective to create a 3D space */
  transform: perspective(400px) scaleZ(2) translateZ(-100px);
  background-color: pink;
}
```

### Result

{{EmbedLiveSample("Examples", 200, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`scaleX()`](/en-US/docs/Web/CSS/transform-function/scaleX)
- [`scaleY()`](/en-US/docs/Web/CSS/transform-function/scaleY)
- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("transform-origin")}}
- Individual transform properties:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - Note: there is no `skew` property
