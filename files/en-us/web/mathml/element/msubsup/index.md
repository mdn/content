---
title: <msubsup>
slug: Web/MathML/Element/msubsup
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Script and Limit Schemata
browser-compat: mathml.elements.msubsup
---
{{MathMLRef}}

The MathML `<msubsup>` element is used to attach both a subscript and a superscript, together, to an expression.

It uses the following syntax: `<msubsup> base subscript superscript </msubsup>`.

## Attributes

- `class`, `id`, `style`
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- `href`
  - : Used to set a hyperlink to a specified URI.
- `mathbackground`
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- `mathcolor`
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- `subscriptshift` {{deprecated_inline}}
  - : The minimum space by which to shift the subscript below the baseline of the expression, as a [length value.](/en-US/docs/Web/MathML/Attribute/Values#lengths)
    This attribute is deprecated and will be removed in the future.
- `superscriptshift` {{deprecated_inline}}
  - : The minimum space by which to shift the superscript above the baseline of the expression, as a [length value.](/en-US/docs/Web/MathML/Attribute/Values#lengths)
    This attribute is deprecated and will be removed in the future.

## Examples

Sample rendering: ![x1](msubsup.png)

Rendering in your browser: <math><msubsup><mo>∫</mo> <mn>0 </mn><mn>1</mn></msubsup></math>

```html
<math displaystyle="true">

  <msubsup>
    <mo> &#x222B;<!--Integral --> </mo>
    <mn> 0 </mn>
    <mn> 1 </mn>
  </msubsup>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("msub") }} (Subscript)
- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)
