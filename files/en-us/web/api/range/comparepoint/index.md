---
title: "Range: comparePoint() method"
short-title: comparePoint()
slug: Web/API/Range/comparePoint
page-type: web-api-instance-method
browser-compat: api.Range.comparePoint
---

{{ApiRef("DOM")}}

The **`Range.comparePoint()`** method returns `-1`,
`0`, or `1` depending on whether the `referenceNode` is
before, the same as, or after the {{domxref("Range")}}.

If the _reference node_ is a {{domxref("Node")}} of type {{domxref("Text")}},
{{domxref("Comment")}}, or {{domxref("CDATASection")}}, then offset is the number of
characters from the start of _reference node_. For other {{domxref("Node")}}
types, offset is the number of child nodes between the start of the _reference
node_.

## Syntax

```js-nolint
comparePoint(referenceNode, offset)
```

### Parameters

- `referenceNode`
  - : The {{domxref("Node")}} to compare with the {{domxref("Range")}}.
- `offset`
  - : An integer greater than or equal to zero representing the offset inside the
    _referenceNode_.

### Return value

Returns `-1`, `0`, or `1`.

## Examples

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
returnValue = range.comparePoint(document.getElementsByTagName("p").item(0), 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
