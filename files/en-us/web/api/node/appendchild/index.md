---
title: "Node: appendChild() method"
short-title: appendChild()
slug: Web/API/Node/appendChild
page-type: web-api-instance-method
browser-compat: api.Node.appendChild
---

{{APIRef("DOM")}}

The **`appendChild()`** method of the {{domxref("Node")}} interface adds a node to the end of the list of children of a specified parent node.

> [!NOTE]
> If the given child is a reference to an existing node in the document, `appendChild()` moves it from its current position to the new position.

If the given child is a {{domxref("DocumentFragment")}}, the entire contents of the {{domxref("DocumentFragment")}} are moved into the child list of the specified parent node.

`appendChild()` returns the newly appended node, or if the child is a {{domxref("DocumentFragment")}}, the emptied fragment.

> [!NOTE]
> Unlike this method, the {{domxref("Element.append()")}} method supports multiple arguments and appending strings. You can prefer using it if your node is an element.

## Syntax

```js-nolint
appendChild(aChild)
```

### Parameters

- `aChild`
  - : The node to append to the given parent node (commonly an element).

### Return value

A {{domxref("Node")}} that is the appended child (`aChild`), except when `aChild` is a {{domxref("DocumentFragment")}}, in which case the empty {{domxref("DocumentFragment")}} is returned.

### Exceptions

- `HierarchyRequestError` {{domxref("DOMException")}}
  - : Thrown when the constraints of the DOM tree are violated, that is if one of the following cases occurs:
    - If the parent of `aChild` is not a {{domxref("Document")}}, {{domxref("DocumentFragment")}}, or an {{domxref("Element")}}.
    - If the insertion of `aChild` would lead to a cycle, that is if `aChild` is an ancestor of the node.
    - If `aChild` is not a {{domxref("DocumentFragment")}}, a {{domxref("DocumentType")}}, an {{domxref("Element")}}, or a {{domxref("CharacterData")}}.
    - If the current node is a {{domxref("Text")}}, and its parent is a {{domxref("Document")}}.
    - If the current node is a {{domxref("DocumentType")}} and its parent is _not_ a {{domxref("Document")}}, as a _doctype_ should always be a direct descendant of a _document_.
    - If the parent of the node is a {{domxref("Document")}} and `aChild` is a {{domxref("DocumentFragment")}} with more than one {{domxref("Element")}} child, or that has a {{domxref("Text")}} child.
    - If the insertion of `aChild` would lead to {{domxref("Document")}} with more than one {{domxref("Element")}} as child.

## Description

If the given child is a reference to an existing node in the document, `appendChild()` moves it from its current position to the new position — there is no requirement to remove the node from its parent
node before appending it to some other node. This means that a node can't be in two points of the document simultaneously. The {{domxref("Node.cloneNode()")}} method can be used to make a copy of the node before appending it under the new parent. Copies made with `cloneNode` are not automatically kept in sync.

`appendChild()` returns the newly appended node, instead of the parent node. This means you can append the new node as soon as it's created without losing reference to it:

```js
const paragraph = document.body.appendChild(document.createElement("p"));
// You can append more elements to the paragraph later
```

On the other hand, you cannot use `appendChild()` in a [fluent API](https://en.wikipedia.org/wiki/Fluent_interface) fashion (like jQuery).

```js example-bad
// This doesn't append three paragraphs:
// the three elements will be nested instead of siblings
document.body
  .appendChild(document.createElement("p"))
  .appendChild(document.createElement("p"))
  .appendChild(document.createElement("p"));
```

## Example

### Append a paragraph to the body

```js
// Create a new paragraph element, and append it to the end of the document body
const p = document.createElement("p");
document.body.appendChild(p);
```

### Creating a nested DOM structure

In this example, we attempt to create a nested DOM structure using as few temporary variables as possible.

```js
const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
li.textContent = "hello world";

document.body.appendChild(fragment);
```

It generates the following DOM tree:

```html
<section>
  <ul>
    <li>hello world</li>
  </ul>
</section>
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
