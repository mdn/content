---
title: <maction>
slug: Web/MathML/Element/maction
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Enlivening Expressions
browser-compat: mathml.elements.maction
---
{{MathMLRef}}

The MathML **`<maction>`** element provides a possibility to bind actions to (sub-) expressions. The action itself is specified by the `actiontype` attribute, which accepts several values. To specify which child elements are addressed by the action, you can make use of the `selection` attribute.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

- actiontype

  - : The action which specifies what happens for this element. Possible values are:

    - `statusline`: If there is a click on the _expression_ or the reader moves the pointer over it, the _message_ is sent to the browser's status line. The syntax is: `<maction actiontype="statusline"> expression message </maction>.`
    - `toggle`: When there is a click on the subexpression, the rendering alternates the display of selected subexpressions. Therefore each click increments the `selection` value.
      The syntax is: `<maction actiontype="toggle" selection="positive-integer" > expression1 expression2 expressionN </maction>`.
    - `tooltip`: When the pointer moves over the _expression_, a tooltip box with a _message_ is displayed near the expression.
      The syntax is: `<maction actiontype="tooltip"> expression message </maction>.`

- selection
  - : The child element which is addressed by the action. The default value is `1`, which is the first child element.

## Examples

The following example uses the "toggle" `actiontype`:

```html
<math>

<maction actiontype="toggle">

  <mfrac>
    <mn>6</mn>
    <mn>8</mn>
  </mfrac>

  <mfrac>
    <mrow>
      <mn>3</mn>
      <mo>&sdot;</mo>
      <mn>2</mn>
    </mrow>
    <mrow>
      <mn>4</mn>
      <mo>&sdot;</mo>
      <mn>2</mn>
    </mrow>
  </mfrac>

  <mfrac>
    <mn>3</mn>
    <mn>4</mn>
  </mfrac>

</maction>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
