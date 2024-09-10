---
title: "Element: removeAttributeNS() method"
short-title: removeAttributeNS()
slug: Web/API/Element/removeAttributeNS
page-type: web-api-instance-method
browser-compat: api.Element.removeAttributeNS
---

{{ APIRef("DOM") }}

The **`removeAttributeNS()`** method of the
{{domxref("Element")}} interface removes the specified attribute with the specified namespace from an element.

If you are working with HTML and you don't need to specify the requested attribute as being part of a specific namespace, use the {{domxref("Element.removeAttribute()", "removeAttribute()")}} method instead.

## Syntax

```js-nolint
removeAttributeNS(namespace, attrName)
```

### Parameters

- `namespace`
  - : A string that contains the namespace of the attribute.
- `attrName`
  - : A string that names the attribute to be removed from the
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.hasAttributeNS()")}}
- {{domxref("Element.getAttributeNS()")}}
- {{domxref("Element.setAttributeNS()")}}
