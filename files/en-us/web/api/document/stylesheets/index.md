---
title: "Document: styleSheets property"
short-title: styleSheets
slug: Web/API/Document/styleSheets
page-type: web-api-instance-property
browser-compat: api.Document.styleSheets
---

{{APIRef("CSSOM")}}

The **`styleSheets`** read-only property of the {{domxref("Document")}} interface returns a {{domxref('StyleSheetList')}} of {{domxref('CSSStyleSheet')}} objects, for stylesheets explicitly linked into or embedded in a document.

## Value

The returned list is ordered as follows:

- StyleSheets retrieved from {{HTTPHeader("Link")}} headers are placed first, sorted in header order.
- StyleSheets retrieved from the DOM are placed after, sorted in [tree order](https://dom.spec.whatwg.org/#concept-tree-order).

## Examples

```js
function getStyleSheet(unique_title) {
  for (const sheet of document.styleSheets) {
    if (sheet.title === unique_title) {
      return sheet;
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
