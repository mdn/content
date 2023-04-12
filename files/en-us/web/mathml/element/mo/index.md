---
title: <mo>
slug: Web/MathML/Element/mo
page-type: mathml-element
browser-compat: mathml.elements.mo
---

{{MathMLRef}}

The **`<mo>`** [MathML](/en-US/docs/Web/MathML) element represents an **operator** in a broad sense. Besides operators in strict mathematical meaning, this element also includes "operators" like parentheses, separators like comma and semicolon, or "absolute value" bars.

## Attributes

In addition to the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes), this element accepts the following attributes [whose default values depend on the operator's form and content](https://w3c.github.io/mathml-core/#algorithm-for-determining-the-properties-of-an-embellished-operator):

- `accent` {{Non-standard_Inline}}
  - : A [`<boolean>`](/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types) indicating whether the operator should be treated as an accent when used as an [under](/en-US/docs/Web/MathML/Element/munder)- or [overscript](/en-US/docs/Web/MathML/Element/mover) (i.e. drawn bigger and closer to the base expression).
- `fence`
  - : A [`<boolean>`](/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types) indicating whether the operator is a fence (such as parentheses). There is no visual effect for this attribute.
- `largeop`
  - : A [`<boolean>`](/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types) indicating whether the operator should be drawn bigger when [`math-style`](/en-US/docs/Web/CSS/math-style) is set to `normal`.
- `lspace`
  - : A [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) indicating the amount of space before the operator.
- `maxsize`
  - : A [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) indicating the maximum size of the operator when it is stretchy.
- `minsize`
  - : A [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) indicating the minimum size of the operator when it is stretchy.
- `movablelimits`
  - : A [`<boolean>`](/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types) indicating whether attached under- and overscripts move to sub- and superscript positions when [`math-style`](/en-US/docs/Web/CSS/math-style) is set to `compact`.
- `rspace`
  - : A [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) indicating the amount of space after the operator.
- `separator`
  - : A [`<boolean>`](/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types) indicating whether the operator is a separator (such as commas). There is no visual effect for this attribute.
- `stretchy`
  - : A [`<boolean>`](/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types) indicating whether the operator stretches to the size of the adjacent element.
- `symmetric`
  - : A [`<boolean>`](/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types) indicating whether a stretchy operator should be vertically symmetric around the imaginary math axis (centered fraction line).

> **Note:** For the `lspace`, `maxsize`, `minsize` and `rspace` attributes, some browsers may also accept [legacy MathML lengths](/en-US/docs/Web/MathML/Attribute/Values#legacy_mathml_lengths).

## Examples

```html-nolint
<math display="block">
  <mrow>
    <mn>5</mn>
    <mo>+</mo>
    <mn>5</mn>
  </mrow>
</math>

<math display="block">
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

{{ EmbedLiveSample('mo_example', 700, 200, "", "") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
