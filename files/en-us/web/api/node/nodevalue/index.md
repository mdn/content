---
title: Node.nodeValue
slug: Web/API/Node/nodeValue
page-type: web-api-instance-property
tags:
  - Property
  - Reference
browser-compat: api.Node.nodeValue
---

{{APIRef("DOM")}}

The **`nodeValue`** property of the {{domxref("Node")}} interface returns or sets the value of the current node.

## Value

A string containing the value of the current node, if any.
For the document itself, `nodeValue` returns `null`.
For text, comment, and CDATA nodes, `nodeValue` returns the content of the node.
For attribute nodes, the value of the attribute is returned.

The following table shows the return values for different types of nodes.

| Node                                 | Value of nodeValue                  |
| ------------------------------------ | ----------------------------------- |
| {{domxref("CDATASection")}}          | Content of the CDATA section        |
| {{domxref("Comment")}}               | Content of the comment              |
| {{domxref("Document")}}              | `null`                              |
| {{domxref("DocumentFragment")}}      | `null`                              |
| {{domxref("DocumentType")}}          | `null`                              |
| {{domxref("Element")}}               | `null`                              |
| {{domxref("NamedNodeMap")}}          | `null`                              |
| {{domxref("ProcessingInstruction")}} | Entire content excluding the target |
| {{domxref("Text")}}                  | Content of the text node            |

> **Note:** When `nodeValue` is defined to be `null`, setting it has no effect.

## Example

```html
<div id="d1">Hello world</div>
<!-- Example of comment -->
<output id="result">Not calculated yet.</output>
```

and the following script:

```js
let node = document.querySelector("body").firstChild;
let result = "<br/>Node names are:<br/>";
while (node) {
  result += `Value of ${node.nodeName}: ${node.nodeValue}<br/>`;
  node = node.nextSibling;
}

const output = document.getElementById("result");
output.innerHTML = result;
```

{{ EmbedLiveSample("Example", "100%", "250")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
