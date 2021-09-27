---
title: NodeIterator.expandEntityReferences
slug: Web/API/NodeIterator/expandEntityReferences
tags:
  - API
  - DOM
  - Deprecated
  - NodeIterator
  - Property
browser-compat: api.NodeIterator.expandEntityReferences
---
{{APIRef("DOM")}} {{deprecated_header}}

The **`NodeIterator.expandEntityReferences`** read-only
property returns a boolean flag indicating whether or not the children of
entity reference nodes are visible to the {{domxref("NodeIterator")}}.

If this value is `false`, the children of entity reference nodes (as well as
all of their descendants) are rejected. This takes precedence over the value of the
{{domxref("NodeIterator.whatToShow")}} method and the associated filter.

## Syntax

```js
expand = nodeIterator.expandEntityReferences;
```

## Example

```js
var nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
expand = nodeIterator.expandEntityReferences;
```

## Specifications

This method was originally a part of [DOM Level 2 Traversal and Range](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/), but is absent in the current DOM specification.
This feature is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- The interface this property belongs to: {{domxref("NodeIterator")}}.
