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

The MathML `<merror>` element is used to display contents as error messages. In Firefox this error message is rendered similar to the typical XML error message. Note that this error is **not** thrown when your MathML markup is wrong or not well-formed XML. You will still get an XML parsing error (in case of the XHTML notation of MathML), which has nothing to do with `<merror>`.

## Attributes

- class, id, style
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- href
  - : Used to set a hyperlink to a specified URI.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- mathcolor
  - : The text color and also the fraction line color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).

## Examples

```html
<math>

<merror>
  <mrow>
    <mtext> Division by zero: </mtext>
    <mfrac>
      <mn> 1 </mn>
      <mn> 0 </mn>
    </mfrac>
  </mrow>
</merror>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
