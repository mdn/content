---
title: <mprescripts>
slug: Web/MathML/Element/mprescripts
page-type: mathml-element
browser-compat: mathml.elements.mprescripts
---

{{MathMLRef}}

The **`<mprescripts>`** [MathML](/en-US/docs/Web/MathML) element is used within an {{ MathMLElement("mmultiscripts") }} element to indicate the start of the pre-scripts elements (subscripts and superscripts that are placed **before** the base expression).

## Attributes

This element supports [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

## Example

The first `<mmultiscripts>` child element becomes a base expression. The remaining children by default become post-scripts elements (a, b). `<mprescripts>` acts as a separator, and children after it become pre-scripts elements (c, d).

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi> <!-- base expression -->
    <mi>a</mi> <!-- post-sub-script -->
    <mi>b</mi> <!-- post-sup-script -->
    <mprescripts />
    <mi>c</mi> <!-- pre-sub-script -->
    <mi>d</mi> <!-- pre-sup-script -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('example', 700, 200, "", "") }}

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

## See also

- {{ MathMLElement("msub") }} (Subscript)
- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
