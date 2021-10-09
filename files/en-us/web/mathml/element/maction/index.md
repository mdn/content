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

- actiontype

  - : The action which specifies what happens for this element. Possible values are:

    - `statusline`: If there is a click on the _expression_ or the reader moves the pointer over it, the _message_ is sent to the browser's status line. The syntax is: `<maction actiontype="statusline"> expression message </maction>.`
    - `toggle`: When there is a click on the subexpression, the rendering alternates the display of selected subexpressions. Therefore each click increments the `selection` value.
      The syntax is: `<maction actiontype="toggle" selection="positive-integer" > expression1 expression2 expressionN </maction>`.
    - `tooltip`: When the pointer moves over the _expression_, a tooltip box with a _message_ is displayed near the expression.
      The syntax is:` <maction actiontype="tooltip"> expression message </maction>.`

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

## Gecko-specific notes

- Prior to Gecko 9.0 {{ geckoRelease("9.0") }} the non-standard `restyle` value on the `actiontype` attribute was supported. This value has been removed.
- Prior to Gecko 14.0 {{ geckoRelease("14.0") }} the `statusline` action type was using a non-standard syntax (see below). This has been fixed to follow the MathML specification.

  ```html
  <maction actiontype="statusline#(message)">
  (expression)
  </maction>
  ```

- With Gecko 15.0 {{geckoRelease("15.0")}} the `selection` attribute is only taken into account with the actiontype `"toggle"`.
- Starting with Gecko 16.0 {{geckoRelease("16.0")}} the `selection` attribute is also taken into account when an unknown `actiontype` is specified. If an `actiontype` is not specified (is empty) or when the `selection` attribute is invalid, the markup will throw an MathML error (invalid-markup).
