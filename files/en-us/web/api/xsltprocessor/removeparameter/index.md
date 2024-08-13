---
title: "XSLTProcessor: removeParameter() method"
short-title: removeParameter()
slug: Web/API/XSLTProcessor/removeParameter
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.removeParameter
---

{{APIRef("XSLT")}}

The `removeParameter()` method of the {{domxref("XSLTProcessor")}} interface removes the parameter (`<xsl:param>`) and its value from the stylesheet imported in the processor.

## Syntax

```js-nolint
removeParameter(namespaceURI, localName)
```

### Parameters

- `namespaceURI`
  - : The namespace associated with the parameter name. A ["null"](/en-US/docs/Web/JavaScript/Reference/Operators/null) value is treated the same as the empty string (`""`).
- `localName`
  - : The name of the parameter in the associated namespace.

### Return value

None ({{jsxref("undefined")}}).

## Examples

First, the `showItems` parameter is set to `'yes'`, which allows the list items to be displayed in the output.

After that, the `showItems` parameter is removed using `removeParameter()`, and the transformation is performed again, resulting in no items being displayed.

```HTML
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
xsltProcessor.setParameter(null, "showItems", "yes");

// Perform transformation and display result
let resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);
document.getElementById("result").appendChild(resultFragment);

// Remove parameter to hide items
xsltProcessor.removeParameter(null, "showItems");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XSLTProcessor.getParameter()")}}
- {{domxref("XSLTProcessor.setParameter()")}}
- {{domxref("XSLTProcessor.clearParameters()")}}
- {{domxref("XSLTProcessor.reset()")}}
