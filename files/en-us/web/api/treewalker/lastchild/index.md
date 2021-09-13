---
title: TreeWalker.lastChild()
slug: Web/API/TreeWalker/lastChild
tags:
  - API
  - DOM
  - DOM Reference
  - Method
  - TreeWalker
browser-compat: api.TreeWalker.lastChild
---
{{ APIRef("DOM") }}

The **`TreeWalker.lastChild()`** method moves the current
{{domxref("Node")}} to the last _visible_ child of the current node, and returns
the found child. It also moves the current node to this child. If no such child exists,
returns `null` and the current node is not changed.

## Syntax

```js
node = treeWalker.lastChild();
```

## Example

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
var node = treeWalker.lastChild(); // returns the last visible child of the root element
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TreeWalker")}} interface it belongs to.
