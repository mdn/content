---
title: Range.startOffset
slug: Web/API/Range/startOffset
tags:
  - API
  - DOM
  - Property
  - Range
browser-compat: api.Range.startOffset
---
{{ApiRef("DOM")}}

The **`Range.startOffset`** read-only property returns a number
representing where in the `startContainer` the `Range` starts.

If the `startContainer` is a {{domxref("Node")}} of type
{{domxref("Text")}}, {{domxref("Comment")}}, or {{domxref("CDATASection")}}, then the
offset is the number of characters from the start of the `startContainer` to
the boundary point of the {{domxref("Range")}}. For other {{domxref("Node")}} types, the
`startOffset` is the number of child nodes between the start of the
`startContainer` and the boundary point of the {{domxref("Range")}}.

To change the `startOffset` of a {{domxref("Range")}}, use the
{{domxref("Range.setStart")}} method.

## Syntax

```js
startRangeOffset = range.startOffset;
```

## Example

```js
var range = document.createRange();
range.setStart(startNode,startOffset);
range.setEnd(endNode,endOffset);
var startRangeOffset = range.startOffset;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
