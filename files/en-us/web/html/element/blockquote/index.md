---
title: "<blockquote>: The Block Quotation element"
slug: Web/HTML/Element/blockquote
page-type: html-element
browser-compat: html.elements.blockquote
---

{{HTMLSidebar}}

The **`<blockquote>`** [HTML](/en-US/docs/Web/HTML) element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see [Notes](#usage_notes) for how to change it). A URL for the source of the quotation may be given using the `cite` attribute, while a text representation of the source can be given using the {{HTMLElement("cite")}} element.

{{EmbedInteractiveExample("pages/tabbed/blockquote.html","tabbed-standard")}}

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `cite`
  - : A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.

## Usage notes

According to the specification, attribution for the quotation, if any, must be placed outside the `<blockquote>` element.

To change the indentation applied to the quoted text, use the {{Glossary("CSS")}} {{cssxref("margin-left")}} and/or {{cssxref("margin-right")}} properties, or the {{cssxref("margin")}} shorthand property.

To include shorter quotes inline rather than in a separate block, use the {{HTMLElement("q")}} (Quotation) element.

## Examples

This example demonstrates the use of the `<blockquote>` element to quote a passage from {{RFC(1149)}}, _A Standard for the Transmission of IP Datagrams on Avian Carriers_.

```html
<blockquote cite="https://datatracker.ietf.org/doc/html/rfc1149">
  <p>
    Avian carriers can provide high delay, low throughput, and low altitude
    service. The connection topology is limited to a single point-to-point path
    for each carrier, used with standard carriers, but many carriers can be used
    without significant interference with each other, outside early spring. This
    is because of the 3D ether space available to the carriers, in contrast to
    the 1D ether used by IEEE802.3. The carriers have an intrinsic collision
    avoidance system, which increases availability.
  </p>
</blockquote>
```

### Result

{{EmbedLiveSample("Examples", 640, 180)}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >, sectioning root, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code>
          <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents"
            >blockquote</a
          ></code
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("q")}} element for inline quotations.
- The {{HTMLElement("cite")}} element for source citations.
- [The blockquote element](https://heydonworks.com/article/the-blockquote-element/) via heydonworks.com (2024)
