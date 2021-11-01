---
title: NodeIterator.nextNode()
slug: Web/API/NodeIterator/nextNode
tags:
  - API
  - DOM
  - Method
  - NodeIterator
browser-compat: api.NodeIterator.nextNode
---
{{APIRef("DOM")}}

The **`NodeIterator.nextNode()`** method returns the next node
in the set represented by the {{domxref("NodeIterator")}} and advances the position of
the iterator within the set.  The first call to `nextNode()` returns the
first node in the set.

This method returns `null` when there are no nodes left in the set.

In old browsers, as specified in old versions of the specifications, the method may
throws the `INVALID_STATE_ERR` {{domxref("DOMException")}} if this method
is called after the {{domxref("NodeIterator.detach()")}}method. Recent browsers never
throw.

## Syntax

```js
node = nodeIterator.nextNode();
```

## Example

```js
var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false // this optional argument is not used any more
);
currentNode = nodeIterator.nextNode(); // returns the next node
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface it belongs to: {{domxref("NodeIterator")}}.
