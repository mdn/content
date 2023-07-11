---
title: "NodeIterator: pointerBeforeReferenceNode property"
short-title: pointerBeforeReferenceNode
slug: Web/API/NodeIterator/pointerBeforeReferenceNode
page-type: web-api-instance-property
browser-compat: api.NodeIterator.pointerBeforeReferenceNode
---

{{APIRef("DOM")}}

The **`NodeIterator.pointerBeforeReferenceNode`** read-only
property returns a boolean flag that indicates whether the
{{domxref("NodeFilter")}} is anchored before (if this value is `true`) or
after (if this value is `false`) the anchor node indicated by the
{{domxref("NodeIterator.referenceNode")}} property.

## Value

A boolean.

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
flag = nodeIterator.pointerBeforeReferenceNode;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface it belongs to: {{domxref("NodeIterator")}}
