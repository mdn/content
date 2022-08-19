---
title: TreeWalker.root
slug: Web/API/TreeWalker/root
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Property
  - TreeWalker
browser-compat: api.TreeWalker.root
---
{{ APIRef("DOM") }}

The **`TreeWalker.root`** read-only property returns the node
that is the root of what the TreeWalker traverses.

## Value

A {{domxref("Node")}} object.

## Examples

```js
const treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
root = treeWalker.root; // document.body in this case
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TreeWalker")}} interface.
