---
title: "NodeIterator: nextNode() method"
short-title: nextNode()
slug: Web/API/NodeIterator/nextNode
page-type: web-api-instance-method
browser-compat: api.NodeIterator.nextNode
---

{{APIRef("DOM")}}

The **`NodeIterator.nextNode()`** method returns the next node
in the set represented by the {{domxref("NodeIterator")}} and advances the position of
the iterator within the set. The first call to `nextNode()` returns the
first node in the set.

This method returns `null` when there are no nodes left in the set.

In old browsers, as specified in old versions of the specifications, the method may
throws the `INVALID_STATE_ERR` {{domxref("DOMException")}} if this method
is called after the {{domxref("NodeIterator.detach()")}} method. Recent browsers never
throw.

## Syntax

```js-nolint
nextNode()
```

### Parameters

None.

### Return value

A {{domxref("Node")}} representing the node after the current node in the set represented by this `NodeIterator`, or `null` if the current node is the last node in the set.

## Examples

```js
const nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
);
currentNode = nodeIterator.nextNode(); // returns the next node
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface it belongs to: {{domxref("NodeIterator")}}.
