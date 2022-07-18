---
title: Range.endOffset
slug: Web/API/Range/endOffset
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Property
  - Range
browser-compat: api.Range.endOffset
---
{{ApiRef("DOM")}}

The **`Range.endOffset`** read-only property returns a number
representing where in the {{domxref("Range.endContainer")}} the {{domxref("Range")}}
ends.

If the `endContainer` is a {{domxref("Node")}} of type {{domxref("Text")}},
{{domxref("Comment")}}, or {{domxref("CDATASection")}}, then the offset is the number of
characters from the start of the `endContainer` to the boundary point of the
{{domxref("Range")}}. For other {{domxref("Node")}} types, the `endOffset` is
the number of child nodes between the start of the `endContainer` and the
boundary point of the {{domxref("Range")}}. This property is read-only. To change the
`endOffset` of a {{domxref("Range")}}, use one of the
{{domxref("Range.setEnd")}} methods.

## Value

A number.

## Examples

```js
const range = document.createRange();

range.setStart(startNode,startOffset);
range.setEnd(endNode,endOffset);
endRangeOffset = range.endOffset;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
