---
title: <munder>
slug: Web/MathML/Element/munder
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Script and Limit Schemata
browser-compat: mathml.elements.munder
---
{{MathMLRef}}

The MathML `<munder>` element is used to attach an accent or a limit under an expression. It uses the following syntax: `<munder> base underscript </munder>`

## Attributes

- accentunder
  - : If `true`, the element is an _accent_, which is drawn closer to the base expression.
    If `false` (default value), the element is a _limit_ under the base expression.
- align {{deprecated_inline}}
  - : The alignment of the underscript. Possible values are: `left`, `center`, and `right`.
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

Sample rendering: ![x+y+z](munder.png)

Rendering in your browser: <math><munder accentunder="true"><mrow><mi>x </mi><mo>+ </mo><mi>y </mi><mo>+ </mo><mi>z </mi></mrow><mo>⏟</mo></munder></math>

```html
<math>

<munder accentunder="true">
  <mrow>
    <mi> x </mi>
    <mo> + </mo>
    <mi> y </mi>
    <mo> + </mo>
    <mi> z </mi>
  </mrow>
  <mo> &#x23DF; <!--BOTTOM CURLY BRACKET--> </mo>
</munder>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("mover") }} (Overscript)
- {{ MathMLElement("munderover") }} (Underscript-overscript pair)
