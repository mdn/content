---
title: target
slug: Web/SVG/Attribute/target
page-type: svg-attribute
browser-compat: svg.elements.a.target
---

{{SVGRef}}

The **`target`** attribute should be used when there are multiple possible targets for the ending resource, such as when the parent document is embedded within an HTML or XHTML document, or is viewed with a tabbed browser. This attribute specifies the name of the browsing context (e.g., a browser tab or an (X)HTML iframe or object element) into which a document is to be opened when the link is activated:

You can use this attribute with the following SVG elements:

- {{SVGElement("a")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}

text {
  font:
    20px Arial,
    Helvetica,
    sans-serif;
  fill: blue;
  text-decoration: underline;
}
```

```html
<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
  <a href="https://developer.mozilla.org" target="_self">
    <text x="0" y="20">Open link within iframe</text>
  </a>
  <a href="https://developer.mozilla.org" target="_blank">
    <text x="0" y="60">Open link in new tab or window</text>
  </a>
  <a href="https://developer.mozilla.org" target="_top">
    <text x="0" y="100">Open link in this tab or window</text>
  </a>
</svg>
```

{{EmbedLiveSample("Example", "300", "120")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>_self</code> | <code>_parent</code> | <code>_top</code> |
        <code>_blank</code> | <code>&#x3C;XML-Name></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>_self</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `_replace` {{deprecated_inline}}

  - : The current SVG image is replaced by the linked content in the same rectangular area in the same frame as the current SVG image.

    > [!NOTE]
    > This value was never well implemented, and the distinction between `_replace` and `_self` has been made redundant by changes in the HTML definition of browsing contexts. Use `_self` to replace the current SVG document.

- `_self`
  - : The current SVG image is replaced by the linked content in the same browsing context as the current SVG image.
- `_parent`
  - : The immediate parent browsing context of the SVG image is replaced by the linked content, if it exists and can be securely accessed from this document.
- `_top`
  - : The content of the full active window or tab is replaced by the linked content, if it exists and can be securely accessed from this document
- `_blank`
  - : A new un-named window or tab is requested for the display of the linked content, if this document can securely do so. If the user agent does not support multiple windows/tabs, the result is the same as \_top.
- `<XML-Name>`
  - : Specifies the name of the browsing context (tab, inline frame, object, etc.) for display of the linked content. If a context with this name already exists, and can be securely accessed from this document, it is re-used, replacing the existing content. If it does not exist, it is created (the same as '\_blank', except that it now has a name). The name must be a valid XML Name \[XML11], and should not start with an underscore (U+005F LOW LINE character), to meet the requirements of a valid browsing context name from HTML.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
