---
title: '<cite>: The Citation element'
slug: Web/HTML/Element/cite
tags:
  - Attribution
  - Citation
  - Citing References
  - Citing Works
  - Element
  - HTML
  - HTML text-level semantics
  - Quotations
  - Reference
  - Web
browser-compat: html.elements.cite
---

{{HTMLRef}}

The **`<cite>`** [HTML](/en-US/docs/Web/HTML) element is used to describe a reference to a cited creative work, and must include the title of that work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.

{{EmbedInteractiveExample("pages/tabbed/cite.html", "tabbed-standard")}}

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
      <td>
        {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4)
        inclusive, Firefox implements the
        {{domxref("HTMLSpanElement")}} interface for this element.
      </td>
    </tr>
  </tbody>
</table>

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

In the context of the `<cite>` element, a creative work that might be cited could be, for example, one of the following:

- A book
- A research paper
- An essay
- A poem
- A musical score
- A song
- A play or film script
- A film
- A television show
- A game
- A sculpture
- A painting
- A theatrical production
- A play
- An opera
- A musical
- An exhibition
- A legal case report
- A computer program
- A web site
- A web page
- A blog post or comment
- A forum post or comment
- A tweet
- A Facebook post
- A written or oral statement
- And so forth.

It's worth noting that the W3C specification says that a reference to a creative work, as included within a `<cite>` element, may include the name of the work's author. However, the WHATWG specification for `<cite>` says the opposite: that a person's name must _never_ be included, under any circumstances.

To include a reference to the source of quoted material which is contained within a {{HTMLElement("blockquote")}} or {{HTMLElement("q")}} element, use the {{htmlattrxref("cite", "blockquote")}} attribute on the element.

Typically, browsers style the contents of a `<cite>` element in italics by default. To avoid this, apply the CSS {{cssxref("font-style")}} property to the `<cite>` element.

## Example

```html
<p>More information can be found in <cite>[ISO-0000]</cite>.</p>
```

The HTML above outputs:

{{EmbedLiveSample("Example", 640, 80)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The element {{HTMLElement("blockquote")}} for long quotations.
- The element {{HTMLElement("q")}} for inline quotations.
