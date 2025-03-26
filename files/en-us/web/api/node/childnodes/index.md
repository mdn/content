---
title: "Node: childNodes property"
short-title: childNodes
slug: Web/API/Node/childNodes
page-type: web-api-instance-property
browser-compat: api.Node.childNodes
---

{{APIRef("DOM")}}

The read-only **`childNodes`** property of the {{domxref("Node")}} interface returns a live
{{domxref("NodeList")}} of child {{domxref("Node","nodes")}} of the given element where
the first child node is assigned index `0`. Child nodes include elements, text and
comments.

> [!NOTE]
> The {{domxref("NodeList")}} being live means that its content is changed each time
> new children are added or removed.
>
> Browsers insert text nodes into a document to represent whitespace in the source markup.
> Therefore a node obtained, for example, using `Node.childNodes[0]`
> may refer to a whitespace text node rather than the actual element the author intended to get.
>
> See [Whitespace in the DOM](/en-US/docs/Web/API/Document_Object_Model/Whitespace) for more information.

The items in the collection of nodes are objects, not strings. To get data from node
objects, use their properties. For example, to get the name of the first
childNode, you can use `elementNodeReference.childNodes[0].nodeName`.

The {{domxref("document")}} object itself has two children: the Doctype declaration and the
root element, typically referred to as `documentElement`. In HTML
documents the latter is the {{HTMLElement("html")}} element.

It is important to keep in mind that `childNodes` includes _all_ child nodes,
including non-element nodes like text and comment.
To get a collection containing only elements, use {{domxref("Element.children")}} instead.

## Value

A live {{domxref("NodeList")}} containing the children of the node.

> [!NOTE]
> Several calls to `childNodes` return the _same_ {{domxref("NodeList")}}.

## Examples

### Simple usage

```js
// Note that para is an object reference to a <p> element

// First check that the element has child nodes
if (para.hasChildNodes()) {
  let children = para.childNodes;

  for (const node of children) {
    // Do something with each child as children[i]
    // NOTE: List is live! Adding or removing children will change the list's `length`
  }
}
```

### Remove all children from a node

```js
// This is one way to remove all children from a node
// box is an object reference to an element
while (box.firstChild) {
  // The list is LIVE so it will re-index each call
  box.removeChild(box.firstChild);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.firstChild")}}
- {{domxref("Node.lastChild")}}
- {{domxref("Node.nextSibling")}}
- {{domxref("Node.previousSibling")}}
- {{domxref("Element.children")}}
