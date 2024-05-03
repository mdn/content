---
title: shape()
slug: Web/CSS/basic-shape/shape
page-type: css-function
browser-compat: css.types.basic-shape.shape
---

{{CSSRef}}

The **`shape()`** [CSS function](/en-US/docs/web/css/css_functions) is used to define a shape for the {{cssxref("clip-path")}} and {{cssxref("offset-path")}} properties. It combines an initial starting point with a series of shape commands that define the path of the shape. The `shape()` function is one of the {{cssxref("&lt;basic-shape&gt;")}} data types.

<!-- {{EmbedInteractiveExample("pages/css/function-path.html")}} -->

## Syntax

```css
offset-path: shape(nonzero from 0px 0px, line to 10px 10px)
offset-path: shape(from 10px 10px, move by 10px 5px, line by 20px 40%, close);
offset-path: shape(from 10px 10px, hline by 10px, vline to 5rem);
offset-path: shape(from 10px 10px, curve to 50px 20px via 160px 1px 20% 16px);
offset-path: shape(from 10% 1rem, arc to 50px 3pt of 20% cw large rotate 25deg);
```

### Parameters

- [`<fill-rule>`](/en-US/docs/web/svg/attribute/fill-rule) {{optional_inline}}

  - : Specifies how overlapping regions of a shape should be filled. The possible values include:

    - `nonzero`: A point is considered inside the shape if a ray drawn from the point crosses more left-to-right than right-to-left path segments, resulting in a non-zero count. This is the default value when `<fill-rule>` is omitted.

    - `evenodd`: A point is considered inside the shape if a ray drawn from the point crosses an odd number of path segments.

- `from <coordinate-pair>`

  - : Defines the starting point for the first `<shape-command>` as a pair of coordinates that are measured from the top-left corner of the reference box. The coordinates are specified as a {{cssxref("&lt;length-percentage&gt;")}} value.

- `<shape-command>`

  - : Specifies one or a list of comma-seperated commands that define the shape, using syntax identical to that of an [SVG path command](/en-US/docs/web/svg/attribute/d#path_commands). Each command's starting point is the previous command's ending point.

    The syntax of most shape commands is the operation keyword, such as `move` or `line`, followed by the `by` or `to` keyword, and then a set of coordinates.

    `by`: Indicates that the `<coordinate-pair>` is relative to the command's starting point ("relative" value).

    `to`: Indicates that the `<coordinate-pair>` is relative to the top-left corner of the reference box ("absolute" value).

    > **Note:** If `<coordinate-pair>` is specified as a percentage, the position is calculated relative to the size of the reference box.

    The following `<shape-command>`s can be specified:

    - `<move-command>`: Specified as `move [by | to] <coordinate-pair>`. This command adds a [MoveTo command](/en-US/docs/web/svg/attribute/d#moveto_path_commands) to the list of shape commands. It does not draw a shape; rather it specifies the position for the next command. The `by`or `to` keyword specify whether the `<coordinate-pair>` point is "relative" or "absolute", respectively.

    - `<line-command>`: Specified as `line [by | to] <coordinate-pair>`. This command adds a [LineTo command](/en-US/docs/web/svg/attribute/d#lineto_path_commands) to the list of shape commands. It draws a straight line from the command's starting point to its ending point. The `by`or `to` keyword specify whether the ending point specified by `<coordinate-pair>` is "relative" or "absolute", respectively.

    - `<hv-line-command>`: Specified as `[hline | vline] [by | to] <length-percentage>`. This command adds a horizontal (`hline`) or vertical (`vline`) [LineTo command](/en-US/docs/web/svg/attribute/d#lineto_path_commands) to the list of shape commands. It draws a horizontal or vertical line from the command's starting point to its ending point. The `by`or `to` keyword determine the "relative" or "absolute" ending point, respectively. This command is equivalent to `<line-command>` with `<length-percentage>` providing the horizontal or vertical component.

    - `<curve-command>`: Specified as `curve [by | to] <coordinate-pair> via <coordinate-pair> [<coordinate-pair>]`. This command adds a [Bézier curve command](/en-US/docs/web/svg/attribute/d#cubic_bézier_curve_commands) to the list of shape commands. The `by`or `to` keyword determine whether the ending point of the curve, specified by the first `<coordinate-pair>`, is "relative" or "absolute", respectively.

      The `via` keyword specifies the control points of the curve as one or two `<coordinate-pair>` values. If a single `<coordinate-pair>` is provided, the command draws a quadratic Bézier curve; if two `<coordinate-pair>`s are provided, the command draws a cubic Bézier curve.

    - `<smooth-command>`: Specified as `smooth [by | to] <coordinate-pair> [via <coordinate-pair>]`. This command adds a smooth [Bézier curve command](/en-US/docs/web/svg/attribute/d#cubic_bézier_curve_commands) to the list of shape commands. The `by`or `to` keyword determine whether the ending point of the curve, specified by the first `<coordinate-pair>`, is "relative" or "absolute", respectively.

      The `via` keyword can be optionally included to specify the control points of the curve through `<coordinate-pair>`. If `via <coordinate-pair>` is omitted, the command draws a smooth quadratic curve; if it is provided, the command draws a smooth cubic curve.

    - `<arc-command>`: Specified as `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`. This command adds an elliptical arc curve command to the list of shape commands. It draws an elliptical arc between a starting point and an ending point. The `by`or `to` keyword determine whether the ending point of the curve, specified by the first `<coordinate-pair>`, is "relative" or "absolute", respectively.

      The elliptical arc curve command defines two possible ellipses, which intersect both the starting and ending points, and each can be traced in either direction, resulting in four possible arcs. The `of` keyword specifies the size of the ellipse fom which the arc is taken. The first `<length-percentage>` provides the horizontal radius of the ellipse, and the second provides the vertical radius. If only one `<length-percentage>` is provided, the same value is used for both the radii. The following parameters help to choose from a possibility of four arcs:

      - `<arc-sweep>`: Indicates whether the desired arc is the one traced around the ellipse clockwise (`cw`) or counter-clockwise (`ccw`). If omitted, this defaults to `ccw`.
      - `<arc-size>`: Indicates whether the desired arc is the larger (`large`) or smaller (`small`) of the two arcs. If omitted, this defaults to `small`.
      - `<angle>`: Specifies the angle, in degrees, by which to rotate the ellipse relative to the x axis. A positive angle rotates the ellipse clockwise, and a negative angle rotates it counter-clockwise. If omitted, this defaults to `0deg`.

      > **Note:** If the starting and ending points of the arc lie on exactly opposite sides of the ellipse, there is only one possible ellipse and two possible arcs. In this case, `<arc-sweep>` specifies the arc to choose, and `<arc-size>` has no effect.

    - `close`

## Description

The `shape()` function allows you to define complex shapes. It is similar to the `{{cssxref("path","path()")}}` function in several ways:

- The `<fill-rule>` parameter in the `shape()` function works exactly like the same parameter in the `path()` function.
- The `shape()` function requires specifying one or more `<shape-command>`s, where each command uses an underlying [path command](/en-US/docs/web/svg/attribute/d#path_commands), such as MoveTo, LineTo, and ClosePath.

However, `shape()` offers several advantages over using `path()`:

- Unlike `path()`, which uses the [SVG path](/en-US/docs/web/SVG/Element/path) syntax, `shape()` uses standard CSS syntax, making it easier to create and modify shapes directly in your stylesheet.
- The `path()` function inherits some limitations from SVG, such as requiring shapes to be written as a single string and limiting units to `px`. The `shape()` function, on the other hand, supports a variety of CSS units, including percentages, `rem`, and `em`.
- `shape()` also allows the use of CSS math functions, providing more versatility when defining shapes.

## Formal syntax

{{csssyntax}}

## Examples

### Examples of correct values for path()

```css
path("M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
path(evenodd,"M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
```

### Use as the value of offset-path

The `path()` function is used to create a path for the item to travel round. Changing any of the values will cause the path to not neatly run round the circle.

{{EmbedGHLiveSample("css-examples/path/offset-path.html", '100%', 960)}}

### Modify the value of the SVG path d attribute

The `path()` can be used to modify the value of the SVG [`d` attribute](/en-US/docs/web/svg/attribute/d), which can also be set to `none` in your CSS.

The "V" symbol will flip vertically when you hover over it, if `d` is supported as a CSS property.

#### CSS

```css
html,
body,
svg {
  height: 100%;
}

/* This path is displayed on hover*/
#svg_css_ex1:hover path {
  d: path("M20,80 L50,20 L80,80");
}
```

#### HTML

```html
<svg id="svg_css_ex1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="red" d="M20,20 L50,80 L80,20" />
</svg>
```

#### Result

{{EmbedLiveSample('Modify the value of the SVG path d attribute', '100%', 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("clip-path")}}
- {{cssxref("offset-path")}}
- [CSS shapes](/en-US/docs/Web/CSS/CSS_shapes) module
- [Overview of shapes](/en-US/docs/Web/CSS/CSS_shapes/Overview_of_shapes) guide
- [Basic shapes](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes) guide
- [The SVG path syntax: An illustrated guide](https://css-tricks.com/svg-path-syntax-illustrated-guide/) on CSS-Tricks (2021)
