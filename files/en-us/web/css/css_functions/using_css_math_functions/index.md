---
title: Using CSS math functions
slug: Web/CSS/CSS_Functions/Using_CSS_math_functions
page-type: guide
---

{{CSSRef}}

**CSS math functions** allow a property value - such as the `height`, `animation-duration`, or `font-size` of an element - to be written as a mathematical expression.

Without using any math, the built-in [CSS units](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units) like `rem`, `vw`, and `%` are often flexible enough to style HTML elements to achieve a particular user experience.

However, there are cases where we might feel limited by expressing an element's style using a single value and unit. Consider the following examples:

1. We want to set the height of a content area to be "the height of the viewport minus the height of a navbar."
2. We want to add the width of two elements together to define the width of a third element.
3. We want to prevent a variable `font-size` of some text from growing beyond a certain size.

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

### `calc()` Example

Click on the play icon below to see the `calc()` example in the code playground and try it for yourself.

```html hidden
<div class="calc1">
  <code>width: calc(10px + 100px);</code>
</div>
<div class="calc2">
  <code>width: calc(2em * 5);</code>
</div>
<div class="calc3">
  <code>width: calc(100% - 32px);</code>
</div>
<div class="calc4">
  <code>width: calc(var(--predefined-width) - calc(16px * 2));</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
}

div > code {
  display: block;
  background-color: red;
  color: white;
  height: 48px;
}

.calc1 > code {
  /* Output width: `110px` */
  width: calc(10px + 100px);
}

.calc2 > code {
  /* Output width: `10em` */
  width: calc(2em * 5);
}

.calc3 > code {
  /* Output width: Depends on the container's width */
  width: calc(100% - 32px);
}

.calc4 > code {
  --predefined-width: 100%;
  /* Output width: Depends on the container's width */
  width: calc(var(--predefined-width) - calc(16px * 2));
}
```

{{EmbedLiveSample('calc_Example', '100%', 212) }}

## `min()`: Finding the minimum value in a set

There are cases where we don't want the value of a CSS property to exceed a certain number. Say, for example, we want the width of our content container to be the smaller of "the full width of our screen" and "500 pixels." In those cases, we can use the CSS math function {{CSSxRef("min", "min()")}}.

The `min()` math function takes a set of comma-separated values as arguments and returns the smallest of those values, e.g.:

```css
property: min(<first value>, <second value>, <third value>, ...);
```

This function is often used to compare two CSS values that have different units, such as `%` and `px`.

### `min()` Example

Click on the play icon below to see the `min()` example in the code playground and try it for yourself.

```html hidden
<div class="min1">
  <code>width: min(9999px, 50%);</code>
</div>
<div class="min2">
  <code>width: min(9999px, 100%);</code>
</div>
<div class="min3">
  <code>width: min(120px, 150px, 90%);</code>
</div>
<div class="min4">
  <code>width: min(80px, 90%);</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
}

div > code {
  display: block;
  background-color: darkblue;
  color: white;
  height: 48px;
}

.min1 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `50%` of the container's width */
  width: min(9999px, 50%);
}

.min2 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `100%` of the container's width */
  width: min(9999px, 100%);
}

.min3 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `120px` of the container's width */
  width: min(120px, 150px, 90%);
}

.min4 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `80px` of the container's width */
  width: min(80px, 90%);
}
```

{{EmbedLiveSample('min_Example', '100%', 212) }}

## `max()`: Finding the maximum value in a set

Similar to `min()`, sometimes we don't want the value of a CSS property to go below a certain number. For example, we might want the width of our content container to be the _larger_ of "the full width of our screen" and "500 pixels." In those cases, we can use the CSS math function {{CSSxRef("max", "max()")}}.

The `max()` math function takes a set of comma-separated values as arguments and returns the largest of those values, e.g.:

```css
property: max(<first value>, <second value>, <third value>, ...);
```

This function is often used to compare two CSS values that have different units, such as `%` and `px`.

Notice the similarities and differences between the examples for `min()` and `max()`.

### `max()` Example

Click on the play icon below to see the `max()` example in the code playground and try it for yourself.

```html hidden
<div class="max1">
  <code>width: max(50px, 50%);</code>
</div>
<div class="max2">
  <code>width: max(50px, 100%);</code>
</div>
<div class="max3">
  <code>width: max(20px, 50px, 90%);</code>
</div>
<div class="max4">
  <code>width: max(80px, 80%);</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
  height: 48px;
}

div > code {
  display: block;
  background-color: darkmagenta;
  color: white;
  height: 48px;
}

.max1 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `50%` of the container's width */
  width: max(50px, 50%);
}

.max2 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `100%` of the container's width */
  width: max(50px, 100%);
}

.max3 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `90%` of the container's width */
  width: max(20px, 50px, 90%);
}

.max4 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `80%` of the container's width */
  width: max(80px, 80%);
}
```

{{EmbedLiveSample('max_Example', '100%', 212) }}

## `clamp()`: Constraining a value between two values

We can combine the functions of `min()` and `max()` by using {{CSSxRef("clamp", "clamp()")}}. The `clamp()` math function takes a minimum value, the value to be clamped, and the maximum value as arguments, e.g.:

```css
property: clamp(<minimum value>, <value to be clamped>, <maximum value>);
```

- If the value to be clamped is less than the passed minimum value, the function will return the minimum value.
- If the value to be clamped is greater than the passed maximum value, the function will return the maximum value.
- If the value to be clamped is between the passed minimum and maximum values, the function will return the original value to be clamped.

This function is often used to compare two CSS values that have different units, such as `%` and `px`.

### `clamp()` Example

Click on the play icon below to see the `clamp()` example in the code playground and try it for yourself.

```html hidden
<div class="clamp1">
  <code>width: clamp(10%, 1px, 90%);</code>
</div>
<div class="clamp2">
  <code>width: clamp(10%, 9999px, 90%);</code>
</div>
<div class="clamp3">
  <code>width: clamp(125px, 1px, 250px);</code>
</div>
<div class="clamp4">
  <code>width: clamp(25px, 9999px, 150px);</code>
</div>
```

```css
div {
  background-color: black;
  margin: 4px 0;
  width: 100%;
  height: 48px;
}

div > code {
  display: block;
  background-color: darkgreen;
  color: white;
  height: 48px;
}

.clamp1 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `20%` of the container's width */
  width: clamp(20%, 1px, 80%);
}

.clamp2 > code {
  /* Output width: Depends on the container's width; */
  /* on this page, likely to be `90%` of the container's width */
  width: clamp(10%, 9999px, 90%);
}

.clamp3 > code {
  /* Output width: `125px` */
  width: clamp(125px, 1px, 250px);
}

.clamp4 > code {
  /* Output width: `150px` */
  width: clamp(25px, 9999px, 150px);
}
```

{{EmbedLiveSample('clamp_Example', '100%', 212) }}

## Advanced CSS Math Functions

When laying out and styling DOM elements, the four basic math functions {{CSSxRef("calc", "calc()")}}, {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}}, and {{CSSxRef("clamp", "clamp()")}} are often sufficient. However, for advanced uses like mathematics learning materials, 3D visualizations, or CSS animations, you may consider using:

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
