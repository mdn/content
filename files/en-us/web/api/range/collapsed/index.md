---
title: "Range: collapsed property"
short-title: collapsed
slug: Web/API/Range/collapsed
page-type: web-api-instance-property
browser-compat: api.Range.collapsed
---

{{ APIRef("DOM") }}

The **`Range.collapsed`** read-only property returns a
boolean flag indicating whether the start and end points of the
{{domxref("Range")}} are at the same position. It returns `true` if the start
and end boundary points of the {{domxref("Range")}} are the same point in the DOM,
`false` if not.

A collapsed {{domxref("Range")}} is empty (containing no content), and specifies a
single point in a DOM tree. To collapse a range, see the {{domxref("Range.collapse()")}}
method.

## Value

A boolean.

## Examples

```js
let range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
isCollapsed = range.collapsed;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
