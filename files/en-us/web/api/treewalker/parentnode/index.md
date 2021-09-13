---
title: TreeWalker.parentNode()
slug: Web/API/TreeWalker/parentNode
tags:
  - API
  - DOM
  - DOM Reference
  - Method
  - TreeWalker
browser-compat: api.TreeWalker.parentNode
---
{{ APIRef("DOM") }}

The **`TreeWalker.parentNode()`** method moves the current
{{domxref("Node")}} to the first _visible_ ancestor node in the document order,
and returns the found node. If no such node exists, or if it is above the
`TreeWalker`'s _root node_, returns `null` and the current
node is not changed.

## Syntax

```js
node = treeWalker.parentNode();
```

## Example

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
var node = treeWalker.parentNode(); // returns null as there is no parent
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TreeWalker")}} interface it belongs to.
