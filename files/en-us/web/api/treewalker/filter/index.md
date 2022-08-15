---
title: TreeWalker.filter
slug: Web/API/TreeWalker/filter
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Property
  - TreeWalker
browser-compat: api.TreeWalker.filter
---
{{ APIRef("DOM") }}

The **`TreeWalker.filter`** read-only property returns a
{{domxref("NodeFilter")}} that is the filtering object associated with the
{{domxref("TreeWalker")}}.

When creating the `TreeWalker`, the filter object is passed in as the third
parameter, and its method {{domxref("NodeFilter.acceptNode()")}} is called on every
single node to determine whether or not to accept it.

## Value

A {{domxref("NodeFilter")}} object.

## Examples

```js
const treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
nodeFilter = treeWalker.filter; // document.body in this case
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("TreeWalker")}} interface it belongs to.
