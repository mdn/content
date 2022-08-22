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

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

- `depth`
  - : Sets or increments the depth. Possible values: Any [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) or an increment/decrement (a length prefixed with "+" or "-") .
- `height`
  - : Sets or increments the height. Possible values: Any [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) or an increment/decrement (a length prefixed with "+" or "-") .
- `lspace`
  - : Sets or increments the horizontal position. Possible values: Any [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) or an increment/decrement (a length prefixed with "+" or "-") .
- `voffset`
  - : Sets or increments the vertical position. Possible values: Any [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) or an increment/decrement (a length prefixed with "+" or "-") .
- `width`
  - : Sets or increments the width. Possible values: Any [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) or an increment/decrement (a length prefixed with "+" or "-") .

### Pseudo-units

It is possible to use the keywords `"depth`", `"height"`, and `"width"` as a pseudo-unit for the attributes `depth`, `height`, `lspace`, `voffset`, and `width`. They represent each length of the same-named dimension.

## Examples

```html
<math>

  <mpadded height="+150px" width="100px" lspace="2height">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
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
