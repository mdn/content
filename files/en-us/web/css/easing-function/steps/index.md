---
title: steps()
slug: Web/CSS/easing-function/steps
page-type: css-function
browser-compat: css.types.easing-function.steps
---

{{CSSRef}}

The **`steps()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) defines a transition that divides the input time into a specified number of intervals that are equal in length. This subclass of step functions are sometimes also called _staircase functions_.

## Syntax

```css
/* Different intervals */
steps(2, end)
steps(4, jump-end)
steps(12, end)

/* Different jump positions */
steps(3, jump-start)
steps(3, jump-end)
steps(3, jump-none)
steps(3, jump-both)
```

### Parameters

The function accepts the following parameters:

- `<integer>`

  - : Represents the number of equidistant intervals or 'steps'.
    It must be a positive integer greater than `0` unless the second parameter is `jump-none`, in which case, it must be a positive integer greater than `1`.

- `<step-position>`

  - : Specifies when the jump between values occurs.
    If omitted, it defaults to `end`.
    The possible keyword values include:

    - `jump-start` or `start`
      - : Indicates that the first step happens when the animation begins.
    - `jump-end` or `end`
      - : Indicates that the last step happens when the animation ends.
    - `jump-none`
      - : Indicates neither early nor late jumps happen.
    - `jump-both`
      - : Indicates both early and late jumps happen.

## Description

The `steps()` function divides the animation duration into equal intervals.
For example, `steps(4, end)` divides the animation into four equal intervals, with values changing at the end of each interval except the last change which occurs at the animation's end.

If an animation contains multiple segments, the specified number of steps applies to each segment. For example, if an animation has three segments and uses `steps(2)`, there will be six steps in total, with two steps per segment.

The following image shows the affect of different `<step-position>` values when the jumps occur:

```css
steps(2, jump-start)  /* Or steps(2, start) */
steps(4, jump-end)    /* Or steps(4, end) */
steps(5, jump-none)
steps(3, jump-both)
```

![Graphs of Input progress to Output progress, of which steps(2, jump-start) shows horizontal lines extending 0.5 unit from (0, 0.5) and (0.5, 1), respectively, with empty circles at the origin and (0.5, 0.5); steps(4, jump-end) shows horizontal lines extending 0.25 unit from (0, 0), (0.25, 0.25), (0.5, 0.5), and (0.75, 0.75), respectively, with unfilled circles at (0.25, 0), (0.5, 0.25), and (0.75, 0.5), and a solid circle at (1, 1); steps(5, jump-none) shows horizontal lines extending 0.2 unit from (0, 0), (0.2, 0.25), (0.4, 0.5), (0.6, 0.75), and (0.8, 1), respectively, with unfilled circles at (0.2, 0), (0.4, 0.25), (0.6, 0.5), and (0.8, 0.75); steps(3, jump-both) shows horizontal lines extending 1/3 unit from (0, 0.25), (1/3, 0.5), and (2/3, 0.75),respectively , with a solid circle at (1, 1) and unfilled circles at the origin, (1/3, 0.25), (2/3, 0.5), and (1, 0.75).](jump.svg)

## Formal syntax

{{csssyntax}}

## Examples

### Using the steps() function

The following `steps()` functions are valid:

```css example-good
/* Five steps with jump at the end */
steps(5, end)

/* Two steps with jump at the start */
steps(2, start)

/* Using default second parameter */
steps(2)
```

The following `steps()` functions are invalid:

```css example-bad
/* First parameter must be an <integer>, not a real value */
steps(2.0, jump-end)

/* Number of steps must be positive */
steps(-3, start)

/* Number of steps must be at least 1 */
steps(0, jump-none)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other easing functions: {{cssxref("easing-function/cubic-bezier", "cubic-bezier()")}} and {{cssxref("easing-function/linear", "linear()")}}
- [Step function](https://en.wikipedia.org/wiki/Step_function) on Wikipedia
