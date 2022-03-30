---
title: TreeWalker.expandEntityReferences
slug: Web/API/TreeWalker/expandEntityReferences
tags:
  - API
  - DOM
  - Deprecated
  - Property
  - TreeWalker
browser-compat: api.TreeWalker.expandEntityReferences
---
{{ APIRef("DOM") }}{{deprecated_header}}

The **`TreeWalker.expandEntityReferences`** read-only property
returns a boolean flag indicating whether or not the children of entity
reference nodes are visible to the {{domxref("TreeWalker")}}.

If this value is `false`, the children of entity reference nodes (as well as
all of their descendants) are rejected. This takes precedence over the value of the
{{domxref("TreeWalker.whatToShow")}} method and the associated filter.

## Syntax

```js
expand = treeWalker.expandEntityReferences;
```

## Example

```js
var treeWalker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
);
expand = treeWalker.expandEntityReferences;
```

## Specifications

This method was originally a part of [DOM Level 2 Traversal and Range](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/), but is absent in the current DOM specification.
This feature is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- The interface this property belongs to: {{domxref("TreeWalker")}}.
