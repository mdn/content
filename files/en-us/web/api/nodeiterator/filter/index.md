---
title: NodeIterator.filter
slug: Web/API/NodeIterator/filter
tags:
  - API
  - DOM
  - NodeIterator
  - Property
browser-compat: api.NodeIterator.filter
---
{{APIRef("DOM")}}

The **`NodeIterator.filter`** read-only method returns a
{{domxref("NodeFilter")}} object, that is an object implement an
`acceptNode(node)` method, used to screen nodes.

When creating the {{domxref("NodeIterator")}}, the filter object is passed in as the
third parameter, and the object method `acceptNode(node)` is
called on every single node to determine whether or not to accept it. This function
should return the constant `NodeFilter.FILTER_ACCEPT` for cases when the
node should be accepted and `NodeFilter.FILTER_REJECT` for cases when the
node should be rejected.

## Syntax

```js
nodeFilter = nodeIterator.filter;
```

## Example

```js
const nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
nodeFilter = nodeIterator.filter;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface this property belongs to: {{domxref("NodeIterator")}}.
