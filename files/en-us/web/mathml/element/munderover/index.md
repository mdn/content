---
title: <munderover>
slug: Web/MathML/Element/munderover
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Script and Limit Schemata
browser-compat: mathml.elements.munderover
---
{{MathMLRef}}

The MathML `<munderover>` element is used to attach accents or limits both under and over an expression.

It uses the following syntax: `<munderover> base underscript overscript </munderover>`

## Attributes

- accent
  - : If `true`, the overscript is an _accent_, which is drawn closer to the base expression.
    If `false` (default value), the overscript is a _limit_ over the base expression.
- accentunder
  - : If `true`, the underscript is an _accent_, which is drawn closer to the base expression.
    If `false` (default value), the underscript is a _limit_ under the base expression.
- align {{deprecated_inline}}
  - : The alignment of both underscript and overscript. Possible values are: `left`, `center`, and `right`.
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

Sample rendering: ![integral-0-infinity](munderover.png)

Rendering in your browser: <math><munderover><mo>∫ </mo><mn>0 </mn><mi>∞</mi></munderover></math>

```html
<math displaystyle="true">

  <munderover >
    <mo> &#x222B; <!--INTEGRAL--> </mo>
    <mn> 0 </mn>
    <mi> &#x221E; <!--INFINITY--> </mi>
  </munderover>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("munder") }} (Underscript)
- {{ MathMLElement("mover") }} (Overscript)
