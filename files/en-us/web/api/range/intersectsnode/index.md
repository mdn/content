---
title: "Range: intersectsNode() method"
short-title: intersectsNode()
slug: Web/API/Range/intersectsNode
page-type: web-api-instance-method
browser-compat: api.Range.intersectsNode
---

{{ApiRef("DOM")}}

The **`Range.intersectsNode()`** method returns a boolean
indicating whether the given {{domxref("Node")}} intersects the {{domxref("Range")}}.

## Syntax

```js-nolint
intersectsNode(referenceNode)
```

### Parameters

- `referenceNode`
  - : The {{domxref("Node")}} to compare with the {{domxref("Range")}}.

### Return value

A boolean.

## Examples

```js
const range = document.createRange();

range.selectNode(document.getElementsByTagName("div").item(0));
const intersectingNode = range.intersectsNode(
  document.getElementsByTagName("p").item(0),
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)
