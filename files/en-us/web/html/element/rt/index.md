---
title: '<rt>: The Ruby Text element'
slug: Web/HTML/Element/rt
tags:
  - Element
  - HTML
  - HTML text-level semantics
  - Reference
  - Ruby
  - Text
  - Web
browser-compat: html.elements.rt
---

{{HTMLRef}}

The **`<rt>`** [HTML](/en-US/docs/Web/HTML) element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The `<rt>` element must always be contained within a {{HTMLElement("ruby")}} element.

{{EmbedInteractiveExample("pages/tabbed/rt.html", "tabbed-shorter")}}

See the article about the {{HTMLElement("ruby")}} element for more examples.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>None.</td>
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
      <td>
        The end tag may be omitted if the <code>&#x3C;rt></code> element is
        immediately followed by an <code>&#x3C;rt></code> or
        {{HTMLElement("rp")}} element, or if there is no more content in
        the parent element
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>A {{HTMLElement("ruby")}} element.</td>
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

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Examples

### Using ruby annotations

This simple example provides Romaji transliteration for the kanji characters within the {{HTMLElement("ruby")}} element:

```html
<ruby>
  漢 <rt>Kan</rt>
  字 <rt>ji</rt>
</ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

The output looks like this in your browser:

{{EmbedLiveSample("Using_ruby_annotations", 600, 60)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("ruby")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
- {{CSSXRef("text-transform", "text-transform: full-size-kana")}}
