---
title: XMLSerializer
slug: Web/API/XMLSerializer
page-type: web-api-interface
tags:
  - Converting
  - DOM Parsing
  - Interface
  - Parsing
  - Reference
  - Serialization
  - Serializing
  - XML
  - XMLSerializer
  - conversion
browser-compat: api.XMLSerializer
---
{{APIRef("XMLSerializer")}}

The `XMLSerializer` interface provides the {{domxref("XMLSerializer.serializeToString", "serializeToString()")}} method to construct an XML string representing a {{Glossary("DOM")}} tree.

## Methods

- {{domxref("XMLSerializer.serializeToString", "serializeToString()")}}
  - : Returns the serialized subtree of a string.

## Examples

### Serializing XML into a string

The first, basic, example just serializes an entire document into a string containing XML.

```js
 const s = new XMLSerializer();
 const d = document;
 const str = s.serializeToString(d);
 saveXML(str);
```

This involves creating a new `XMLSerializer` object, then passing the {{domxref("Document")}} to be serialized into {{domxref("XMLSerializer.serializeToString", "serializeToString()")}}, which returns the XML equivalent of the document.

### Inserting nodes into a DOM based on XML

This example uses the {{domxref("Element.insertAdjacentHTML()")}} method to insert a new DOM {{domxref("Node")}} into the body of the {{domxref("Document")}}, based on XML created by serializing an {{domxref("Element")}} object.

> **Note:** In the real world, you should usually instead call {{domxref("Document.importNode", "importNode()")}} method to import the new node into the DOM, then call one of the following methods to add the node to the DOM tree:
>
> - The {{domxref("Element.append()")}}/{{domxref("Element.prepend()")}} and {{domxref("Document.append()")}}/{{domxref("Document.prepend()")}} methods.
> - The {{domxref("Element.replaceWith")}} method (to replace an existing node with the new one)
> - The {{domxref("Document.insertAdjacentElement()")}} and {{domxref("Element.insertAdjacentElement()")}} methods.

Because `insertAdjacentHTML()` accepts a string and not a `Node` as its second parameter, `XMLSerializer` is used to first convert the node into a string.

```js
const inp = document.createElement('input');
const XMLS = new XMLSerializer();
const inp_xmls = XMLS.serializeToString(inp); // First convert DOM node into a string

// Insert the newly created node into the document's body
document.body.insertAdjacentHTML('afterbegin', inp_xmls);
```

The code creates a new {{HTMLElement("input")}} element by calling {{domxref("Document.createElement()")}}, then serializes it into XML using {{domxref("XMLSerializer.serializeToString", "serializeToString()")}}.

Once that's done, `insertAdjacentHTML()` is used to insert the `<input>` element into the DOM.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Parsing and serializing XML](/en-US/docs/Web/Guide/Parsing_and_serializing_XML)
- {{domxref("XMLHttpRequest")}}
- {{domxref("DOMParser")}}
