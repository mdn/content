---
title: <mpadded>
slug: Web/MathML/Element/mpadded
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:General Layout Schemata
browser-compat: mathml.elements.mpadded
---
{{MathMLRef}}

The MathML `<mpadded>` element is used to add extra padding and to set the general adjustment of position and size of enclosed contents.

## Attributes

- class, id, style
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- depth
  - : Sets or increments the depth. Possible values: Any [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) or an increment/decrement (a length prefixed with "+" or "-") .
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- height
  - : Sets or increments the height. Possible values: Any [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) or an increment/decrement (a length prefixed with "+" or "-") .
- href
  - : Used to set a hyperlink to a specified URI.
- lspace
  - : Sets or increments the horizontal position. Possible values: Any [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) or an increment/decrement (a length prefixed with "+" or "-") .
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- mathcolor
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- voffset
  - : Sets or increments the vertical position. Possible values: Any [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) or an increment/decrement (a length prefixed with "+" or "-") .
- width
  - : Sets or increments the width. Possible values: Any [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) or an increment/decrement (a length prefixed with "+" or "-") .

### Pseudo-units

It is possible to use the keywords `"depth`",` "height"`, and `"width"` as a pseudo-unit for the attributes `depth`, `height`, `lspace`, `voffset`, and `width`. They represent each length of the same-named dimension.
Prior to Gecko 7.0 {{ geckoRelease("7.0") }} the MathML2 pseudo-unit `lspace` was allowed, which is no longer present in the MathML3 Recommendation and has been removed now.

## Examples

```html
<math>

  <mpadded height="+150px" width="100px" lspace="2height">
    <mi> x </mi>
    <mo> + </mo>
    <mi> y </mi>
  </mpadded>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("mphantom") }}
- {{ MathMLElement("mspace") }}
