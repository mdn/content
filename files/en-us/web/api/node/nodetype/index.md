---
title: Node.nodeType
slug: Web/API/Node/nodeType
tags:
  - API
  - DOM
  - Property
  - Reference
browser-compat: api.Node.nodeType
---
{{APIRef("DOM")}}

The read-only **`Node.nodeType`**
property is an integer that identifies what the node is. It distinguishes different
kind of nodes from each other, such as {{domxref("Element", "elements")}},
{{domxref("Text", "text")}} and {{domxref("Comment", "comments")}}.

## Syntax

```js
var type = node.nodeType;
```

Returns an integer which specifies the type of the node. Possible values are listed in
{{anch("Node type constants")}}.

## Constants

### Node type constants

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Node.ELEMENT_NODE</code></td>
      <td><code>1</code></td>
      <td>
        An {{domxref("Element")}} node like {{HTMLElement("p")}}
        or {{HTMLElement("div")}}.
      </td>
    </tr>
    <tr>
      <td><code>Node.ATTRIBUTE_NODE</code></td>
      <td><code>2</code></td>
      <td>
        An {{domxref("Attr", "Attribute")}} of an
        {{domxref("Element")}}.
      </td>
    </tr>
    <tr>
      <td><code>Node.TEXT_NODE</code></td>
      <td><code>3</code></td>
      <td>
        The actual {{domxref("Text")}} inside an
        {{domxref("Element")}} or {{domxref("Attr")}}.
      </td>
    </tr>
    <tr>
      <td><code>Node.CDATA_SECTION_NODE</code></td>
      <td><code>4</code></td>
      <td>
        A {{domxref("CDATASection")}}, such as
        <code>&#x3C;!CDATA[[ … ]]></code>.
      </td>
    </tr>
    <tr>
      <td><code>Node.PROCESSING_INSTRUCTION_NODE</code></td>
      <td><code>7</code></td>
      <td>
        A {{domxref("ProcessingInstruction")}} of an XML document,
        such as <code>&#x3C;?xml-stylesheet … ?></code>.
      </td>
    </tr>
    <tr>
      <td><code>Node.COMMENT_NODE</code></td>
      <td><code>8</code></td>
      <td>
        A {{domxref("Comment")}} node, such as
        <code>&#x3C;!-- … --></code>.
      </td>
    </tr>
    <tr>
      <td><code>Node.DOCUMENT_NODE</code></td>
      <td><code>9</code></td>
      <td>A {{domxref("Document")}} node.</td>
    </tr>
    <tr>
      <td><code>Node.DOCUMENT_TYPE_NODE</code></td>
      <td><code>10</code></td>
      <td>
        A {{domxref("DocumentType")}} node, such as
        <code>&#x3C;!DOCTYPE html></code>.
      </td>
    </tr>
    <tr>
      <td><code>Node.DOCUMENT_FRAGMENT_NODE</code></td>
      <td><code>11</code></td>
      <td>A {{domxref("DocumentFragment")}} node.</td>
    </tr>
  </tbody>
</table>

The following constants have been deprecated and are not in use anymore: `Node.ENTITY_REFERENCE_NODE` (5),
`Node.ENTITY_NODE` (6), and `Node.NOTATION_NODE` (12).

## Examples

### Different types of nodes

```js
document.nodeType === Node.DOCUMENT_NODE; // true
document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true

document.createDocumentFragment().nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true

var p = document.createElement("p");
p.textContent = "Once upon a time…";

p.nodeType === Node.ELEMENT_NODE; // true
p.firstChild.nodeType === Node.TEXT_NODE; // true
```

### Comments

This example checks if the first node inside the document element is a comment, and
displays a message if not.

```js
var node = document.documentElement.firstChild;
if (node.nodeType !== Node.COMMENT_NODE) {
  console.warn("You should comment your code!");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
