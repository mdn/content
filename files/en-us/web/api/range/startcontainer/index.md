---
title: Range.startContainer
slug: Web/API/Range/startContainer
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Property
  - Range
browser-compat: api.Range.startContainer
---
{{ApiRef("DOM")}}

The **`Range.startContainer`** read-only property returns the
{{domxref("Node")}} within which the `Range` starts. To change the start
position of a node, use one of the {{domxref("Range.setStart()")}} methods.

## Value

A {{domxref("Node")}} object.

## Examples

```js
range = document.createRange();
range.setStart(startNode,startOffset);
range.setEnd(endNode,endOffset);
startRangeNode = range.startContainer;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
