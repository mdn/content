---
title: "TreeWalker: previousSibling() method"
short-title: previousSibling()
slug: Web/API/TreeWalker/previousSibling
page-type: web-api-instance-method
browser-compat: api.TreeWalker.previousSibling
---

{{ APIRef("DOM") }}

The **`TreeWalker.previousSibling()`** method moves the current
{{domxref("Node")}} to its previous sibling, if any, and returns the found sibling. If
there is no such node, it returns `null` and the current node is not changed.

## Syntax

```js-nolint
previousSibling()
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
  {
    acceptNode(node) {
      return NodeFilter.FILTER_ACCEPT;
    },
  },
  false,
);
const node = treeWalker.previousSibling(); // returns null as there is no previous sibling
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TreeWalker")}} interface it belongs to.
