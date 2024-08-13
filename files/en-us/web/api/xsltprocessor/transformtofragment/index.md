---
title: "XSLTProcessor: transformToFragment() method"
short-title: transformToFragment()
slug: Web/API/XSLTProcessor/transformToFragment
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.transformToFragment
---

{{APIRef("XSLT")}}

The `transformToFragment()` method of the {{domxref("XSLTProcessor")}} interface transforms a provided {{DOMxRef("Node")}} source to a {{domxref("DocumentFragment")}} using the XSLT stylesheet associated with the `XSLTProcessor`.

## Syntax

```js-nolint
transformToFragment(source, document)
```

### Parameters

- `source`
  - : The {{DOMxRef("Node")}} source to apply the XSLT stylesheet to.
- `document`
  - : The {{DOMxRef("Document")}} the document fragment will be associated with. (Any document fragment is associated with a document it can be added to).

### Return value

A {{domxref("DocumentFragment")}}.

## Examples

This example demonstrates how to use `transformToFragment()` to transform XML data into HTML, which can then be directly inserted into the DOM as a document fragment.

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
  <xsl:output method="html"/>
  <xsl:template match="/">
    <ul>
      <xsl:for-each select="books/book">
        <li>
          <strong><xsl:value-of select="title"/></strong>
          by <em><xsl:value-of select="author"/></em>
        </li>
      </xsl:for-each>
    </ul>
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

// Perform the transformation, returning the result as a document fragment
const resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);

// Insert the result into the page
document.getElementById("result").appendChild(resultFragment);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XSLTProcessor.transformToDocument()")}}
