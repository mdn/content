---
title: '<i>: The Italic element'
slug: Web/HTML/Element/i
tags:
  - Element
  - HTML
  - HTML text-level semantics
  - Reference
  - Web
  - em
browser-compat: html.elements.i
---

{{HTMLSidebar}}

The **`<i>`** [HTML](/en-US/docs/Web/HTML) element represents an italicized range of text, for reasons such as references, and technical terms, among others. 

{{EmbedInteractiveExample("pages/tabbed/i.html", "tabbed-shorter")}}

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

Historically, this tag was used to indicate italic text, frequently for purposes of emphasis, to support style guides, to make document references, to indicate stress in dialogue, and so forth.  `<p>Usage looked <i>like this</i></p>.`

However, this tag has been deprecated since 1999, and the modern approach is typically to use semantic elements indicating intent, rather than presentational elements to define appearance, so that readers with different needs can be supported.  Prefer tags like `<ref>`, `<cite>`, `<em>`, `<dfn>`, and so forth, as appropriate.

Direct support for specific formatting is best handled with CSS, through rules like [`font-style: italic`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style), instead.

## Examples

This example demonstrates using the `<i>` element to mark text that is in another language.

```html
<p>The Latin phrase <i lang="la">Veni, vidi, vici</i> is often mentioned in music, art, and literature.</p>
```

### Result

{{EmbedLiveSample("Examples")}}

## Technical Summary

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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("em")}}
- Other italicized elements: {{HTMLElement("var")}}, {{HTMLElement("dfn")}}, {{HTMLElement("cite")}}, {{HTMLElement("address")}}
