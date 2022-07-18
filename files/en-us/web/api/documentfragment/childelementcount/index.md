---
title: DocumentFragment.childElementCount
slug: Web/API/DocumentFragment/childElementCount
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - Property
  - Reference
browser-compat: api.DocumentFragment.childElementCount
---
{{ APIRef("DOM") }}

The **`Document.childElementCount`** read-only property
returns the number of child elements of a `DocumentFragment`.

To get the number of children of a specific element, see {{domxref("Element.childElementCount")}}.

## Value

A number representing the number of children of the element.

## Examples

```js
let fragment = new DocumentFragment()
fragment.childElementCount; // 0

let paragraph = document.createElement('p')
fragment.appendChild(paragraph)

fragment.childElementCount; // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.childElementCount")}}
- {{domxref("Document.childElementCount")}}
