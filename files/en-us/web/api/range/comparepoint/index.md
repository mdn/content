---
title: "Range: comparePoint() method"
short-title: comparePoint()
slug: Web/API/Range/comparePoint
page-type: web-api-instance-method
browser-compat: api.Range.comparePoint
---

{{ApiRef("DOM")}}

The **`comparePoint()`** method of the {{domxref("Range")}} interface determines whether a specified point is before, within, or after the {{domxref("Range")}}. The point is specified by a reference node and an offset within that node.

## Syntax

```js-nolint
comparePoint(referenceNode, offset)
```

### Parameters

- `referenceNode`
  - : The {{domxref("Node")}} that the `offset` is relative to.
- `offset`
  - : An integer greater than or equal to zero describing the position inside `referenceNode` of the point to be checked. If `referenceNode` is a {{domxref("Node")}} of type {{domxref("Text")}}, {{domxref("Comment")}}, or {{domxref("CDATASection")}}, then `offset` is the number of characters from the start of `referenceNode`. For other {{domxref("Node")}} types, `offset` is the number of child nodes from the start of the `referenceNode`.

### Return value

A number.

- `-1` if the point specified by the `referenceNode` and `offset` is before the start of this `Range`.
- `0` if the point specified by the `referenceNode` and `offset` is within this `Range` (including the start and end points of the range).
- `1` if the point specified by the `referenceNode` and `offset` is after the end of this `Range`.

## Examples

```js
const text = new Text("0123456789");

const thisRange = new Range();
thisRange.setStart(text, 1);
thisRange.setEnd(text, 6);

thisRange.comparePoint(text, 3); // 0
thisRange.comparePoint(text, 0); // -1
thisRange.comparePoint(text, 6); // 0
thisRange.comparePoint(text, 7); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
