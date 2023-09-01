---
title: "<noscript>: The Noscript element"
slug: Web/HTML/Element/noscript
page-type: html-element
browser-compat: html.elements.noscript
---

{{HTMLSidebar}}

The **`<noscript>`** [HTML](/en-US/docs/Web/HTML) element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#metadata_content"
          >Metadata content</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        When scripting is disabled and when it is a descendant of the
        {{HTMLElement("head")}} element: in any order, zero or more
        {{HTMLElement("link")}} elements, zero or more
        {{HTMLElement("style")}} elements, and zero or more
        {{HTMLElement("meta")}} elements.<br />When scripting is
        disabled and when it isn't a descendant of the
        {{HTMLElement("head")}} element: any
        <a
          href="/en-US/docs/Web/HTML/Content_categories#transparent_content_model"
          >transparent content</a
        >, but no <code>&#x3C;noscript></code> element must be among its
        descendants.<br />Otherwise: flow content or phrasing content.
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
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >, if there are no ancestor <code>&#x3C;noscript></code> element, or in
        a {{HTMLElement("head")}} element (but only for an HTML
        document), here again if there are no ancestor
        <code>&#x3C;noscript></code> element.
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
      <td>No <code>role</code> permitted</td>
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

```html
<noscript>
  <!-- anchor linking to external file -->
  <a href="https://www.mozilla.org/">External Link</a>
</noscript>
<p>Rocks!</p>
```

### Result with scripting enabled

Rocks!

### Result with scripting disabled

[External Link](https://www.mozilla.org/)

Rocks!

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
