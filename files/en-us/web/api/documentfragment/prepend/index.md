---
title: "DocumentFragment: prepend() method"
short-title: prepend()
slug: Web/API/DocumentFragment/prepend
page-type: web-api-instance-method
browser-compat: api.DocumentFragment.prepend
---

{{APIRef("DOM")}}

The **`DocumentFragment.prepend()`** method
inserts a set of {{domxref("Node")}} objects or string objects before
the first child of the document fragment. String objects
are inserted as equivalent {{domxref("Text")}} nodes.

This method prepends a child to a `DocumentFragment`. To prepend to an arbitrary element in the tree, see {{domxref("Element.prepend()")}}.

## Syntax

```js-nolint
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* … ,*/ paramN)
```

### Parameters

- `param1`, …, `paramN`
  - : A set of {{domxref("Node")}} or string objects to insert.

### Return value

None ({{jsxref("undefined")}}).

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
