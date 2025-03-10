---
title: scale3d()
slug: Web/CSS/transform-function/scale3d
page-type: css-function
browser-compat: css.types.transform-function.scale3d
---

{{CSSRef}}

The **`scale3d()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) defines a transformation that resizes an element in 3D space.
Because the amount of scaling is defined by a vector [sx, sy, sz], it can resize different dimensions at different scales. Its
result is a {{cssxref("&lt;transform-function&gt;")}} data type.

{{InteractiveExample("CSS Demo: scale3d()")}}

```css interactive-example-choice
transform: scale3d(1, 1, 1);
```

```css interactive-example-choice
transform: scale3d(1.3, 1.3, 1.3);
```

```css interactive-example-choice
transform: scale3d(0.5, 1, 1.7);
```

```css interactive-example-choice
transform: scale3d(-1.4, 0.4, 0.7);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
  perspective: 800px;
  perspective-origin: 150% 150%;
}

#example-element {
  width: 100px;
  height: 100px;
  perspective: 550px;
  transform-style: preserve-3d;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 210, 0, 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

This scaling transformation is characterized by a three-dimensional vector. Its coordinates define how much scaling
is done in each direction. If all three coordinates are equal, the scaling is uniform (_isotropic_) and the
{{glossary("aspect ratio")}} of the element is preserved (this is a [homothetic transformation](https://en.wikipedia.org/wiki/Homothetic_transformation)).

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
  - : Is a {{cssxref("&lt;number&gt;")}} representing the abscissa (horizontal, x-component) of the scaling vector.
- `sy`
  - : Is a {{cssxref("&lt;number&gt;")}} representing the ordinate (vertical, y-component) of the scaling vector.
- `sz`
  - : Is a {{cssxref("&lt;number&gt;")}} representing the z-component of the scaling vector.

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
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>sz</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & sz \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>sz</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} sx & 0 & 0 & 0 \\ 0 & sy & 0 & 0 \\ 0 & 0 & sz & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Formal syntax

{{CSSSyntax}}

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
