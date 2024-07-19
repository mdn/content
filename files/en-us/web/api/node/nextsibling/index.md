---
title: "Node: nextSibling property"
short-title: nextSibling
slug: Web/API/Node/nextSibling
page-type: web-api-instance-property
browser-compat: api.Node.nextSibling
---

{{APIRef("DOM")}}

The read-only **`nextSibling`** property of the {{domxref("Node")}} interface
returns the node immediately following the specified one in their
parent's {{domxref("Node.childNodes","childNodes")}}, or returns `null`
if the specified node is the last child in the parent element.

> **Note:** Browsers insert {{domxref("Text")}} nodes into a document to represent whitespace in the source markup.
> Therefore a node obtained, for example, using [`Node.firstChild`](/en-US/docs/Web/API/Node/firstChild)
> or [`Node.previousSibling`](/en-US/docs/Web/API/Node/previousSibling)
> may refer to a whitespace text node rather than the actual element the author
> intended to get.
>
> The article [Whitespace in the DOM](/en-US/docs/Web/API/Document_Object_Model/Whitespace)
> contains more information about this behavior.
>
> You can use {{domxref("Element.nextElementSibling")}} to obtain the next element
> skipping any whitespace nodes, other between-element text, or comments.
>
> To navigate the opposite way through the child nodes list use [Node.previousSibling](/en-US/docs/Web/API/Node/previousSibling).

## Value

A {{domxref("Node")}} representing the next sibling of the current node,
or `null` if there are none.

## Example

```html
<div id="div-1">Here is div-1</div>
<div id="div-2">Here is div-2</div>
<br />
<output><em>Not calculated.</em></output>
```

```js
let el = document.getElementById("div-1").nextSibling;
let i = 1;

let result = "Siblings of div-1:\n";

while (el) {
  result += `${i}. ${el.nodeName}\n`;
  el = el.nextSibling;
  i++;
}

const output = document.querySelector("output");
output.innerText = result;
```

{{ EmbedLiveSample("Example", "100%", 500)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.nextElementSibling")}}
- {{domxref("Node.previousSibling")}}
