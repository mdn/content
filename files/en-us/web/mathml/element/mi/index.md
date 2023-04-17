---
title: <mi>
slug: Web/MathML/Element/mi
page-type: mathml-element
browser-compat: mathml.elements.mi
---

{{MathMLRef}}

The **`<mi>`** [MathML](/en-US/docs/Web/MathML) element indicates that the content should be rendered as an **identifier** such as function names, variables or symbolic constants. You can also have arbitrary text in it to mark up terms.

## Attributes

This element accepts the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes). For `<mi>` elements that contain a single character, the default value of the [`mathvariant`](/en-US/docs/Web/MathML/Global_attributes/mathvariant) attribute is `italic`.

## Examples

```html
<math display="block">
  <!-- Multiple characters, default mathvariant is "normal". -->
  <mi>sin</mi>
</math>

<math display="block">
  <!-- Single character, default mathvariant is "italic". -->
  <mi>y</mi>
</math>

<math display="block">
  <!-- Overriding default mathvariant. -->
  <mi mathvariant="normal">F</mi>
</math>
```

{{ EmbedLiveSample('mi_example', 700, 200, "", "") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
