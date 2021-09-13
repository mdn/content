---
title: Node.hasChildNodes()
slug: Web/API/Node/hasChildNodes
tags:
  - API
  - DOM
  - Method
  - NeedsSpecTable
  - Node
  - Reference
browser-compat: api.Node.hasChildNodes
---
{{APIRef("DOM")}}

The **`Node.hasChildNodes()`** method returns a
boolean value indicating whether the given {{domxref("Node")}} has [child nodes](/en-US/docs/Web/API/Node.childNodes) or not.

## Syntax

```js
bool = node.hasChildNodes();
```

### Return value

A boolean value that is `true` if the node has child nodes, and
`false` otherwise.

## Example

```js
let foo = document.getElementById('foo');

if (foo.hasChildNodes()) {
  // Do something with 'foo.childNodes'
}
```

## Polyfill

Here is one possible polyfill:

```js
;(function(prototype) {
  prototype.hasChildNodes = prototype.hasChildNodes || function() {
    return !!this.firstChild;
  }
})(Node.prototype);
```

There are various ways to determine whether the node has a child node:

- `node.hasChildNodes()`
- `node.firstChild != null` (or just `node.firstChild`)
- `node.childNodes && node.childNodes.length` (or
  `node.childNodes.length > 0`)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.childNodes")}}
- {{domxref("Node.hasAttributes")}}
