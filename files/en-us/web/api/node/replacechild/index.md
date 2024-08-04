---
title: "Node: replaceChild() method"
short-title: replaceChild()
slug: Web/API/Node/replaceChild
page-type: web-api-instance-method
browser-compat: api.Node.replaceChild
---

{{APIRef("DOM")}}

The **`replaceChild()`** method of the {{domxref("Node")}} interface replaces a child node within the given (parent) node.

## Syntax

```js-nolint
replaceChild(newChild, oldChild)
```

### Parameters

- `newChild`
  - : The new node to replace `oldChild`.
    > [!WARNING]
    > If the new node is already present somewhere else in the DOM, it is first removed from that position.
- `oldChild`
  - : The child to be replaced.

> [!NOTE]
> The parameter order, _new_ before _old_, is unusual.
> [`Element.replaceWith()`](/en-US/docs/Web/API/Element/replaceWith), applying only to nodes that are elements,
> may be easier to read and use.

### Return value

The replaced {{domxref("Node")}}. This is the same node as `oldChild`.

### Exceptions

- `HierarchyRequestError` {{domxref("DOMException")}}
  - : Thrown when the constraints of the DOM tree are violated, that is if one of the following cases occurs:
    - If the parent of `oldChild` is not a {{domxref("Document")}}, {{domxref("DocumentFragment")}}, or an {{domxref("Element")}}.
    - If the replacement of `oldChild` by `newChild` would lead to a cycle, that is if `newChild` is an ancestor of the node.
    - If `newChild` is not a {{domxref("DocumentFragment")}}, a {{domxref("DocumentType")}}, an {{domxref("Element")}}, or a {{domxref("CharacterData")}}.
    - If the current node is a {{domxref("Text")}}, and its parent is a {{domxref("Document")}}.
    - If the current node is a {{domxref("DocumentType")}} and its parent is _not_ a {{domxref("Document")}}, as a _doctype_ should always be a direct descendant of a _document_.
    - If the parent of the node is a {{domxref("Document")}} and `newChild` is a {{domxref("DocumentFragment")}} with more than one {{domxref("Element")}} child, or that has a {{domxref("Text")}} child.
    - If the replacement of `oldChild` by `newChild` would lead to {{domxref("Document")}} with more than one {{domxref("Element")}} as child.
    - If the replacement of `oldChild` by `newChild` would lead to the presence of an {{domxref("Element")}} node before a {{domxref("DocumentType")}} node.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the parent of `oldChild` is not the current node.

## Example

```js
// Given:
// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// Create an empty element node
// without an ID, any attributes, or any content
const sp1 = document.createElement("span");

// Give it an id attribute called 'newSpan'
sp1.id = "newSpan";

// Create some content for the new element.
const sp1_content = document.createTextNode("new replacement span element.");

// Apply that content to the new element
sp1.appendChild(sp1_content);

// Build a reference to the existing node to be replaced
const sp2 = document.getElementById("childSpan");
const parentDiv = sp2.parentNode;

// Replace existing node sp2 with the new span element sp1
parentDiv.replaceChild(sp1, sp2);

// Result:
// <div>
//   <span id="newSpan">new replacement span element.</span>
// </div>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.removeChild")}}
- {{domxref("Element.replaceWith")}}
