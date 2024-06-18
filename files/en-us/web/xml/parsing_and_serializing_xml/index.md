---
title: Parsing and serializing XML
slug: Web/XML/Parsing_and_serializing_XML
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/XML")}}

At times, you may need to parse {{Glossary("XML")}} content and convert it into a {{Glossary("DOM")}} tree, or, conversely, serialize an existing DOM tree into XML. In this article, we'll look at the objects provided by the web platform to make the common tasks of serializing and parsing XML easy.

- {{domxref("XMLSerializer")}}
  - : Serializes DOM trees, converting them into strings containing XML.
- {{domxref("DOMParser")}}
  - : Constructs a DOM tree by parsing a string containing XML, returning a {{domxref("XMLDocument")}} or {{domxref("Document")}} as appropriate based on the input data.
- {{domxref("fetch()")}}
  - : Loads content from a URL. XML content is returned as a text string which you can parse using `DOMParser`.
- {{domxref("XMLHttpRequest")}}
  - : The precursor to `fetch()`. Unlike the `fetch()` API, `XMLHttpRequest` can return a resource as a `Document`, via its {{domxref("XMLHttpRequest.responseXML", "responseXML")}} property.
- [XPath](/en-US/docs/Web/XPath)
  - : A technology for creating strings that contain addresses for specific portions of an XML document, and locating XML nodes based on those addresses.

## Creating an XML document

Using one of the following approaches to create an XML document (which is an instance of {{domxref("Document")}}).

### Parsing strings into DOM trees

This example converts an XML fragment in a string into a DOM tree using a {{domxref("DOMParser")}}:

```js
const xmlStr = '<q id="a"><span id="b">hey!</span></q>';
const parser = new DOMParser();
const doc = parser.parseFromString(xmlStr, "application/xml");
// print the name of the root element or error message
const errorNode = doc.querySelector("parsererror");
if (errorNode) {
  console.log("error while parsing");
} else {
  console.log(doc.documentElement.nodeName);
}
```

### Parsing URL-addressable resources into DOM trees

#### Using fetch

Here is sample code that reads and parses a URL-addressable XML file into a DOM tree:

```js
fetch("example.xml")
  .then((response) => response.text())
  .then((text) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/xml");
    console.log(doc.documentElement.nodeName);
  });
```

This code fetches the resource as a text string, then uses {{domxref("DOMParser.parseFromString()")}} to construct an {{domxref("XMLDocument")}}.

If the document is {{Glossary("HTML")}}, the code shown above will return a {{domxref("Document")}}. If the document is XML, the resulting object is actually an `XMLDocument`. The two types are essentially the same; the difference is largely historical, although differentiating has some practical benefits as well.

> **Note:** There is in fact an {{domxref("HTMLDocument")}} interface as well, but it is not necessarily an independent type. In some browsers it is, while in others it is an alias for the `Document` interface.

## Serializing an XML document

Given a {{domxref("Document")}}, you can serialize the document's DOM tree back into XML using the {{domxref("XMLSerializer.serializeToString()")}} method.

Use the following approaches to serialize the contents of the XML document you created in the previous section.

### Serializing DOM trees to strings

First, create a DOM tree as described in [Using the Document Object Model](/en-US/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model). Alternatively, use a DOM tree obtained from {{ domxref("fetch()") }}.

To serialize the DOM tree `doc` into XML text, call {{domxref("XMLSerializer.serializeToString()")}}:

```js
const serializer = new XMLSerializer();
const xmlStr = serializer.serializeToString(doc);
```

### Serializing HTML documents

If the DOM you have is an HTML document, you can serialize using `serializeToString()`, but there is a simpler option: just use the {{domxref("Element.innerHTML")}} property (if you want just the descendants of the specified node) or the {{domxref("Element.outerHTML")}} property if you want the node and all its descendants.

```js
const docInnerHtml = document.documentElement.innerHTML;
```

As a result, `docInnerHtml` is a string containing the HTML of the contents of the document; that is, the {{HTMLElement("body")}} element's contents.

You can get HTML corresponding to the `<body>` _and_ its descendants with this code:

```js
const docOuterHtml = document.documentElement.outerHTML;
```

## See also

- [XPath](/en-US/docs/Web/XPath)
- {{domxref("fetch()")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("Document")}}, {{domxref("XMLDocument")}}, and {{domxref("HTMLDocument")}}
