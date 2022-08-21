---
title: Node.ownerDocument
slug: Web/API/Node/ownerDocument
page-type: web-api-instance-property
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.Node.ownerDocument
---
{{APIRef("DOM")}}

The read-only **`ownerDocument`** property of the {{domxref("Node")}} interface
returns the top-level document object of the node.

## Value

A {{domxref("Document")}} that is the top-level object in which all the
child nodes are created.

If this property is used on a node that is itself a document, the value is `null`.

## Example

```js
// Given a node "p", get the top-level HTML
// child of the document object

const d = p.ownerDocument;
const html = d.documentElement;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
