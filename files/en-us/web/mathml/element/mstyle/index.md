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

The MathML `<mstyle>` element is used to change the style of its children.

> **Note:** Historically, this element accepted almost all the MathML attributes and it was used to override the default attribute values of its descendants. It was later restricted to only a few relevant styling attributes that were used in existing web pages. Nowadays, these styling attributes are [common to all MathML elements](/en-US/docs/Web/MathML/Global_attributes) and so `<mstyle>` is really just equivalent to an [`<mrow>`](/en-US/docs/Web/MathML/Element/mrow) element. However, `<mstyle>` may still be relevant for compatibility with MathML implementations outside browsers.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes) as well as the following deprecated attributes:

- `scriptminsize` {{deprecated_inline}}
  - : Specifies a minimum font size allowed due to changes in `scriptlevel`. The default value is `8pt`.
- `scriptsizemultiplier` {{deprecated_inline}}
  - : Specifies the multiplier to be used to adjust font size due to changes in `scriptlevel`. The default value is `0.71`.

## Examples

The following example uses [global attributes](/en-US/docs/Web/MathML/Global_attributes) `displaystyle` and `mathcolor` to respectively override the [`math-style`](/en-US/docs/Web/CSS/math-style) and [`color`](/en-US/docs/Web/CSS/color) of the `<munder>` and `<munderover>` children:

```html
<math>
  <mstyle displaystyle="true" mathcolor="teal">
    <munder>
      <mo>∑</mo>
      <mi>I</mi>
    </munder>
    <munderover>
      <mo>∏</mo>
      <mrow>
        <mi>i</mi>
        <mo>=</mo>
        <mn>1</mn>
      </mrow>
      <mi>N</mi>
    </munderover>
  </mstyle>
</math>
```

The following example shows a formula with [`font-size`](/en-US/docs/Web/CSS/font-size) set to `128pt`. It contains numbers that are placed in nested superscripts as well as an `<mstyle>` element with legacy attributes `scriptsizemultiplier` and `scriptminsize`. The `font-size` is multiplied by `0.5` when entering each superscript as long as that does not make it smaller than `16pt`.

```html
<math style="font-size: 128pt">
  <mstyle scriptsizemultiplier="0.5" scriptminsize="16pt">
    <msup>
      <mn>2</mn>
      <msup>
        <mn>2</mn>
        <msup>
          <mn>2</mn>
          <msup>
            <mn>2</mn>
            <msup>
              <mn>2</mn>
              <msup>
                <mn>2</mn>
                <mn>2</mn>
              </msup>
            </msup>
          </msup>
        </msup>
      </msup>
    </msup>
  </mstyle>
</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
