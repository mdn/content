---
title: "Node: contains() method"
short-title: contains()
slug: Web/API/Node/contains
page-type: web-api-instance-method
browser-compat: api.Node.contains
---

{{APIRef("DOM")}}

The **`contains()`** method of the {{domxref("Node")}} interface
returns a boolean value indicating
whether a node is a descendant of a given node, that is the node itself,
one of its direct children ({{domxref("Node.childNodes", "childNodes")}}),
one of the children's direct children, and so on.

> [!NOTE]
> A node is _contained_ inside itself.

## Syntax

```js-nolint
contains(otherNode)
```

### Parameters

- `otherNode`
  - : The {{domxref("Node")}} to test with.
    > **Note:** `otherNode` is not optional, but can be set to `null`.

### Return value

A boolean value that is `true` if `otherNode` is contained in the node,
`false` if not.

If the `otherNode` parameter is `null`,
`contains()` always returns `false`.

## Example

This function checks to see if an element is in the page's body. As
`contains` is inclusive and determining if the body contains itself isn't the
intention of `isInPage` this case explicitly returns `false`.

```js
function isInPage(node) {
  return node === document.body ? false : document.body.contains(node);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.compareDocumentPosition")}}
- {{domxref("Node.hasChildNodes")}}
