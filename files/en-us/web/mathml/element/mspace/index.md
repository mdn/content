---
title: <mspace>
slug: Web/MathML/Element/mspace
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Token Elements
browser-compat: mathml.elements.mspace
---
{{MathMLRef}}

The MathML `<mspace>` element is used to display a blank space, whose size is set by its attributes.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

- `depth`
  - : The desired depth (below the baseline) of the space (see [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) for values and units).
- `height`
  - : The desired height (above the baseline) of the space (see [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) for values and units).
- `width`
  - : The desired width of the space (see [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) for values and units).

Note that some common attributes like `mathcolor`, `mathvariant` or `dir` have no effect on `<mspace>`.

## Examples

```html
<math>

  <mspace depth="40px" height="20px" />

  <mspace width="100px" />

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("mpadded") }}
- {{ MathMLElement("mphantom") }}
