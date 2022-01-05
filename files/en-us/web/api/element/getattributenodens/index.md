---
title: Element.getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
tags:
  - API
  - DOM
  - Method
  - Reference
browser-compat: api.Element.getAttributeNodeNS
---
{{ APIRef("DOM") }}

Returns the `Attr` node for the attribute with the given namespace and name.

## Syntax

```js
attributeNode = element.getAttributeNodeNS(namespace, nodeName)
```

- `attributeNode` is the node for specified attribute.
- `namespace` is a string specifying the namespace of the attribute.
- `nodeName` is a string specifying the name of the attribute.

## Notes

`getAttributeNodeNS` is more specific than [getAttributeNode](getAttributeNode) in that it allows you to specify attributes that are part of a particular namespace. The corresponding setter method is [setAttributeNodeNS](/en-US/docs/Web/API/Element/setAttributeNodeNS).

{{ DOMAttributeMethods() }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
