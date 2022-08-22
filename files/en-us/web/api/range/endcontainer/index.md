---
title: Range.endContainer
slug: Web/API/Range/endContainer
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Property
  - Range
browser-compat: api.Range.endContainer
---
{{ApiRef("DOM")}}

The **`Range.endContainer`** read-only property returns the
{{domxref("Node")}} within which the {{domxref("Range")}} ends. To change the end
position of a node, use the {{domxref("Range.setEnd()")}} method or a similar one.

## Value

A {{domxref("Node")}} object.

## Examples

```js
const range = document.createRange();

range.setStart(startNode,startOffset);
range.setEnd(endNode,endOffset);
endRangeNode = range.endContainer;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
