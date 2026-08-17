---
title: "AbstractRange: collapsed property"
short-title: collapsed
slug: Web/API/AbstractRange/collapsed
page-type: web-api-instance-property
browser-compat: api.AbstractRange.collapsed
---

{{APIRef("DOM")}}

The read-only **`collapsed`** property of the {{domxref("AbstractRange")}} interface returns `true` if the range's start position and end position are the same.

A collapsed range is empty (containing no content), and specifies a single point in a DOM tree. To collapse a range, see the {{domxref("Range.collapse()")}} method.

## Value

A boolean value which is `true` if the range is _collapsed_. A collapsed range is one in which the start and end positions are the same, resulting in a zero-character-long range.

## Example

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);

const isCollapsed = range.collapsed;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
