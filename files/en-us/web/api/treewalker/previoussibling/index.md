---
title: TreeWalker.previousSibling()
slug: Web/API/TreeWalker/previousSibling
tags:
  - API
  - DOM
  - DOM Reference
  - Method
  - TreeWalker
  - createTreeWalker
  - treeWalker.previousSibling
browser-compat: api.TreeWalker.previousSibling
---
{{ APIRef("DOM") }}

The **`TreeWalker.previousSibling()`** method moves the current
{{domxref("Node")}} to its previous sibling, if any, and returns the found sibling. If
there is no such node, return `null` and the current node is not changed.

## Syntax

```js
node = treeWalker.previousSibling();
```

## Example

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
var node = treeWalker.previousSibling(); // returns null as there is no previous sibiling
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TreeWalker")}} interface it belongs to.
