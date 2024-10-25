---
title: <mfrac>
slug: Web/MathML/Element/mfrac
page-type: mathml-element
browser-compat: mathml.elements.mfrac
---

{{MathMLRef}}

The **`<mfrac>`** [MathML](/en-US/docs/Web/MathML) element is used to display fractions. It can also be used
to mark up fraction-like objects such as
[binomial coefficients](https://en.wikipedia.org/wiki/Binomial_coefficient)
and [Legendre symbols](https://en.wikipedia.org/wiki/Legendre_symbol).

## Syntax

```html
<mfrac>numerator denominator</mfrac>
```

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes) as well as the following attributes:

- `denomalign` {{deprecated_inline}} {{Non-standard_Inline}}
  - : The alignment of the denominator under the fraction. Possible values are: `left`, `center` (default), and `right`.
- `linethickness`
  - : A {{cssxref("length-percentage")}} indicating the thickness of the horizontal fraction line.
- `numalign` {{deprecated_inline}} {{Non-standard_Inline}}
  - : The alignment of the numerator over the fraction. Possible values are: `left`, `center` (default), and `right`.

> [!NOTE]
> For the `linethickness` attribute, some browsers may also accept the deprecated values `medium`, `thin` and `thick` (whose exact interpretation is left to implementers) or [legacy MathML lengths](/en-US/docs/Web/MathML/Values#legacy_mathml_lengths).

## Examples

### Simple fraction

The following MathML code should render as a fraction with numerator "a + 2" and
denominator "3 − b":

```html
<math display="block">
  <mfrac>
    <mrow>
      <mi>a</mi>
      <mo>+</mo>
      <mn>2</mn>
    </mrow>
    <mrow>
      <mn>3</mn>
      <mo>−</mo>
      <mi>b</mi>
    </mrow>
  </mfrac>
</math>
```

{{ EmbedLiveSample('simple_fraction', 700, 200, "", "") }}

### Fraction without bar

The following MathML code should render as a [binomial coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient):

```html
<math display="block">
  <mrow>
    <mo>(</mo>
    <mfrac linethickness="0">
      <mi>n</mi>
      <mi>k</mi>
    </mfrac>
    <mo>)</mo>
  </mrow>
</math>
```

{{ EmbedLiveSample('Fraction_without_bar', 700, 200, "", "") }}

## Technical summary

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/en-US/docs/Web/Accessibility/ARIA/Roles">Implicit ARIA role</a>
    </th>
    <td>
      None
    </td>
  </tr>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
