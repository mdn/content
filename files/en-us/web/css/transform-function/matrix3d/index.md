---
title: matrix3d()
slug: Web/CSS/transform-function/matrix3d
tags:
  - CSS
  - CSS Function
  - CSS Transforms
  - Function
  - Reference
browser-compat: css.types.transform-function.matrix3d
---
{{CSSRef}}

The **`matrix3d()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) defines a 3D transformation as a 4x4 homogeneous matrix.
Its result is a {{cssxref("&lt;transform-function&gt;")}} data type.

{{EmbedInteractiveExample("pages/css/function-matrix3d.html")}}

## Syntax

The `matrix3d()` function is specified with 16 values. They are described in the column-major order.

```css
matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)
```

### Values

- _a1_ _b1_ _c1_ _d1_ _a2_ _b2_ _c2_ _d2_
  _a3_ _b3_ _c3_ _d3_
  - : Are {{cssxref("&lt;number&gt;")}}s describing the linear transformation.
- _a4_ _b4_ _c4 d4_
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
      <td colspan="2">
        This transformation applies to the 3D space and can't be represented on
        the plane.
      </td>
      <td>
        A generic 3D
        <a href="https://en.wikipedia.org/wiki/Affine_transformation"
          >affine transformation</a
        >
        can't be represented using a Cartesian-coordinate matrix, as
        translations are not linear transformations.
      </td>
      <td>
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mi>a1</mi> </mtd><mtd><mi>a2</mi> </mtd
                ><mtd><mi>a3</mi> </mtd><mtd><mi>a4</mi> </mtd></mtr
              ><mtr
                ><mtd><mi>b1</mi> </mtd><mtd><mi>b2</mi> </mtd
                ><mtd><mi>b3</mi> </mtd><mtd><mi>b4</mi> </mtd></mtr
              ><mtr
                ><mtd><mi>c1</mi> </mtd><mtd><mi>c2</mi> </mtd
                ><mtd><mi>c3</mi> </mtd><mtd><mi>c4</mi> </mtd></mtr
              ><mtr
                ><mtd><mi>d1</mi> </mtd><mtd><mi>d2</mi> </mtd
                ><mtd><mi>d3</mi> </mtd><mtd><mi>d4</mi></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Cube squashing example

The following example shows a 3D cube created from DOM elements and transforms, which can be hovered/focused to apply
a `matrix3d()` transform to it.

#### HTML

```html
<section id="example-element" tabindex="0">
  <div class="face front">1</div>
  <div class="face back">2</div>
  <div class="face right">3</div>
  <div class="face left">4</div>
  <div class="face top">5</div>
  <div class="face bottom">6</div>
</section>
```

#### CSS

```css
#example-element {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: transform 1.5s;
  transform: rotate3d(1, 1, 1, 30deg);
  margin: 50px auto;
}

#example-element:hover, #example-element:focus {
  transform: rotate3d(1, 1, 1, 30deg) matrix3d(1,0,0,0,0,1,6,0,0,0,1,0,50,100,0,1.1);
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
  color: #fff;
}

.front {
    background: rgba(90,90,90,.7);
    transform: translateZ(50px);
}

.back {
    background: rgba(0,210,0,.7);
    transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210,0,0,.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0,0,210,.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210,210,0,.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210,0,210,.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

#### Result

{{EmbedLiveSample('Cube_squashing_example', '100%', '300px')}}

### Matrix translation and scale example

Another `transform3d()` example, which implements an animated combined translate and scale.

#### HTML

```html
<div class="foo">
Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Quos quaerat sit soluta, quisquam exercitationem delectus qui unde in facere
necessitatibus aut quia porro dolorem nesciunt enim, at consequuntur aliquam esse?
</div>
```

#### CSS

```css
html {
  width: 100%;
}
body {
  height: 100vh;
  /* Centering content */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;

}
.foo {
  width: 50%;
  padding: 1em;
  color: white;
  background: #ff8c66;
  border: 2px dashed black;
  text-align: center;
  font-family: system-ui, sans-serif;
  font-size: 14px;
   /* Setting up animation for better demonstration */
  animation: MotionScale 2s alternate linear infinite;
}

@keyframes MotionScale {
  from {
    /*
      Identity matrix is used as basis here.
      The matrix below describes the
      following transformations:
        Translates every X point by -50px
        Translates every Y point by -100px
        Translates every Z point by 0
        Scales down by 10%
    */
    transform: matrix3d(
      1,0,0,0,
      0,1,0,0,
      0,0,1,0,
      -50,-100,0,1.1
    );

  }
  50% {
    transform: matrix3d(
      1,0,0,0,
      0,1,0,0,
      0,0,1,0,
      0,0,0,0.9
    );
  }
  to {
     transform: matrix3d(
      1,0,0,0,
      0,1,0,0,
      0,0,1,0,
      50,100,0,1.1
    )
  }
}
```

#### Result

{{EmbedLiveSample('Matrix_translation_and_scale_example', '100%', '400px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [Understanding the CSS Transforms Matrix](https://dev.opera.com/articles/understanding-the-css-transforms-matrix/)
