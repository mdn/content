---
title: "DocumentFragment: childElementCount property"
short-title: childElementCount
slug: Web/API/DocumentFragment/childElementCount
page-type: web-api-instance-property
browser-compat: api.DocumentFragment.childElementCount
---

{{ APIRef("DOM") }}

The **`DocumentFragment.childElementCount`** read-only property
returns the number of child elements of a `DocumentFragment`.

To get the number of children of a specific element, see {{domxref("Element.childElementCount")}}.

## Value

A number representing the number of children of the document fragment.

## Examples

```js
let fragment = new DocumentFragment();
fragment.childElementCount; // 0

let paragraph = document.createElement("p");
fragment.appendChild(paragraph);

fragment.childElementCount; // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.childElementCount")}}
- {{domxref("Document.childElementCount")}}
