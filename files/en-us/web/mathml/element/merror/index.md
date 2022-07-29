---
title: <merror>
slug: Web/MathML/Element/merror
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:General Layout Schemata
browser-compat: mathml.elements.merror
---
{{MathMLRef}}

The MathML `<merror>` element is used to display contents as error messages. In Firefox this error message is rendered similar to the typical XML error message. Note that this error is **not** thrown when your MathML markup is wrong or not well-formed XML. You will still get an XML parsing error (in case of the XHTML notation of MathML), which has nothing to do with `<merror>`.

## Attributes

This element accepts the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

## Examples

```html
<math>

<merror>
  <mrow>
    <mtext>Division by zero:</mtext>
    <mfrac>
      <mn>1</mn>
      <mn>0</mn>
    </mfrac>
  </mrow>
</merror>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
