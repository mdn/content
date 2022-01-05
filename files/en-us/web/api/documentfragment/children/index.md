---
title: DocumentFragment.children
slug: Web/API/DocumentFragment/children
tags:
  - API
  - DOM
  - Element
  - HTMLCollection
  - Property
  - children
browser-compat: api.DocumentFragment.children
---
{{ APIRef("DOM") }}

The read-only **`children`** property returns a live {{domxref("HTMLCollection")}}
which contains all of the child {{domxref("Element", "elements")}} of the document fragment upon which it was called.

## Syntax

```js
// Getter
collection = myFragment.children;

// No setter; read-only property
```

### Return value

An {{ domxref("HTMLCollection") }} which is a live, ordered collection of the DOM
elements which are children of the document fragment. You can access the
individual child nodes in the collection by using either the
{{domxref("HTMLCollection.item()", "item()")}} method on the collection, or by using
JavaScript array-style notation.

If the document fragment has no element children, then `children` is an empty list with a
`length` of `0`.

## Example

```js
let fragment = new DocumentFragment()
fragment.children; // HTMLCollection []

let paragraph = document.createElement('p')
fragment.appendChild(paragraph)

fragment.children; // HTMLCollection [<p>]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.childNodes")}}
