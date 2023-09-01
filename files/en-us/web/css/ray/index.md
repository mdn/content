---
title: ray()
slug: Web/CSS/ray
page-type: css-function
status:
  - experimental
browser-compat: css.types.ray
---

{{CSSRef}}{{SeeCompatTable}}

The **`ray()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) defines the [`offset-path`](/en-US/docs/Web/CSS/offset-path) line segment that an animated element can follow. The line segment is referred to as "ray". The ray begins from an {{cssxref("offset-position")}} and extends in the direction of the specified angle. The length of a ray can be constrained by specifying a size and using the `contain` keyword.

```css
ray() = ray( <angle> && <size>? && contain? && [at <position>]? )
<size> = closest-side | closest-corner | farthest-side | farthest-corner | sides
```

## Syntax

```css
/* offset-path: ray(parameters) */

/* all parameters specified */
offset-path: ray(50deg closest-corner contain at 100px 20px);

/* two parameters specified, order does not matter */
offset-path: ray(contain 200deg);

/* only one parameter specified */
offset-path: ray(45deg);
```

### Parameters

The parameters can be specified in any order.

- [`<angle>`](/en-US/docs/Web/CSS/angle)

  - : Specifies the direction in which the line segment extends from the offset starting position. The angle `0deg` lies on the y-axis pointing up, and positive angles increase in the clockwise direction.

- `<size>`

  - : Specifies the length of the line segment, which is the distance between {{cssxref("offset-distance")}} `0%` and `100%`, relative to the containing box. It is an optional parameter (`closest-side` is used if no `<size>` is specified) and accepts one of the following keyword values:

    `closest-side`: Distance between the ray's starting point and the closest side of the [containing block](/en-US/docs/Web/CSS/Containing_block) of the element. If the ray's starting point lies on an edge of the containing block, the length of the line segment is zero. If the ray's starting point is outside the containing block, the edge of the containing block is considered to extend to infinity.

    `closest-corner`: Distance between the ray's starting point and the closest corner in the element's containing block. If the ray's starting point lies on a corner of the containing block, the length of the line segment is zero.

    `farthest-side`: Distance between the ray's starting point and the farthest side of the containing block of the element. If the ray's starting point is outside the containing block, the edge of the containing block is considered to extend to infinity.

    `farthest-corner`: Distance between the ray's starting point and the farthest corner in the element's containing block.

    `sides`: Distance between the ray's starting point and the point where the line segment intersects the containing block's boundary. If the starting point is on or outside the containing block's boundary, the length of the line segment is zero.

> **Note:** While the size parameter is optional in the specification, some browsers implement `ray()` with a required size value. Including the default `closest-side` is the equivalent of omitting the size, but has better support.

- `contain`

  - : Reduces the length of the line segment so that the element stays within the containing block even at `offset-distance: 100%`. Specifically, the segment's length is reduced by half the width or half the height of the element's border box, whichever is greater, but never going less than zero. It is an optional parameter.

- `at <position>`
  - : Specifies the point where the ray begins and where the element is placed in its containing block. This is an optional parameter. If omitted, the value used is the `offset-position` value of the element. If omitted and the element doesn't have an `offset-position` value, the value used for ray's starting position is `offset-position: auto`, which places the element at the `top left` corner of the element's box.

## Description

The `ray()` function allows the positioning of an element along a path using polar coordinates, rather than using the standard rectangular coordinates used by the {{cssxref("translate","translate()")}} function or using animation to move an element along a defined path. The `ray()` function helps to create 2D spatial transitions.

The element is initially positioned by moving the element's [`offset-anchor`](/en-US/docs/Web/CSS/offset-anchor) point to the element's offset starting position. The default offset starting position of a ray is the default `offset-position` value: `auto`. If `offset-position` is explicitly specified as `auto` or omitted and allowed to default, the offset starting position is the `top left` corner (or `0 0`) of the element's box. With `offset-position: normal`, the starting position of the ray is `50%, 50%` of the element's containing block.

The `<coord-box>` value of the [`offset-path`](/en-US/docs/Web/CSS/offset-path) property provides the reference box for the ray path.

## Examples

### Defining the angle and starting position for a ray

This example shows how to work with an element's anchor point, how the element gets oriented at the specified ray angle, and how to change a ray's starting point.

#### CSS

```css hidden
.container {
  position: relative;
  width: 600px;
  height: 100px;
  border: 1px dashed black;
  margin: 0 2em 4em 5em;
  text-align: center;
}

pre {
  font-size: 1em;
  text-align: right;
  padding-right: 10px;
  line-height: 1em;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}

.box + .box {
  opacity: 1;
}
```

```css
.box {
  background-color: palegreen;
  border-top: 4px solid black;
  position: absolute;
  opacity: 20%;
}

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
  offset-rotate: 0deg;
  offset-anchor: 0 0;
  offset-position: 20% 30%;
  offset-path: ray(closest-side 150deg);
}

.box5 {
  offset-rotate: 0deg;
  offset-path: ray(100deg closest-side at bottom right);
}
```

```html hidden
<div class="container">
  <div class="box">0</div>
  <div class="box box0">0</div>
  <pre>/* original */</pre>
</div>

<div class="container">
  <div class="box">0</div>
  <div class="box box1">1</div>
  <pre>
    offset-path: ray(0deg closest-side);
    /* Offset starting position is top-left corner */
  </pre>
</div>

<div class="container">
  <div class="box">0</div>
  <div class="box box2">2</div>
  <pre>
    offset-anchor: 0 0;
    offset-path: ray(0deg closest-side);
    /* Anchor and starting position are at the top-left corner */
  </pre>
</div>

<div class="container">
  <div class="box">0</div>
  <div class="box box3">3</div>
  <pre>
    offset-anchor: 0 0;
    offset-path: ray(150deg closest-side);
  </pre>
</div>

<div class="container">
  <div class="box">0</div>
  <div class="box box4">4</div>
  <pre>
    offset-anchor: 0 0;
    offset-position: 20% 30%;
    offset-rotate: 0deg;
    offset-path: ray(closest-side 150deg);
  </pre>
</div>

<div class="container">
  <div class="box">0</div>
  <div class="box box5">5</div>
  <pre>
    offset-rotate: 0deg;
    offset-path: ray(100deg closest-side at bottom right);
  </pre>
</div>
```

Similar to {{cssxref("transform-origin")}}, the default anchor point is at the center of an element. This anchor point can be modified using the [`offset-anchor`](/en-US/docs/Web/CSS/offset-anchor) property.

In this example, various `offset-anchor` and `offset-path: ray()` values are applied to a box. Results are displayed side-by-side for comparison. The element's containing block is depicted with a dashed border. One border of the box is highlighted to demonstrate different ray starting points and box orientations. After a box is positioned at the ray's starting point, it is oriented in the direction of the specified ray angle. If `offset-position` is not specified, the default offset starting position of a ray is the top-left corner of the element's containing block.

#### Result

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1000)}}

- `box1` gets initially positioned such that its anchor point (at the center) is at the offset starting position (top-left corner of the box). `box1` is also rotated to orient it towards the `0deg` angle of the ray. This will now be the starting point of the path. You can observe the change in position and rotation of the box by comparing it to the faded `box0` in the background.
- The anchor point of `box2` is changed to the top-left corner (`0px 0px`) using the `offset-anchor` property, and as a result, the element's anchor point and the offset starting position coincide. The ray angle is applied to the element at this starting point. The box is rotated to match the `0deg` angle along y-axis and pointing up.
- With other settings the same as in `box2`, a greater positive angle of `150deg` is applied in `box3`. Starting from the top-left corner, the box is rotated in a clockwise direction to reach the specified angle of `150deg`.
- `box3` and `box4` have the same `offset-anchor` and `offset-path` values. In `box4`, however, an [`offset-rotate`](/en-US/docs/Web/CSS/offset-rotate) of `0deg` is applied to the element. As a result, the element will remain rotated at this specific angle all along the ray's path, and the element will not rotate in the direction of the path. Notice in `box4` that the ray path is at `150deg`, but the box orientation will not change along the path because of `offset-rotate`. Also note that the `offset-path` property of `box4` does not specify a starting `<position>`, so the ray's starting position is derived from the element's `offset-position`, which in this case is `top 20% left 30%`.
- In `box5`, the `offset-path` property specifies the `at <position>` value, which places the box at the `bottom` and `right` edge of the element's containing block.

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

In the first two samples where `offset-path` is applied, notice the orientation of the shape without `offset-rotate` and with `offset-rotate`. The last two `offset-path` samples show the impact of corner `<size>` values: `closest-corner` and `farthest-corner`. The `closest-corner` value creates a very short offset-path because the shape is already at the corner. The `farthest-corner` value creates the longest offset-path, going from the top-left corner of the containing block to the bottom-right corner.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`offset-distance`](/en-US/docs/Web/CSS/offset-distance)
- [`offset-path`](/en-US/docs/Web/CSS/offset-path)
- [`offset-rotate`](/en-US/docs/Web/CSS/offset-rotate)
