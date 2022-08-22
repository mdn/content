---
title: <mfrac>
slug: Web/MathML/Element/mfrac
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:General Layout Schemata
browser-compat: mathml.elements.mfrac
---
{{MathMLRef}}

The MathML `<mfrac>` element is used to display fractions.

## Syntax

```html
<mfrac>numerator denominator</mfrac>
```

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

- `bevelled`
  - : Specifies the way the fraction is displayed. If `true`, the fraction line is bevelled, which means that numerator and denominator are displayed side by side and separated by a slash (/). Otherwise, if set to `false` (which is the default value), numerator and denominator are on top of each other.
- `denomalign` {{deprecated_inline}}
  - : The alignment of the denominator under the fraction. Possible values are: `left`, `center` (default), and `right`.
    This attribute is deprecated and will be removed in the future. Use CSS [`text-align`](/en-US/docs/Web/CSS/text-align) instead.
- `linethickness`
  - : The thickness of the horizontal fraction line. This attributes accepts any [length values](/en-US/docs/Web/CSS/length).
    The values `medium`, `thin`, and `thick` are deprecated and will be removed in the future.
- `numalign` {{deprecated_inline}}
  - : The alignment of the numerator over the fraction. Possible values are: `left`, `center` (default), and `right`.
    This attribute is deprecated and will be removed in the future. Use CSS [`text-align`](/en-US/docs/Web/CSS/text-align) instead.

## Examples

Sample rendering: ![(a/b)/(c/d)](mfrac.png)

Your browser rendering: <math><mfrac bevelled="true"><mfrac><mi>a</mi><mi>b</mi></mfrac><mfrac><mi>c</mi><mi>d</mi></mfrac></mfrac></math>

```html
<math>
  <mfrac bevelled="true">
     <mfrac>
        <mi>a</mi>
        <mi>b</mi>
     </mfrac>
     <mfrac>
        <mi>c</mi>
        <mi>d</mi>
     </mfrac>
  </mfrac>
</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
