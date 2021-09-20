---
title: NodeIterator.previousNode()
slug: Web/API/NodeIterator/previousNode
tags:
  - API
  - DOM
  - Method
  - NodeIterator
browser-compat: api.NodeIterator.previousNode
---
{{APIRef("DOM")}}

The **`NodeIterator.previousNode()`** method returns the
previous node in the set represented by the {{domxref("NodeIterator")}} and moves the
position of the iterator backwards within the set.

This method returns `null` when the current node is the first node in the
set.

In old browsers, as specified in old versions of the specifications, the method may
throws the `INVALID_STATE_ERR` {{domxref("DOMException")}} if this method
is called after the {{domxref("NodeIterator.detach()")}}method. Recent browsers never
throw.

## Syntax

```js
node = nodeIterator.previousNode();
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
previousNode = nodeIterator.previousNode(); // same result, since we backtracked to the previous node
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface it belongs to: {{domxref("NodeIterator")}}.
