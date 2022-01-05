---
title: <mrow>
slug: Web/MathML/Element/mrow
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:General Layout Schemata
browser-compat: mathml.elements.mrow
---
{{MathMLRef}}

The MathML `<mrow>` element is used to group sub-expressions, which usually contain one or more [operators](/en-US/docs/Web/MathML/Element/mo) with their respective operands (such as {{ MathMLElement("mi") }} and {{ MathMLElement("mn") }}). This element renders as a horizontal row containing its arguments.

When writing a MathML expression, you should group elements within an `<mrow>` in the same way as they are grouped in the mathematical interpretation of the expression. Proper grouping helps the rendering of the expression in several ways:

- It can improve the display by possibly affecting spacing.
- It allows for more intelligent line-breaking and indentation.
- It simplifies the interpretation of the expression by automated systems such as computer algebra systems and audio renderers.

## Attributes

- class, id, style
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- dir
  - : Overall directionality of formulas. Possible values are either `ltr` (left to right) or `rtl` (right to left).
- href
  - : Used to set a hyperlink to a specified URI.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- mathcolor
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).

## Examples

```html
<math>

  <mrow>
    <mn> 1 </mn>
    <mo> + </mo>
    <mn> 1 </mn>
  </mrow>

  <mrow>
    <mo> ( </mo>
    <mrow>
      <mi> x </mi>
      <mo> , </mo>
      <mi> y </mi>
    </mrow>
    <mo> ) </mo>
  </mrow>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Grouping HTML elements: {{ HTMLElement("div") }}
