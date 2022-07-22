---
title: <ms>
slug: Web/MathML/Element/ms
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Token Elements
browser-compat: mathml.elements.ms
---
{{MathMLRef}}

The MathML `<ms>` element represents a _string literal_ meant to be interpreted by programming languages and computer algebra systems. By default, string literals are displayed as enclosed by double quotes (`&quot;`); by using the `lquote` and `rquote` attributes, you can set custom characters to display. Note that quotation marks should not be specified unless they are part of the string literal. The content of an `<ms>` element is not an ASCII string per se, but rather a sequence of characters and {{ MathMLElement("malignmark") }} elements.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

- `lquote`
  - : The opening quote character (depends on [`dir`](#attr-dir)) to enclose the content. The default value is "`&quot;".`

- `rquote`
  - : The closing quote mark (depends on [`dir`](#attr-dir)) to enclose the content. The default value is "`&quot;".`

## Examples

```html
<math>

  <ms lquote="„" rquote=""">abc</ms>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
