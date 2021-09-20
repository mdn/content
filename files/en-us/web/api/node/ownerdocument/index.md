---
title: Node.ownerDocument
slug: Web/API/Node/ownerDocument
tags:
  - API
  - DOM
  - Node
  - Property
  - Reference
browser-compat: api.Node.ownerDocument
---
{{APIRef("DOM")}}

The **`ownerDocument`** read-only property of the
{{domxref("Node")}} interface returns the top-level document object of the node.

## Syntax

```js
var document = element.ownerDocument;
```

### Value

`document` is the top-level {{domxref("Document")}} object in which all the
child nodes are created. If this property is used on a node that is itself a document,
the value is `null`.

## Example

```js
// Given a node "p", get the top-level HTML
// child of the document object

var d = p.ownerDocument;
var html = d.documentElement;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
