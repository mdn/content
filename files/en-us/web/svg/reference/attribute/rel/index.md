---
title: rel
slug: Web/SVG/Reference/Attribute/rel
page-type: svg-attribute
browser-compat: svg.elements.a.rel
sidebar: svgref
---

The **`rel`** attribute defines a unique space-separated list of values that define a relationship between a linked resource and the current document. These keywords carry a semantic meaning. You can use this attribute with the following SVG elements:

- {{SVGElement("a")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>Space-separated list of keywords</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The `rel` attribute takes a space-separated list of keywords as a value. Common keywords include:

- `alternate`
  - : Provides an alternate representation of the linked document.
- `author`
  - : Provides a link to the author of the document.
- `bookmark`
  - : Provides a permanent URL to use for bookmarking the section the linking element is most closely associated with.
- `external`
  - : Indicates that the referenced document is not part of the current site.
- `help`
  - : Links to a context-sensitive help document.
- `license`
  - : Links to the copyright license covering the current document.
- `nofollow`
  - : Links to an unendorsed document, or tells the search engine not to follow this link.
- `noopener`
  - : Opens the link without providing the target context access to the document (`window.opener`).
- `noreferrer`
  - : Opens the link without providing the target the {{HTTPHeader("Referer")}} header.
- `opener`
  - : The opposite of `noopener`. Opens the link providing the target context access to the document (`window.opener`).
- `privacy-policy`
  - : Indicates that the referenced document is the Privacy policy of the current site.
- `search`
  - : Indicates that the referenced document includes an interface specifically for searching the document.
- `tag`
  - : Gives a tag (identifier) that applies to the current document.
- `terms-of-service`
  - : Indicates that the referenced document contains agreements between the current document's provider and the potential users.
- `prev`
  - : Indicates that the document is a part of a series, and the linked reference links to the previous document.
- `next`
  - : The opposite of `prev`. Indicates that the document is a part of a series, and the linked reference links to the next document.

## Example

```html
<svg viewBox="0 0 150 20" xmlns="http://www.w3.org/2000/svg">
  <a href="https://example.com" rel="external noopener">
    <text x="5" y="15">Website</text>
  </a>
</svg>
```

{{EmbedLiveSample("Example", "300", "100")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("href")}}
- {{HTMLElement("a")}}
- {{domxref("SVGAElement.rel")}}
