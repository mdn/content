---
title: "Element: getAttributeNodeNS() method"
short-title: getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
page-type: web-api-instance-method
browser-compat: api.Element.getAttributeNodeNS
---

{{APIRef("DOM")}}

The **`getAttributeNodeNS()`** method of the {{domxref("Element")}} interface returns the specified namespaced attribute of the specified element, as an {{domxref("Attr")}} node. It returns `null` if the element doesn't have an attribute with the given name in the namespace.

This method is useful if you need the namespaced attribute's [instance properties](/en-US/docs/Web/API/Attr#instance_properties).
If you only need the namespaced attribute's value, you can use the {{domxref("Element.getAttributeNS()", "getAttributeNS()")}} method instead.

If you are working with HTML documents and you don't need to specify the requested attribute as being part of a specific namespace, use the {{domxref("Element.getAttributeNode()", "getAttributeNode()")}} method instead.

## Syntax

```js-nolint
getAttributeNodeNS(namespace, localName)
```

### Parameters

- `namespace`
  - : A string specifying the namespace of the attribute, or `null` for no explicit namespace.
- `localName`
  - : A string specifying the name of the attribute.

### Return value

An `Attr` node for the attribute, or `null` if the element doesn't have an attribute with the given name in the namespace.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.createAttribute()")}}
- {{domxref("Document.createAttributeNS()")}}
- {{domxref("Element.setAttributeNodeNS()")}}
