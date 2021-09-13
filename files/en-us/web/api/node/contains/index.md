---
title: Node.contains()
slug: Web/API/Node/contains
tags:
  - API
  - DOM
  - Method
  - Node
browser-compat: api.Node.contains
---
{{APIRef("DOM")}}

The **`Node.contains()`** method returns a
boolean value indicating whether a node is a descendant of a given node,
i.e. the node itself, one of its direct children ({{domxref("Node.childNodes",
  "childNodes")}}), one of the children's direct children, and so on.

## Syntax

```js
node.contains( otherNode )
```

## Example

This function checks to see if an element is in the page's body. As
`contains` is inclusive and determining if the body contains itself isn't the
intention of `isInPage` this case explicitly returns `false`.

```js
function isInPage(node) {
  return (node === document.body) ? false : document.body.contains(node);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.compareDocumentPosition")}}
- {{domxref("Node.hasChildNodes")}}
