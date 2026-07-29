---
title: "AbstractRange: endOffset property"
short-title: endOffset
slug: Web/API/AbstractRange/endOffset
page-type: web-api-instance-property
browser-compat: api.AbstractRange.endOffset
---

{{APIRef("DOM")}}

The **`endOffset`** property of the {{domxref("AbstractRange")}} interface returns the offset into the end node of the range's end position.

To change the end position, use the {{domxref("Range.setEnd()")}} method or a similar one.

## Value

An integer value indicating the number of characters into the {{domxref("Node")}} indicated by {{domxref("AbstractRange.endContainer", "endContainer")}} at which the final character of the range is located.

If the `endContainer` is a {{domxref("Node")}} of type {{domxref("Text")}}, {{domxref("Comment")}}, or {{domxref("CDATASection")}}, then the offset is the number of characters from the start of the `endContainer` to the boundary point of the range. For other {{domxref("Node")}} types, the `endOffset` is the number of child nodes between the start of the `endContainer` and the boundary point of the range.

## Example

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

const endRangeOffset = range.endOffset;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
