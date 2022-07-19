---
title: NodeIterator.previousNode()
slug: Web/API/NodeIterator/previousNode
page-type: web-api-instance-method
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
previousNode()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode(node) { return NodeFilter.FILTER_ACCEPT; } }
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
