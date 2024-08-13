---
title: "XSLTProcessor: transformToDocument() method"
short-title: transformToDocument()
slug: Web/API/XSLTProcessor/transformToDocument
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.transformToDocument
---

{{APIRef("XSLT")}}

The `transformToDocument()` method of the {{domxref("XSLTProcessor")}} interface transforms the provided {{DOMxRef("Node")}} source to a {{domxref("Document")}} using the XSLT stylesheet associated with `XSLTProcessor`.

## Syntax

```js-nolint
transformToDocument(source)
```

### Parameters

- `source`
  - : The {{DOMxRef("Node")}} source to apply the XSLT stylesheet to.

### Return value

A {{domxref("Document")}}. The actual interface depends on the [output method](https://www.w3.org/TR/1999/REC-xslt-19991116#output) of the stylesheet:

| Output method | Result interface                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------ |
| `html`        | {{domxref("HTMLDocument")}}                                                                            |
| `xml`         | {{domxref("XMLDocument")}}                                                                             |
| `text`        | {{domxref("XMLDocument")}} with a single root element `<transformiix:result>` with the text as a child |

## Examples

```html
<div id="result"></div>
```

```js
// Sample XML data
const xmlString = `
<books>
    <book>
        <title>Book 1</title>
        <author>Author 1</author>
    </book>
    <book>
        <title>Book 2</title>
        <author>Author 2</author>
    </book>
</books>
`;

// Sample XSLT stylesheet
const xsltString = `
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="xml" indent="yes"/>
  <xsl:template match="/">
    <catalog>
      <xsl:for-each select="books/book">
        <item>
          <name><xsl:value-of select="title"/></name>
          <writer><xsl:value-of select="author"/></writer>
        </item>
      </xsl:for-each>
    </catalog>
  </xsl:template>
</xsl:stylesheet>
`;

// Parse the XML and XSLT strings into DOM objects
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const xsltDoc = parser.parseFromString(xsltString, "application/xml");

// Create an XSLTProcessor instance
const xsltProcessor = new XSLTProcessor();
xsltProcessor.importStylesheet(xsltDoc);

// Perform the transformation, returning the result as a new XML document
const resultDoc = xsltProcessor.transformToDocument(xmlDoc);

// Serialize the result document to a string
const serializer = new XMLSerializer();
const resultString = serializer.serializeToString(resultDoc);

// Display the transformed XML in the page
document.getElementById("result").textContent = resultString;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XSLTProcessor.transformToFragment()")}}
