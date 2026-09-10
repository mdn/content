---
title: "AbstractRange: endContainer property"
short-title: endContainer
slug: Web/API/AbstractRange/endContainer
page-type: web-api-instance-property
browser-compat: api.AbstractRange.endContainer
---

{{APIRef("DOM")}}

The read-only **`endContainer`** property of the {{domxref("AbstractRange")}} interface returns the {{domxref("Node")}} in which the end of the range is located.

To change the end position, use the {{domxref("Range.setEnd()")}} method or a similar one.

## Value

The {{domxref("Node")}} which contains the last character of the range.

## Example

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

const endRangeNode = range.endContainer;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
