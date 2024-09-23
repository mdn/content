---
title: "TreeWalker: root property"
short-title: root
slug: Web/API/TreeWalker/root
page-type: web-api-instance-property
browser-compat: api.TreeWalker.root
---

{{ APIRef("DOM") }}

The **`TreeWalker.root`** read-only property returns the root {{domxref("Node")}} that the {{domxref("TreeWalker")}} traverses.

## Value

A {{domxref("Node")}} object.

## Examples

```js
const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
  false,
);
root = treeWalker.root; // document.body in this case
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TreeWalker")}} interface.
