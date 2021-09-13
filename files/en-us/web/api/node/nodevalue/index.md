---
title: Node.nodeValue
slug: Web/API/Node/nodeValue
tags:
  - API
  - DOM
  - NeedsSpecTable
  - Node
  - Property
  - Reference
browser-compat: api.Node.nodeValue
---
{{APIRef("DOM")}}

The **`nodeValue`** property of the {{domxref("Node")}}
interface returns or sets the value of the current node.

## Syntax

```js
str = node.nodeValue;
node.nodeValue = str;
```

### Value

`str` is a string containing the value of the current node, if any. For the
document itself, `nodeValue` returns `null`. For text, comment,
and CDATA nodes, `nodeValue` returns the content of the node. For attribute
nodes, the value of the attribute is returned.

The following table shows the return values for different elements:

| Node                                             | Value of nodeValue                  |
| ------------------------------------------------ | ----------------------------------- |
| {{domxref("CDATASection")}}             | Content of the CDATA section        |
| {{domxref("Comment")}}                     | Content of the comment              |
| {{domxref("Document")}}                 | `null`                              |
| {{domxref("DocumentFragment")}}         | `null`                              |
| {{domxref("DocumentType")}}             | `null`                              |
| {{domxref("Element")}}                     | `null`                              |
| {{domxref("NamedNodeMap")}}             | `null`                              |
| {{domxref("ProcessingInstruction")}} | Entire content excluding the target |
| {{domxref("Text")}}                         | Content of the text node            |

When `nodeValue` is defined to be `null`, setting it has no
effect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
