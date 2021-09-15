---
title: Node.lookupNamespaceURI()
slug: Web/API/Node/lookupNamespaceURI
tags:
  - API
  - DOM
  - Method
  - NeedsSpecTable
  - Node
  - Reference
browser-compat: api.Node.lookupNamespaceURI
---
{{APIRef("DOM")}}

The **`Node.lookupNamespaceURI()`** method accepts a prefix and
returns the namespace URI associated with it on the given node if found (and
`null` if not).

## Syntax

```js
var namespace = node.lookupNamespaceURI(prefix);
```

### Parameters

- `prefix`
  - : The prefix to look for. If this parameter is `null`, the method will
    return the default namespace URI, if any.

### Return value

A {{domxref("DOMString")}} containing the namespace URI. If the prefix is not found, it
returns `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
