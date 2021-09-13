---
title: Node.nodeName
slug: Web/API/Node/nodeName
tags:
  - API
  - DOM
  - Gecko
  - NeedsSpecTable
  - Node
  - Property
  - Read-only
browser-compat: api.Node.nodeName
---
{{APIRef("DOM")}}

The **`nodeName`** read-only property returns the name of the
current {{domxref("Node")}} as a string.

## Syntax

```js
var str = node.nodeName;
```

### Value

A {{domxref("DOMString")}}. Values for the different types of nodes are:

| Interface                                        | nodeName value                                                        |
| ------------------------------------------------ | --------------------------------------------------------------------- |
| {{domxref("Attr")}}                         | The value of {{domxref("Attr.name")}}                         |
| {{domxref("CDATASection")}}             | `"#cdata-section"`                                                    |
| {{domxref("Comment")}}                     | `"#comment"`                                                          |
| {{domxref("Document")}}                 | `"#document"`                                                         |
| {{domxref("DocumentFragment")}}         | `"#document-fragment"`                                                |
| {{domxref("DocumentType")}}             | The value of {{domxref("DocumentType.name")}}             |
| {{domxref("Element")}}                     | The value of {{domxref("Element.tagName")}}                 |
| {{domxref("ProcessingInstruction")}} | The value of {{domxref("ProcessingInstruction.target")}} |
| {{domxref("Text")}}                         | `"#text"`                                                             |

## Example

Given the following markup:

```html
<div id="d1">hello world</div>
<input type="text" id="t">
```

and the following script:

```js
var div1 = document.getElementById("d1");
var text_field = document.getElementById("t");

text_field.value = div1.nodeName;
```

In XHTML (or any other XML format), `text_field`'s value would read
`"div"`. However, in HTML, `text_field`'s value would read
`"DIV"`, because `nodeName` and `tagName` return in
upper case on HTML elements in DOMs flagged as HTML documents. Read more [details on nodeName case
sensitivity in different browsers](https://johnresig.com/blog/nodename-case-sensitivity/).

Note that the {{domxref("Element.tagName")}} property could have been used instead,
since `nodeName` has the same value as `tagName` for an element.
Bear in mind, however, that `nodeName` will return `"#text"` for
text nodes while `tagName` will return `undefined`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
