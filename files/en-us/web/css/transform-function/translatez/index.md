---
title: translateZ()
slug: Web/CSS/transform-function/translateZ
page-type: css-function
browser-compat: css.types.transform-function.translateZ
---

{{CSSRef}}

The **`translateZ()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) repositions an element along the z-axis in 3D space, i.e.,
closer to or farther away from the viewer. Its result is a {{cssxref("&lt;transform-function&gt;")}} data type.

{{EmbedInteractiveExample("pages/css/function-translateZ.html")}}

This transformation is defined by a {{cssxref("&lt;length&gt;")}} which specifies how far inward or outward the
element or elements move.

In the above interactive examples, [`perspective: 550px;`](/en-US/docs/Web/CSS/perspective) (to
create a 3D space) and [`transform-style: preserve-3d;`](/en-US/docs/Web/CSS/transform-style)
(so the children, the 6 sides of the cube, are also positioned in the 3D space), have been set on the cube.

> **Note:** `translateZ(tz)` is equivalent to
> `translate3d(0, 0, tz)`.

## Syntax

```css
translateZ(tz)
```

### Values

- `tz`
  - : A {{cssxref("&lt;length&gt;")}} representing the z-component of the translating vector [0, 0, tz]. In [Cartesian coordinate system](/en-US/docs/Web/CSS/transform-function#cartesian_coordinates) it represents shift along z-axis. A positive value moves the
    element towards the viewer, and a negative value farther away.

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
        A translation is not a linear transformation in ℝ^3 and can't be represented using a Cartesian-coordinate matrix.
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>t</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & t \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Examples

In this example, two boxes are created. One is positioned normally on the page, without being translated at all. The
second is altered by applying perspective to create a 3D space, then moved towards the user.

### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
```

### CSS

```css
div {
  position: relative;
  width: 60px;
  height: 60px;
  left: 100px;
  background-color: skyblue;
}

.moved {
  transform: perspective(500px) translateZ(200px);
  background-color: pink;
}
```

What really matters here is the class "moved"; let's take a look at what it does. First, the
[`perspective()`](/en-US/docs/Web/CSS/transform-function/perspective) function positions the
viewer relative to the plane that lies where z=0 (in essence, the surface of the screen). A value of
`500px` means the user is 500 pixels "in front of" the imagery located at z=0.

Then, the `translateZ()` function moves the element 200 pixels "outward" from the screen, toward the user.
This has the effect of making the element appear larger when viewed on a 2D display, or closer when viewed using a VR
headset or other 3D display device.

Note if the `perspective()` value is less than the `translateZ()` value, such as
`transform: perspective(200px) translateZ(300px);` the transformed element will not be visible as it is
further than the user's viewport. The smaller the difference between the perspective and translateZ values, the closer
the user is to the element and the larger the translated element will seem.

> **Note:** As the composition of transforms isn't commutative, the order you write the different functions is significant. In particular, in general, you want `perspective()` to be placed before `translateZ()`.

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
