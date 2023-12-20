---
title: "<rb>: The Ruby Base element"
slug: Web/HTML/Element/rb
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.rb
---

{{HTMLSidebar}}{{deprecated_header}}

The **`<rb>`** [HTML](/en-US/docs/Web/HTML) element is used to delimit the base text component of a {{HTMLElement("ruby") }} annotation, i.e. the text that is being annotated. One `<rb>` element should wrap each separate atomic segment of the base text.

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

- Ruby annotations are for showing pronunciation of East Asian characters, like using Japanese furigana or Taiwanese bopomofo characters. The `<rb>` element is used to separate out each segment of the ruby base text.
- Even though `<rb>` is not a {{glossary("void element")}}, it is common to just include the opening tag of each element in the source code, so that the ruby markup is less complex and easier to read. The browser can then fill in the full element in the rendered version.
- You need to include one {{htmlelement("rt")}} element for each base segment/`<rb>` element that you want to annotate.

## Examples

### Using rb

In this example, we provide an annotation for the original character equivalent of "Kanji":

```html
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

Note how we've included two `<rb>` elements, to delimit the two separate parts of the ruby base text. The annotation on the other hand is delimited by two {{htmlelement("rt")}} elements.

#### Result

{{EmbedLiveSample("Using_rb", "100%", 60)}}

### Separate annotations

Note that we could also write this example with the two base text parts annotated completely separately. In this case we don't need to include `<rb>` elements:

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Result

{{EmbedLiveSample('Separate annotations')}}

See the article about the {{HTMLElement("ruby")}} element for further examples.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>As a child of a {{htmlelement("ruby")}} element.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The end tag can be omitted if the element is immediately followed by an
        {{HTMLElement("rt")}}, {{HTMLElement("rtc")}}, or
        {{HTMLElement("rp")}} element or another
        <code>&#x3C;rb></code> element, or if there is no more content in the
        parent element.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>A {{HTMLElement("ruby")}} element.</td>
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

- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rtc")}}
