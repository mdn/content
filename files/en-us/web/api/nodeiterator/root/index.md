---
title: NodeIterator.root
slug: Web/API/NodeIterator/root
page-type: web-api-instance-property
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

## Value

A {{DOMxref("Node")}}.

## Examples

```js
const nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode(node) { return NodeFilter.FILTER_ACCEPT; } }
);
root = nodeIterator.root; // document.body in this case
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface it belongs to: {{domxref("NodeIterator")}}.
