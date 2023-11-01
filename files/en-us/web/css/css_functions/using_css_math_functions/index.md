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

In many instances, including in the examples above, **we can utilize math functions built directly into CSS**. This solution is often simpler to program and faster for the browser to execute than using JavaScript.

## Introducing `calc()`

In the first two of our three examples above, we want to set the style of an element according to the result of an addition or subtraction operation. This is exactly the use case for {{CSSxRef("calc", "calc()")}}.
