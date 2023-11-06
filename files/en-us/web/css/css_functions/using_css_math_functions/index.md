---
title: Using CSS math functions
slug: Web/CSS/CSS_Functions/Using_CSS_math_functions
page-type: guide
---

{{CSSRef}}

**CSS math functions** allow a property value - such as the `height`, `animation-duration`, or `font-size` of an element - to be written as a mathematical expression.

Without using any math, the built-in [CSS units](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) like `rem`, `vw`, and `%` are often flexible enough to style HTML elements to achieve a particular user experience.

However, there are cases where we might feel limited by expressing an element's style using a single value and unit. Consider the following examples:

1. We want to set the height of a content area to be "the height of the viewport minus the height of a navbar."
2. We want to add the width of two elements together to define the width of a third element.
3. We want to prevent a variable font-size of some text from growing beyond a certain size.

In all of these cases, we need to rely on math to achieve the desired outcomes. One solution could be to rely on mathematical functions defined by JavaScript, and dynamically set element styles based on results calculated by our scripts.

In many instances, including in the examples above, **we can instead utilize math functions built directly into CSS**. This solution is often simpler to implement and faster for the browser to execute than using JavaScript.

In total, developers can use a combination of [nearly two dozen CSS math functions](/en-US/docs/Web/CSS/CSS_Functions#math_functions) in their stylesheets. In this guide, we'll exemplify four of the more commonly-used, and introduce those more advanced.

## `calc()`: Basic math operations

In the first two of our three examples above, we want to set the style of an element according to the result of an addition or subtraction operation. This is exactly one of the use cases for {{CSSxRef("calc", "calc()")}}.

The **`calc()`** function lets you specify CSS property values using **addition, subtraction, multiplication, and division**. It is often used to combine two CSS values that have different units, such as `%` and `px`.

The `calc()` math function takes a mathematical expression as a parameter and returns the result of that expression, e.g.:

```css
property: calc(expression);
```

{{EmbedInteractiveExample("pages/css/function-calc.html")}}

## `min()`: Finding the minimum value in a set

There are cases where we don't want the value of a CSS property to exceed a certain number. Say, for example, we want the width of our content container to be the smaller of "the full width of our screen" and "500 pixels." In those cases, we can use the CSS math function {{CSSxRef("min", "min()")}}.

The `min()` math function takes a set of comma-separated values as arguments and returns the smallest of those values, e.g.:

```css
property: min(<first value>, <second value>, <third value>, ...);
```

This function is often used to compare two CSS values that have different units, such as `%` and `px`.

{{EmbedInteractiveExample("pages/css/function-min-01.html")}}

## `max()`: Finding the maximum value in a set

Similar to `min()`, sometimes we don't want the value of a CSS property to go below a certain number. For example, we might want the width of our content container to be the _larger_ of "the full width of our screen" and "500 pixels." In those cases, we can use the CSS math function {{CSSxRef("max", "max()")}}.

The `max()` math function takes a set of comma-separated values as arguments and returns the largest of those values, e.g.:

```css
property: max(<first value>, <second value>, <third value>, ...);
```

This function is often used to compare two CSS values that have different units, such as `%` and `px`.

Notice the similarities and differences between the examples for `min()` and `max()`.

{{EmbedInteractiveExample("pages/css/function-max-01.html")}}

## `clamp()`: Constraining a value between two values

We can combine the functions of `min()` and `max()` by using {{CSSxRef("clamp", "clamp()")}}. The `clamp()` math function takes a minimum value, the value to be clamped, and the maximum value as arguments, e.g.:

```css
property: clamp(<minimum value>, <value to be clamped>, <maximum value>);
```

This function is often used to compare two CSS values that have different units, such as `%` and `px`.

{{EmbedInteractiveExample("pages/css/function-clamp-01.html")}}

## Advanced CSS Math Functions

When laying out and styling DOM elements, the four basic math functions {{CSSxRef("calc", "calc()")}}, {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}}, and {{CSSxRef("clamp", "clamp()")}} are often sufficient. However, for advanced uses like 3D visualizations, you may consider using:

- [Stepped value functions](/en-US/docs/Web/CSS/CSS_Functions#stepped_value_functions)
  - {{CSSxRef("round", "round()")}}: calculates a **value given a rounding strategy**
  - {{CSSxRef("mod", "mod()")}}: calculates the **remainder** of a division operation with the **same sign as the divisor**
  - {{CSSxRef("rem", "rem()")}}: calculates the **remainder** of a division operation with the **same sign as the dividend**
- [Trigonometric functions](/en-US/docs/Web/CSS/CSS_Functions#trigonometric_functions)
  - {{CSSxRef("sin", "sin()")}}: calculates the **trigonometric sine** of a number
  - {{CSSxRef("cos", "cos()")}}: calculates the **trigonometric cosine** of a number
  - {{CSSxRef("tan", "tan()")}}: calculates the **trigonometric tangent** of a number
  - {{CSSxRef("asin", "asin()")}}: calculates the **trigonometric inverse** sine of a number
  - {{CSSxRef("acos", "acos()")}}: calculates the **trigonometric inverse** cosine of a number
  - {{CSSxRef("atan", "atan()")}}: calculates the **trigonometric inverse** tangent of a number
  - {{CSSxRef("atan2", "atan2()")}}: calculates the **trigonometric inverse** tangent given two numbers
- [Exponential functions](/en-US/docs/Web/CSS/CSS_Functions#exponential_functions)
  - {{CSSxRef("pow", "pow()")}}: calculates a number **raised to the power** of another number
  - {{CSSxRef("sqrt", "sqrt()")}}: calculates the **square root** of a number
  - {{CSSxRef("hypot", "hypot()")}}: calculates the **square root of the sum of the squares** of the given numbers
  - {{CSSxRef("log", "log()")}}: calculates the **logarithm** of a number (with `e` as the default base)
  - {{CSSxRef("exp", "exp()")}}: calculates **`e` raised to the power** of another number
- [Sign functions](/en-US/docs/Web/CSS/CSS_Functions#sign-related_functions)
  - {{CSSxRef("abs", "abs()")}}: calculates the **absolute value** of a number
  - {{CSSxRef("sign", "sign()")}}: calculates the **sign (positive, negative, or zero)** of a number

## Final thoughts

- You can use CSS math functions to create responsive user interfaces without writing any JavaScript code.
- CSS math functions can sometimes be used instead of [CSS media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) to define layout breakpoints.
- In 2023, members of the Interop Project [selected "CSS Math Functions" as a focus area of improvement](https://github.com/web-platform-tests/interop/blob/main/2023/README.md#css-math-functions). This means that browser vendors are working together to ensure that CSS math functions perform the same across browsers and devices.
