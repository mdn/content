---
title: "XSLTProcessor: reset() method"
short-title: reset()
slug: Web/API/XSLTProcessor/reset
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.reset
---

{{APIRef("XSLT")}}

The `reset()` method of the {{domxref("XSLTProcessor")}} interface removes all parameters (`<xsl:param>`) and the XSLT stylesheet from the processor. The `XSLTProcessor` will then be in its original state when it was created.

## Syntax

```js-nolint
reset()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example demonstrates how the `reset()` method allows the same `XSLTProcessor` instance to be reused for multiple transformations with different stylesheets.

```html
<div id="result"></div>
```

```js
// First XML data
const xmlString1 = `
<items>
    <item>Item A</item>
    <item>Item B</item>
</items>
`;

// First XSLT stylesheet
const xsltString1 = `
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

// Second XML data
const xmlString2 = `
<fruits>
    <fruit>Apple</fruit>
    <fruit>Banana</fruit>
</fruits>
`;

// Second XSLT stylesheet
const xsltString2 = `
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <ol>
      <xsl:for-each select="fruits/fruit">
        <li><xsl:value-of select="."/></li>
      </xsl:for-each>
    </ol>
  </xsl:template>
</xsl:stylesheet>
`;

// Parse the XML and XSLT strings into DOM objects
const parser = new DOMParser();
const xmlDoc1 = parser.parseFromString(xmlString1, "application/xml");
const xsltDoc1 = parser.parseFromString(xsltString1, "application/xml");
const xmlDoc2 = parser.parseFromString(xmlString2, "application/xml");
const xsltDoc2 = parser.parseFromString(xsltString2, "application/xml");

// Create an XSLTProcessor instance
const xsltProcessor = new XSLTProcessor();

// Import the first XSLT stylesheet and transform the first XML
xsltProcessor.importStylesheet(xsltDoc1);
let resultFragment = xsltProcessor.transformToFragment(xmlDoc1, document);
document.getElementById("result").appendChild(resultFragment);

// Reset the XSLTProcessor instance
xsltProcessor.reset();

// Import the second XSLT stylesheet and transform the second XML
xsltProcessor.importStylesheet(xsltDoc2);
resultFragment = xsltProcessor.transformToFragment(xmlDoc2, document);
document.getElementById("result").appendChild(document.createElement("hr"));
document.getElementById("result").appendChild(resultFragment);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XSLTProcessor.getParameter()")}}
- {{domxref("XSLTProcessor.setParameter()")}}
- {{domxref("XSLTProcessor.removeParameter()")}}
- {{domxref("XSLTProcessor.clearParameters()")}}
