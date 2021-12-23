---
title: DocumentFragment.prepend()
slug: Web/API/DocumentFragment/prepend
tags:
  - API
  - DOM
  - Method
  - Node
  - DocumentFragment
  - Reference
browser-compat: api.DocumentFragment.prepend
---
{{APIRef("DOM")}}

The **`DocumentFragment.prepend()`** method
inserts a set of {{domxref("Node")}} objects or {{domxref("DOMString")}} objects before
the first child of the document fragment. {{domxref("DOMString")}} objects
are inserted as equivalent {{domxref("Text")}} nodes.

This method prepends a child to a `DocumentFragment`. To prepend to an arbitrary element in the tree, see {{domxref("Element.prepend()")}}.

## Syntax

```js
prepend(...nodesOrDOMStrings)
```

### Parameters

- `nodesOrDOMStrings`
  - : A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to insert.

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Examples

### Prepending an element to a document fragment

```js
let fragment = new DocumentFragment();
let div = document.createElement("div");
let p = document.createElement("p");
fragment.append(p);
fragment.prepend(div);

fragment.children; // HTMLCollection [<div>, <p>]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DocumentFragment.append()")}}
- {{domxref("Element.prepend()")}}
