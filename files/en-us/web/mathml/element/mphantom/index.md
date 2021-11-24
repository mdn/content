---
title: <mphantom>
slug: Web/MathML/Element/mphantom
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:General Layout Schemata
browser-compat: mathml.elements.mphantom
---
{{MathMLRef}}

The MathML `<mphantom>` element is rendered invisibly, but dimensions (such as height, width, and baseline position) are still kept.

## Attributes

- class, id, style
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).

## Examples

Sample rendering: ![x+  z](mphantom.png)

Rendering in your browser: <math><mrow><mi>x </mi><mo>+ </mo><mphantom><mi>y </mi><mo>+ </mo></mphantom><mi>z</mi></mrow></math>

```html
<math>

<mrow>
  <mi> x </mi>
  <mo> + </mo>
  <mphantom>
    <mi> y </mi>
    <mo> + </mo>
  </mphantom>
  <mi> z </mi>
</mrow>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("mspace") }}
- {{ MathMLElement("mpadded") }}
