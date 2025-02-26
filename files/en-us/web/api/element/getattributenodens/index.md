---
title: "Element: getAttributeNodeNS() method"
short-title: getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
page-type: web-api-instance-method
browser-compat: api.Element.getAttributeNodeNS
---

{{ APIRef("DOM") }}

The **`getAttributeNodeNS()`** method of the {{domxref("Element")}} interface returns the namespaced {{domxref("Attr")}} node of an element.

This method is useful if you need the namespaced attribute's [instance properties](/en-US/docs/Web/API/Attr#instance_properties).
If you only need the namespaced attribute's value, you can use the {{domxref("Element.getAttributeNS()", "getAttributeNS()")}} method instead.

If you need the {{domxref("Attr")}} node of an element in HTML documents and the attribute is not namespaced, use the {{domxref("Element.getAttributeNode()", "getAttributeNode()")}} method instead.

## Syntax

```js-nolint
getAttributeNodeNS(namespace, nodeName)
```

### Parameters

- `namespace`
  - : A string specifying the namespace of the attribute.
- `nodeName`
  - : A string specifying the name of the attribute.

### Return value

The node for specified attribute.

## Notes

`getAttributeNodeNS` is more specific than [getAttributeNode](/en-US/docs/Web/API/Element/getAttributeNode) in that it allows you to specify attributes that are part of a particular namespace. The corresponding setter method is [setAttributeNodeNS](/en-US/docs/Web/API/Element/setAttributeNodeNS).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.createAttribute()")}}
- {{domxref("Document.createAttributeNS()")}}
- {{domxref("Element.setAttributeNodeNS()")}}
