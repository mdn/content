---
title: "DocumentFragment: append() method"
short-title: append()
slug: Web/API/DocumentFragment/append
page-type: web-api-instance-method
browser-compat: api.DocumentFragment.append
---

{{APIRef("DOM")}}

The **`DocumentFragment.append()`** method
inserts a set of {{domxref("Node")}} objects or string objects after
the last child of the document fragment. String objects
are inserted as equivalent {{domxref("Text")}} nodes.

This method appends a child to a `DocumentFragment`. To append to an arbitrary element in the tree, see {{domxref("Element.append()")}}.

## Syntax

```js-nolint
append(param1)
append(param1, param2)
append(param1, param2, /* … ,*/ paramN)
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
