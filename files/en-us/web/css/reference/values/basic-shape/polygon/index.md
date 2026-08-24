---
title: "`polygon()` CSS function"
short-title: polygon()
slug: Web/CSS/Reference/Values/basic-shape/polygon
page-type: css-function
browser-compat: css.types.basic-shape.polygon
sidebar: cssref
---

The **`polygon()`** [CSS](/en-US/docs/Web/CSS) function is one of the {{cssxref("basic-shape")}} [data types](/en-US/docs/Web/CSS/Reference/Values/Data_types). It's used to draw a [polygon](https://en.wikipedia.org/wiki/Polygon) by providing one or more pairs of coordinates, each of which represents a vertex of the shape.

{{InteractiveExample("CSS Demo: polygon()")}}

```css interactive-example-choice
clip-path: polygon(
  0% 20%,
  60% 20%,
  60% 0%,
  100% 50%,
  60% 100%,
  60% 80%,
  0% 80%
);
```

```css interactive-example-choice
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #ffee99;
}

#example-element {
  background: linear-gradient(to bottom right, #ff5522, #0055ff);
  width: 100%;
  height: 100%;
}
```

## Syntax

```css-nolint
/* Coordinate list */
polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%)
polygon(0px 0px, 200px 100px, 0px 200px)
polygon(0% 0px, 100% 100px, 0px 100%)
polygon(0 0, 50% 1rem, 100% 2vw, calc(100% - 20px) 100%, 0 100%)

/* Coordinate list with fill-rule and/or round value */
polygon(nonzero, 0% 0%, 50% 50%, 0% 100%)
polygon(round 20px, 0% 0%, 50% 50%, 0% 100%)
polygon(evenodd round 2em, 0% 0%, 50% 50%, 0% 100%)
```

### Parameters

The `polygon()` function accepts an optional first parameter containing values that modify the polygon's appearance — a {{SVGAttr("fill-rule")}} keyword, the `round` keyword followed by a {{cssxref("length")}} value, or both. The first parameter's components are separated by spaces. The other parameters are space-separated x/y coordinate pairs of {{cssxref("length-percentage")}} values.

- [`<fill-rule>`](/en-US/docs/Web/SVG/Reference/Attribute/fill-rule) {{optional_inline}}
  - : A keyword equal to `nonzero` (the default) or `evenodd`, which specifies the algorithm used to fill the polygon shape.
- `round <length>` {{optional_inline}}
  - : The `round` keyword specifies that the polygon should have rounded corners, and the accompanying {{cssxref("length")}} value specifies the radius of those corners.
- {{cssxref("length-percentage")}}
  - : Each vertex, or point, of the polygon is represented by a space-separated pair of `<length-percentage>` values defining the x/y coordinates of the vertex relative to the shape's [reference box](/en-US/docs/Web/CSS/Guides/Shapes/Using_shape-outside#the_reference_box).

### Return value

A {{cssxref("basic-shape")}} value.

## Description

You can create almost any shape with the `polygon()` function by specifying the x/y coordinates of its vertices, or points, as comma-separated pairs of {{cssxref("length-percentage")}} values:

<code>polygon(x<sub>1</sub> y<sub>1</sub>, x<sub>2</sub> y<sub>2</sub>, x<sub>3</sub> y<sub>3</sub>, x<sub>4</sub> y<sub>4</sub>, x<sub>n</sub> y<sub>n</sub>)</code>

Although only a single point is required to create a valid `polygon()` function value, at least 3 points are required to create a shape (a triangle). There is no upper limit on the number of points that can be specified. The shape is drawn through the specified points in the order they appear in the function, with a final line automatically being drawn between the last and first points to close the shape.

We could define the coordinates of a triangle shape like this:

| axis | point 1 | point 2 | point 3 |
| ---- | ------- | ------- | ------- |
| x    | 0%      | 100%    | 100%    |
| y    | 0%      | 0%      | 100%    |

We can apply those coordinates to the CSS {{cssxref("clip-path")}} property in a `polygon()` function as follows:

```css
clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
```

This creates a triangle shape that covers half the area of its parent container by specifying the coordinates of three of its four corners: top-left (`0% 0%`), top-right (`100% 0%`), and bottom-right (`100% 100%`). If we assume a 200x200px container with a green background:

```html hidden live-sample___basic
<div class="box"></div>
```

```css hidden live-sample___basic
.box {
  width: 200px;
  height: 200px;
  background-color: green;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
}
```

{{EmbedLiveSample("basic", '100%', 200)}}

### The effect of point order

The order in which you define the points can result in different shapes. For example, the following two `clip-path` declarations both use a `polygon()` function with X/Y coordinate pairs for the container's four corners, but in a different order.

```css
clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 100% 100%);
```

```html hidden live-sample___different-order
<div class="box"></div>
<div class="box box2"></div>
```

```css hidden live-sample___different-order
body {
  display: flex;
  gap: 20px;
}

.box {
  width: 200px;
  height: 200px;
  background-color: purple;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.box2 {
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 100% 100%);
}
```

The first function draws a square, while the second draws an hourglass shape.

{{EmbedLiveSample("different-order", '100%', 200)}}

### Specifying polygon modifiers

The `polygon()` function accepts an optional first parameter modifying the rendering of the resulting shape. The parameter value can include either or both of the following, separated by spaces:

- A [`<fill-rule>`](/en-US/docs/Web/SVG/Reference/Attribute/fill-rule) keyword equal to `nonzero` (the default) or `evenodd`, which specifies the algorithm used to fill the polygon shape. This only has an effect when the lines drawn between coordinate values overlap.
- The `round` keyword followed by a {{cssxref("length")}} value. This specifies that the polygon should have rounded corners, with the `<length>` value specifying the radius of those corners.

For example, we could expand upon the previous triangle example and add rounded corners:

```css
clip-path: polygon(round 20px, 0% 0%, 100% 0%, 100% 100%);
```

```html hidden live-sample___basic-rounded
<div class="box"></div>
```

```css hidden live-sample___basic-rounded
.box {
  width: 200px;
  height: 200px;
  background-color: green;
  clip-path: polygon(round 20px, 0% 0%, 100% 0%, 100% 100%);
}
```

This results in the same triangle shape, but with `20px` radius rounded corners:

{{EmbedLiveSample("basic-rounded", '100%', 200)}}

> [!NOTE]
> In each case, the corner radius is clamped to ensure it is never larger than half of any line segment length. The maximum corner radius is clamped to the smaller of `tan(corner-angle/2) * (segment-length / 2)` evaluated against both line segments forming the corner. [The specification](https://drafts.csswg.org/css-shapes-1/#funcdef-basic-shape-polygon) contains further details for those interested.

## Formal syntax

{{csssyntax}}

## Examples

### Create a triangle

In this example, a triangle is formed by defining the coordinates of its three points.

#### HTML

```html live-sample___triangle
<div class="triangle"></div>
```

#### CSS

```css live-sample___triangle
.triangle {
  width: 400px;
  height: 400px;
  background-color: magenta;
  clip-path: polygon(100% 0%, 50% 50%, 100% 100%);
}
```

#### Result

{{EmbedLiveSample("triangle", '100%', 400)}}

The coordinates for the triangle are the top-right corner (`100% 0%`), the center point (`50% 50%`), and the bottom-right corner (`100% 100%`) of the container.

### Create a rounded star

In this example, we create a star shape and use the `round` keyword to round its corners.

#### HTML

```html live-sample___star
<div class="star"></div>
```

#### CSS

```css live-sample___star
.star {
  width: 400px;
  height: 400px;
  background-color: hotpink;
  clip-path: polygon(
    round 20px,
    50% 5%,
    60.85% 27.48%,
    85.22% 21.99%,
    74.38% 44.44%,
    93.88% 60.01%,
    69.57% 65.56%,
    69.53% 90.55%,
    50% 75%,
    30.47% 90.55%,
    30.43% 65.56%,
    6.12% 60.01%,
    25.62% 44.44%,
    14.78% 21.99%,
    39.15% 27.48%
  );
}
```

```css hidden live-sample___basic-rounded live-sample___star
@supports not (clip-path: polygon(round 20px, 0% 0%, 100% 0%, 100% 100%)) {
  body::before {
    font-family: sans-serif;
    content: "Your browser does not support the polygon() round keyword.";
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

#### Result

{{EmbedLiveSample("star", '100%', 400)}}

### Setting a polygon for shape-outside

In this example a shape is created for text to follow using the {{cssxref("shape-outside")}} property.

```html live-sample___shape-outside
<div class="box">
  <div class="shape"></div>
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___shape-outside
.box {
  width: 250px;
}

.shape {
  float: left;
  shape-outside: polygon(
    0 5%,
    15% 12%,
    30% 15%,
    40% 26%,
    45% 35%,
    45% 45%,
    40% 55%,
    10% 90%,
    10% 98%,
    8% 100%,
    0 100%
  );
  width: 300px;
  height: 320px;
}

p {
  font-size: 0.9rem;
}
```

{{EmbedLiveSample("shape-outside", '100%', 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("border-shape")}}, {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Guide to Basic Shapes](/en-US/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
