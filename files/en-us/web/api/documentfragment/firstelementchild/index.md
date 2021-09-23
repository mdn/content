---
title: DocumentFragment.firstElementChild
slug: Web/API/DocumentFragment/firstElementChild
tags:
  - API
  - DOM
  - Element
  - Property
browser-compat: api.DocumentFragment.firstElementChild
---
{{ APIRef("DOM") }}

The **`DocumentFragment.firstElementChild`** read-only property
returns the document fragment's first child {{domxref("Element")}}, or `null` if there
are no child elements.

## Syntax

```js
// Getter
element = fragment.firstElementChild;

// No setter; read-only property
```

## Example

```js
let fragment = new DocumentFragment();
fragment.firstElementChild; // null

let paragraph = document.createElement('p');
fragment.appendChild(paragraph);

fragment.firstElementChild; // <p>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.firstElementChild")}}
