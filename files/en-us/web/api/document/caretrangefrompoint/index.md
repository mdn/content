---
title: Document.caretRangeFromPoint()
slug: Web/API/Document/caretRangeFromPoint
page-type: web-api-instance-method
tags:
  - API
  - CSSOM View
  - Document
  - HTML DOM
  - Method
  - Non-standard
  - Reference
  - caretRangeFromPoint
browser-compat: api.Document.caretRangeFromPoint
---

{{APIRef("DOM")}}{{Non-standard_header}}

The **`caretRangeFromPoint()`** method of the
{{domxref("Document")}} interface returns a {{domxref("Range")}} object for the document
fragment under the specified coordinates.

This method is the WebKit-proprietary implementation of the {{domxref("Document.caretPositionFromPoint")}} method.

## Syntax

```js-nolint
caretRangeFromPoint(x, y)
```

### Parameters

- `x`
  - : A horizontal position within the current viewport.
- `y`
  - : A vertical position within the current viewport.

### Return value

One of the following:

- A {{domxref("Range")}}.
- `Null`, if _x_ or _y_ are negative, outside viewport,
  or there is no text entry node.

## Examples

Visit the {{domxref("Document.caretPositionFromPoint#Examples", "Document.caretPositionFromPoint")}} page to view a live sample of this method.

## Browser compatibility

{{Compat}}
