---
title: '<small>: the side comment element'
slug: Web/HTML/Element/small
tags:
  - Element
  - HTML
  - HTML text-level semantics
  - Reference
  - Web
  - font-size
browser-compat: html.elements.small
---

{{HTMLRef}}

The **`<small>`** [HTML](/en-US/docs/Web/HTML) element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from `small` to `x-small`.

{{EmbedInteractiveExample("pages/tabbed/small.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Content categories</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, must have both a start tag and an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >, or any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >flow content</a
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

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Examples

### Basic usage

```html
<p>This is the first sentence.
 <small>This whole sentence is in small letters.</small>
</p>
```

{{EmbedLiveSample("Basic_usage")}}

### CSS alternative

```html
<p>This is the first sentence.
  <span style="font-size:0.8em">This whole sentence is in small
  letters.</span>
</p>
```

{{EmbedLiveSample("CSS_alternative")}}

## Notes

Although the `<small>` element, like the {{htmlelement("b")}} and {{htmlelement("i")}} elements, may be perceived to violate the principle of separation between structure and presentation, all three are valid in HTML. Authors are encouraged to use their best judgement when determining whether to use `<small>` or CSS.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("b")}}
- {{HTMLElement("sub")}} and {{HTMLElement("sup")}}
- {{HTMLElement("font")}}
- {{HTMLElement("style")}}
- HTML 4.01 Specification: [Font Styles](https://www.w3.org/TR/html4/present/graphics.html#h-15.2)
