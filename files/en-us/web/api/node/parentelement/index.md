---
title: "Node: parentElement property"
short-title: parentElement
slug: Web/API/Node/parentElement
page-type: web-api-instance-property
browser-compat: api.Node.parentElement
---

{{APIRef("DOM")}}

The read-only **`parentElement`** property of {{domxref("Node")}} interface
returns the DOM node's parent {{DOMxRef("Element")}}, or `null` if the node either has no
parent, or its parent isn't a DOM {{DOMxRef("Element")}}.

## Value

An {{domxref("Element")}} that is the parent element of the current node,
or `null` if there isn't one.

## Example

```js
if (node.parentElement) {
  node.parentElement.style.color = "red";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.parentNode")}}
