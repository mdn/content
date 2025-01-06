---
title: translate3d()
slug: Web/CSS/transform-function/translate3d
page-type: css-function
browser-compat: css.types.transform-function.translate3d
---

{{CSSRef}}

The **`translate3d()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) repositions an element in 3D space. Its result is a
{{cssxref("&lt;transform-function&gt;")}} data type.

{{EmbedInteractiveExample("pages/css/function-translate3d.html")}}

This transformation is characterized by a three-dimensional vector [tx, ty, tz]. Its coordinates define how much the element moves
in each direction.

## Syntax

```css
translate3d(tx, ty, tz)
```

### Values

- `tx`
  - : Is a {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} representing the abscissa (horizontal, x-component) of the
    translating vector [tx, ty, tz].
- `ty`
  - : Is a {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} representing the ordinate (vertical, y-component)of the
    translating vector [tx, ty, tz].
- `tz`
  - : Is a {{cssxref("&lt;length&gt;")}} representing the z-component of the translating vector. It can't be a
    {{cssxref("&lt;percentage&gt;")}} value; in that case the property containing the transform is considered invalid [tx, ty, tz].

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
        <p>
          This transformation applies to the 3D space and can't be represented on the plane.
        </p>
      </td>
      <td>
        A translation is not a linear transformation in ℝ^3 and can't be represented using a Cartesian-coordinate matrix.
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>tz</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & tx \\ 0 & 1 & 0 & ty \\ 0 & 0 & 1 & tz \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Formal syntax

{{CSSSyntax}}

## Examples

### Using a single axis translation

#### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  /* Equivalent to perspective(500px) translateX(10px) */
  transform: perspective(500px) translate3d(10px, 0, 0px);
  background-color: pink;
}
```

#### Result

{{EmbedLiveSample("Using_a_single_axis_translation", 250, 250)}}

### Combining z-axis and x-axis translation

#### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: perspective(500px) translate3d(10px, 0, 100px);
  background-color: pink;
}
```

#### Result

{{EmbedLiveSample("Combining_z-axis_and_x-axis_translation", 250, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("translate")}}
