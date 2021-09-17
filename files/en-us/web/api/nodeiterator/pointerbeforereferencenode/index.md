---
title: NodeIterator.pointerBeforeReferenceNode
slug: Web/API/NodeIterator/pointerBeforeReferenceNode
tags:
  - API
  - DOM
  - Experimental
  - NodeIterator
  - Property
browser-compat: api.NodeIterator.pointerBeforeReferenceNode
---
{{APIRef("DOM")}} {{SeeCompatTable}}

The **`NodeIterator.pointerBeforeReferenceNode`** read-only
property returns a boolean flag that indicates whether the
{{domxref("NodeFilter")}} is anchored before (if this value is `true`) or
after (if this value is `false`) the anchor node indicated by the
{{domxref("NodeIterator.referenceNode")}} property.

## Syntax

```js
flag = nodeIterator.pointerBeforeReferenceNode;
```

## Example

```js
var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
flag = nodeIterator.pointerBeforeReferenceNode;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface it belongs to: {{domxref("NodeIterator")}}
