---
title: "AbstractRange: startOffset property"
short-title: startOffset
slug: Web/API/AbstractRange/startOffset
page-type: web-api-instance-property
browser-compat: api.AbstractRange.startOffset
---

{{APIRef("DOM")}}

The read-only **`startOffset`** property of the {{domxref("AbstractRange")}} interface returns the offset into the start node of the range's start position.

To change the start position, use the {{domxref("Range.setStart()")}} method or a similar one.

## Value

An integer value indicating the number of characters into the {{domxref("Node")}} indicated by {{domxref("AbstractRange.startContainer", "startContainer")}} at which the first character of the range is located.

If the `startContainer` is a {{domxref("Node")}} of type {{domxref("Text")}}, {{domxref("Comment")}}, or {{domxref("CDATASection")}}, then the offset is the number of characters from the start of the `startContainer` to the boundary point of the range. For other {{domxref("Node")}} types, the `startOffset` is the number of child nodes between the start of the `startContainer` and the boundary point of the range.

## Example

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

const startRangeOffset = range.startOffset;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
