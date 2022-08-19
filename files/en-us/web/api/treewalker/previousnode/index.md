---
title: TreeWalker.previousNode()
slug: Web/API/TreeWalker/previousNode
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - DOM Reference
  - Method
  - TreeWalker
browser-compat: api.TreeWalker.previousNode
---
{{ APIRef("DOM") }}

The **`TreeWalker.previousNode()`** method moves the current
{{domxref("Node")}} to the previous _visible_ node in the document order, and
returns the found node. It also moves the current node to this one. If no such node
exists,or if it is before that the _root node_ defined at the object
construction, returns `null` and the current node is not changed.

## Syntax

```js
previousNode()
```

### Parameters

None.

### Return value

A {{domxref("Node")}} object or `null`.

## Examples

```js
const treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
const node = treeWalker.previousNode(); // returns null as there is no parent
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TreeWalker")}} interface it belongs to.
