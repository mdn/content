---
title: Interpolation
slug: Glossary/Interpolation
page-type: glossary-definition
---

{{GlossarySidebar}}

Interpolation is a process for estimating unknown values in a range, based on the values of known end points.

Interpolation used, for example, to calculate intermediate values of HTML element properties when they are animated, such as height, width, and so on.
Color interpolation is used to define intermediate values of colors with gradients, compositing, filters, transitions, animations, and color mixing and color modification functions.

Interpolations aren't necessarily linear. When there is no mid-point between two values, such as values that accept only integers, the interpolation is discrete, with the value jumping from one value to the next without any interpolation between the discrete values. Most numeric values are interpolated as real, floating-point numbers. The progression of an interpolation depends on other properties, such [easing functions](/en-US/docs/Web/CSS/easing-function) with animations and color stops and {{CSSXref("color-interpolation-method", "color")}} and {{CSSXref("hue-interpolation-method", "hue")}} interpolation methods with gradients.

In JavaScript, the term "[interpolation](/en-US/docs/Web/JavaScript/Reference/Template_literals#string_interpolation)" is used as a description of the substitution of strings in the template literals.

## See also

- {{SVGAttr("color-interpolation")}} SVG attribute
- {{CSSXref("color-interpolation")}} CSS property
- {{CSSXref("color-interpolation-method")}} CSS data type
- {{CSSXref("hue-interpolation-method")}} CSS data type
- {{CSSXref("color-mix")}} CSS function
- [Interpolating colors in CSS](/en-US/docs/Web/CSS/color_value#interpolation)
- [Interpolation](https://en.wikipedia.org/wiki/Interpolation) on Wikipedia
- [String interpolation](https://en.wikipedia.org/wiki/String_interpolation) on Wikipedia
