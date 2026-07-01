---
title: "Node: nodeName property"
short-title: nodeName
slug: Web/API/Node/nodeName
page-type: web-api-instance-property
browser-compat: api.Node.nodeName
---

{{APIRef("DOM")}}

The read-only **`nodeName`** property of {{domxref("Node")}} returns the name of the current node as a string.

## Value

A string. Values for the different types of nodes are:

- {{domxref("Attr")}}
  - : The value of {{domxref("Attr.name")}}, that is the _qualified name_ of the attribute.
- {{domxref("CDATASection")}}
  - : The string `"#cdata-section"`.
- {{domxref("Comment")}}
  - : The string `"#comment"`.
- {{domxref("Document")}}
  - : The string `"#document"`.
- {{domxref("DocumentFragment")}}
  - : The string `"#document-fragment"`.
- {{domxref("DocumentType")}}
  - : The value of {{domxref("DocumentType.name")}}
- {{domxref("Element")}}
  - : The value of {{domxref("Element.tagName")}}, that is the _uppercase_ name of the element tag if an HTML element,
    or the _lowercase_ element tag if an XML element (like a SVG or MathML element).
- {{domxref("ProcessingInstruction")}}
  - : The value of {{domxref("ProcessingInstruction.target")}}
- {{domxref("Text")}}
  - : The string `"#text"`.

## Example

This example displays the node names of several nodes

```html
This is some HTML:
<div id="d1">Hello world</div>
<!-- Example of comment -->
Text <span>Text</span> Text<br />
<svg height="20" width="20">
  <circle cx="10" cy="10" r="5" stroke="black" stroke-width="1" fill="red" />
</svg>
<hr />
<output id="result">Not calculated yet.</output>
```

and the following script:

```js
let node = document.querySelector("body").firstChild;
let result = "Node names are:\n";
while (node) {
  result += `${node.nodeName}\n`;
  node = node.nextSibling;
}

const output = document.getElementById("result");
output.innerText = result;
```

{{ EmbedLiveSample("Example", "100%", "450")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.tagName")}}
- {{domxref("Attr.name")}}
- {{domxref("DocumentType.name")}}
- {{domxref("ProcessingInstruction.target")}}
