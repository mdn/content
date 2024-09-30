---
title: "XSLTProcessor: importStylesheet() method"
short-title: importStylesheet()
slug: Web/API/XSLTProcessor/importStylesheet
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.importStylesheet
---

{{APIRef("XSLT")}}

The `importStylesheet()` method of the {{domxref("XSLTProcessor")}} interface imports an XSLT stylesheet for the processor.

## Syntax

```js-nolint
importStylesheet(style)
```

### Parameters

- `style`
  - : The {{DOMxRef("Node")}} to import. It can be an XML document (that is a {{domxref("Document")}} with {{domxref("Document.doctype", "doctype")}} whose {{domxref("DocumentType.name", "name")}} of `"xml"`) containing an XSLT stylesheet or a [literal result element transform](https://www.w3.org/TR/xslt/#result-element-stylesheet), or an {{domxref("Element")}} representing an `<xsl:stylesheet>` or `<xsl:transform>`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using importStylesheet()

This example shows how `importStylesheet()` loads an XSLT stylesheet into an `XSLTProcessor` for use in transforming XML data.

#### HTML

```html
<div id="result"></div>
```

#### JavaScript

```js
const xmlString = `
<items>
  <item>Item 1</item>
  <item>Item 2</item>
</items>
`;

const xsltString = `
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <ul>
      <xsl:for-each select="items/item">
        <li><xsl:value-of select="."/></li>
      </xsl:for-each>
    </ul>
  </xsl:template>
</xsl:stylesheet>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const xsltDoc = parser.parseFromString(xsltString, "application/xml");

const xsltProcessor = new XSLTProcessor();

// Import the XSLT stylesheet into the XSLTProcessor
xsltProcessor.importStylesheet(xsltDoc);

// Perform the transformation from XML to HTML
const resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);

// Display the transformed result in the page
document.getElementById("result").appendChild(resultFragment);
```

#### Result

{{EmbedLiveSample("using_importStylesheet", "", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
