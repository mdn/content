---
title: '<q>: The Inline Quotation element'
slug: Web/HTML/Element/q
tags:
  - Citation
  - Cite
  - Element
  - HTML
  - HTML text-level semantics
  - Q
  - Quotation
  - Quotation Marks
  - Reference
  - Web
  - quote
browser-compat: html.elements.q
---

{{HTMLRef}}

The **`<q>`** [HTML](/en-US/docs/Web/HTML) element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the {{HTMLElement("blockquote")}} element.

{{EmbedInteractiveExample("pages/tabbed/q.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLQuoteElement")}}</td>
    </tr>
  </tbody>
</table>

> **Note:** Most modern browsers will automatically add quotation marks around text inside a `<q>` element. A style rule may be needed to add quotation marks in older browsers.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("cite")}}
  - : The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.

## Example

```html
<p>According to Mozilla's website,
  <q
  cite="https://www.mozilla.org/en-US/about/history/details/">Firefox 1.0
  was released in 2004 and became a big success.</q></p>
```

{{EmbedLiveSample('Example')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("blockquote")}} element for long quotations.
- The {{HTMLElement("cite")}} element for source citations.
