---
title: "DocumentFragment: lastElementChild property"
short-title: lastElementChild
slug: Web/API/DocumentFragment/lastElementChild
page-type: web-api-instance-property
browser-compat: api.DocumentFragment.lastElementChild
---

{{ APIRef("DOM") }}

The **`DocumentFragment.lastElementChild`** read-only property
returns the document fragment's last child {{domxref("Element")}}, or `null` if there
are no child elements.

## Value

An {{domxref("Element")}} that is the last child `Element` of the object, or `null` if there are none.

## Examples

```js
let fragment = new DocumentFragment();
fragment.lastElementChild; // null

let paragraph = document.createElement("p");
fragment.appendChild(paragraph);

fragment.lastElementChild; // <p>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.lastElementChild")}}
