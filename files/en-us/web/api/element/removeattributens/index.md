---
title: Element.removeAttributeNS()
slug: Web/API/Element/removeAttributeNS
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Element
  - Method
  - NeedsSpecTable
  - Reference
browser-compat: api.Element.removeAttributeNS
---
{{ APIRef("DOM") }}

The **`removeAttributeNS()`** method of the
{{domxref("Element")}} interface removes the specified attribute from an element.

## Syntax

```js
removeAttributeNS(namespace, attrName)
```

### Parameters

- `namespace` is a string that contains the namespace of the attribute.
- `attrName` is a string that names the attribute to be removed from the
  current node.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
// Given:
//   <div id="div1" xmlns:special="http://www.mozilla.org/ns/specialspace"
//     special:specialAlign="utterleft" width="200px" />
d = document.getElementById("div1");
d.removeAttributeNS("http://www.mozilla.org/ns/specialspace", "specialAlign");
// Now: <div id="div1" width="200px" />
```

## Notes

{{ DOMAttributeMethods() }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

In Firefox 3 and later, this method resets DOM values to
their defaults.
