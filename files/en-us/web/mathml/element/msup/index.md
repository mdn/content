---
title: <msup>
slug: Web/MathML/Element/msup
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Script and Limit Schemata
browser-compat: mathml.elements.msup
---
{{MathMLRef}}

The MathML `<msup>` element is used to attach a superscript to an expression.

It uses the following syntax: `<msup> base superscript </msup>`.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

- `superscriptshift` {{deprecated_inline}}
  - : The minimum space by which to shift the superscript up from the baseline of the expression, as a [length value.](/en-US/docs/Web/MathML/Attribute/Values#lengths)
    This attribute is deprecated and will be removed in the future.

## Examples

Sample rendering: ![x1](msup.png)

Rendering in your browser: <math><msup><mi>X</mi> <mn>2</mn></msup></math>

```html
<math>

  <msup>
    <mi>X</mi>
    <mn>2</mn>
  </msup>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("msub") }} (Subscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)
