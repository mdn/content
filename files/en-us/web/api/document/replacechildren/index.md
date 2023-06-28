---
title: "Document: replaceChildren() method"
short-title: replaceChildren()
slug: Web/API/Document/replaceChildren
page-type: web-api-instance-method
browser-compat: api.Document.replaceChildren
---

{{APIRef("DOM")}}

The **`Document.replaceChildren()`** method replaces the
existing children of a `Document` with a specified new set of children.

## Syntax

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* … ,*/ paramN)
```

### Parameters

- `param1`, …, `paramN`
  - : A set of {{domxref("Node")}} or string objects to replace the
    `Document`'s existing children with. If no replacement objects are
    specified, then the `Document` is emptied of all child nodes.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Thrown if the [constraints of the node tree](https://dom.spec.whatwg.org/#concept-node-tree) are violated.

## Examples

### Emptying a document

`replaceChildren()` provides a very convenient mechanism for emptying a document
of all its children. You call it on the document without any argument specified:

```js
document.replaceChildren();
document.children; // HTMLCollection []
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.prepend()")}}
- {{domxref("Document.append()")}}
