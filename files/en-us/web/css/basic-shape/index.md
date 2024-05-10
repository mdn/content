---
title: <basic-shape>
slug: Web/CSS/basic-shape
page-type: css-type
browser-compat: css.types.basic-shape
---

{{CSSRef}}

The **`<basic-shape>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a shape used in the {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}, and {{cssxref("offset-path")}} properties.

{{EmbedInteractiveExample("pages/css/type-basic-shape.html")}}

## Syntax

The `<basic-shape>` data type is defined using one of the basic shape functions described in the sections below. All `<basic-shape>` values use functional notation and are defined using the [value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax).

Parameters common across some basic shape functions include:

- `round <'border-radius'>`

  - : Defines rounded corners for the inset rectangle using the same syntax as the CSS [`border-radius`](/en-US/docs/Web/CSS/border-radius) shorthand property. This parameter is specified in the `inset()`, `rect()`, and `xywh()` functions.

- `<shape-radius>`

  - : Defines the radius for a circle or an ellipse. The valid values include `<length>`, `<percentage>`, `closest-side` and `farthest-side`. Negative values are invalid. It defaults to `closest-side` if omitted.

    `closest-side` uses the length from the center of the shape to the closest side of the reference box. For circles, this is the closest side in any dimension. For ellipses, this is the closest side in the radius dimension.

    `farthest-side` uses the length from the center of the shape to the farthest side of the reference box. For circles, this is the farthest side in any dimension. For ellipses, this is the farthest side in the radius dimension.

- `<position>`

  - : Defines the center of the shape. It defaults to center of the shape if omitted. This parameter is specified in the `circle()` and `ellipse()` functions.

- `<fill-rule>`

  - : Represents the {{SVGAttr("fill-rule")}} used to determine the interior of the shape. Possible values are `nonzero` and `evenodd`. Default value when omitted is `nonzero`. This parameter is specified in the `polygon()`, `path()`, and `shape()` functions.

    > **Note:** `<fill-rule>` is not supported in the {{cssxref("offset-path")}} property.

### Inset

The `{{cssxref("basic-shape/inset","inset()")}}` function defines an inset rectangle.

```plain
inset( <length-percentage>{1,4} [ round <`border-radius`> ]? )
```

When all of the first four arguments are supplied, they represent the top, right, bottom and left offsets from the reference box inward that define the position of the edges of the inset rectangle. These arguments follow the syntax of the {{cssxref("margin")}} shorthand, which lets you set all four insets with one, two, three, or four values.

A pair of insets in either dimension that add up to more than the used dimension (such as left and right insets of 75% apiece) define a shape enclosing no area. For this specification, this results in an empty float area.

### Rectangle by distance

The `{{cssxref("basic-shape/rect","rect()")}}` function defines a rectangle using the specified distances from the top and left edges of the reference box.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <`border-radius`> ]? )
```

You specify four values to create the rectangle. Each of the four values is either a `<length>`, a `<percentage>`, or the keyword `auto`. When using the `rect()` function, you do not define the width and height of the rectangle. The rectangle's dimensions depend on the size of the reference box and the offset values.

### Rectangle with dimensions

The `{{cssxref("basic-shape/xywh","xywh()")}}` function defines a rectangle using the specified distances from the top and left edges of the reference box and the specified width and height of the rectangle.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <`border-radius`> ]? )
```

### Circle

The `{{cssxref("basic-shape/circle","circle()")}}` function defines a circle using a radius and a position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

The `<shape-radius>` argument represents _r_, the radius of the circle. A percentage value here is resolved from the used width and height of the reference box as `sqrt(width^2+height^2)/sqrt(2)`.

### Ellipse

The `{{cssxref("basic-shape/ellipse","ellipse()")}}` function defines an ellipse using two radii and a position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

The `<shape-radius>` arguments represent rx and ry, the x-axis and y-axis radii of the ellipse, in that order. Percentage values here are resolved against the used width (for the rx value) and the used height (for the ry value) of the reference box.

### Polygon

The `{{cssxref("basic-shape/polygon","polygon()")}}` function defines a polygon using an SVG {{SVGAttr("fill-rule")}} and a set of vertices.

```plain
polygon( <fill-rule>? [ <length-percentage> <length-percentage> ]# )
```

Each `<length-percentage>` pair in the list represents _xi_ and _yi_ - the x and y axis coordinates of the vertex of the polygon at position i.

### Path

The `{{cssxref("path","path()")}}` function defines a shape using an SVG {{SVGAttr("fill-rule")}} and an SVG [path definition](/en-US/docs/Web/SVG/Attribute/d).

```plain
path( [ <fill-rule>, ]? <string> )
```

The required `<string>` is an [SVG Path](/en-US/docs/Web/SVG/Attribute/d) string encompassed in quotes.

### Shape {{Experimental_Inline}}

The `{{cssxref("basic-shape/shape","shape()")}}` function defines a shape using an initial starting point and a series of shape commands.

```plain
shape( <fill-rule>? from <coordinate-pair>, <shape-command># )
```

The `from <coordinate-pair>` parameter represents the starting point for the first shape command, and `<shape-command>` defines one one or more shape commands, which are similar to the [SVG path commands](/en-US/docs/Web/SVG/Attribute/d#path_commands).

## Description

When creating a shape, the reference box is defined by each property that uses `<basic-shape>` values. The coordinate system for the shape has its origin at the top-left corner of the reference box, with the x-axis running to the right and the y-axis running downwards. All the lengths expressed in percentages are resolved from the used dimensions of the reference box.

The default reference box is the `margin-box`, as demonstrated in the below image which shows a circle created using `shape-outside: circle(50%)`. The shape is being defined with reference to the margin box.

![An image showing a circle inspected with the Firefox DevTools Shape Inspector. The different parts of the box model are highlighted.](shapes-reference-box.png)

### Computed values of basic shapes

The values in a `<basic-shape>` function are computed as specified, with these exceptions:

- Omitted values are included and compute to their defaults.
- A {{cssxref("&lt;position&gt;")}} value in `circle()` or `ellipse()` is computed as a pair of offsets (horizontal then vertical) from the top left origin, each given as a combination of an absolute length and a percentage.
- A [`<border-radius>`](/en-US/docs/Web/CSS/border-radius) value in `inset()` is computed as an expanded list of all eight {{cssxref("length")}} or percentage values.

### Interpolation of basic shapes

When animating from one `<basic-shape>` to another, the {{Glossary("interpolation")}} rules listed below are followed. For any interpolation to happen between two shapes, both must use the same reference box. The values between two `<basic-shape>` functions interpolate based on their computed values, forming a simple list. The list values are interpolated as {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;angle&gt;")}}, or {{cssxref("calc", "calc()")}} where possible. If the list values are not one of those types but are identical (such as `nonzero` in the same position in both `basic-shape` functions), those values also interpolate.

- **Both shapes are of type `ellipse()` or type `circle()`**: Interpolation is applied between each corresponding value if their radii are specified as {{cssxref("&lt;length-percentage&gt;")}} (rather than keywords such as `closest-side` or `farthest-side`).

- **Both shapes are of type `inset()`**: Interpolation is applied between each corresponding value.

- **Both shapes are of type `polygon()`**: Interpolation is applied between each corresponding value, including the vertices (specified as x/y coordinate pairs), if they have the same number of vertices and use the same `<fill-rule>`.

- **Both shapes are of type `path()`**: Interpolation is applied to each parameter as a {{cssxref("&lt;number&gt;")}} if the path strings in both the shapes match the number, type, and sequence of [path data commands](/en-US/docs/Web/SVG/Attribute/d#path_commands).

- **Both shapes are of type `shape()`**: Interpolation is applied between each corresponding value if they have the identical command keyword and use the same `<by-to>` keyword. If `shape()` is used in the {{cssxref("clip-path")}} property, the two shapes interpolate if they also have the same `<fill-rule>`.

  - If they use the `<curve-command>` or the `<smooth-command>`, the number of control points must match for interpolation.

  - If they use the `<arc-command>` with different `<arc-sweep>` directions, the interpolated result goes clockwise (`cw`). If they use different `<arc-size>` keywords, the size is interpolated using the `large` value.

- **One shape is of type `path()` and the other is of type `shape()`**: Interpolation is applied between each corresponding value if the list of path data commands is identical in number as well as sequence. The interpolated shape is a `shape()` function, maintaining the same list of path data commands.

In all other cases, no interpolation occurs and the animation is discrete.

## Examples

### Animated polygon

In this example, we use the [@keyframes](/en-US/docs/Web/CSS/@keyframes) at-rule to animate a clip path between two polygons. Note that both polygons have the same number of vertices, which is necessary for this type of animation to work.

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background: repeating-linear-gradient(red, orange 50px);
  clip-path: polygon(
    50% 0%,
    60% 40%,
    100% 50%,
    60% 60%,
    50% 100%,
    40% 60%,
    0% 50%,
    40% 40%
  );
  animation: 4s poly infinite alternate ease-in-out;
  margin: 10px auto;
}

@keyframes poly {
  from {
    clip-path: polygon(
      50% 0%,
      60% 40%,
      100% 50%,
      60% 60%,
      50% 100%,
      40% 60%,
      0% 50%,
      40% 40%
    );
  }

  to {
    clip-path: polygon(
      50% 30%,
      100% 0%,
      70% 50%,
      100% 100%,
      50% 70%,
      0% 100%,
      30% 50%,
      0% 0%
    );
  }
}
```

#### Result

{{EmbedLiveSample('Animated_polygon','340', '340')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [CSS shapes](/en-US/docs/Web/CSS/CSS_shapes) module
- [Overview of CSS shapes](/en-US/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [Edit Shape Paths in CSS — Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
