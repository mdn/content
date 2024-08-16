---
title: "XSLTProcessor: clearParameters() method"
short-title: clearParameters()
slug: Web/API/XSLTProcessor/clearParameters
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.clearParameters
---

{{APIRef("XSLT")}}

The `clearParameters()` method of the {{domxref("XSLTProcessor")}} interface removes all parameters (`<xsl:param>`) and their values from the stylesheet imported in the processor. The `XSLTProcessor` will then use the default values specified in the XSLT stylesheet.

## Syntax

```js-nolint
clearParameters()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### using clearParameters()

This example shows how `clearParameters()` can be used to reset all parameters back to their default values as specified in the XSLT stylesheet.

#### HTML

```HTML
<div id="result"></div>
```

#### JavaScript

```js
const xmlString = `
<items>
  <item>Item 1</item>
  <item>Item 2</item>
  <item>Item 3</item>
</items>
`;

const xsltString = `
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:param name="showItems" select="'yes'"/>
  <xsl:template match="/">
    <ul>
      <xsl:if test="$showItems = 'yes'">
        <xsl:for-each select="items/item">
          <li><xsl:value-of select="."/></li>
        </xsl:for-each>
      </xsl:if>
    </ul>
  </xsl:template>
</xsl:stylesheet>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const xsltDoc = parser.parseFromString(xsltString, "application/xml");

const xsltProcessor = new XSLTProcessor();
xsltProcessor.importStylesheet(xsltDoc);

xsltProcessor.setParameter(null, "showItems", "yes");

// Perform transformation and display result
let resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);
document.getElementById("result").appendChild(resultFragment);

// Clear all parameters
xsltProcessor.clearParameters();

// Perform transformation again (this will use the default value for 'showItems')
resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);
document.getElementById("result").appendChild(document.createElement("hr"));
document.getElementById("result").appendChild(resultFragment);
```

#### Result

{{EmbedLiveSample("using_clearParameters", "", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XSLTProcessor.getParameter()")}}
- {{domxref("XSLTProcessor.setParameter()")}}
- {{domxref("XSLTProcessor.removeParameter()")}}
- {{domxref("XSLTProcessor.reset()")}}
