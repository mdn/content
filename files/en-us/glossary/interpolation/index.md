---
title: Interpolation
slug: Glossary/Interpolation
page-type: glossary-definition
---

{{GlossarySidebar}}

Interpolation is a method for estimating new data points based on a set of known data points.

Interpolation calculates intermediate values in animations that change HTML properties such as height, width, etc.
Color interpolation defines intermediate values of colors in color mixing, gradients, compositing, filters, transitions, animations, and color functions.

Interpolations aren't necessarily linear. Most interpolated values are real, floating-point numbers; however, when there is no mid-point between two values, such as values that accept only integers, the [interpolation is discrete](/en-US/docs/Web/CSS/integer#interpolation). The progression of interpolation also depends on [easing functions](/en-US/docs/Web/CSS/easing-function) in animations and color stops, and {{CSSXref("color-interpolation-method", "color")}} and {{CSSXref("hue-interpolation-method", "hue")}} interpolation methods in gradients.

In JavaScript, the term "[interpolation](/en-US/docs/Web/JavaScript/Reference/Template_literals#string_interpolation)" is used as a description of the substitution of strings in the template literals.

## See also

- {{SVGAttr("color-interpolation")}} SVG attribute
- {{CSSXref("color-interpolation")}} CSS property
- {{CSSXref("color-interpolation-method")}} CSS data type
- {{CSSXref("hue-interpolation-method")}} CSS data type
- {{CSSXref("color_value/color-mix", "color-mix()")}} CSS function
- [Interpolating colors in CSS](/en-US/docs/Web/CSS/color_value#interpolation)
- [Interpolation](https://en.wikipedia.org/wiki/Interpolation) on Wikipedia
- [String interpolation](https://en.wikipedia.org/wiki/String_interpolation) on Wikipedia
