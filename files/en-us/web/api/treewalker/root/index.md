---
title: TreeWalker.root
slug: Web/API/TreeWalker/root
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

## Syntax

```js
root = TreeWalker.root;
```

## Example

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
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
