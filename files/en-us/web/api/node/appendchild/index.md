---
title: Node.appendChild()
slug: Web/API/Node/appendChild
tags:
  - Method
  - Reference
browser-compat: api.Node.appendChild
---
{{APIRef("DOM")}}

The **`appendChild()`** method of the {{domxref("Node")}} interface adds
a node to the end of the list of children of a specified parent node.
If the given child is a reference to an existing node in the document,
`appendChild()` moves it from its current position to the new position
(there is no requirement to remove the node from its parent
node before appending it to some other node).

This means that a node can't be in two points of the document simultaneously. So if the
node already has a parent, the node is first removed, then appended at the new position.
The {{domxref("Node.cloneNode()")}} method can be used to make a copy of the node before
appending it under the new parent.
Copies made with `cloneNode` are not be automatically kept in sync.

If the given child is a {{domxref("DocumentFragment")}}, the entire contents of the
{{domxref("DocumentFragment")}} are moved into the child list of the specified parent
node.

> **Note:** Unlike this method, the {{domxref("Element.append()")}} method supports multiple arguments and
> appending strings. You can prefer using it if your node is an element.

Chaining does not work, due to `appendChild()` returning the child element:

```js
let aBlock = document.createElement('block').appendChild( document.createElement('b') );
```

Sets `aBlock` to `<b></b>` only, meaning you cannot chain further actions on `block`, like
performing several chained `appendChild`.

## Syntax

```js
appendChild(aChild);
```

### Parameters

- `aChild`
  - : The node to append to the given parent node (commonly an element).

### Return value

A {{domxref("Node")}} that is the appended child (`aChild`), except
when `aChild` is a {{domxref("DocumentFragment")}}, in which case
the empty {{domxref("DocumentFragment")}} is returned.

### Exceptions

- `HierarchyRequestError` {{domxref("DOMException")}}
  - : Thrown when the constraints of the DOM tree are violated, that is if one of the following cases occurs:
    - If the parent of `aChild` is not a {{domxref("Document")}}, {{domxref("DocumentFragment")}}, or an {{domxref("Element")}}.
    - If the insertion of `aChild` would lead to a cycle, that is if `aChild` is an ancestor of the node.
    - If `aChild` is not a {{domxref("DocumentFragment")}}, a {{domxref("DocumentType")}}, an {{domxref("Element")}}, or a {{domxref("CharacterData")}}.
    - If the current node is a {{domxref("Text")}}, and its parent is a {{domxref("Document")}}.
    - If the current node is a {{domxref("DocumentType")}} and its parent is _not_ a {{domxref("Document")}}, as a _doctype_ should always be a direct descendant of a _document_.
    - If the parent of the node is a {{domxref("Document")}} and `aChild` is a {{domxref("DocumentFragment")}} with more than one {{domxref("Element")}} child, or that has a {{domxref("Text")}} child.
    - If the insertion of `aChild`  would lead to {{domxref("Document")}} with more than one {{domxref("Element")}} as child.
    - If the insertion of `aChild`  would lead to the presence of an {{domxref("Element")}} node before a {{domxref("DocumentType")}} node.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the parent of `aChild` is not the current node.

## Example

```js
// Create a new paragraph element, and append it to the end of the document body
let p = document.createElement("p");
document.body.appendChild(p);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.append()")}}
