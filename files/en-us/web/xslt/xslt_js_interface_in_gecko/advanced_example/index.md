---
title: Advanced Example
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Advanced_Example
tags:
  - XSLT
---
## Advanced example

This advanced example sorts several divs based on their content. The example allows sorting the content multiple times, alternating between ascending and descending order. The JavaScript loads the .xsl file only on the first sort and sets the `xslloaded` variable to true once it has finished loading the file. Using the {{domxref("XSLTProcessor.getParameter()")}} method, the code can figure whether to sort in ascending or descending order. It defaults to ascending if the parameter is empty (the first time the sorting happens, as there is no value for it in the XSLT file). The sorting value is set using {{domxref("XSLTProcessor.setParameter()")}}.

The XSLT file has a parameter called `myOrder` that JavaScript sets to change the sorting method. The `xsl:sort` element's order attribute can access the value of the parameter using `$myOrder`. However, the value needs to be an XPATH expression and not a string, so `{$myOrder}` is used. Using {} evaluates the content as an XPath expression.

Once the transformation is complete, the result is appended to the document, as shown in this example.

**Figure 7: Sorting based on div content: view example**

```js
// XHTML Fragment:

<div id="example">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>

// JavaScript

var xslRef;
var xslloaded = false;
var xsltProcessor = new XSLTProcessor();
var myDOM;

var xmlRef = document.implementation.createDocument("", "", null);

function sort() {
  if (!xslloaded){
    p = new XMLHttpRequest();
    p.open("GET", "example2.xsl", false);
    p.send(null);

    xslRef = p.responseXML;
    xsltProcessor.importStylesheet(xslRef);
    xslloaded = true;
  }

  // create a new XML document in memory
  xmlRef = document.implementation.createDocument("", "", null);

  // we want to move a part of the DOM from an HTML document to an XML document.
  // importNode is used to clone the nodes we want to process via XSLT - true makes it do a deep clone
  var myNode = document.getElementById("example");
  var clonedNode = xmlRef.importNode(myNode, true);

  // after cloning, we append
  xmlRef.appendChild(clonedNode);

  // set the sorting parameter in the XSL file
  var sortVal = xsltProcessor.getParameter(null, "myOrder");

  if (sortVal == "" || sortVal == "descending")
    xsltProcessor.setParameter(null, "myOrder", "ascending");
  else
    xsltProcessor.setParameter(null, "myOrder", "descending");

  // initiate the transformation
  var fragment = xsltProcessor.transformToFragment(xmlRef, document);

  // clear the contents
  document.getElementById("example").textContent = "";

  myDOM = fragment;
  // add the new content from the transformation
  document.getElementById("example").appendChild(fragment)
}

// XSL Stylesheet:

<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns="http://www.w3.org/1999/xhtml" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes" />

  <xsl:param name="myOrder" />

  <xsl:template match="/">

    <xsl:apply-templates select="/div//div">
      <xsl:sort select="." data-type="number" order="{$myOrder}" />
    </xsl:apply-templates>
  </xsl:template>

  <xsl:template match="div">
    <xsl:copy-of select="." />
  </xsl:template>
</xsl:stylesheet>
```
