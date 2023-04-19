---
title: "DocumentFragment: replaceChildren() method"
short-title: replaceChildren()
slug: Web/API/DocumentFragment/replaceChildren
page-type: web-api-instance-method
browser-compat: api.DocumentFragment.replaceChildren
---

{{APIRef("DOM")}}

The **`DocumentFragment.replaceChildren()`** method replaces the
existing children of a `DocumentFragment` with a specified new set of children. These
can be string or {{domxref("Node")}} objects.

## Syntax

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* … ,*/ paramN)
```

### Parameters

- `param1`, …, `paramN`
  - : A set of {{domxref("Node")}} or string objects to replace the
    `DocumentFragment`'s existing children with. If no replacement objects are
    specified, then the `DocumentFragment` is emptied of all child nodes.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown when the [constraints of the node tree](https://dom.spec.whatwg.org/#concept-node-tree) are violated.

## Examples

### Emptying a document fragment

`replaceChildren()` provides a very convenient mechanism for emptying a document fragment
of all its children. You call it on the document fragment without any argument specified:

```js
let fragment = new DocumentFragment();
let div = document.createElement("div");
let p = document.createElement("p");
fragment.append(p);
fragment.prepend(div);

fragment.children; // HTMLCollection [<div>, <p>]

fragment.replaceChildren();

fragment.children; // HTMLCollection []
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DocumentFragment.prepend()")}}
- {{domxref("DocumentFragment.append()")}}
