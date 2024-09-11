---
title: "Document: linkColor property"
short-title: linkColor
slug: Web/API/Document/linkColor
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Document.linkColor
---

{{APIRef("DOM")}} {{Deprecated_header}}

The **`Document.linkColor`** property gets/sets the color of
links within the document.

This property is deprecated. As an alternative, you can set the CSS
{{cssxref("color")}} property on either HTML anchor links ({{HtmlElement("a")}}) or on
{{cssxref(":link")}} pseudo-classes. Another alternative is
`document.body.link`, although this is [deprecated in HTML 4.01](https://www.w3.org/TR/html401/struct/global.html#adef-link).

## Value

A string representing the color as a word (e.g., `red`) or hexadecimal value (e.g., `#ff0000`).

When set to the `null` value, that `null` value is converted to the empty string (`""`), so `document.linkColor = null` is equivalent to `document.linkColor = ""`.

## Examples

```js
document.linkColor = "blue";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

The default value for this property in Mozilla Firefox is blue (`#0000ee` in
hexadecimal).

## See also

- {{domxref("document.vlinkColor")}}
- {{domxref("document.alinkColor")}}
