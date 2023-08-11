---
title: ray()
slug: Web/CSS/ray
page-type: css-function
status:
  - experimental
browser-compat: css.types.ray
---

{{CSSRef}}{{SeeCompatTable}}

The **`ray()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) defines a line segment that begins from an {{cssxref("offset-position")}} and extends in the direction of the specified angle. The line segment is referred to as "ray". The length of a ray can be constrained by specifying a size and using the `contain` keyword.

```css
ray() = ray( <angle> && <ray-size>? && contain? )
<ray-size> = closest-side | closest-corner | farthest-side | farthest-corner | sides
```

The `ray()` function is used in [CSS motion path](/en-US/docs/Web/CSS/CSS_motion_path). It is used as a value for the [`offset-path`](/en-US/docs/Web/CSS/offset-path) property to define the path that an animated element can follow. The element is initially positioned by moving the element's [`offset-anchor`](/en-US/docs/Web/CSS/offset-anchor) point to the path's offset starting position.

> **Note:** The default offset starting position of a ray is `auto`. If `offset-position: auto` is explicitly specified or allowed to default, the offset starting position is the `left top` corner (or `0 0`) of the element box. With `offset-position: normal`, the starting position of the ray is `50%, 50%` of the containing block.

## Syntax

```css
/* property: ray(expression) */
/* all parameters specified */
offset-path: ray(50deg closest-corner contain);

/* two parameters specified, order does not matter */
offset-path: ray(contain 200deg);

/* only one parameter specified */
offset-path: ray(45deg);
```

### Parameters

- [`<angle>`](/en-US/docs/Web/CSS/angle)
  - : Specifies the direction in which the line segment extends from the offset starting position. The angle `0deg` lies on the y-axis pointing up, and positive angles increase in the clockwise direction.
- `<ray-size>`

  - : Specifies the length of the line segment, which is the distance between [`offset-distance`](/en-US/docs/Web/CSS/offset-distance)`: 0%` and `offset-distance: 100%`. This is an optional parameter and accepts one of the following keyword values:

    `closest-side`: Specifies the length of the line segment as the distance between the ray's starting point and the closest side of the [containing block](/en-US/docs/Web/CSS/Containing_block) of the element. This is the default value used when no `<size>` is specified. If the starting point lies on the containing block's boundary, the length of the line segment is zero. If the starting point is outside the containing block, the edge of the containing block is considered to extend to infinity.

    `closest-corner`: Specifies the length of the line segment as the distance between the ray's starting point and the closest corner in the element's containing block. If the starting point lies on a corner of the containing block, the length of the line segment is zero.

    `farthest-side`: Specifies the length of the line segment as the distance between the ray's starting point and the farthest side of the containing block of the element. If the starting point is outside the containing block, the edge of the containing block is considered to extend to infinity.

    `farthest-corner`: Specifies the length of the line segment as the distance between the ray's starting point and the farthest corner in the element's containing block.

    `sides`: Specifies the length of the line segment as the distance between the ray's starting point and the point where the line segment intersects the containing block's boundary. If the starting point is on or outside the containing block's boundary, the length of the line segment is zero.

> **Note:** While the size parameter is optional in the specification, some browsers implement `ray()` with a required size value. Including the default `closest-side` is the equivalent of omitting the size, but has better support.

- `contain`
  - : Reduces the length of the line segment so that the element stays within the containing block even at `offset-distance: 100%`. Specifically, the segment's length is reduced by half the width or half the height of the element's border box, whichever is greater, but never going less than zero.

## Examples

### Defining an angle for the ray

This example shows how an element's anchor point gets positioned initially at a ray's starting point and how the element gets oriented at the specified ray angle.

#### CSS

```css hidden
.container {
  display: grid;
  grid-template-columns: 200px 100px;
}

.example {
  position: relative;
  margin: 1em 2em 4em 3em;
}

.box {
  display: inline-block;
  width: 3em;
  height: 3em;
  text-align: center;
  line-height: 3em;
  border: solid 0.05em;
  background-color: palegreen;
  border-top: 4px solid black;
}

.original {
  position: absolute;
  left: 0;
  opacity: 20%;
}
```

```css
.box1 {
  offset-path: ray(0deg closest-side);
}

.box2 {
  offset-anchor: 0 0;
  offset-path: ray(0deg closest-side);
}

.box3 {
  offset-anchor: 0 0;
  offset-path: ray(150deg closest-side);
}

.box4 {
  offset-anchor: 0 0;
  offset-rotate: 0deg;
  offset-path: ray(150deg closest-side);
}
```

```html hidden
<div class="container">
  <div class="example">
    <div class="box">0</div>
    <div class="box original">0</div>
  </div>

  <pre>/* original */</pre>

  <div class="example">
    <div class="box box1">1</div>
    <div class="box original">1</div>
  </div>

  <pre>
offset-path: ray(0deg closest-side);
/* Anchor is the center and starting position is top-left corner */</pre
  >

  <div class="example">
    <div class="box box2">2</div>
    <div class="box original">2</div>
  </div>

  <pre>
offset-path: ray(0deg closest-side);
offset-anchor: 0 0;
/* Anchor and starting position are at the top-left corner */</pre
  >

  <div class="example">
    <div class="box box3">3</div>
    <div class="box original">3</div>
  </div>

  <pre>
offset-path: ray(150deg closest-side);
offset-anchor: 0 0;</pre
  >

  <div class="example">
    <div class="box box4">4</div>
    <div class="box original">4</div>
  </div>

  <pre>
offset-path: ray(150deg closest-side);
offset-anchor: 0 0;
offset-rotate: 0deg;</pre
  >
</div>
```

Similar to {{cssxref("transform-origin")}}, the default anchor point is at the center of an element. This anchor point can be modified using the [`offset-anchor`](/en-US/docs/Web/CSS/offset-anchor) property. The default offset starting position of a path at is the top-left corner of the element box.

In this example, various `offset-anchor` and `offset-path: ray()` values are applied to a box and results are displayed side-by-side for comparison. One box border is highlighted to demonstrate different ray starting points and box orientations. After a box is positioned at the ray's starting point, it is oriented in the direction of the specified ray angle.

#### Result

{{EmbedLiveSample('Giving an angle to the ray', '100%', 700)}}

- `box1` gets initially positioned such that its anchor point (at the center) is at the offset starting position (top-left corner). `box1` is also rotated to orient it towards the `0deg` angle of the ray. This will now be the starting point of the path. You can observe the change in position and rotation of the box by comparing it to the faded `original` box in the background.
- The anchor point of `box2` is changed to the top-left corner (`0px 0px`) using the `anchor-position` property, and as a result, the element's anchor point and the offset starting position coincide. The ray angle is applied to the element at this starting point, the top-left corner. The box is rotated to match the `0deg` angle along y-axis and pointing up.
- With other settings the same as in `box2`, a greater positive angle of `150deg` is applied on `box3`. Starting from the top-left corner, the box is rotated in a clockwise direction to reach the specified angle.
- `box3` and `box4` have the same `offset-path` and `offset-anchor` values. In `box4`, however, an [`offset-rotate`](/en-US/docs/Web/CSS/offset-rotate) of `0deg` is applied to the element. As a result, the element will remain rotated at this specific angle all along the ray's path and prevents the element from rotating in the direction of the path. Notice in `box4` that the ray path is at `150deg`, but the box orientation will not change along the path.

### Animating an element along the ray

In this example, the first shape is shown as a reference for its position and orientation. A ray motion path is applied on the other shapes.

#### CSS

```css
body {
  display: grid;
  grid-template-columns: 200px 100px;
  gap: 40px;
  margin-left: 40px;
}

.container {
   transform-style: preserve-3d;
   width: 150px;
   height: 100px;
   border: 2px dotted green;
}

.shape {
  width: 40px;
  height: 40px;
  background: #2bc4a2;
  margin: 5px;
  text-align: center;
  line-height: 40px;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
  animation: move 5000ms infinite alternate ease-in-out;
}

.shape2 {
  offset-path: ray(120deg sides contain);
}

.shape3 {
  offset-rotate: 0deg;
  offset-path: ray(120deg sides contain);
}

.shape4 {
  offset-path: ray(120deg closest-corner);
}

.shape5 {
  offset-path: ray(120deg farthest-corner);
}

@keyframes move {
  0%, 20% {
    offset-distance: 0%;
  }
  80%, 100% {
    offset-distance: 100%;
  }
```

```html hidden
<div>
  <div class="container">
    <div class=" shape shape1">&mdash;</div>
  </div>
</div>

<pre>/* no offset-path applied */</pre>

<div>
  <div class="container">
    <div class="shape shape2">&mdash;</div>
  </div>
</div>

<pre>offset-path: ray(120deg sides contain);</pre>

<div>
  <div class="container">
    <div class="shape shape3">&mdash;</div>
  </div>
</div>

<pre>offset-path: ray(120deg sides contain);
offset-rotate: 0deg;</pre>

<div>
  <div class="container">
    <div class="shape shape4">&mdash;</div>
  </div>
</div>

<pre>offset-path: ray(120deg closest-corner)</pre>

<div>
  <div class="container">
    <div class="shape shape5">&mdash;</div>
  </div>
</div>

<pre>offset-path: ray(120deg farthest-corner)</pre>
</div>
```

#### Result

{{EmbedLiveSample('Animating an element along the ray', '100%', 750)}}

In the first two samples where `offset-path` is applied, notice the orientation of the shape without `offset-rotate` and with `offset-rotate`. The last two `offset-path` samples show the impact of corner `<ray-size>` values. The `closest-corner` value creates a very short offset-path because the shape is already in the corner. The `farthest-corner` value creates the longest offset-path, going from the top-left corner of the containing block to the bottom-right corner.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`offset-distance`](/en-US/docs/Web/CSS/offset-distance)
- [`offset-path`](/en-US/docs/Web/CSS/offset-path)
- [`offset-rotate`](/en-US/docs/Web/CSS/offset-rotate)
