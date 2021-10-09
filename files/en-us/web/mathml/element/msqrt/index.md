---
title: <msqrt>
slug: Web/MathML/Element/msqrt
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:General Layout Schemata
browser-compat: mathml.elements.msqrt
---
{{MathMLRef}}

The MathML `<msqrt>` element is used to display square roots (no index is displayed). The square root accepts only one argument, which leads to the following syntax: `<msqrt> base </msqrt>`.

## Attributes

- class, id, style
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- href
  - : Used to set a hyperlink to a specified URI.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- mathcolor
  - : The text color and also the color of the root symbol itself. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).

## Examples

Sample rendering: ![root-x](msqrt.png)

Rendering in your browser: <math><msqrt><mi>x</mi></msqrt></math>

```html
<math>

 <msqrt>
    <mi>x</mi>
  </msqrt>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("mroot") }} (Radical with an index)
