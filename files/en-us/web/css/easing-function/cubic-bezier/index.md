---
title: cubic-bezier()
slug: Web/CSS/easing-function/cubic-bezier
page-type: css-function
browser-compat: css.types.easing-function
---

{{CSSRef}}

The **`cubic-bezier()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) defines a cubic [Bézier curve](/en-US/docs/Glossary/Bezier_curve). The easing functions in the cubic-bezier subset of easing functions are often called "smooth" easing functions because they can be used to smooth down the start and end of the {{Glossary("interpolation")}}. They correlate an input progress to an output progress, both expressed as {{cssxref("&lt;number&gt;")}}s. For these values, `0.0` represents the initial state, and `1.0` represents the final state.

## Syntax

```css
/* cubic-bezier function and keywords */
/* cubic-bezier(<x1>, <y1>, <x2>, <y2>) */
cubic-bezier(0.25, 0.1, 0.25, 1)
ease
ease-in
ease-out
ease-in-out
```

### Parameters

### Return value

- ``
  - :

```css

```

## Description

![Graph of "Input progress" to "Output progress" showing an "S"-shaped line curving from the origin to (1, 1) with the Bezier control points P1(0.1, 0.6) and P2(0.7, 0.2).](cubic-bezier.svg)

A cubic Bézier curve is defined by four points: P0, P1, P2, and P3. The points P0 and P3 represent the start and the end of the curve. In CSS, these points are fixed as the coordinates progress (the abscissa the input progress, the ordinate the output progress). P0 is `(0, 0)` and represents the initial progress and the initial state. P3 is `(1, 1)` and represents the final progress and the final state.

Not all cubic Bézier curves are suitable as easing functions because not all are [mathematical functions](https://en.wikipedia.org/wiki/Function_%28mathematics%29); i.e., curves that for a given abscissa have zero or one value. With P0 and P3 fixed as defined by CSS, a cubic Bézier curve is a function, and is therefore valid, if and only if the abscissas of P1 and P2 are both in the `[0, 1]` range.

Cubic Bézier curves with the P1 or P2 ordinate outside the `[0, 1]` range can cause the value to go farther than the final state and then return. In animations, for some properties, such as {{cssxref("left")}} or {{cssxref("right")}}, this creates a kind of "bouncing" effect.

![Graphs of the easing function "cubic-bezier(0.3, 0.2, 0.2, 1.4)", one of which shows the output progress going above 1 starting from a certain input progress, the other shows the output progress reaching and then staying at 1.](cubic-bezier_out_of_range.svg)

However, certain properties will restrict the output if it goes outside an allowable range. For example, a color component greater than `255` or smaller than `0` in {{CSSXref("color_value/rgb", "rgb()")}} will be clipped to the closest allowed value (`255` and `0`, respectively). Some `cubic-bezier()` values exhibit this property.

When you specify an invalid cubic Bézier curve, CSS ignores the whole property.

Each of the keywords [`ease`](#ease), [`ease-in`](#ease-in), [`ease-out`](#ease-out), and [`ease-in-out`](#ease-in-out) is equivalent to a specific `cubic-bezier()` value.

## Formal syntax

{{csssyntax}}

## Examples

### Using the cubic-bezier() function

These cubic Bézier curves are valid for use in CSS:

```css example-good
/* The canonical Bézier curve with four <number> in the [0,1] range */
cubic-bezier(0.1, 0.7, 1.0, 0.1)

/* Using <integer> is valid because any <integer> is also a <number>. */
cubic-bezier(0, 0, 1, 1)

/* Negative values for ordinates are valid, leading to bouncing effects. */
cubic-bezier(0.1, -0.6, 0.2, 0)

/* Values greater than 1.0 for ordinates are also valid. */
cubic-bezier(0, 1.1, 0.8, 4)
```

These cubic Bézier curves definitions are invalid:

```css example-bad
/* Though the animated output type may be a color,
   Bézier curves work with numerical ratios. */
cubic-bezier(0.1, red, 1.0, green)

/* Abscissas must be in the [0, 1] range or
   the curve is not a function of time. */
cubic-bezier(2.45, 0.6, 4, 0.1)

/* The two points must be defined, there is no default value. */
cubic-bezier(0.3, 2.1)

/* Abscissas must be in the [0, 1] range or
   the curve is not a function of time. */
cubic-bezier(-1.9, 0.3, -0.2, 2.1)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [cubic-bezier](https://cubic-bezier.com/)
