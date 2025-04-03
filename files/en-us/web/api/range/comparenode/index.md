---
title: "Range: compareNode() method"
short-title: compareNode()
slug: Web/API/Range/compareNode
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.Range.compareNode
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_Header}}

The **`compareNode()`** method of the {{domxref("Range")}} interface returns a constant indicating the
position of the {{DOMxRef("Node")}}.

## Syntax

```js-nolint
compareNode(referenceNode)
```

### Parameters

- `referenceNode`
  - : The {{DOMxRef("Node")}} to compare with the `Range`.

### Return value

A constant indicating the position of the {{DOMxRef("Node")}}. The possible values are:

- `NODE_BEFORE` (`0`)
  - : Node starts before the Range
- `NODE_AFTER` (`1`)
  - : Node ends after the Range
- `NODE_BEFORE_AND_AFTER` (`2`)
  - : Node starts before and ends after the Range
- `NODE_INSIDE` (`3`)
  - : Node starts after and ends before the Range, i.e., the Node is completely selected by
    the Range.

## Examples

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
returnValue = range.compareNode(document.getElementsByTagName("p").item(0));
```

## Notes

This method is non-standard. The following function can be used as replacement:

```js
function rangeCompareNode(range, node) {
  const nodeRange = node.ownerDocument.createRange();
  try {
    nodeRange.selectNode(node);
  } catch (e) {
    nodeRange.selectNodeContents(node);
  }
  const nodeIsBefore =
    range.compareBoundaryPoints(Range.START_TO_START, nodeRange) === 1;
  const nodeIsAfter =
    range.compareBoundaryPoints(Range.END_TO_END, nodeRange) === -1;

  if (nodeIsBefore && !nodeIsAfter) return 0;
  if (!nodeIsBefore && nodeIsAfter) return 1;
  if (nodeIsBefore && nodeIsAfter) return 2;

  return 3;
}
```

## Specifications

This method is not standard and therefore not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
