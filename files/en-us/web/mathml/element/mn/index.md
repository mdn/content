---
title: <mn>
slug: Web/MathML/Element/mn
page-type: mathml-element
browser-compat: mathml.elements.mn
---

{{MathMLRef}}

The **`<mn>`** [MathML](/en-US/docs/Web/MathML) element represents a **numeric** literal which is normally a sequence of digits with a possible separator (a dot or a comma). However, it is also allowed to have arbitrary text in it which is actually a numeric quantity, for example "eleven".

## Attributes

This element accepts the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

## Examples

```html
<math display="block">
  <mn>0</mn>
</math>

<math display="block">
  <mn>1.337</mn>
</math>

<math display="block">
  <mn>twelve</mn>
</math>

<math display="block">
  <mn>XVI</mn>
</math>

<math display="block">
  <mn>2e10</mn>
</math>
```

{{ EmbedLiveSample('mi_example', 700, 200, "", "") }}

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
