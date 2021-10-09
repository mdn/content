---
title: <mover>
slug: Web/MathML/Element/mover
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Script and Limit Schemata
browser-compat: mathml.elements.mover
---
{{MathMLRef}}

The MathML `<mover>` element is used to attach an accent or a limit over an expression. Use the following syntax: `<mover> base overscript </mover>`

## Attributes

- accent
  - : If `true` the over-script is an _accent_, which is drawn closer to the base expression.
    If `false` (default value) the over-script is a _limit_ over the base expression.
- align {{deprecated_inline}}
  - : The alignment of the over-script. Possible values are: `left`, `center`, and `right`.
    This attribute is deprecated and will be removed in the future. Use CSS [`text-align`](/en-US/docs/Web/CSS/text-align) instead.
- class, id, style
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- href
  - : Used to set a hyperlink to a specified URI.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- mathcolor
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).

## Examples

Sample rendering: ![x+y+z](mover.png)

Rendering in your browser: <math><mover accent="true"><mrow><mi>x </mi><mo>+ </mo><mi>y </mi><mo>+ </mo><mi>z </mi></mrow><mo>⏞</mo></mover></math>

```html
<math>

<mover accent="true">
  <mrow>
    <mi> x </mi>
    <mo> + </mo>
    <mi> y </mi>
    <mo> + </mo>
    <mi> z </mi>
  </mrow>
  <mo> &#x23DE; <!--TOP CURLY BRACKET--> </mo>
</mover>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("munder") }} (Underscript)
- {{ MathMLElement("munderover") }} (Underscript-overscript pair)
