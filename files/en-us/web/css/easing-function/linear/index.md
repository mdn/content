---
title: linear()
slug: Web/CSS/easing-function/linear
page-type: css-function
browser-compat: css.types.easing-function
---

{{CSSRef}}

The **`linear()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) creates a piecewise linear easing, allowing the approximation of complex animations and transitions by interpolating linearly between the specified points. The interpolation occurs at a constant rate from beginning to end. A typical use of the `linear()` function is to provide many points to approximate any curve.

{{EmbedInteractiveExample("")}}

## Syntax

```css
/* linear function and keyword */
/* linear(<point-list>) */
linear(1, -0.5, 0)
linear
```

### Parameters

### Return value

- ``
  - :

```css

```

## Description

For example, the `linear(0, 0.25, 1)` function has linear stops of `0`, `0.25`, and `1` as arguments. The animation or transition starts at point `0`, moves linearly to `0.25`, and then continues linearly to point `1`. Since no `<linear-stop-length>` percentage is specified, the same duration (50%) is used to go from `0` to `0.25` and from `0.25` to `1`.

![Graphs of "Input progress" to "Output progress", of which "linear(0, 0.25, 1)" shows a broken line connecting the origin, (0.5, 0.25), and (1, 1); and "linear(0, 0.25 75%, 1)" shows a broken line connecting the origin, (0.75, 0.25), and (1, 1).](linear_function.svg)

By default, the stops are equidistant. So if there are 5 stops, they will be at 0%, 25%, 50%, 75%, and 100% of the duration. You can use optional `<linear-stop-length>` percentage values to provide finer control, defining the start and/or length of each segment, allowing for a more controlled progression of the transition.

Consider an animation with a duration time of 100 seconds and a change of 100 pixels. Let's look at an example where the easing of the animation is specified: `linear(0, 0.25 75%, 1)`. In this case, the animation progresses to 25 pixels (25% of its total change) in the first 75 seconds (75% of the duration). The last 75 pixels are applied in the remaining 25 seconds of the animation. For the same animation, suppose the easing function is given instead as `linear(0, 0.5 25% 75%, 1)`. Here, the animation reaches 50 pixels (50% of its total change) in 25 seconds (25% of the duration) and remains there for 50 seconds (75% - 25% of the duration). Then the last 50 pixels are applied in the remaining 25 seconds of the duration. Note that `linear(0, 0.5 25% 75%, 1)` is equivalent to `linear(0, 0.5 25%, 0.5 75%, 1)`.

> **Note:** The [`linear`](#linear) keyword is equivalent to the easing function `linear(0, 1)`. While the `linear` keyword is always interpreted as-is, the function `linear(0, 1)` gets interpreted as `linear(0 0%, 1 100%)`.

## Formal syntax

{{csssyntax}}

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`linear()` easing generator](https://linear-easing-generator.netlify.app/)
