---
title: polygon()
slug: Web/CSS/basic-shape/polygon
page-type: css-function
browser-compat: css.types.basic-shape.polygon
---

{{CSSRef}}

The **`polygon()`** [CSS](/en-US/docs/Web/CSS) function is one of the {{cssxref("&lt;basic-shape&gt;")}} [data types](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types). It's used to draw a [polygon](https://en.wikipedia.org/wiki/Polygon) by providing one or more pairs of coordinates, each of which represents a vertex of the shape.

{{EmbedInteractiveExample("pages/css/function-polygon.html")}}

## Syntax

```css-nolint
/* Specified as coordinate list */
/* polygon(<length-percentage> <length-percentage>, ... )*/
polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%)
polygon(0px 0px, 200px 100px, 0px 200px)
polygon(0% 0px, 100% 100px, 0px 100%)
polygon(0 0, 50% 1rem, 100% 2vw, calc(100% - 20px) 100%, 0 100%)

/* Specified as coordinate list and fill rule*/
/* polygon(<fill-rule> <length-percentage> <length-percentage>, ... )*/
polygon(nonzero, 0% 0%, 50% 50%, 0% 100%)
polygon(evenodd, 0% 0%, 50% 50%, 0% 100%)
```

The `polygon()` parameters are separated by a comma and optional whitespace. The first parameter is an optional [`<fill-rule>`](/en-US/docs/Web/SVG/Attribute/fill-rule) value. Additional parameters are points that define the polygon. Each point is a pair of x/y coordinate {{cssxref("length-percentage")}} values separated by a space, e.g. "0 0" and "100% 100%" for the left/top and bottom right corners, respectively.

Note: The SVG [`<polygon>`](/en-US/docs/Web/SVG/Element/polygon) element has separate attributes for [`fill-rule`](/en-US/docs/Web/SVG/Attribute/fill-rule) and [`points`](/en-US/docs/Web/SVG/Attribute/points), and `points` is flexible about the use of space and comma separators. CSS `polygon()` rules for separators are strictly enforced.

### Parameters

- [`<fill-rule>`](/en-US/docs/Web/SVG/Attribute/fill-rule) {{optional_inline}}
  - : An optional value of `nonzero` (the default when omitted) or `evenodd`, which specifies the filling rule.
- {{cssxref("length-percentage")}}
  - : Each vertex of the polygon is represented by a pair of `<length-percentage>` values, which give the x/y coordinates of the vertex relative to the shape's [reference box](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box).

### Return value

Returns a {{cssxref("basic-shape")}} value.

## Description

You can create almost any shape with the `polygon()` function by specifying the coordinates of its points. The order in which you define the points matters and can result in different shapes. The `polygon()` function requires at least 3 points, which creates a triangle, but there's no upper limit.

The `polygon()` function accepts comma-separated coordinates or points as its values. Each point is represented by a pair of space-separated `x` and `y` values, which indicate the points' coordinates within the polygon.

<code>polygon(x<sub>1</sub> y<sub>1</sub>, x<sub>2</sub> y<sub>2</sub>, x<sub>3</sub> y<sub>3</sub>, x<sub>4</sub> y<sub>4</sub>, x<sub>n</sub> y<sub>n</sub>)</code>

Given the above, mapping the coordinates of the container can be visualized as:

| axis | point 1 | point 2 | point 3 | point 4 | point n       |
| ---- | ------- | ------- | ------- | ------- | ------------- |
| x    | 0%      | 100%    | 100%    | 0%      | x<sub>n</sub> |
| y    | 0%      | 0%      | 100%    | 100%    | y<sub>n</sub> |

Applying those coordinates to the CSS {{cssxref("clip-path")}} property using the `polygon()` function:

```css
clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
```

This would create a rectangle shape the size of its parent content by specifying the coordinates of its four corners: top-left (`0% 0%`), top-right (`100% 0%`), bottom-right (`100% 100%`), and bottom-left (`0% 100%`).

## Formal syntax

{{csssyntax}}

## Examples

### Create a triangle

In this example, a triangle is formed by defining the coordinates of its three points.

#### HTML

```html
<div class="triangle"></div>
```

#### CSS

```css
.triangle {
  width: 400px;
  height: 400px;
  background-color: magenta;
  clip-path: polygon(100% 0%, 50% 50%, 100% 100%);
}
```

#### Result

{{EmbedLiveSample("Create a triangle", '100%', 400)}}

The coordinates for the triangle are the top-right corner (`100% 0%`), the center point (`50% 50%`), and the bottom-right corner (`100% 100%`) of the container.

### Setting a polygon for shape-outside

In this example a shape is created for text to follow using the {{cssxref("shape-outside")}} property.

```html
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

```css
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

{{EmbedLiveSample("Setting a polygon for shape-outside", '100%', 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [Guide to Basic Shapes](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes)
