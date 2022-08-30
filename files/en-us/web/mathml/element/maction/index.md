---
title: <maction>
slug: Web/MathML/Element/maction
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Enlivening Expressions
  - Deprecated
browser-compat: mathml.elements.maction
---
{{MathMLRef}}{{Deprecated_Header}}

The deprecated MathML **`<maction>`** element used to provide a possibility to bind an actions to mathematical expressions. Nowadays, it is recommended to rely on [JavaScript](/en-US/docs/Web/JavaScript) and other Web technologies to implement this use case. Some browsers will just render the first child of an `<maction>` element and ignore its `actiontype` and `selection` attributes.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes) as well as the following attributes:

- `actiontype`

  - : The action which specifies what happens for this element. Special behavior
    for the following values were implemented by some browsers:

    - `statusline`: If there is a click on the _expression_ or the reader moves the pointer over it, the _message_ is sent to the browser's status line. The syntax is: `<maction actiontype="statusline"> expression message </maction>.`
    - `toggle`: When there is a click on the subexpression, the rendering alternates the display of selected subexpressions. Therefore each click increments the `selection` value.
      The syntax is: `<maction actiontype="toggle" selection="positive-integer" > expression1 expression2 expressionN </maction>`.

- `selection`
  - : The child element currently visible, only taken into account for `actiontype="toggle"` or non-standard `actiontype` values. The default value is `1`, which is the first child element.

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
      <mo>×</mo>
      <mn>2</mn>
    </mrow>
    <mrow>
      <mn>4</mn>
      <mo>×</mo>
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
