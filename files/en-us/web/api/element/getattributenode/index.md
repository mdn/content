---
title: Element.getAttributeNode()
slug: Web/API/Element/getAttributeNode
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
browser-compat: api.Element.getAttributeNode
---
{{ APIRef("DOM") }}

Returns the specified attribute of the specified element, as an `Attr` node.

## Syntax

```js
getAttributeNode(attrName)
```

### Parameters

- `attrName` is a string containing the name of the attribute.

### Return value

An `Attr` node for the attribute.

## Examples

```js
// html: <div id="top" />
let t = document.getElementById("top");
let idAttr = t.getAttributeNode("id");
alert(idAttr.value === "top")
```

## Notes

When called on an HTML element in a DOM flagged as an HTML document, `getAttributeNode` lower-cases its argument before proceeding.

The `Attr` node inherits from `Node`, but is not considered a part of the document tree. Common `Node` attributes like [parentNode](/en-US/docs/Web/API/Node/parentNode), [previousSibling](/en-US/docs/Web/API/Node/previousSibling), and [nextSibling](/en-US/docs/Web/API/Node/nextSibling) are `null` for an `Attr` node. You can, however, get the element to which the attribute belongs with the `ownerElement` property.

[getAttribute](/en-US/docs/Web/API/Element/getAttribute) is usually used instead of `getAttributeNode` to get the value of an element's attribute.

{{ DOMAttributeMethods() }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
