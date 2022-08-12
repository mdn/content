---
title: scale()
slug: Web/CSS/transform-function/scale
tags:
  - CSS
  - CSS Function
  - CSS Transforms
  - Function
  - Reference
browser-compat: css.types.transform-function.scale
---
{{CSSRef}}

The **`scale()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) defines a transformation that resizes an element on the 2D
plane. Because the amount of scaling is defined by a vector, it can resize the horizontal and vertical dimensions at
different scales. Its result is a {{cssxref("&lt;transform-function&gt;")}} data type.

{{EmbedInteractiveExample("pages/css/function-scale.html")}}

This scaling transformation is characterized by a two-dimensional vector. Its coordinates define how much scaling is
done in each direction. If both coordinates are equal, the scaling is uniform (_isotropic_) and the aspect
ratio of the element is preserved (this is a [homothetic transformation](https://en.wikipedia.org/wiki/Homothetic_transformation)).

When a coordinate value is outside the \[-1, 1] range, the element grows along that dimension; when inside, it
shrinks. A negative value results in a [point reflection](https://en.wikipedia.org/wiki/Point_reflection)
in that dimension. The value `1` has no effect.

> **Note:** The `scale()` function only scales in 2D. To scale in 3D, use
> [`scale3d()`](/en-US/docs/Web/CSS/transform-function/scale3d) instead.

## Syntax

The `scale()` function is specified with either one or two values, which represent the amount of scaling
to be applied in each direction.

```css
scale(sx)

scale(sx, sy)
```

### Values

- `sx`
  - : A {{cssxref("&lt;number&gt;")}} or {{cssxref("&lt;percentage&gt;")}} representing the abscissa of the scaling vector.
- `sy`
  - : A {{cssxref("&lt;number&gt;")}} or {{cssxref("&lt;percentage&gt;")}} representing the ordinate of the scaling vector.
    If not defined, its default value is `sx`, resulting in a uniform scaling that preserves the element's aspect ratio.

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
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi></mtd></mtr
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
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtr
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
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtr
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
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[sx 0 0 sy 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Accessibility concerns

Scaling/zooming animations are problematic for accessibility, as they are a common trigger for certain types of
migraine. If you need to include such animations on your website, you should provide a control to allow users to turn
off animations, preferably site-wide.

Also, consider making use of the {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} media feature
— use it to write a [media query](/en-US/docs/Web/CSS/Media_Queries) that will turn off animations if the
user has reduced animation specified in their system preferences.

Find out more:

- [MDN Understanding WCAG, Guideline 2.3 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.3_%e2%80%94_seizures_and_physical_reactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Understanding Success Criterion 2.3.3 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Examples

### Scaling the X and Y dimensions together

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
  transform: scale(0.7); /* Equal to scaleX(0.7) scaleY(0.7) */
  background-color: pink;
}
```

#### Result

{{EmbedLiveSample("Scaling_the_X_and_Y_dimensions_together", "200", "200")}}

### Scaling X and Y dimensions separately, and translating the origin

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
  transform: scale(2, 0.5); /* Equal to scaleX(2) scaleY(0.5) */
  transform-origin: left;
  background-color: pink;
}
```

#### Result

{{EmbedLiveSample("Scaling_X_and_Y_dimensions_separately_and_translating_the_origin", "200", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("transform-function/scale3d", "scale3d()")}}
