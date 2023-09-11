---
title: <mspace>
slug: Web/MathML/Element/mspace
page-type: mathml-element
browser-compat: mathml.elements.mspace
---

{{MathMLRef}}

The **`<mspace>`** [MathML](/en-US/docs/Web/MathML) element is used to display a blank space, whose size is set by its attributes.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes) as well as the following attributes:

- `depth`
  - : A [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) indicating the desired depth (below the baseline) of the space.
- `height`
  - : A [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) indicating the desired height (above the baseline) of the space.
- `width`
  - : A [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) indicating the desired width of the space.

> **Note:** For the `depth`, `height`, `width` attributes, some browsers may also accept [legacy MathML lengths](/en-US/docs/Web/MathML/Values#legacy_mathml_lengths).

## Examples

```html-nolint
<math display="block">
  <mn>1</mn>
  <mspace depth="40px" height="20px" width="100px"
          style="background: lightblue;"/>
  <mn>2</mn>
</math>
```

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("mpadded") }}
- {{ MathMLElement("mphantom") }}
