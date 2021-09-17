---
title: Node.lastChild
slug: Web/API/Node/lastChild
tags:
  - API
  - DOM
  - Property
  - Reference
browser-compat: api.Node.lastChild
---
{{APIRef("DOM")}}

The **`Node.lastChild`** read-only property returns the last
child of the node. If its parent is an element, then the child is generally an element
node, a text node, or a comment node. It returns `null` if there are no child
elements.

## Syntax

```js
var childNode = node.lastChild;
```

## Example

```js
var tr = document.getElementById("row1");
var corner_td = tr.lastChild;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
