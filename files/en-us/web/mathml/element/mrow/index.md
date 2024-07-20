---
title: <mrow>
slug: Web/MathML/Element/mrow
page-type: mathml-element
browser-compat: mathml.elements.mrow
---

{{MathMLRef}}

The **`<mrow>`** [MathML](/en-US/docs/Web/MathML) element is used to group sub-expressions, which usually contain one or more [operators](/en-US/docs/Web/MathML/Element/mo) with their respective operands (such as {{ MathMLElement("mi") }} and {{ MathMLElement("mn") }}). This element renders as a horizontal row containing its arguments.

When writing a MathML expression, you should group elements within an `<mrow>` in the same way as they are grouped in the mathematical interpretation of the expression. Proper grouping helps the rendering of the expression in several ways:

- It can improve the display by possibly affecting spacing and preventing line breaks.
- It simplifies the interpretation of the expression by automated systems such as computer algebra systems and audio renderers.

## Attributes

This element accepts the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

## Examples

```html
<math display="block">
  <mfrac>
    <mrow>
      <!-- numerator content grouped in one mrow -->
      <mn>1</mn>
      <mo>+</mo>
      <mi>K</mi>
    </mrow>
    <mrow>
      <!-- denominator content grouped in one mrow -->
      <mn>3</mn>
      <mrow>
        <!-- fenced expression grouped in one mrow -->
        <mo>(</mo>
        <mrow>
          <!-- fenced content grouped in one mrow -->
          <mi>x</mi>
          <mo>+</mo>
          <mi>y</mi>
        </mrow>
        <mo>)</mo>
      </mrow>
    </mrow>
  </mfrac>
</math>
```

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Grouping HTML elements: {{ HTMLElement("div") }}
