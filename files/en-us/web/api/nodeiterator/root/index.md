---
title: NodeIterator.root
slug: Web/API/NodeIterator/root
tags:
  - API
  - DOM
  - NodeIterator
  - Property
browser-compat: api.NodeIterator.root
---
{{APIRef("DOM")}}

The **`NodeIterator.root`** read-only property represents the
{{DOMxref("Node")}} that is the root of what the {{DOMxref("NodeIterator")}}
traverses.

## Syntax

```js
root = nodeIterator.root;
```

## Example

```js
var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
root = nodeIterator.root; // document.body in this case
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface it belongs to: {{domxref("NodeIterator")}}.
