---
title: "TreeWalker: whatToShow property"
short-title: whatToShow
slug: Web/API/TreeWalker/whatToShow
page-type: web-api-instance-property
browser-compat: api.TreeWalker.whatToShow
---

{{ APIRef("DOM") }}

The **`TreeWalker.whatToShow`** read-only property returns a
bitmask that indicates the types of
[nodes](/en-US/docs/Web/API/Node) to show. Non-matching nodes are skipped, but their
children may be included, if relevant.

## Value

A non-negative integer. For the list of possible values, see [`document.createTreeWalker()`](/en-US/docs/Web/API/Document/createTreeWalker#whattoshow).

## Examples

```js
const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT + NodeFilter.SHOW_COMMENT + NodeFilter.SHOW_TEXT,
  { acceptNode: (node) => NodeFilter.FILTER_ACCEPT },
  false,
);
if (
  treeWalker.whatToShow === NodeFilter.SHOW_ALL ||
  treeWalker.whatToShow % (NodeFilter.SHOW_COMMENT * 2) >=
    NodeFilter.SHOW_COMMENT
) {
  // treeWalker will show comments
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TreeWalker")}} interface.
