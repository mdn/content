---
title: "DocumentFragment: firstElementChild property"
short-title: firstElementChild
slug: Web/API/DocumentFragment/firstElementChild
page-type: web-api-instance-property
browser-compat: api.DocumentFragment.firstElementChild
---

{{ APIRef("DOM") }}

The **`DocumentFragment.firstElementChild`** read-only property
returns the document fragment's first child {{domxref("Element")}}, or `null` if there
are no child elements.

## Value

An {{domxref("Element")}} that is the first child `Element` of the object, or `null` if there are none.

## Examples

```js
let fragment = new DocumentFragment();
fragment.firstElementChild; // null

let paragraph = document.createElement("p");
fragment.appendChild(paragraph);

fragment.firstElementChild; // <p>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.firstElementChild")}}
