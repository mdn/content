---
title: DocumentFragment.append()
slug: Web/API/DocumentFragment/append
tags:
  - API
  - DOM
  - Method
  - Node
  - DocumentFragment
  - Reference
browser-compat: api.DocumentFragment.append
---
{{APIRef("DOM")}}

The **`DocumentFragment.append()`** method
inserts a set of {{domxref("Node")}} objects or {{domxref("DOMString")}} objects after
the last child of the document fragment. {{domxref("DOMString")}} objects
are inserted as equivalent {{domxref("Text")}} nodes.

This method appends a child to a `DocumentFragment`. To append to an arbitrary element in the tree, see {{domxref("Element.append()")}}.

## Syntax

```js
append(...nodesOrDOMStrings)
```

### Parameters

- `nodesOrDOMStrings`
  - : A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to insert.

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the node cannot be inserted at the specified point in the hierarchy.

## Examples

### Appending an element to a document fragment

```js
let fragment = new DocumentFragment();
let div = document.createElement("div");
fragment.append(div);

fragment.children; // HTMLCollection [<div>]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DocumentFragment.prepend()")}}
- {{domxref("Element.append()")}}
