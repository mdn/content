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

- class, id, style
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- depth
  - : The desired depth (below the baseline) of the space (see [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) for values and units).
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- height
  - : The desired height (above the baseline) of the space (see [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) for values and units).
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- width
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

## Gecko-specific notes

- [Indentation attributes](https://www.w3.org/TR/MathML3/chapter3.html#presm.lbindent.attrs) are not implemented yet (for Gecko see {{ bug("534962") }}).
- Support for negative values for the `width` attribute has been implemented in Gecko 23.0 {{geckoRelease("23.0")}}.

## See also

- {{ MathMLElement("mpadded") }}
- {{ MathMLElement("mphantom") }}
