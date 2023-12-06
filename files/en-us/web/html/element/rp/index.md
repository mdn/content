---
title: "<rp>: The Ruby Fallback Parenthesis element"
slug: Web/HTML/Element/rp
page-type: html-element
browser-compat: html.elements.rp
---

{{HTMLSidebar}}

The **`<rp>`** [HTML](/en-US/docs/Web/HTML) element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the {{HTMLElement("ruby") }} element. One `<rp>` element should enclose each of the opening and closing parentheses that wrap the {{HTMLElement("rt")}} element that contains the annotation's text.

{{EmbedInteractiveExample("pages/tabbed/rp.html", "tabbed-shorter")}}

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

- Ruby annotations are for showing pronunciation of East Asian characters, like using Japanese furigana or Taiwanese bopomofo characters. The `<rp>` element is used in the case of lack of {{HTMLElement("ruby")}} element support; the `<rp>` content provides what should be displayed in order to indicate the presence of a ruby annotation, usually parentheses.

## Examples

### Using ruby annotations

This example uses ruby annotations to display the [Romaji](https://en.wikipedia.org/wiki/Romaji) equivalents for each character.

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

#### Result

{{EmbedLiveSample("Using_ruby_annotations", 600, 60)}}

See the article about the {{HTMLElement("ruby")}} element for further examples.

### Without ruby support

If your browser does not support ruby annotations, the result looks like this instead:

```html hidden
漢 (Kan) 字 (ji)
```

```css hidden
body {
  font-size: 22px;
}
```

{{EmbedLiveSample("Without_ruby_support", 600, 60)}}

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
      <td>Text</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The end tag can be omitted if the element is immediately followed by an
        {{HTMLElement("rt")}} or another <code>&#x3C;rp></code> element,
        or if there is no more content in the parent element.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{HTMLElement("ruby")}} element. <code>&#x3C;rp></code> must
        be positioned immediately before or after an
        {{HTMLElement("rt")}} element.
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

- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
