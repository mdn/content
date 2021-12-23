---
title: Element.removeAttributeNode()
slug: Web/API/Element/removeAttributeNode
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
{{domxref("Element")}} object removes the specified attribute from the current element.

## Syntax

```js
removedAttr = element.removeAttributeNode(attributeNode)
```

- _attributeNode_ is the `Attr` node that needs to be removed.
- _removedAttr_ is the removed `Attr` node.

## Example

```js
// Given: <div id="top" align="center" />
var d = document.getElementById("top");
var d_align = d.getAttributeNode("align");
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
