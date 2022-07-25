---
title: Node.hasChildNodes()
slug: Web/API/Node/hasChildNodes
page-type: web-api-instance-method
tags:
  - Method

  - Reference
browser-compat: api.Node.hasChildNodes
---
{{APIRef("DOM")}}

The **`hasChildNodes()`** method of the {{domxref("Node")}} interface
returns a boolean value indicating
whether the given {{domxref("Node")}} has [child nodes](/en-US/docs/Web/API/Node/childNodes) or not.

## Syntax

```js
hasChildNodes();
```

### Parameters

None.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.childNodes")}}
