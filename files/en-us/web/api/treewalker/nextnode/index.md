---
title: TreeWalker.nextNode()
slug: Web/API/TreeWalker/nextNode
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - DOM Reference
  - Method
  - TreeWalker
browser-compat: api.TreeWalker.nextNode
---
{{ APIRef("DOM") }}

The **`TreeWalker.nextNode()`** method moves the current
{{domxref("Node")}} to the next _visible_ node in the document order, and returns
the found node. It also moves the current node to this one. If no such node exists,
returns `null` and the current node is not changed.

## Syntax

```js
nextNode()
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
const node = treeWalker.nextNode(); // returns the first child of root, as it is the next node in document order
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TreeWalker")}} interface it belongs to.
