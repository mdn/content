---
title: "XSLTProcessor: setParameter() method"
short-title: setParameter()
slug: Web/API/XSLTProcessor/setParameter
page-type: web-api-instance-method
browser-compat: api.XSLTProcessor.setParameter
---

{{APIRef("XSLT")}}

The `setParameter()` method of the {{domxref("XSLTProcessor")}} interface sets the value of a parameter (`<xsl:param>`) in the stylesheet imported in the processor.

## Syntax

```js-nolint
setParameter(namespaceURI, localName, value)
```

### Parameters

- `namespaceURI`
  - : The namespace associated with the parameter name. A ["null"](/en-US/docs/Web/JavaScript/Reference/Operators/null) value is treated the same as the empty string (`""`).
- `localName`
  - : The name of the parameter in the associated namespace.
- `value`
  - : The value of the parameter.
    > [!NOTE]
    > Firefox supports any kind of parameter. Chrome, Edge and Safari only support string parameters.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using setParameter()

This example demonstrates how to pass parameters from JavaScript to an XSLT stylesheet using `setParameter()`, allowing for dynamic modification of the transformation output based on these parameters.

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
  <item>Item 3</item>
</items>
`;

const xsltString = `
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:param name="showItems" select="'yes'"/>
  <xsl:param name="highlightColor" select="'yellow'"/>
  <xsl:template match="/">
    <ul>
      <xsl:if test="$showItems = 'yes'">
        <xsl:for-each select="items/item">
          <li style="background-color: {$highlightColor};">
            <xsl:value-of select="."/>
          </li>
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
xsltProcessor.setParameter(null, "highlightColor", "lightblue");

// Perform the transformation from XML to HTML
const resultFragment = xsltProcessor.transformToFragment(xmlDoc, document);

// Display the transformed result in the page
document.getElementById("result").appendChild(resultFragment);
```

#### Result

{{EmbedLiveSample("using_setParameter", "", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XSLTProcessor.getParameter()")}}
- {{domxref("XSLTProcessor.removeParameter()")}}
- {{domxref("XSLTProcessor.clearParameters()")}}
- {{domxref("XSLTProcessor.reset()")}}
