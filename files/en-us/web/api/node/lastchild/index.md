---
title: Node.lastChild
slug: Web/API/Node/lastChild
page-type: web-api-instance-property
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.Node.lastChild
---
{{APIRef("DOM")}}

The read-only **`lastChild`** property of the {{domxref("Node")}} interface
returns the last child of the node.
If its parent is an element, then the child is generally an element node, a text node, or a comment node.
It returns `null` if there are no child nodes.

## Value

A {{domxref("Node")}} that is the last child of the node, or `null` is there are no child nodes.

## Example

```js
const tr = document.getElementById("row1");
const corner_td = tr.lastChild;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.firstChild")}}
- {{domxref("Element.lastElementChild")}}
