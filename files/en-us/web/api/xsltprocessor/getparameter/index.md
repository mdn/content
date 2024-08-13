---
title: "XSLTProcessor: getParameter() method"
short-title: getParameter()
slug: Web/API/XSLTProcessor/getParameter
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.getParameter
---

{{APIRef("XSLT")}}

The `getParameter()` method of the {{domxref("XSLTProcessor")}} interface returns the value of a parameter (`<xsl:param>`) from the stylesheet imported in the processor.

## Syntax

```js-nolint
getParameter(namespaceURI, localName)
```

### Parameters

- `namespaceURI`
  - : The namespace associated with the parameter name. A ["null"](/en-US/docs/Web/JavaScript/Reference/Operators/null) value is treated the same as the empty string (`""`).
- `localName`
  - : The name of the parameter in the associated namespace.

### Return value

An object that is the value associated with the parameter. It can be of any type.

> [!NOTE]
> Firefox supports any kind of parameter. Chrome, Edge and Safari only support string parameters.

## Examples

This example shows how to use `getParameter()` to check the value of a parameter that controls the behavior of an XSLT transformation.

```html
<div id="result"></div>
```

```js
// Simple XML data
const xmlString = `
<items>
    <item>Item 1</item>
    <item>Item 2</item>
</items>
`;

// Simple XSLT stylesheet
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

// Parse XML and XSLT
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");
const xsltDoc = parser.parseFromString(xsltString, "application/xml");

// Create XSLTProcessor and import the stylesheet
const xsltProcessor = new XSLTProcessor();
xsltProcessor.importStylesheet(xsltDoc);

// Set parameter to show items
xsltProcessor.setParameter(null, "showItems", "no");

// Get and display the current parameter value
const currentParamValue = xsltProcessor.getParameter(null, "showItems");
console.log(`Current showItems parameter: ${currentParamValue}`);

// Perform transformation and display result
let resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);
document.getElementById("result").appendChild(resultFragment);

// Change the parameter value
xsltProcessor.setParameter(null, "showItems", "yes");

// Get and display the updated parameter value
const updatedParamValue = xsltProcessor.getParameter(null, "showItems");
console.log(`Updated showItems parameter: ${updatedParamValue}`);

// Perform transformation again and display the result
resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);
document.getElementById("result").appendChild(document.createElement("hr"));
document.getElementById("result").appendChild(resultFragment);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XSLTProcessor.setParameter()")}}
- {{domxref("XSLTProcessor.removeParameter()")}}
- {{domxref("XSLTProcessor.clearParameters()")}}
- {{domxref("XSLTProcessor.reset()")}}
