---
title: <annotation>
slug: Web/MathML/Element/annotation
page-type: mathml-element
browser-compat: mathml.elements.annotation
---

{{MathMLRef}}

The **`<annotation>`** [MathML](/en-US/docs/Web/MathML) element contains an annotation to the MathML expression in a textual format, for example [LaTeX](https://www.latex-project.org/).

> [!NOTE]
> Annotations are not supposed to be rendered by browsers and are hidden by default. However, Firefox and Safari render some annotation formats if the first child of the {{mathmlelement("semantics")}} element contains errors or is missing.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes) as well as the following attributes:

- `encoding`
  - : The encoding of the semantic information in the annotation (e.g. `"application/x-tex"`)
- `src` {{deprecated_inline}}
  - : The location of an external source for semantic information.

## Example

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}
```

```html
<math display="block">
  <semantics>
    <!-- The first child is the MathML expression rendered by default. -->
    <mrow>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mi>y</mi>
    </mrow>

    <!-- Annotate with LaTeX, a lightweight markup language. -->
    <annotation encoding="application/x-tex">x^{2} + y</annotation>
  </semantics>
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
