---
title: DocumentFragment.lastElementChild
slug: Web/API/DocumentFragment/lastElementChild
tags:
  - API
  - DOM
  - Element
  - Property
browser-compat: api.DocumentFragment.lastElementChild
---
{{ APIRef("DOM") }}

The **`DocumentFragment.lastElementChild`** read-only property
returns the document fragment's last child {{domxref("Element")}}, or `null` if there
are no child elements.

## Examples
```js
let fragment = new DocumentFragment();
fragment.lastElementChild; // null

let paragraph = document.createElement('p');
fragment.appendChild(paragraph);

fragment.lastElementChild; // <p>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.lastElementChild")}}
