---
title: "Range: isPointInRange() method"
short-title: isPointInRange()
slug: Web/API/Range/isPointInRange
page-type: web-api-instance-method
browser-compat: api.Range.isPointInRange
---

{{ApiRef("DOM")}}

The **`isPointInRange()`** method of the {{domxref("Range")}} interface determines whether a specified point is within the {{domxref("Range")}}. The point is specified by a reference node and an offset within that node. It is equivalent to calling {{domxref("Range.comparePoint()")}} and checking if the result is `0`.

## Syntax

```js-nolint
isPointInRange(referenceNode, offset)
```

### Parameters

- `referenceNode`
  - : The {{domxref("Node")}} that the `offset` is relative to.
- `offset`
  - : An integer greater than or equal to zero describing the position inside `referenceNode` of the point to be checked. If `referenceNode` is a {{domxref("Node")}} of type {{domxref("Text")}}, {{domxref("Comment")}}, or {{domxref("CDATASection")}}, then `offset` is the number of characters from the start of `referenceNode`. For other {{domxref("Node")}} types, `offset` is the number of child nodes from the start of the `referenceNode`.

### Return value

A boolean.

## Examples

```js
const text = new Text("0123456789");

const thisRange = new Range();
thisRange.setStart(text, 1);
thisRange.setEnd(text, 6);

thisRange.isPointInRange(text, 3); // true
thisRange.isPointInRange(text, 0); // false
thisRange.isPointInRange(text, 6); // true
thisRange.isPointInRange(text, 7); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
