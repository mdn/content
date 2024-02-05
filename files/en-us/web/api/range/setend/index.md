---
title: "Range: setEnd() method"
short-title: setEnd()
slug: Web/API/Range/setEnd
page-type: web-api-instance-method
browser-compat: api.Range.setEnd
---

{{ApiRef("DOM")}}

The **`Range.setEnd()`** method sets the end position of a {{
  domxref("Range") }} to be located at the given offset into the specified node x.Setting
the end point above (higher in the document) than the start point will result in a
collapsed range with the start and end points both set to the specified end position.

## Syntax

```js-nolint
setEnd(endNode, endOffset)
```

### Parameters

- `endNode`
  - : The {{ domxref("Node") }} inside which the {{ domxref("Range") }} should end.
- `endOffset`
  - : An integer greater than or equal to zero representing the offset for the end of the `Range` from the start of `endNode`.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidNodeTypeError` {{domxref("DOMException")}}
  - : The node specified by `endNode` is a doctype node; range endpoints cannot be located inside a doctype node.
- `IndexSizeError` {{domxref("DOMException")}}
  - : The value specified by `endOffset` is either greater than or equal to the length of the node or is less than zero.

## Usage notes

If the `endNode` is a {{domxref("Node")}} of type {{domxref("Text")}},
{{domxref("Comment")}}, or {{domxref("CDataSection")}}, then `endOffset` is
the number of characters from the start of `endNode`. For other
{{domxref("Node")}} types, `endOffset` is the number of child nodes between
the start of the `endNode`.

## Examples

```js
const range = document.createRange();
const endNode = document.getElementsByTagName("p").item(3);
const endOffset = endNode.childNodes.length;
range.setEnd(endNode, endOffset);
```

> **Note:** `setEnd()` is commonly used in conjunction with
> {{domxref("Range.setStart", "setStart()")}} to fully configure a range.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
