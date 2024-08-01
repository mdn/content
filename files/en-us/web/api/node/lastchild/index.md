---
title: "Node: lastChild property"
short-title: lastChild
slug: Web/API/Node/lastChild
page-type: web-api-instance-property
browser-compat: api.Node.lastChild
---

{{APIRef("DOM")}}

The read-only **`lastChild`** property of the {{domxref("Node")}} interface
returns the last child of the node, or `null` if there are no child nodes.

> [!NOTE]
> This property returns any type of node that is the last child of this one.
> It may be a {{domxref("Text")}} or a {{domxref("Comment")}} node.
> If you want to get the last {{domxref("Element")}} that is a child of another element,
> consider using {{domxref("Element.lastElementChild")}}.

## Value

A {{domxref("Node")}} that is the last child of the node, or `null` if there are no child nodes.

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
