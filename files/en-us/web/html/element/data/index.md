---
title: '<data>: The Data element'
slug: Web/HTML/Element/data
tags:
  - Element
  - HTML
  - HTML text-level semantics
  - Reference
  - Web
browser-compat: html.elements.data
---

{{HTMLRef}}

The **`<data>`** [HTML](/en-US/docs/Web/HTML) element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the {{HTMLElement("time")}} element must be used.

{{EmbedInteractiveExample("pages/tabbed/data.html", "tabbed-shorter")}}

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
      <td>{{domxref("HTMLDataElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("value")}}
  - : This attribute specifies the machine-readable translation of the content of the element.

## Examples

The following example displays product names but also associates each name with a product number.

```html
<p>New Products</p>
<ul>
 <li><data value="398">Mini Ketchup</data></li>
 <li><data value="399">Jumbo Ketchup</data></li>
 <li><data value="400">Mega Jumbo Ketchup</data></li>
</ul>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML {{HTMLElement("time")}} element.
