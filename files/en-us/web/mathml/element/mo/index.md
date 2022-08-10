---
title: <mo>
slug: Web/MathML/Element/mo
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Token Elements
browser-compat: mathml.elements.mo
---
{{MathMLRef}}

The MathML `<mo>` element represents an operator in a broad sense. Besides operators in strict mathematical meaning, this element also includes "operators" like parentheses, separators like comma and semicolon, or "absolute value" bars.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

- `accent`
  - : If the operator is used as an [under](/en-US/docs/Web/MathML/Element/munder)- or [overscript](/en-US/docs/Web/MathML/Element/mover) this attribute specifies whether the operator should be treated as an accent.
    Allowed values are `true` or `false`.
- `fence`
  - : There is no visual effect for this attribute, but it specifies whether the operator is a fence (such as parentheses).
    Allowed values are `true` or `false`.
- `lspace`
  - : The amount of space before the operator (see [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) for values and units). The constant `thickmathspace` (5/18em) is the default value.

- `maxsize`

  - : If `stretchy` is `true`, this attribute specifies the maximum size of the operator. Allowed values are:

    - `infinity`
    - an arbitrary [length](/en-US/docs/Web/MathML/Attribute/Values#lengths)

- `minsize`

  - : If `stretchy` is `true`, this attribute specifies the minimum size of the operator. Allowed values are:

    - `infinity`
    - an arbitrary [length](/en-US/docs/Web/MathML/Attribute/Values#lengths)

- `movablelimits`
  - : Specifies whether attached under- and overscripts move to sub- and superscript positions when `displaystyle` is `false`.
    Allowed values are either `true` or `false.`
- `rspace`
  - : The amount of space after the operator (see [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) for values and units). The constant `thickmathspace` (5/18em) is the default value.
- `separator`
  - : There is no visual effect for this attribute, but it specifies whether the operator is a separator (such as commas).
    Allowed values are `true` or `false`.
- `stretchy`
  - : Specifies whether the operator stretches to the size of the adjacent element.
    Allowed values are `true` or `false`.
- `symmetric`
  - : If `stretchy` is `true`, this attribute specifies whether the operator should be vertically symmetric around the imaginary math axis (centered fraction line).
    The default value is `true` if **stretchy** is set to `true` and otherwise `false`. Allowed values are `true` or `false`.

## Examples

```html
<math>

<mrow>
  <mn>5</mn>
  <mo>+</mo>
  <mn>5</mn>
</mrow>

<mrow>
  <mo>[</mo> <!-- default form value: prefix -->
  <mrow>
    <mn>0</mn>
    <mo>;</mo> <!-- default form value: infix -->
    <mn>1</mn>
  </mrow>
  <mo>)</mo> <!-- default form value: postfix -->
</mrow>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
