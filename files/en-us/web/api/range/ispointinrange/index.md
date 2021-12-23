---
title: Range.isPointInRange()
slug: Web/API/Range/isPointInRange
tags:
  - API
  - DOM
  - Experimental
  - Method
  - Range
  - Reference
browser-compat: api.Range.isPointInRange
---
{{ApiRef("DOM")}}{{SeeCompatTable}}

The **`Range.isPointInRange()`** method returns a boolean
indicating whether the given point is in the {{domxref("Range")}}. It returns
`true` if the point (cursor position) at `offset` within
`ReferenceNode` is within this range.

## Syntax

```js
bool = range.isPointInRange( referenceNode, offset )
```

### Parameters

- _referenceNode_
  - : The {{domxref("Node")}} to compare with the {{domxref("Range")}}.
- _offset_
  - : The offset into {{domxref("Node")}} of the point to compare with the
    {{domxref("Range")}}.

## Example

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
bool = range.isPointInRange(document.getElementsByTagName("p").item(0),1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
