---
title: "Element: hasAttributeNS() method"
short-title: hasAttributeNS()
slug: Web/API/Element/hasAttributeNS
page-type: web-api-instance-method
browser-compat: api.Element.hasAttributeNS
---

{{ APIRef("DOM") }}

`hasAttributeNS` returns a boolean value indicating whether the current element has the specified attribute.

## Syntax

```js-nolint
hasAttributeNS(namespace,localName)
```

### Parameters

- `namespace` is a string specifying the namespace of the attribute.
- `localName` is the name of the attribute.

### Return value

A boolean.

## Examples

```js
// Check that the attribute exists before you set a value
const d = document.getElementById("div1");
if (
  d.hasAttributeNS("http://www.mozilla.org/ns/specialspace/", "special-align")
) {
  d.setAttribute("align", "center");
}
```

## Notes

{{ DOMAttributeMethods() }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
