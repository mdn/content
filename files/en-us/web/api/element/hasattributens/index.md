---
title: Element.hasAttributeNS()
slug: Web/API/Element/hasAttributeNS
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
browser-compat: api.Element.hasAttributeNS
---
{{ APIRef("DOM") }}

`hasAttributeNS` returns a boolean value indicating whether the current element has the specified attribute.

## Syntax

```js
result = element.hasAttributeNS(namespace,localName)
```

- `result` is the boolean value `true` or `false`.
- `namespace` is a string specifying the namespace of the attribute.
- `localName` is the name of the attribute.

## Example

    // Check that the attribute exists before you set a value
    var d = document.getElementById("div1");
    if (d.hasAttributeNS(
           "http://www.mozilla.org/ns/specialspace/",
           "special-align")) {
      d.setAttribute("align", "center");
    }

## Notes

{{ DOMAttributeMethods() }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
