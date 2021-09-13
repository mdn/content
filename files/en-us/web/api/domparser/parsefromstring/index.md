---
title: DOMParser.parseFromString()
slug: Web/API/DOMParser/parseFromString
tags:
  - API
  - Method
  - Reference
browser-compat: api.DOMParser.parseFromString
---
{{APIRef("DOMParser")}}

The **`parseFromString()`** method of the {{domxref("DOMParser")}} interface parses a string containing either HTML or XML, returning an {{domxref("HTMLDocument")}} or an {{domxref("XMLDocument")}}.

## Syntax

```js
const doc = domparser.parseFromString(string, mimeType)
```

### Parameters

- `string`
  - : The {{domxref("DOMString")}} to be parsed. It must contain either an
    {{Glossary("HTML")}}, {{Glossary("xml")}}, {{Glossary("xhtml+xml")}}, or
    {{Glossary("svg")}} document.
- `mimeType`

  - : A {{domxref("DOMString")}}. This string determines whether the XML parser or the HTML parser is used to parse the string. Valid values are:

    - `text/html`
    - `text/xml`
    - `application/xml`
    - `application/xhtml+xml`
    - `image/svg+xml`

    A value of `text/html` will invoke the HTML parser, and the method will return an {{domxref("HTMLDocument")}}.
    Any other valid value will invoke the XML parser, and the method will return an {{domxref("XMLDocument")}}.

    Any other value will cause a [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) to be thrown.

### Return value

An {{domxref("HTMLDocument")}} or an {{domxref("XMLDocument")}}, depending on the
`mimeType` argument.

## Examples

### Parsing XML, SVG, and HTML

This example shows how to parse XML, SVG, and HTML. Note that a MIME type of
`text/html` will invoke the HTML parser, and any other valid MIME type will invoke
the XML parser.

```js
const parser = new DOMParser();

const xmlString = "<warning>Beware of the tiger</warning>";
const doc1 = parser.parseFromString(xmlString, "application/xml");
// XMLDocument

const svgString = "<circle cx=\"50\" cy=\"50\" r=\"50\"/>";
const doc2 = parser.parseFromString(svgString, "image/svg+xml");
// XMLDocument

const htmlString = "<strong>Beware of the leopard</strong>";
const doc3 = parser.parseFromString(htmlString, "text/html");
// HTMLDocument

console.log(doc1.documentElement.textContent)
// "Beware of the tiger"

console.log(doc2.firstChild.tagName);
// "circle"

console.log(doc3.body.firstChild.textContent);
// "Beware of the leopard"
```

### Error handling

Note that if the XML parser is used and parsing fails, the `DOMParser` throws an error:

```js
const parser = new DOMParser();

const xmlString = "<warning>Beware of the missing closing tag";
const doc = parser.parseFromString(xmlString, "application/xml");
// XML Parsing Error: no root element found
```

The parsing error may also be reported to the browser's JavaScript console.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLSerializer")}}
- {{jsxref("JSON.parse()")}} - counterpart for {{jsxref("JSON")}} documents.
