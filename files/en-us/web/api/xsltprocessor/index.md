---
title: XSLTProcessor
slug: Web/API/XSLTProcessor
page-type: web-api-interface
browser-compat: api.XSLTProcessor
---

{{APIRef("XSLT")}}

An **`XSLTProcessor`** applies an [XSLT](/en-US/docs/Web/XML/XSLT) stylesheet transformation to an XML document to
produce a new XML document as output. It has methods to load the XSLT stylesheet, to
manipulate `<xsl:param>` parameter values, and to apply the
transformation to documents.

## Constructor

- {{domxref("XSLTProcessor.XSLTProcessor", "XSLTProcessor()")}}
  - : Create a new `XSLTProcessor`.

## Instance methods

- {{domxref("XSLTProcessor.importStylesheet()")}}
  - : Imports the XSLT stylesheet.
    If the given node is a document node, you can pass in a full XSL Transform or a [literal result element transform](https://www.w3.org/TR/xslt/#result-element-stylesheet);
    otherwise, it must be an `<xsl:stylesheet>` or `<xsl:transform>` element.
- {{domxref("XSLTProcessor.transformToFragment()")}}
  - : Transforms the node source by applying the XSLT stylesheet imported using the {{domxref("XSLTProcessor.importStylesheet()")}} function.
    The owner document of the resulting document fragment is the owner node.
- {{domxref("XSLTProcessor.transformToDocument()")}}
  - : Transforms the node source applying the XSLT stylesheet given importing using the {{domxref("XSLTProcessor.importStylesheet()")}} function.
- {{domxref("XSLTProcessor.setParameter()")}}
  - : Sets a parameter (`<xsl:param>`) value in the XSLT stylesheet that was imported.
- {{domxref("XSLTProcessor.getParameter()")}}
  - : Gets the value of a parameter from the XSLT stylesheet.
- {{domxref("XSLTProcessor.removeParameter()")}}
  - : Removes the parameter if it was previously set.
    This will make the `XSLTProcessor` use the default value for the parameter as specified in the XSLT stylesheet.
- {{domxref("XSLTProcessor.clearParameters()")}}
  - : Removes all set parameters from the `XSLTProcessor`.
    The `XSLTProcessor` will then use the default values specified in the XSLT stylesheet.
- {{domxref("XSLTProcessor.reset()")}}
  - : Removes all parameters and stylesheets from the `XSLTProcessor`.

## Instance properties

_This are no properties for this interface._

## Examples

### Instantiating an `XSLTProcessor`

```js
async function init() {
  const parser = new DOMParser();
  const xsltProcessor = new XSLTProcessor();

  // Load the XSLT file, example1.xsl
  const xslResponse = await fetch("example1.xsl");
  const xslText = await xslResponse.text();
  const xslStylesheet = parser.parseFromString(xslText, "application/xml");
  xsltProcessor.importStylesheet(xslStylesheet);

  // process the file
  // …
}
```

### Creating an XML document based on part of a document's DOM

For the actual transformation, `XSLTProcessor` requires an XML document, which is used in conjunction with the imported XSL file to produce the final result. The XML document can be a separate XML file loaded using {{domxref("Window/fetch", "fetch()")}}, or it can be part of the existing page.

To process part of a page's DOM, it is necessary to first create an XML document in memory. Assuming that the DOM to be processed is contained by an element with the id `example`, that DOM can be "cloned" using the in-memory XML document's {{domxref('Document.importNode()')}} method. {{domxref('Document.importNode()')}} allows transferring a DOM fragment between documents, in this case from an HTML document to an XML document. The first parameter references the DOM node to clone. By making the second parameter "true", it will clone all descendants as well (a deep clone). The cloned DOM can then be inserted into the XML document using {{domxref('Node.appendChild()')}}, as shown below.

```js
// Create a new XML document in memory
const xmlRef = document.implementation.createDocument("", "", null);

// We want to move a part of the DOM from an HTML document to an XML document.
// importNode is used to clone the nodes we want to process via XSLT - true makes it do a deep clone
const myNode = document.getElementById("example");
const clonedNode = xmlRef.importNode(myNode, true);

// Add the cloned DOM into the XML document
xmlRef.appendChild(clonedNode);
```

Once the stylesheet has been imported, `XSLTProcessor` has to perform two methods for the actual transformation, namely {{domxref('XSLTProcessor.transformToDocument()')}} and {{domxref('XSLTProcessor.transformToFragment()')}}. {{domxref('XSLTProcessor.transformToDocument()')}} returns a full XML document while {{domxref('XSLTProcessor.transformToFragment()')}} returns a document fragment that can be easily added to an existing document. Both take in the XML document as the first parameter that will be transformed. {{domxref('XSLTProcessor.transformToFragment()')}} requires a second parameter, namely the document object that will own the generated fragment. If the generated fragment will be inserted into the current HTML document, passing in document is enough.

### Creating an XML document From a String 'XML Soup'

You can use the {{domxref("DOMParser")}} to create an XML document from a string of XML.

```js
const parser = new DOMParser();
const doc = parser.parseFromString(aStr, "text/xml");
```

### Performing the transformation

```js
const fragment = xsltProcessor.transformToFragment(xmlRef, document);
```

### Basic Example

The basic example will load an XML file and apply a XSL transformation on it. These are the same files used in the [Generating HTML](/en-US/docs/Web/API/Document_Object_Model/Transforming_with_XSLT#generating_html) example. The XML file describes an article and the XSL file formats the information for display.

#### XML

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

#### XSLT

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

The example loads both the .xsl (`xslStylesheet`) and the .xml (`xmlDoc`) files into memory. The .xsl file is then imported (`xsltProcessor.importStylesheet(xslStylesheet)`) and the transformation run (`xsltProcessor.transformToFragment(xmlDoc, document)`). This allows fetching of data after the page has been loaded, without initiating a fresh page load.

#### JavaScript

```js
async function init() {
  const parser = new DOMParser();
  const xsltProcessor = new XSLTProcessor();

  // Load the XSLT file, example1.xsl
  const xslResponse = await fetch("example1.xsl");
  const xslText = await xslResponse.text();
  const xslStylesheet = parser.parseFromString(xslText, "application/xml");
  xsltProcessor.importStylesheet(xslStylesheet);

  // Load the XML file, example1.xml
  const xmlResponse = await fetch("example1.xml");
  const xmlText = await xmlResponse.text();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");

  const fragment = xsltProcessor.transformToFragment(xmlDoc, document);

  document.getElementById("example").textContent = "";
  document.getElementById("example").appendChild(fragment);
}

init();
```

### Advanced example

This advanced example sorts several divs based on their content. The example allows sorting the content multiple times, alternating between ascending and descending order. The JavaScript loads the .xsl file only on the first sort and sets the `xslLoaded` variable to true once it has finished loading the file. Using the {{domxref("XSLTProcessor.getParameter()")}} method, the code can figure whether to sort in ascending or descending order. It defaults to ascending if the parameter is empty (the first time the sorting happens, as there is no value for it in the XSLT file). The sorting value is set using {{domxref("XSLTProcessor.setParameter()")}}.

The XSLT file has a parameter called `myOrder` that JavaScript sets to change the sorting method. The `xsl:sort` element's order attribute can access the value of the parameter using `$myOrder`. However, the value needs to be an XPATH expression and not a string, so `{$myOrder}` is used. Using {} evaluates the content as an XPath expression.

Once the transformation is complete, the result is appended to the document, as shown in this example.

#### XHTML

```html
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
```

#### JavaScript

```js
let xslRef;
let xslLoaded = false;
const parser = new DOMParser();
const xsltProcessor = new XSLTProcessor();
let myDOM;

let xmlRef = document.implementation.createDocument("", "", null);

async function sort() {
  if (!xslLoaded) {
    const response = await fetch("example2.xsl");
    const xslText = await response.text();
    xslRef = parser.parseFromString(xslText, "application/xml");
    xsltProcessor.importStylesheet(xslRef);
    xslLoaded = true;
  }

  // Create a new XML document in memory
  xmlRef = document.implementation.createDocument("", "", null);

  // We want to move a part of the DOM from an HTML document to an XML document.
  // importNode is used to clone the nodes we want to process via XSLT - true makes it do a deep clone
  const myNode = document.getElementById("example");
  const clonedNode = xmlRef.importNode(myNode, true);

  // After cloning, we append
  xmlRef.appendChild(clonedNode);

  // Set the sorting parameter in the XSL file
  const sortVal = xsltProcessor.getParameter(null, "myOrder");

  if (sortVal === "" || sortVal === "descending") {
    xsltProcessor.setParameter(null, "myOrder", "ascending");
  } else {
    xsltProcessor.setParameter(null, "myOrder", "descending");
  }

  // Initiate the transformation
  const fragment = xsltProcessor.transformToFragment(xmlRef, document);

  // Clear the contents
  document.getElementById("example").textContent = "";

  myDOM = fragment;

  // Add the new content from the transformation
  document.getElementById("example").appendChild(fragment);
}
```

#### XSLT

```xml
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [XSLT](/en-US/docs/Web/XML/XSLT)
- [Transforming with XSLT](/en-US/docs/Web/API/Document_Object_Model/Transforming_with_XSLT)
- [Chapter 15 of the XML 1.1 Bible: XSL Transformations](https://www.ibiblio.org/xml/books/bible3/chapters/ch15.html)
- [XSLT Tutorial](https://zvon.org/xxl/XSLTutorial/Books/Book1/index.html) at [zvon.org](https://zvon.org/)
- [XPath Tutorial](https://zvon.org/xxl/XPathTutorial/General/examples.html) at [zvon.org](https://zvon.org/)
