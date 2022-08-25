---
title: Element.removeAttributeNode()
slug: Web/API/Element/removeAttributeNode
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Element
  - Method
  - NeedsSpecTable
  - Reference
browser-compat: api.Element.removeAttributeNode
---
{{ APIRef("DOM") }}

The **`removeAttributeNode()`** method of the
{{domxref("Element")}} interface removes the specified attribute from the element.

## Syntax

```js
removeAttributeNode(attributeNode)
```

### Parameters

- `attributeNode`
  - : The attribute node to remove from the element.

### Return value

The attribute node that was removed.

### Exceptions

- `NotFoundError` {{DOMxRef("DOMException")}}
  - : Thrown when the element's attribute list does not contain the attribute node.

## Examples

```js
// Given: <div id="top" align="center" />
const d = document.getElementById("top");
const d_align = d.getAttributeNode("align");
d.removeAttributeNode(d_align);
// align is now removed: <div id="top" />
```

## Notes

If the removed attribute has a default value, it is immediately replaced. The replacing
attribute has the same namespace URI and local name, as well as the original prefix,
when applicable.

There is no `removeAttributeNodeNS` method; the
`removeAttributeNode` method can remove both namespaced attributes and
non-namespaced attributes.

{{ DOMAttributeMethods() }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
