---
title: Node.parentElement
slug: Web/API/Node/parentElement
tags:
  - API
  - DOM
  - JavaScript
  - NeedsBrowserCompatibility
  - Node
  - Property
browser-compat: api.Node.parentElement
---
{{APIRef("DOM")}}

The **`Node.parentElement`** read-only property returns the DOM
node's parent {{DOMxRef("Element")}}, or `null` if the node either has no
parent, or its parent isn't a DOM {{DOMxRef("Element")}}.

## Syntax

```js
parentElement = node.parentElement
```

`parentElement` is the parent element of the current node. This is always a
DOM {{DOMxRef("Element")}} object, or `null`.

## Example

```js
if (node.parentElement) {
    node.parentElement.style.color = "red";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

On some browsers, the `parentElement` property is only defined on nodes that
are themselves an {{DOMxRef("Element")}}. In particular, it is not defined on text
nodes.

{{Compat}}

## See also

- {{DOMxRef("Node.parentNode")}}
