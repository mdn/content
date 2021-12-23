---
title: TreeWalker.currentNode
slug: Web/API/TreeWalker/currentNode
tags:
  - API
  - DOM
  - Property
  - TreeWalker
browser-compat: api.TreeWalker.currentNode
---
{{ APIRef("DOM") }}

The **`TreeWalker.currentNode`** property represents the
{{domxref("Node")}} on which the {{domxref("TreeWalker")}} is currently pointing at.

## Syntax

```js
node = treeWalker.currentNode;
treeWalker.currentNode = node;
```

## Example

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
root = treeWalker.currentNode; // the root element as it is the first element!
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TreeWalker")}} interface.
