---
title: "Document: createRange() method"
short-title: createRange()
slug: Web/API/Document/createRange
page-type: web-api-instance-method
browser-compat: api.Document.createRange
---

{{APIRef("DOM")}}

The **`Document.createRange()`** method returns a new
{{domxref("Range")}} object whose start and end are offset 0 of the {{domxref("Document")}}
object on which it was called.

## Syntax

```js-nolint
createRange()
```

### Parameters

None.

### Return value

The created {{domxref("Range")}} object.

## Examples

```js
const range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
```

## Notes

Once a `Range` is created, you need to set its boundary points before you
can make use of most of its methods.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
