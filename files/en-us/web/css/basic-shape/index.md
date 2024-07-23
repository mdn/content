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

The `<basic-shape>` data type is used to create basic shapes including rectangles by [container inset](#syntax_for_rectangles_by_container_insets), by [coordinate distance](#syntax_for_rectangles_by_distance), or by [set dimensions](#syntax_for_rectangles_with_dimensions), [circles](#syntax_for_circles), [ellipses](#syntax_for_ellipses), [polygons](#syntax_for_polygons), [paths](#syntax_for_paths), and [author created shapes](#syntax_for_shapes_experimental). These basic shapes are defined using one `<basic_shape>` CSS functions, with each value requiring a parameter that follows the shape's function-specific syntax.

### Common parameters

The parameters common across the syntax of some basic shape functions include:

- `round <'border-radius'>`

  - : Defines rounded corners for [rectangles by container insets](#syntax_for_rectangles_by_container_insets), [rectangles by distance](#syntax_for_rectangles_by_distance), and [rectangles with dimensions](#syntax_for_rectangles_with_dimensions) using the same syntax as the CSS [`border-radius`](/en-US/docs/Web/CSS/border-radius) shorthand property.

- `<shape-radius>`

  - : Defines the radius for a [circle](#syntax_for_circles) or an [ellipse](#syntax_for_ellipses). Valid values include {{cssxref("length")}}, {{cssxref("percentage")}}, `closest-side` (the default), and `farthest-side`. Negative values are invalid.

    The `closest-side` keyword value uses the length from the center of the shape to the closest side of the reference box to create the radius length. The `farthest-side` keyword value uses the length from the center of the shape to the farthest side of the reference box.

- `<position>`

  - : Defines the center [`<position>`](/en-US/docs/Web/CSS/position_value) of a [circle](#syntax_for_circles) or an [ellipse](#syntax_for_ellipses). It defaults to `center` if omitted.

- `<fill-rule>`

  - : Sets the {{SVGAttr("fill-rule")}} that is used to determine how the interior of the shape defined by the basic shapes [polygon](#syntax_for_polygons), [path](#syntax_for_paths), and [shape](#syntax_for_shapes_experimental) is to be filled. Possible values are `nonzero` (the default) and `evenodd`.

    > **Note:** `<fill-rule>` is not supported in {{cssxref("offset-path")}} and using it invalidates the property.

### Syntax for rectangles by container insets

The {{cssxref("basic-shape/inset","inset()")}} function creates an inset rectangle, with its size defined by the offset distance of each of the four sides of its container and, optionally, rounded corners.

```plain
inset( <length-percentage>{1,4} [ round <`border-radius`> ]? )
```

When all of the first four arguments are supplied, they represent the top, right, bottom, and left offsets from the reference box inward that define the position of the edges of the inset rectangle. These arguments follow the syntax of the {{cssxref("margin")}} shorthand, which lets you set all four insets with one, two, three, or four values.

If a pair of insets for a dimension adds up to more than 100% of that dimension, both values are proportionally reduced so their sum equals 100%. For example, the value `inset(90% 10% 60% 10%)` has a top inset of `90%` and a bottom inset of `60%`. These values are reduced proportionally to `inset(60% 10% 40% 10%)`. Shapes such as this, that enclose no area and have no {{cssxref("shape-margin")}}, do not affect wrapping.

### Syntax for rectangles by distance

The {{cssxref("basic-shape/rect","rect()")}} function defines a rectangle using the specified distances from the top and left edges of the reference box, with optional rounded corners.

```plain
rect( [ <length-percentage> | auto ]{4} [ round <`border-radius`> ]? )
```

When using the `rect()` function, you do not define the width and height of the rectangle. Instead, you specify four values to create the rectangle, with its dimensions determined by the size of the reference box and the four offset values. Each value can be either a {{cssxref("length")}}, a {{cssxref("percentage")}}, or the keyword `auto`. The `auto` keyword is interpreted as `0%` for the top and left values and as `100%` for the bottom and right values.

### Syntax for rectangles with dimensions

The {{cssxref("basic-shape/xywh","xywh()")}} function defines a rectangle located at the specified distances from the left (`x`) and top (`y`) edges of the reference box and sized by the specified width (`w`) and height (`h`) of the rectangle, in that order, with optional rounded corners.

```plain
xywh( <length-percentage>{2} <length-percentage [0,∞]>{2} [ round <`border-radius`> ]? )
```

### Syntax for circles

The {{cssxref("basic-shape/circle","circle()")}} function defines a circle using a radius and a position.

```plain
circle( <shape-radius>? [ at <position> ]? )
```

The `<shape-radius>` argument represents the radius of the circle defined as either a {{cssxref("length")}} or a {{cssxref("percentage")}}. A percentage value here is resolved from the used width and height of the reference box as `sqrt(width^2+height^2)/sqrt(2)`. If omitted, the radius is defined by `closest-side`.

### Syntax for ellipses

The {{cssxref("basic-shape/ellipse","ellipse()")}} function defines an ellipse using two radii and a position.

```plain
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

The `<shape-radius>` arguments represent _rx_ and _ry_, the x-axis and y-axis radii of the ellipse, in that order. These values are specified as either a {{cssxref("length")}} or a {{cssxref("percentage")}}. Percentage values here are resolved against the used width (for the rx value) and the used height (for the ry value) of the reference box. If only one radius value is provided, the `ellipse()` shape function is invalid. If no value is provided, `50% 50%` is used.

### Syntax for polygons

The {{cssxref("basic-shape/polygon","polygon()")}} function defines a polygon using an SVG {{SVGAttr("fill-rule")}} and a set of coordinates.

```plain
polygon( <`fill-rule`>?, [ <length-percentage> <length-percentage> ]# )
```

The function takes a list of comma-separated coordinate pairs, each consisting of two space-separated `<length-percentage>` values as the _xi_ and _yi_ pair. These values represent the x and y axis coordinates of the polygon at position _i_ (the vertex point where two lines meet).

### Syntax for paths

The {{cssxref("basic-shape/path","path()")}} function defines a shape using an SVG {{SVGAttr("fill-rule")}} and an SVG [path definition](/en-US/docs/Web/SVG/Attribute/d).

```plain
path( <`fill-rule`>?, ]? <string> )
```

The required `<string>` is an [SVG path](/en-US/docs/Web/SVG/Attribute/d) as a quoted string. The `path()` function is not a valid {{cssxref("shape-outside")}} property value.

### Syntax for shapes {{Experimental_Inline}}

The {{cssxref("basic-shape/shape","shape()")}} function defines a shape using an initial starting point and a series of shape commands.

```plain
shape( <fill-rule>? from <coordinate-pair>, <shape-command># )
```

The `from <coordinate-pair>` parameter represents the starting point for the first shape command, and `<shape-command>` defines one or more shape commands, which are similar to the [SVG path commands](/en-US/docs/Web/SVG/Attribute/d#path_commands). The `shape()` function is not a valid {{cssxref("shape-outside")}} property value.

## Description

When creating a shape, the reference box is defined by the property that uses `<basic-shape>` values. The coordinate system for the shape has its origin at the top-left corner of the element's margin box by default, with the x-axis running to the right and the y-axis running downwards. All the lengths expressed in percentages are resolved from the dimensions of the reference box.

The default reference box is the [`margin-box`](/en-US/docs/Web/CSS/box-edge#margin-box), as demonstrated in the image below. The image shows a circle created using `shape-outside: circle(50%)`, highlighting the different parts of the box model as seen in a browser's Developer Tools. The shape here is defined with reference to the margin-box.

![An image showing a circle inspected with the Firefox DevTools Shape Inspector. The different parts of the box model are highlighted.](shapes-reference-box.png)

### Computed values of basic shapes

The values in a `<basic-shape>` function are computed as specified, with the following additional considerations:

- For any omitted values, their defaults are used.
- A {{cssxref("position_value", "&lt;position&gt;")}} value in `circle()` or `ellipse()` is computed as a pair of offsets from the top left corner of the reference box: the first offset is horizontal, and the second is vertical. Each offset is specified as a {{cssxref("length-percentage")}} value.
- A [`<border-radius>`](/en-US/docs/Web/CSS/border-radius) value in `inset()` is expanded into a list of eight values, each either a {{cssxref("length")}} or a {{cssxref("percentage")}}.
- {{cssxref("basic-shape/inset","inset()")}}, {{cssxref("basic-shape/rect","rect()")}}, and {{cssxref("basic-shape/xywh","xywh()")}} functions compute to the equivalent `inset()` function.

### Interpolation of basic shapes

When animating between two `<basic-shape>` functions, the {{Glossary("interpolation")}} rules listed below are followed. The parameter values of each `<basic-shape>` function form a list. For interpolation to occur between two shapes, both shapes must use the same reference box and the number and type of values in both `<basic-shape>` lists must match.

Each value in the lists of the two `<basic-shape>` functions is interpolated based on its computed value as a {{cssxref("number")}}, {{cssxref("length")}}, {{cssxref("percentage")}}, {{cssxref("angle")}}, or {{cssxref("calc", "calc()")}} where possible. Interpolation can still occur if the values are not one of those data types but are identical between the two interpolating basic shape functions, such as `nonzero`.

- **Both shapes are of type `ellipse()` or type `circle()`**: Interpolation is applied between each corresponding value if their radii are specified as either a {{cssxref("length")}} or a {{cssxref("percentage")}} (rather than keywords such as `closest-side` or `farthest-side`).

- **Both shapes are of type `inset()`**: Interpolation is applied between each corresponding value.

- **Both shapes are of type `polygon()`**: Interpolation is applied between each corresponding value if they use the same `<fill-rule>` and have the same number of comma-separated coordinate pairs.

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

- Properties that use this data type: {{cssxref("clip-path")}}, {{cssxref("offset-path")}}, {{cssxref("shape-outside")}},
- [CSS shapes](/en-US/docs/Web/CSS/CSS_shapes) module
- [Overview of CSS shapes](/en-US/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [Edit Shape Paths in CSS — Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)
