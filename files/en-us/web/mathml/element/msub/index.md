---
title: <msub>
slug: Web/MathML/Element/msub
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Script and Limit Schemata
browser-compat: mathml.elements.msub
---
{{MathMLRef}}

The MathML `<msub>` element is used to attach a subscript to an expression.

It uses the following syntax: `<msub> base subscript </msub>`.

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
  - : The minimum space by which to shift the subscript below the baseline of the expression, as a [length value](/en-US/docs/Web/MathML/Attribute/Values#lengths).
    This attribute is deprecated and will be removed in the future.

## Examples

Sample rendering: ![x1](msub.png)

Rendering in your browser: <math><msub><mi>X</mi> <mn>1</mn></msub></math>

```html
<math>

  <msub>
    <mi>X</mi>
    <mn>1</mn>
  </msub>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)
