---
title: "Node: nodeType property"
short-title: nodeType
slug: Web/API/Node/nodeType
page-type: web-api-instance-property
browser-compat: api.Node.nodeType
---

{{APIRef("DOM")}}

The read-only **`nodeType`** property of a {{domxref("Node")}} interface is an integer
that identifies what the node is. It distinguishes different kind of nodes from each other,
such as {{domxref("Element", "elements")}}, {{domxref("Text", "text")}} and {{domxref("Comment", "comments")}}.

## Value

An integer which specifies the type of the node. Possible values are:

- `Node.ELEMENT_NODE` (`1`)
  - : An {{domxref("Element")}} node like {{HTMLElement("p")}} or {{HTMLElement("div")}}.
- `Node.ATTRIBUTE_NODE` (`2`)
  - : An {{domxref("Attr", "Attribute")}} of an {{domxref("Element")}}.
- `Node.TEXT_NODE` (`3`)
  - : The actual {{domxref("Text")}} inside an {{domxref("Element")}} or {{domxref("Attr")}}.
- `Node.CDATA_SECTION_NODE` (`4`)
  - : A {{domxref("CDATASection")}}, such as `<!CDATA[[ … ]]>`
- `Node.PROCESSING_INSTRUCTION_NODE` (`7`)
  - : A {{domxref("ProcessingInstruction")}} of an XML document, such as `<?xml-stylesheet … ?>`.
- `Node.COMMENT_NODE` (`8`)
  - : A {{domxref("Comment")}} node, such as `<!-- … -->`.
- `Node.DOCUMENT_NODE` (`9`)
  - : A {{domxref("Document")}} node.
- `Node.DOCUMENT_TYPE_NODE` (`10`)
  - : A {{domxref("DocumentType")}} node, such as `<!doctype html>`.
- `Node.DOCUMENT_FRAGMENT_NODE` (`11`)
  - : A {{domxref("DocumentFragment")}} node.

The following constants have been deprecated and are not in use anymore: `Node.ENTITY_REFERENCE_NODE` (`5`),
`Node.ENTITY_NODE` (`6`), and `Node.NOTATION_NODE` (`12`).

## Examples

### Different types of nodes

```js
document.nodeType === Node.DOCUMENT_NODE; // true
document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true

document.createDocumentFragment().nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true

const p = document.createElement("p");
p.textContent = "Once upon a time…";

p.nodeType === Node.ELEMENT_NODE; // true
p.firstChild.nodeType === Node.TEXT_NODE; // true
```

### Comments

This example checks if the first node inside the document element is a comment, and
displays a message if not.

```js
const node = document.documentElement.firstChild;
if (node.nodeType !== Node.COMMENT_NODE) {
  console.warn("You should comment your code!");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
