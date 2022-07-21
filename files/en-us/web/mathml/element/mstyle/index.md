---
title: <mstyle>
slug: Web/MathML/Element/mstyle
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:General Layout Schemata
browser-compat: mathml.elements.mstyle
---
{{MathMLRef}}

The MathML `<mstyle>` element is used change the style of its children. It accepts all attributes of all MathML presentation elements with some exceptions and additional attributes listed below.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

- `scriptminsize` {{deprecated_inline}}
  - : Specifies a minimum font size allowed due to changes in `scriptlevel`. The default value is 8pt.
- `scriptsizemultiplier` {{deprecated_inline}}
  - : Specifies the multiplier to be used to adjust font size due to changes in `scriptlevel`. The default value is 0.71.

The `<mstyle>` element accepts [all attributes](/en-US/docs/Web/MathML/Attribute) of all presentation elements with the following exceptions:

- `height`, `depth` or `width` do not apply to {{ MathMLElement("mpadded") }} or {{ MathMLElement("mtable") }}.
- `rowalign`, `columnalign`, or `groupalign` do not apply to {{ MathMLElement("mtr") }}, {{ MathMLElement("mtd") }} or {{ MathMLElement("maligngroup") }}.
- `lspace` or `voffset` do not apply to {{ MathMLElement("mpadded") }}.
- `align` does not apply to {{ MathMLElement("mtable") }} or {{ MathMLElement("mstack") }}.
- `index` cannot be set on `<mstyle>`.
- `actiontype` on {{ MathMLElement("maction") }} cannot be set on `<mstyle>`.

## Examples

Using `displaystyle` and `mathcolor` to effect style changes in the layout of the whole sum.

```html
<math>

  <mstyle displaystyle="true" mathcolor="teal">
    <mrow>

      <munderover>
        <mo stretchy="true" form="prefix">&sum;</mo>
        <mrow>
          <mi>i</mi>
          <mo form="infix">=</mo>
          <mn>1</mn>
        </mrow>
        <mi>n</mi>
      </munderover>

      <mstyle displaystyle="true">
        <mfrac>
          <mn>1</mn>
          <mi>n</mi>
        </mfrac>
      </mstyle>

    </mrow>
  </mstyle>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
