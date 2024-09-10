---
title: "Element: getAttributeNode() method"
short-title: getAttributeNode()
slug: Web/API/Element/getAttributeNode
page-type: web-api-instance-method
browser-compat: api.Element.getAttributeNode
---

{{ APIRef("DOM") }}

Returns the specified attribute of the specified element, as an {{domxref("Attr")}} node.

This method is useful if you need the attribute's [instance properties](/en-US/docs/Web/API/Attr#instance_properties).
If you only need the attribute's value, you can use the {{domxref("Element.getAttribute()", "getAttribute()")}} method instead.

## Syntax

```js-nolint
getAttributeNode(attrName)
```

### Parameters

- `attrName`
  - : A string containing the name of the attribute.

### Return value

An `Attr` node for the attribute.

## Examples

```js
// html: <div id="top" />
let t = document.getElementById("top");
let idAttr = t.getAttributeNode("id");
alert(idAttr.value === "top");
```

## Notes

When called on an HTML element in a DOM flagged as an HTML document, `getAttributeNode` lower-cases its argument before proceeding.

The `Attr` node inherits from `Node`, but is not considered a part of the document tree. Common `Node` attributes like [parentNode](/en-US/docs/Web/API/Node/parentNode), [previousSibling](/en-US/docs/Web/API/Node/previousSibling), and [nextSibling](/en-US/docs/Web/API/Node/nextSibling) are `null` for an `Attr` node. You can, however, get the element to which the attribute belongs with the `ownerElement` property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.createAttribute()")}}
- {{domxref("Element.setAttributeNode()")}}
- {{domxref("Element.removeAttributeNode()")}}
