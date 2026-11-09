---
title: "Element: getAttributeNode() method"
short-title: getAttributeNode()
slug: Web/API/Element/getAttributeNode
page-type: web-api-instance-method
browser-compat: api.Element.getAttributeNode
---

{{APIRef("DOM")}}

The **`getAttributeNode()`** method of the {{domxref("Element")}} interface returns the specified attribute of the specified element, as an {{domxref("Attr")}} node. It returns `null` if the element doesn't have an attribute with the given name.

This method is useful if you need the attribute's [instance properties](/en-US/docs/Web/API/Attr#instance_properties).
If you only need the attribute's value, you can use the {{domxref("Element.getAttribute()", "getAttribute()")}} method instead.

## Syntax

```js-nolint
getAttributeNode(attrName)
```

### Parameters

- `attrName`
  - : A string specifying the name of the attribute. When called on an HTML element in a DOM flagged as an HTML document, the name is normalized to lowercase.

### Return value

An `Attr` node for the attribute, or `null` if the element doesn't have an attribute with the given name.

> [!NOTE]
> The `Attr` node inherits from `Node`, but is not considered a part of the document tree. Common `Node` attributes like [`parentNode`](/en-US/docs/Web/API/Node/parentNode), [`previousSibling`](/en-US/docs/Web/API/Node/previousSibling), and [`nextSibling`](/en-US/docs/Web/API/Node/nextSibling) are `null` for an `Attr` node. You can, however, get the element to which the attribute belongs with the {{domxref("Attr.ownerElement", "ownerElement")}} property.

## Examples

```js
// html: <div id="top" />
const t = document.getElementById("top");
const idAttr = t.getAttributeNode("id");
console.log(idAttr.value); // "top"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.createAttribute()")}}
- {{domxref("Element.setAttributeNode()")}}
- {{domxref("Element.removeAttributeNode()")}}
