---
title: "<span>: The Content Span element"
slug: Web/HTML/Element/span
page-type: html-element
browser-compat: html.elements.span
---

{{HTMLSidebar}}

The **`<span>`** [HTML](/en-US/docs/Web/HTML) element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the [`class`](/en-US/docs/Web/HTML/Global_attributes/class) or [`id`](/en-US/docs/Web/HTML/Global_attributes/id) attributes), or because they share attribute values, such as [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang). It should be used only when no other semantic element is appropriate. `<span>` is very much like a {{HTMLElement("div")}} element, but {{HTMLElement("div")}} is a [block-level element](/en-US/docs/Glossary/Block-level_content) whereas a `<span>` is an [inline-level element](/en-US/docs/Glossary/Inline-level_content).

{{EmbedInteractiveExample("pages/tabbed/span.html", "tabbed-shorter")}}

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Example

### Example 1

#### HTML

```html
<p><span>Some text</span></p>
```

#### Result

{{EmbedLiveSample('Example_1')}}

### Example 2

#### HTML

```html
<li>
  <span>
    <a href="portfolio.html" target="_blank">See my portfolio</a>
  </span>
</li>
```

#### CSS

```css
li span {
  background: gold;
}
```

#### Result

{{EmbedLiveSample('Example_2')}}

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
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
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
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >, or any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
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
      <td>
        {{domxref("HTMLSpanElement")}}
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HTMLElement("div")}} element
