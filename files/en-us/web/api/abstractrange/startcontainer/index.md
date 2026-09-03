---
title: "AbstractRange: startContainer property"
short-title: startContainer
slug: Web/API/AbstractRange/startContainer
page-type: web-api-instance-property
browser-compat: api.AbstractRange.startContainer
---

{{APIRef("DOM")}}

The read-only **`startContainer`** property of the {{domxref("AbstractRange")}} interface returns the {{domxref("Node")}} in which the start of the range is located.

To change the start position, use the {{domxref("Range.setStart()")}} method or a similar one.

## Value

The {{domxref("Node")}} inside which the start position of the range is found.

## Example

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

const startRangeNode = range.startContainer;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
