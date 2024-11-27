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

## Technical summary

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/en-US/docs/Web/Accessibility/ARIA/Roles">Implicit ARIA role</a>
    </th>
    <td>
      None
    </td>
  </tr>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
