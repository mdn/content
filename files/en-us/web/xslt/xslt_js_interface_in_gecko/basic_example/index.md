---
title: Basic example
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Basic_Example
---

{{XsltSidebar}}

## Basic Example

The basic example will load an XML file and apply a XSL transformation on it. These are the same files used in the [Generating HTML](/en-US/docs/Web/API/XSLTProcessor/Generating_HTML) example in the [XSLT in Netscape Gecko](/en-US/docs/Web/API/XSLTProcessor) article. The XML file describes an article and the XSL file formats the information for display.

### XML file

```xml
<?xml version="1.0"?>
<myNS:Article xmlns:myNS="http://devedge.netscape.com/2002/de">
  <myNS:Title>My Article</myNS:Title>
  <myNS:Authors>
    <myNS:Author company="Foopy Corp.">Mr. Foo</myNS:Author>
    <myNS:Author>Mr. Bar</myNS:Author>
  </myNS:Authors>
  <myNS:Body>
    The <b>rain</b> in <u>Spain</u> stays mainly in the plains.
  </myNS:Body>
</myNS:Article>
```

### XSLT Stylesheet

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                   xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                   xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html" />

  <xsl:template match="/">
    <html>

      <head>

        <title>
          <xsl:value-of select="/myNS:Article/myNS:Title"/>
        </title>

        <style>
          .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
        </style>

      </head>

      <body>
        <p class="myBox">
          <span class="title">
            <xsl:value-of select="/myNS:Article/myNS:Title"/>
          </span> <br />

          Authors:   <br />
            <xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/>
          </p>

        <p class="myBox">
          <xsl:apply-templates select="//myNS:Body"/>
        </p>

      </body>

    </html>
  </xsl:template>

  <xsl:template match="myNS:Author">
     --   <xsl:value-of select="." />

    <xsl:if test="@company">
     ::   <b>  <xsl:value-of select="@company" />  </b>
    </xsl:if>

    <br />
  </xsl:template>

  <xsl:template match="myNS:Body">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="@*|node()">
      <xsl:copy>
        <xsl:apply-templates select="@*|node()"/>
      </xsl:copy>
  </xsl:template>
</xsl:stylesheet>
```

The example loads using synchronous {{domxref("XMLHTTPRequest")}} both the .xsl (`xslStylesheet`) and the .xml (`xmlDoc`) files into memory. The .xsl file is then imported (`xsltProcessor.importStylesheet(xslStylesheet)`) and the transformation run (`xsltProcessor.transformToFragment(xmlDoc, document)`). This allows fetching of data after the page has been loaded, without initiating a fresh page load.

### Example

```js
let xslStylesheet;
const xsltProcessor = new XSLTProcessor();
let myDOM;

let xmlDoc;

function Init() {
  // Load the xslt file, example1.xsl
  let myXMLHTTPRequest = new XMLHttpRequest();
  myXMLHTTPRequest.open("GET", "example1.xsl", false);
  myXMLHTTPRequest.send(null);

  xslStylesheet = myXMLHTTPRequest.responseXML;
  xsltProcessor.importStylesheet(xslStylesheet);

  // Load the XML file, example1.xml
  myXMLHTTPRequest = new XMLHttpRequest();
  myXMLHTTPRequest.open("GET", "example1.xml", false);
  myXMLHTTPRequest.send(null);

  xmlDoc = myXMLHTTPRequest.responseXML;

  const fragment = xsltProcessor.transformToFragment(xmlDoc, document);
  myDOM = fragment;
  document.getElementById("example").textContent = "";
  document.getElementById("example").appendChild(fragment);
}
```
