---
title: <mroot>
slug: Web/MathML/Element/mroot
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:General Layout Schemata
browser-compat: mathml.elements.mroot
---
{{MathMLRef}}

The MathML `<mroot>` element is used to display roots with an explicit index. Two arguments are accepted, which leads to the syntax: `<mroot> base index </mroot>`.

## Attributes

- class, id, style
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- href
  - : Used to set a hyperlink to a specified URL.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- mathcolor
  - : The text color and also the color of the root symbol itself. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).

## Examples

Sample Rendering: ![x](mroot.png)

Rendering in your browser: <math><mroot><mi>x</mi> <mn>3</mn></mroot></math>

```html
<math>

 <mroot>
    <mi>x</mi>
    <mn>3</mn>
 </mroot>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("msqrt") }} (Square root without an index)
