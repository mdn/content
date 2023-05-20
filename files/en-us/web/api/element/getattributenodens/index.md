---
title: "Element: getAttributeNodeNS() method"
short-title: getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
page-type: web-api-instance-method
browser-compat: api.Element.getAttributeNodeNS
---

{{ APIRef("DOM") }}

Returns the `Attr` node for the attribute with the given namespace and name.

## Syntax

```js-nolint
getAttributeNodeNS(namespace, nodeName)
```

### Parameters

- `namespace` is a string specifying the namespace of the attribute.
- `nodeName` is a string specifying the name of the attribute.

### Return value

The node for specified attribute.

## Notes

`getAttributeNodeNS` is more specific than [getAttributeNode](getAttributeNode) in that it allows you to specify attributes that are part of a particular namespace. The corresponding setter method is [setAttributeNodeNS](/en-US/docs/Web/API/Element/setAttributeNodeNS).

{{ DOMAttributeMethods() }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
