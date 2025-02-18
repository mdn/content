---
title: ray()
slug: Web/CSS/ray
page-type: css-function
browser-compat: css.types.ray
---

{{CSSRef}}

The **`ray()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) defines the [`offset-path`](/en-US/docs/Web/CSS/offset-path) line segment that an animated element can follow. The line segment is referred to as "ray". The ray begins from an {{cssxref("offset-position")}} and extends in the direction of the specified angle. The length of a ray can be constrained by specifying a size and using the `contain` keyword.

## Syntax

```css
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

  - : Specifies the length of the line segment, which is the distance between {{cssxref("offset-distance")}} `0%` and `100%`, relative to the containing box. This is an optional parameter (`closest-side` is used if no `<size>` is specified). It accepts one of the following keyword values:

    `closest-side`: Distance between the ray's starting point and the closest side of the [containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block) of the element. If the ray's starting point lies on an edge of the containing block, the length of the line segment is zero. If the ray's starting point is outside the containing block, the edge of the containing block is considered to extend to infinity. This is the default value.

    `closest-corner`: Distance between the ray's starting point and the closest corner in the element's containing block. If the ray's starting point lies on a corner of the containing block, the length of the line segment is zero.

    `farthest-side`: Distance between the ray's starting point and the farthest side of the containing block of the element. If the ray's starting point is outside the containing block, the edge of the containing block is considered to extend to infinity.

    `farthest-corner`: Distance between the ray's starting point and the farthest corner in the element's containing block.

    `sides`: Distance between the ray's starting point and the point where the line segment intersects the containing block's boundary. If the starting point is on or outside the containing block's boundary, the length of the line segment is zero.

- `contain`

  - : Reduces the length of the line segment so that the element stays within the containing block even at `offset-distance: 100%`. Specifically, the segment's length is reduced by half the width or half the height of the element's border box, whichever is greater, and never less than zero. This is an optional parameter.

- `at <position>`
  - : Specifies the point where the ray begins and where the element is placed in its containing block. This is an optional parameter. If included, the `<position>` value must be preceded by the `at` keyword. If omitted, the value used is the `offset-position` value of the element. If omitted and the element doesn't have an `offset-position` value, the value used for the ray's starting position is `offset-position: normal`, which places the element at the center (or `50% 50%`) of the containing block.

## Description

The `ray()` function positions an element along a path by specifying its location in a two-dimensional space through an angle and a distance from a reference point (polar coordinates). This feature makes the `ray()` function useful for creating 2D spatial transitions. For comparison, this approach differs from the method of specifying a point by its horizontal and vertical distances from a fixed origin (rectangular coordinates), which is used by the {{cssxref("translate","translate()")}} function, and from moving an element along a defined path through animation.

As `ray()` works in 2D space, it's important to consider both the initial position and orientation of the element. When the `ray()` function is applied as the `offset-path` value on an element, here's how you can control these aspects:

- The element is initially positioned by moving the element's [`offset-anchor`](/en-US/docs/Web/CSS/offset-anchor) point to the element's offset starting position. By default, the ray's starting position is determined by the {{cssxref("offset-position")}} value. If `offset-position` is explicitly specified as `normal` (or omitted and allowed to default to `normal`), the element is positioned at the `center` (or `50% 50%`) of its containing block. Specifying `offset-position: auto` sets the starting position at the `top left` corner (or `0 0`) of the element's position.
- The element is initially rotated such that its [inline axis](/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#the_two_axes_of_a_grid_layout) — its direction of text flow — aligns with the angle specified by `ray()`. For example, with the `ray()` angle of `0deg`, which lies on the y-axis pointing up, the element's inline axis is rotated to be vertical to match the ray's angle. The element maintains this rotation throughout its path. To customize this behavior, use the {{cssxref("offset-rotate")}} property, which allows you to specify a different rotation angle or direction for the element, enabling more precise control over its appearance as it follows the path. For example, setting `offset-rotate: 0deg` will remove any rotation applied by `ray()`, aligning back the element's inline axis with the direction of text flow.

## Formal syntax

{{csssyntax}}

## Examples

### Defining the angle and starting position for a ray

This example shows how to work with an element's starting position and how the element's orientation is impacted by the specified ray angle.

#### CSS

```css hidden
body {
  width: fit-content;
  height: fit-content;
}

.container {
  width: 80vw;
  height: 100px;
  border: 1px dashed black;
  margin: 0 0.5em 2em 2em;
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
  opacity: 20%;
}

.box:first-of-type {
  position: absolute;
}

.box1 {
  offset-path: ray(0deg);
}

.box2 {
  offset-path: ray(150deg);
}

.box3 {
  offset-rotate: 0deg;
  offset-position: 20% 40%;
  offset-path: ray(150deg);
}

.box4 {
  offset-position: 0 0;
  offset-path: ray(0deg);
}

.box5 {
  offset-path: ray(60deg closest-side at bottom right);
}
```

```html hidden
<pre>/* original */</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box0">0</div>
</div>

<pre>
  offset-path: ray(0deg);
  /* Default offset starting position is 50% 50% */
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box1">1</div>
</div>

<pre>
  offset-path: ray(150deg);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box2">2</div>
</div>

<pre>
  offset-rotate: 0deg;
  offset-position: 20% 40%;
  offset-path: ray(150deg);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box3">3</div>
</div>

<pre>
  offset-position: 0 0;
  offset-path: ray(0deg);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box4">4</div>
</div>

<pre>
  offset-path: ray(60deg closest-side at bottom right);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box5">5</div>
</div>
```

Similar to {{cssxref("transform-origin")}}, the default anchor point is at the center of an element. This anchor point can be modified using the [`offset-anchor`](/en-US/docs/Web/CSS/offset-anchor) property.

In this example, various `offset-path: ray()` values are applied to the boxes numbered `1` to `5`. The "containing block" of each box is depicted with a dashed border. A faded box in the upper left corner shows each box's default position without any `offset-position` or `offset-path` applied, allowing for a side-by-side comparison. The top of each box is highlighted with a `solid` border to illustrate variations in ray starting points and orientations. After positioning at the ray's starting point, a box aligns with the direction of the specified ray angle. If {{cssxref("offset-position")}} is not specified, the default offset starting position of the ray is the center (or `50% 50%`) of the box's containing block.

#### Result

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1100)}}

- `box1` gets initially positioned such that its anchor point (its center) is at the default offset starting position (`50% 50%` of the containing block). `box1` is also rotated to orient it towards the `0deg` angle of the ray. This will now be the starting point of the path. You can observe the change in position and rotation of the box by comparing it to the faded `box0` on the left. The box is rotated to match the `0deg` angle along y-axis, pointing up. The box rotation is evident from the orientation of the number inside the box.

- In `box2`, a greater positive angle of `150deg` is applied to the ray to show how the ray angle works. Starting from the top-left corner, the box is rotated in a clockwise direction to reach the specified angle of `150deg`.

- `box2` and `box3` have the same `offset-path` values. In `box3`, an [`offset-rotate`](/en-US/docs/Web/CSS/offset-rotate) of `0deg` is also applied to the element. As a result, the element will remain rotated at this specific angle all along the ray's path, and the element will not rotate in the direction of the path. Notice in `box3` that the ray path is at `150deg`, but the box orientation will not change along the path because of `offset-rotate`. Also note that the `offset-path` property of `box3` does not specify a starting `<position>`, so the ray's starting position is derived from the element's `offset-position`, which in this case is `top 20% left 40%`.

- The `offset-position` of `box4` is set to top-left corner (`0 0`) of the containing block, and as a result, the element's anchor point and the offset starting position coincide. The ray angle of `0deg` is applied to the element at this starting point.

- In `box5`, the `offset-path` property specifies the `at <position>` value, which places the box at the `bottom` and `right` edge of the element's containing block and `60deg` is applied to the ray's angle.

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
  offset-position: auto;
  offset-path: ray(120deg closest-corner);
}

.shape5 {
  offset-position: auto;
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

<pre>
  offset-position: auto;
  offset-path: ray(120deg closest-corner)</pre>

<div>
  <div class="container">
    <div class="shape shape5">&mdash;</div>
  </div>
</div>

<pre>
  offset-position: auto;
  offset-path: ray(120deg farthest-corner)</pre>
</div>
```

#### Result

{{EmbedLiveSample('Animating an element along the ray', '100%', 750)}}

In the first two samples where `offset-path` is applied, notice the orientation of the shape without {{cssxref("offset-rotate")}} and with `offset-rotate`. Both these samples use the default {{cssxref("offset-position")}} value `normal`, and therefore, the path motion starts from `50% 50%`. The last two `offset-path` samples show the impact of corner `<size>` values: `closest-corner` and `farthest-corner`. The `closest-corner` value creates a very short offset-path because the shape is already at the corner (`offset-position: auto`). The `farthest-corner` value creates the longest offset-path, going from the top-left corner of the containing block to the bottom-right corner.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`offset-distance`](/en-US/docs/Web/CSS/offset-distance)
- [`offset-path`](/en-US/docs/Web/CSS/offset-path)
- [`offset-rotate`](/en-US/docs/Web/CSS/offset-rotate)
