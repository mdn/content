---
title: Node.parentNode
slug: Web/API/Node/parentNode
tags:
  - API
  - DOM
  - Gecko
  - Property
browser-compat: api.Node.parentNode
---
{{APIRef("DOM")}}

The **`Node.parentNode`** read-only property returns the parent
of the specified node in the DOM tree.

## Syntax

```js
parentNode = node.parentNode
```

`parentNode` is the parent of the current node. The parent of an element is
an `Element` node, a `Document` node, or a
`DocumentFragment` node.

## Example

```js
if (node.parentNode) {
  // remove a node from the tree, unless
  // it's not in the tree already
  node.parentNode.removeChild(node);
}
```

## Notes

`Document` and `DocumentFragment` [nodes](/en-US/docs/DOM/Node.nodeType) can never have a parent, so
`parentNode` will always return `null`.

It also returns `null` if the node has just been created and is not yet
attached to the tree.

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
