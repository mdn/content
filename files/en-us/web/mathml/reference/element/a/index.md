---
title: <a>
slug: Web/MathML/Reference/Element/a
page-type: mathml-element
browser-compat: mathml.elements.a
sidebar: mathmlref
---

The **`<a>`** [MathML](/en-US/docs/Web/MathML) element creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL. It is very similar to HTML's {{HTMLElement("a")}} element.

MathML's `<a>` element is a container, which means you can create a link around any MathML content. For layout purposes, it behaves like an {{MathMLElement("mrow")}} element.

> [!NOTE]
> Setting the [`href`](/en-US/docs/Web/MathML/Reference/Global_attributes/href) attribute on MathML elements other than `<a>` is deprecated. Use the `<a>` element to create hyperlinks within MathML content instead.

## Attributes

This element accepts the [global MathML attributes](/en-US/docs/Web/MathML/Reference/Global_attributes), as well as the following attribute:

- `href`
  - : The {{Glossary("URL")}} that the hyperlink points to. Links are not restricted to HTTP-based URLs — they can use any URL scheme supported by browsers.

## Examples

The following example links the formula for mass-energy equivalence to its Wikipedia article.

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
  <a href="https://en.wikipedia.org/wiki/Mass-energy_equivalence">
    <mrow>
      <mi>E</mi>
      <mo>=</mo>
      <mi>m</mi>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </a>
</math>
```

{{EmbedLiveSample("Examples", "", 150)}}

> [!WARNING]
> Because this element shares its tag name with [HTML's `<a>` element](/en-US/docs/Web/HTML/Reference/Elements/a) (and [SVG's `<a>` element](/en-US/docs/Web/SVG/Reference/Element/a)), selecting `a` with CSS or {{domxref("Document.querySelector", "querySelector")}} may apply to the wrong kind of element. Use the {{cssxref("@namespace")}} rule to distinguish them.

## DOM interface

When implemented, this element will be exposed via the `MathMLAnchorElement` interface defined in the [MathML Core specification](https://w3c.github.io/mathml-core/#the-a-element). At the time of writing, no browser exposes this interface yet, and the element is accessed through the base {{domxref("MathMLElement")}} interface.

## Technical summary

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles">Implicit ARIA role</a>
    </th>
    <td>
      <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> when the <code>href</code> attribute is present, otherwise no corresponding role
    </td>
  </tr>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HTMLElement("a")}} element
- SVG {{SVGElement("a")}} element
- [`href`](/en-US/docs/Web/MathML/Reference/Global_attributes/href) deprecated MathML global attribute
