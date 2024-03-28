---
title: steps()
slug: Web/CSS/easing-function/steps
page-type: css-function
browser-compat: css.types.easing-function
---

{{CSSRef}}

The **`steps()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) defines a [step function](https://en.wikipedia.org/wiki/Step_function) that divides the domain of output values in equidistant steps. This subclass of step functions are sometimes also called _staircase functions_.

{{EmbedInteractiveExample("")}}

## Syntax

```css
/* steps function and keywords */
/* steps(<number-of-steps>, <direction>) */
steps(4, end)
steps(10, jump-both)
step-start
step-end
```

### Parameters

### Return value

- ``
  - :

```css

```

## Description

These are a few examples illustrating the `steps()` function:

```css
steps(2, jump-start) /* Or steps(2, start) */
steps(4, jump-end) /* Or steps(4, end) */
steps(5, jump-none)
steps(3, jump-both)
```

![Graphs of "Input progress" to "Output progress", of which "steps(2, jump-start)" shows horizontal lines extending 0.5 unit from (0, 0.5) and (0.5, 1), respectively, with empty circles at the origin and (0.5, 0.5); "steps(4, jump-end)" shows horizontal lines extending 0.25 unit from (0, 0), (0.25, 0.25), (0.5, 0.5), and (0.75, 0.75), respectively, with unfilled circles at (0.25, 0), (0.5, 0.25), and (0.75, 0.5), and a solid circle at (1, 1); "steps(5, jump-none)" shows horizontal lines extending 0.2 unit from (0, 0), (0.2, 0.25), (0.4, 0.5), (0.6, 0.75), and (0.8, 1), respectively, with unfilled circles at (0.2, 0), (0.4, 0.25), (0.6, 0.5), and (0.8, 0.75); "steps(3, jump-both)" shows horizontal lines extending 1/3 unit from (0, 0.25), (1/3, 0.5), and (2/3, 0.75),respectively , with a solid circle at (1, 1) and unfilled circles at the origin, (1/3, 0.25), (2/3, 0.5), and (1, 0.75).](jump.svg)

Each of the keywords [`step-start`](#step-start) and [`step-end`](#step-end) is equivalent to a specific `steps()` value.

## Formal syntax

{{csssyntax}}

## Examples

### Using the steps() function

These easing functions are valid:

```css example-good
/* There are 5 treads, the last one happens
   right before the end of the animation. */
steps(5, end)

/* A two-step staircase, the first one happening
   at the start of the animation. */
steps(2, start)

/* The second parameter is optional. */
steps(2)
```

> **Note:** If the animation contains multiple stops, then the steps specified in the `steps()` function will apply to each section. Therefore, an animation with three segments and `steps(2)` will contain 6 steps in total, 2 per segment.

These easing functions are invalid:

```css example-bad
/* The first parameter must be an <integer> and
   cannot be a real value, even if it is equal to one. */
steps(2.0, jump-end)

/* The amount of steps must be non-negative. */
steps(-3, start)

/* There must be at least one step. */
steps(0, jump-none)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

-
