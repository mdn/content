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

The MathML `<merror>` element is used to display contents as error messages. The intent of this element is to provide a standard way for programs that generate MathML from other input to report syntax errors.

## Attributes

This element accepts the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

## Examples

The following example will display the message "division by zero" followed by the fraction which generated it. It uses special style to highlight that error:

```html
<math>
  <merror>
    <mtext>Division by zero:</mtext>
    <mfrac>
      <mn>1</mn>
      <mn>0</mn>
    </mfrac>
  </merror>
</math>
```

{{ EmbedLiveSample('merror_example', 700, 200, "", "") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
