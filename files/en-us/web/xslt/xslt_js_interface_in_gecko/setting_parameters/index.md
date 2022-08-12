---
title: Setting Parameters
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Setting_Parameters
tags:
  - XSLT
---
## Setting Parameters

While running transformations using precoded .xsl and .xml files is quite useful, configuring the .xsl file from JavaScript may be even more useful. For example, JavaScript and XSLT could be used to sort XML data and then display it. The sorting would have to alternate between ascending and descending sorting.

XSLT provides the `xsl:param` element, which is a child of the `xsl:stylesheet` element. {{domxref('XSLTProcessor')}} provides three JavaScript methods to interact with these parameters: {{domxref('XSLTProcessor.setParameter()')}}, {{domxref('XSLTProcessor.getParameter()')}} and {{domxref('XSLTProcessor.removeParameter()')}}. They all take as the first argument the namespace URI of the `xsl:param` (Usually the param will fall in the default namespace, so passing in `null` will suffice.) The local name of the `xsl:param` is the second argument. setParameter requires a third argument - namely the value to which the parameter will be set.

**Figure 7 : Parameters**

```js
/* XSLT:

<xsl:param name="myOrder" />

*/

// JavaScript:

const sortVal = xsltProcessor.getParameter(null, "myOrder");

if (sortVal === "" || sortVal === "descending") {
  xsltProcessor.setParameter(null, "myOrder", "ascending");
} else {
  xsltProcessor.setParameter(null, "myOrder", "descending");
}
```
