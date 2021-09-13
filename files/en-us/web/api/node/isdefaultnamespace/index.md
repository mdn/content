---
title: Node.isDefaultNamespace()
slug: Web/API/Node/isDefaultNamespace
tags:
  - API
  - DOM
  - Method
  - NeedsSpecTable
  - Node
  - Reference
browser-compat: api.Node.isDefaultNamespace
---
{{APIRef("DOM")}}

The **`Node.isDefaultNamespace()`** method accepts a namespace
URI as an argument and returns a boolean value that is `true`
if the namespace is the default namespace on the given node and `false` if
not.

## Syntax

```js
result = node.isDefaultNamespace(namespaceURI);
```

### Parameters

`namespaceURI` is a string representing the namespace against which the
element will be checked.

### Return value

`result` is a boolean value that holds the return value
`true` or `false`.

## Example

```js
var XULNS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
var el = document.getElementsByTagNameNS(XULNS, 'textbox')[0];

alert(el.isDefaultNamespace(XULNS)); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
