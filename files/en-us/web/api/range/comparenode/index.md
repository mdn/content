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

The **`Range.compareNode()`** returns a constant indicating the
position of the {{DOMxRef("Node")}}.

The possible values are:

- `NODE_BEFORE` (`0`)
  - : Node starts before the Range
- `NODE_AFTER` (`1`)
  - : Node ends after the Range
- `NODE_BEFORE_AND_AFTER` (`2`)
  - : Node starts before and ends after the Range
- `NODE_INSIDE` (`3`)
  - : Node starts after and ends before the Range, i.e. the Node is completely selected by
    the Range.

> **Warning:** This method [has been removed](/en-US/docs/Mozilla/Firefox/Releases/3/Site_compatibility) from [Gecko 1.9](/en-US/docs/Mozilla/Firefox/Releases/3) and
> will not exist in future versions of Firefox, which was the only browser implementing
> it; you should switch to {{DOMxRef("Range.compareBoundaryPoints()")}} as soon as
> possible.

The following function can be used as replacement:

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

## Syntax

```js-nolint
compareNode(referenceNode)
```

### Parameters

- `referenceNode`
  - : The {{DOMxRef("Node")}} to compare with the `Range`.

### Return value

A constant indicating the position of the {{DOMxRef("Node")}}.

## Examples

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
returnValue = range.compareNode(document.getElementsByTagName("p").item(0));
```

## Notes

This method is obsolete; you should use the W3C DOM
{{DOMxRef("Range.compareBoundaryPoints()")}} method.

## Specifications

This method is not standard and therefore not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
