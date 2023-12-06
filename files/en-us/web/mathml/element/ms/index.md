---
title: <ms>
slug: Web/MathML/Element/ms
page-type: mathml-element
browser-compat: mathml.elements.ms
---

{{MathMLRef}}

The **`<ms>`** [MathML](/en-US/docs/Web/MathML) element represents a **string** literal meant to be interpreted by programming languages and computer algebra systems.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

Some browsers may also support the following deprecated attributes and will render the content of the `<ms>` element surrounded by the specified opening and closing quotes:

- `lquote`

  - : The opening quote to enclose the content. The default value is `&quot;`.

- `rquote`
  - : The closing quote to enclose the content. The default value is `&quot;`.

## Examples

### Default rendering

```html
<math display="block">
  <ms>Hello World!</ms>
</math>
```

{{ EmbedLiveSample('default_rendering', 700, 200, "", "") }}

### Legacy quote attributes

```html
<math display="block">
  <ms lquote="„" rquote="'">abc</ms>
</math>
```

{{ EmbedLiveSample('legacy_quote_attributes', 700, 200, "", "") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
