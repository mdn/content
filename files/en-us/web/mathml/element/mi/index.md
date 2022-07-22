---
title: <mi>
slug: Web/MathML/Element/mi
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Token Elements
browser-compat: mathml.elements.mi
---
{{MathMLRef}}

The MathML `<mi>` element indicates that the content should be rendered as an **identifier** such as function names, variables or symbolic constants. You can also have arbitrary text in it to mark up terms.

## Attributes

This element accepts the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes). For `<mi>` elements that contain a single character, the default value of the [`mathvariant`](/en-US/docs/Web/MathML/Global_attributes/mathvariant) attribute is `italic`.

## Examples

```html
<math>

  <!-- Multiple characters, default mathvariant is "normal". -->
  <mi>sin</mi>

  <!-- Single character, default mathvariant is "italic". -->
  <mi>y</mi>

  <!-- Overriding default mathvariant. -->
  <mi mathvariant="normal">F</mi>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
