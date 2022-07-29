---
title: TreeWalker.nextSibling()
slug: Web/API/TreeWalker/nextSibling
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - DOM Reference
  - Method
  - TreeWalker
browser-compat: api.TreeWalker.nextSibling
---
{{ APIRef("DOM") }}

The **`TreeWalker.nextSibling()`** method moves the current
{{domxref("Node")}} to its next sibling, if any, and returns the found sibling. If there
is no such node, return `null` and the current node is not changed.

## Syntax

```js
nextSibling()
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
treeWalker.firstChild();
const node = treeWalker.nextSibling(); // returns null if the first child of the root element has no sibling
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TreeWalker")}} interface it belongs to.
