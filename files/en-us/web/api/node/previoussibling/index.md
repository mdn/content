---
title: "Node: previousSibling property"
short-title: previousSibling
slug: Web/API/Node/previousSibling
page-type: web-api-instance-property
browser-compat: api.Node.previousSibling
---

{{APIRef("DOM")}}

The read-only **`previousSibling`** property of the {{domxref("Node")}} interface
returns the node immediately preceding the specified one in its parent's
{{domxref("Node.childNodes", "childNodes")}} list,
or `null` if the specified node is the first in that list.

> [!NOTE]
> Browsers insert text nodes into a document to represent whitespace in the source markup.
> Therefore a node obtained, for example, using [`Node.firstChild`](/en-US/docs/Web/API/Node/firstChild)
> or `Node.previousSibling`
> may refer to a whitespace text node rather than the actual element the author intended to get.
>
> See [Whitespace in the DOM](/en-US/docs/Web/API/Document_Object_Model/Whitespace) for more information.
>
> You can use [`previousElementSibling`](/en-US/docs/Web/API/Element/previousElementSibling)
> to get the previous element node (skipping text nodes and any other non-element nodes).
>
> To navigate the opposite way through the child nodes list use [Node.nextSibling](/en-US/docs/Web/API/Node/nextSibling).

## Value

A {{domxref("Node")}} representing the previous sibling of the current node,
or `null` if there are none.

## Examples

The following examples demonstrate how `previousSibling` works with and without text nodes mixed in with elements.

### First example

In this example, we have a series of `img` elements directly adjacent to each other, with no whitespace between them.

```html
<img id="b0" /><img id="b1" /><img id="b2" />
```

```js
document.getElementById("b1").previousSibling; // <img id="b0">
document.getElementById("b2").previousSibling.id; // "b1"
```

### Second example

In this example, there are whitespace text nodes (line breaks) between the `img` elements.

```html
<img id="b0" />
<img id="b1" />
<img id="b2" />
```

```js
document.getElementById("b1").previousSibling; // #text
document.getElementById("b1").previousSibling.previousSibling; // <img id="b0">
document.getElementById("b2").previousSibling.previousSibling; // <img id="b1">
document.getElementById("b2").previousSibling; // #text
document.getElementById("b2").previousSibling.id; // undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.nextSibling")}}
- {{domxref("Element.previousElementSibling")}}
