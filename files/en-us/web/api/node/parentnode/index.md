---
title: "Node: parentNode property"
short-title: parentNode
slug: Web/API/Node/parentNode
page-type: web-api-instance-property
browser-compat: api.Node.parentNode
---

{{APIRef("DOM")}}

The read-only **`parentNode`** property of the {{domxref("Node")}} interface
returns the parent of the specified node in the DOM tree.

`Document` and `DocumentFragment` [nodes](/en-US/docs/Web/API/Node/nodeType) can never have a parent, so
`parentNode` will always return `null`.
It also returns `null` if the node has just been created
and is not yet attached to the tree.

## Value

A {{domxref("Node")}} that is the parent of the current node. The parent of an element is
an `Element` node, a `Document` node, or a `DocumentFragment` node.

## Example

```js
if (node.parentNode) {
  // remove a node from the tree, unless
  // it's not in the tree already
  node.parentNode.removeChild(node);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Domxref("Node.firstChild")}}
- {{Domxref("Node.lastChild")}}
- {{Domxref("Node.childNodes")}}
- {{Domxref("Node.nextSibling")}}
- {{Domxref("Node.parentElement")}}
- {{Domxref("Node.previousSibling")}}
- {{Domxref("Node.removeChild")}}
