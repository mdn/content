---
title: shape()
slug: Web/CSS/basic-shape/shape
page-type: css-function
status:
  - experimental
browser-compat: css.types.basic-shape.shape
---

{{CSSRef}}{{SeeCompatTable}}

The **`shape()`** [CSS function](/en-US/docs/Web/CSS/CSS_Functions) is used to define a shape for the {{cssxref("clip-path")}} and {{cssxref("offset-path")}} properties. It combines an initial starting point with a series of shape commands that define the path of the shape. The `shape()` function is a member of the {{cssxref("&lt;basic-shape&gt;")}} data type.

## Syntax

```css
/* <fill-rule> */
clip-path: shape(nonzero from 0 0, line to 10px 10px);

/* <move-command>, <line-command>, and close */
offset-path: shape(from 10px 10px, move by 10px 5px, line by 20px 40%, close);

/* <hvline-command> */
offset-path: shape(from 10px 10px, hline by 50px, vline to 5rem);

/* <curve-command> */
offset-path: shape(from 10px 10px, curve to 80px 80px via 160px 1px 20% 16px);

/* <smooth-command> */
offset-path: shape(from 10px 10px, smooth to 100px 50pt);

/* <arc-command> */
offset-path: shape(
  from 5% 0.5rem,
  arc to 80px 1pt of 10% ccw large rotate 25deg
);

/* Using a CSS math function */
offset-path: shape(
  from 5px -5%,
  hline to 50px,
  vline by calc(0% + 160px),
  hline by 70.5px,
  close,
  vline by 60px
);

clip-path: shape(
  evenodd from 10px 10px,
  curve to 60px 20% via 40px 0,
  smooth to 90px 0,
  curve by -20px 60% via 10% 40px 20% 20px,
  smooth by -40% -10px via -10px 70px
);
```

### Parameters

- [`<fill-rule>`](/en-US/docs/Web/SVG/Attribute/fill-rule) {{optional_inline}}

  - : Specifies how overlapping regions of a shape should be filled. The possible values include:

    - `nonzero`: A point is considered inside the shape if a ray drawn from the point crosses more left-to-right than right-to-left path segments, resulting in a non-zero count. This is the default value when `<fill-rule>` is omitted.

    - `evenodd`: A point is considered to be inside the shape if a ray drawn from the point crosses an odd number of path segments. This means that for each time the ray enters the shape, it has not exited an equal number of times, indicating an odd count of entries without corresponding exits.

    > **Warning:** `<fill-rule>` is not supported in {{cssxref("offset-path")}} and using it invalidates the property.

- `from <coordinate-pair>`

  - : Defines the starting point of the first `<shape-command>` as a pair of coordinates that are measured from the top-left corner of the [reference box](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box). The coordinates are specified as space-separated `<x> <y>` {{cssxref("&lt;length-percentage&gt;")}} values representing the left offset and top offset, respectively. Percentage values are relative to the width and height of the element's reference box, respectively. Add a comma after this parameter.

- `<shape-command>`

  - : Specifies a list of one or more comma-separated commands that define the shape, using syntax similar to [SVG path commands](/en-US/docs/Web/SVG/Attribute/d#path_commands). Commands include `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>`, and `close`. Each command's starting point is the previous command's ending point, with the first point of the shape defined by the [`from <coordinate-pair>`](#from_coordinate-pair) parameter.

    The syntax of most shape commands is a keyword providing a directive, such as `move` or `line`, followed by the `by` or `to` keyword, and a set of coordinates.

    `by`: Indicates that the `<coordinate-pair>` is relative to the command's starting point (a "relative" value).

    `to`: Indicates that the `<coordinate-pair>` is relative to the top-left corner of the reference box (an "absolute" value).

    > [!NOTE]
    > If a coordinate in a `<coordinate-pair>` is specified as a percentage, the value is calculated relative to the respective width or height of the reference box.

    The following `<shape-command>`s can be specified: `<move-command>`, `<line-command>`, `<hv-line-command>`, `<curve-command>`, `<smooth-command>`, `<arc-command>`, and `close`.

    `<move-command>`: Specified as `move [by | to] <coordinate-pair>`. This command adds a [MoveTo command](/en-US/docs/Web/SVG/Attribute/d#moveto_path_commands) to the list of shape commands. It draws nothing. Rather, it specifies the starting position for the next command. The `by` or `to` keyword specifies whether the `<coordinate-pair>` point is relative or absolute, respectively. If the `<move-command>` follows the `close` command, it identifies the starting point of the next shape or subpath.

    `<line-command>`: Specified as `line [by | to] <coordinate-pair>`. This command adds a [LineTo command](/en-US/docs/Web/SVG/Attribute/d#lineto_path_commands) to the list of shape commands. It draws a straight line from the command's starting point to its ending point. The `by` or `to` keyword specifies whether the ending point specified by `<coordinate-pair>` is relative or absolute, respectively.

    `<hv-line-command>`: Specified as `[hline | vline] [by | to] <length-percentage>`. This command adds a horizontal (`hline`) or vertical (`vline`) [LineTo command](/en-US/docs/Web/SVG/Attribute/d#lineto_path_commands) to the list of shape commands. With `hline`, a horizontal line is drawn from the command's starting point `to` or `by` the `x` position defined by `<length-percentage>`. With `vline`, a vertical line is drawn from the command's starting point `to` or `by` the `y` position defined by `<length-percentage>`. The `by` or `to` keyword determines the relative or absolute ending point, respectively. This command is equivalent to `<line-command>` with one coordinate value set by the single `<length-percentage>` and the other coordinate value remaining unchanged from its starting command.

    `<curve-command>`: Specified as `curve [by | to] <coordinate-pair> via <coordinate-pair> [<coordinate-pair>]`. This command adds a [Bézier curve command](/en-US/docs/Web/SVG/Attribute/d#cubic_bézier_curve) to the list of shape commands. The `by` or `to` keyword determines whether the ending point of the curve, specified by the first `<coordinate-pair>`, is relative or absolute, respectively. The `via` keyword specifies the control points of the Bézier curve.

    - If only a single `<coordinate-pair>` is provided, the command draws a [quadratic Bézier curve](/en-US/docs/Web/SVG/Attribute/d#quadratic_bézier_curve), which is defined by three points (the start point, control point, and end point).
    - If two `<coordinate-pair>` values are provided, the command draws a cubic Bézier curve, which is defined by four points (the start point, two control points, and the end point).

    `<smooth-command>`: Specified as `smooth [by | to] <coordinate-pair> [via <coordinate-pair>]`. This command adds a smooth [Bézier curve command](/en-US/docs/Web/SVG/Attribute/d#cubic_bézier_curve) to the list of shape commands. The `by` or `to` keyword determines whether the ending point of the curve, specified by the first `<coordinate-pair>`, is relative or absolute, respectively.

    - If `via <coordinate-pair>` is omitted, the command draws a smooth quadratic Bézier curve, which uses the previous control point and the current endpoint to define the curve.
    - If the optional `via` keyword is included, it specifies the control points of the curve through `<coordinate-pair>`, drawing a smooth cubic Bézier curve defined by the previous control point, the current control point, and the current endpoint.

    Smooth curves ensure a continuous transition from the shape, while quadratic curves do not. Smooth quadratic curves maintain a seamless transition using a single control point, whereas smooth cubic curves provide a more refined transition using two control points.

    `<arc-command>`: Specified as `arc [by | to] <coordinate-pair> of <length-percentage> [<length-percentage>] [<arc-sweep> | <arc-size> | rotate <angle>]`. This command adds an [elliptical arc curve command](/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve) to the list of shape commands. It draws an elliptical arc between a starting point and an ending point. The `by` or `to` keyword determines whether the ending point of the curve, specified by the first `<coordinate-pair>`, is relative or absolute, respectively.

    The elliptical arc curve command defines two possible ellipses, which intersect both the starting and ending points, and each can be traced clockwise or counterclockwise, resulting in four possible arcs depending on the arc size, direction, and angle. The `of` keyword specifies the size of the ellipse from which the arc is taken: the first `<length-percentage>` provides the horizontal radius of the ellipse, and the second `<length-percentage>` provides the vertical radius.

    Specify the following parameters to choose which of the four arcs to use:

    - `<arc-sweep>`: Indicates whether the desired arc is the one traced around the ellipse clockwise (`cw`) or counterclockwise (`ccw`). If omitted, this defaults to `ccw`.
    - `<arc-size>`: Indicates whether the desired arc is the larger (`large`) or smaller (`small`) of the two arcs. If omitted, this defaults to `small`.
    - `<angle>`: Specifies the angle, in degrees, by which to rotate the ellipse relative to the x-axis. A positive angle rotates the ellipse clockwise, and a negative angle rotates it counterclockwise. If omitted, this defaults to `0deg`.

    Special situations are handled as follows:

    - If only one `<length-percentage>` is provided, the same value is used for both the horizontal and vertical radii, effectively creating a circle. In this case, `<arc-size>` and `<angle>` have no affect.
    - If either radius is zero, the command is equivalent to a `<line-command>` to the ending point.
    - If either radius is negative, its absolute value is used instead.
    - If the horizontal and vertical radii don't describe an ellipse large enough to intersect both the starting point and ending points (after rotation by the specified `<angle>`), the radii are scaled up uniformly until the ellipse is just large enough to intersect both points.
    - If the starting and ending points of the arc lie on exactly opposite sides of the ellipse, there is only one possible ellipse and two possible arcs. In this case, `<arc-sweep>` specifies the arc to choose, and `<arc-size>` has no effect.

    `close`: Adds a [ClosePath command](/en-US/docs/Web/SVG/Attribute/d#closepath) to the list of shape commands, drawing a straight line from the current position (end of the last command) to the first point in the path defined in the `from <coordinate-pair>` parameter. To close the shape without drawing a line, include a `<move-command>` with the originating coordinates before the close command. If the `close` command is immediately followed by a `<move-command>`, it defines the starting point of the next shape or subpath.

## Description

The `shape()` function allows you to define complex shapes. It is similar to the {{cssxref("basic-shape/path","path()")}} shape function in several ways:

- The `<fill-rule>` parameter in the `shape()` function works exactly like the same parameter in the `path()` function.
- The `shape()` function requires specifying one or more `<shape-command>`s, where each command uses an underlying [path command](/en-US/docs/Web/SVG/Attribute/d#path_commands), such as [MoveTo](/en-US/docs/Web/SVG/Attribute/d#moveto_path_commands), [LineTo](/en-US/docs/Web/SVG/Attribute/d#lineto_path_commands), and [ClosePath](/en-US/docs/Web/SVG/Attribute/d#closepath).

However, `shape()` offers several advantages over using `path()`:

- `shape()` uses standard CSS syntax, making it easier to create and modify shapes directly in your stylesheet. In comparison, `path()` uses the [SVG path](/en-US/docs/Web/SVG/Element/path) syntax, which is less intuitive for those not familiar with SVG.
- `shape()` supports a variety of CSS units, including percentages, `rem`, and `em`. `path()`, on the other hand, defines shapes as a single string and limits units to `px`.
- `shape()` also allows the use of CSS math functions, like {{cssxref("calc")}}, {{cssxref("max")}}, and {{cssxref("abs")}}, providing more versatility when defining shapes.

## Formal syntax

{{csssyntax}}

## Examples

### Using `shape()` to define a path

This example demonstrates how the `shape()` function can be used in the {{cssxref("offset-path")}} property to define the shape of the path an element can follow.

The first shape, `shape1`, follows a cubic Bézier curved path defined by the `curve to` command. Next, the `close` command draws a straight line from the curve's end point back to the initial point defined in the `from` command. Finally, `shape1` moves to its new position at `0px 150px` and then proceeds along a horizontal line.

The second shape, `shape2`, initially follows a horizontal line, then moves back to its starting position at `50px 90px`. Next, it follows a vertical line before closing the path back to the initial point.

Both shapes start with their original colors and gradually transition to `hotpink` by the end of the `move` animation, reverting to their initial color as the animation restarts. This cyclic color change provides you a visual cue about the animation's progression and restart.

```html hidden
<div class="container">
  Using <code>&lt;curve-command&gt;</code>
  <div class="shape shape1">>></div>
</div>

<div class="container">
  Using <code>&lt;move-command&gt;</code> and
  <code>&lt;hvline-command&gt;</code>
  <div class="shape shape2">>></div>
</div>
```

```css hidden
body {
  align-items: center;
  justify-content: center;
  display: flex;
}

.container {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 250px;
  border: 2px dotted green;
  margin: 20px;
}

@supports not (offset-path: shape(from 0 0, move to 0 0)) {
  .container {
    display: none;
  }
  body::after {
    content: "Your browser doesn't support the `shape()` function yet.";
  }
}
```

```css
.shape {
  width: 50px;
  height: 50px;
  background: #2bc4a2;
  position: absolute;
  text-align: center;
  line-height: 50px;
  animation: move 6s infinite linear;
}

.shape1 {
  offset-path: shape(
    from 30% 60px,
    curve to 180px 180px via 90px 190px,
    close,
    move by 0px 150px,
    hline by 40%
  );
}

.shape2 {
  offset-path: shape(
    from 50px 90px,
    hline to 8em,
    move to 50px 90px,
    vline by 20%,
    close
  );
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
    background-color: hotpink;
  }
}
```

#### Result

{{EmbedLiveSample('Using shape() to define a path', '100%', 300)}}

### Using `shape()` to define the visible part of an element

This example demonstrates how the `shape()` function can be used in the {{cssxref("clip-path")}} property to create different shapes for the clipping region. The first shape (`shape1`) uses a triangle defined by straight lines. The second shape (`shape2`) includes curves and smooth transitions; it also illustrates the use of the `<move-command>` after the `close` command, which adds a rectangular shape to the clipping region.

```html hidden
<div class="container">
  <div class="shape shape1"></div>
</div>

<div class="container">
  <div class="shape shape2"></div>
</div>
```

```css hidden
body {
  align-items: center;
  justify-content: center;
  display: flex;
}

.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 20px;
  background-color: lightgray;
}

@supports not (clip-path: shape(from 0 0, move to 0 0)) {
  .container {
    display: none;
  }
  body::after {
    content: "Your browser doesn't support the `shape()` function yet.";
  }
}
```

```css
.shape {
  width: 100%;
  height: 100%;
  background: #2bc4a2;
  position: absolute;
  text-align: center;
  line-height: 50px;
}

/* Triangular clipping region */
.shape1 {
  clip-path: shape(from 0% 0%, line to 100% 0%, line to 50% 100%, close);
}

/* Clipping region with curves and smooth transitions and a box */
.shape2 {
  clip-path: shape(
    from 10px 10px,
    curve to 60px 20% via 40px 0,
    smooth to 90px 0,
    curve by -20px 60% via 10% 40px 20% 20px,
    smooth by -40% -10px via -10px 70px,
    close,
    move to 100px 100px,
    hline by 50px,
    vline by 50px,
    hline by -50px,
    close
  );
}
```

#### Result

{{EmbedLiveSample('Using shape() to define the visible part of an element', '100%', 300)}}

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
