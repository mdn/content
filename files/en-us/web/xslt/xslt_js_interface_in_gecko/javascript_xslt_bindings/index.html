---
title: JavaScript/XSLT Bindings
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/JavaScript_XSLT_Bindings
tags:
  - DOM
  - JavaScript
  - XML
  - XSLT
---
<h2 id="JavaScript.2FXSLT_Bindings">JavaScript/XSLT Bindings</h2>

<p>JavaScript can run XSLT transformations through the {{domxref('XSLTProcessor')}} object. Once instantiated, an {{domxref('XSLTProcessor')}} has an {{domxref('XSLTProcessor.importStylesheet()')}} method that takes as an argument the XSLT stylesheet to be used in the transformation. The stylesheet has to be passed in as an XML document, which means that the .xsl file has to be loaded by the page before calling {{domxref('XSLTProcessor.importStylesheet()')}}. This can be done via {{domxref('XMLHttpRequest')}} or {{domxref('XMLDocument.load()')}}.</p>

<p><small><strong>Figure 1 : Instantiating an {{domxref('XSLTProcessor')}}</strong></small></p>

<pre class="brush: js">  var xsltProcessor = new XSLTProcessor();

  // Load the xsl file using synchronous (third param is set to false) XMLHttpRequest
  var myXMLHTTPRequest = new XMLHttpRequest();
  myXMLHTTPRequest.open("GET", "example.xsl", false);
  myXMLHTTPRequest.send(null);

  var xslRef = myXMLHTTPRequest.responseXML;

  // Finally import the .xsl
  xsltProcessor.importStylesheet(xslRef);
</pre>

<p>For the actual transformation, {{domxref('XSLTProcessor')}} requires an XML document, which is used in conjunction with the imported XSL file to produce the final result. The XML document can be a separate XML file loaded as shown in figure 1, or it can be part of the existing page. To process part of a page's DOM, it is necessary to first create an XML document in memory. Assuming that the DOM to be processed is contained by an element with the id <code>example</code>, that DOM can be "cloned" using the in-memory XML document's {{domxref('Document.importNode()')}} method. {{domxref('Document.importNode()')}} allows transferring a DOM fragment between documents, in this case from an HTML document to an XML document. The first parameter references the DOM node to clone. By making the second parameter "true", it will clone all descendants as well (a deep clone). The cloned DOM can then be easily inserted into the XML document using {{domxref('Node.appendChild()')}}, as shown in figure 2.</p>

<p><small><strong>Figure 2 : Creating an XML document based on part of a document's DOM</strong></small></p>

<pre class="brush: js">  // create a new XML document in memory
  var xmlRef = document.implementation.createDocument("", "", null);

  // we want to move a part of the DOM from an HTML document to an XML document.
  // importNode is used to clone the nodes we want to process via XSLT - true makes it do a deep clone
  var myNode = document.getElementById("example");
  var clonedNode = xmlRef.importNode(myNode, true);

  // add the cloned DOM into the XML document
  xmlRef.appendChild(clonedNode);
</pre>

<p>Once the stylesheet has been imported, {{domxref('XSLTProcessor')}} has to perform two methods for the actual transformation, namely {{domxref('XSLTProcessor.transformToDocument()')}} and {{domxref('XSLTProcessor.transformToFragment()')}}. {{domxref('XSLTProcessor.transformToDocument()')}} returns a full XML document while {{domxref('XSLTProcessor.transformToFragment()')}} returns a document fragment that can be easily added to an existing document. Both take in the XML document as the first parameter that will be transformed. {{domxref('XSLTProcessor.transformToFragment()')}} requires a second parameter, namely the document object that will own the generated fragment. If the generated fragment will be inserted into the current HTML document, passing in document is enough.</p>

<p><small><strong>Figure 2.1 : Creating an XML document From a String 'XML Soup'</strong></small></p>

<p>While you can use IE <code>loadXML</code> method to load a string containing XML you have to perform some tweaking and tuning to do the same in Mozilla. You must use the DomParser.no to create any document, as this is handled by the DomParser.</p>

<pre class="brush: js">var parser = new DOMParser();
var doc = parser.parseFromString(aStr, "text/xml");
</pre>

<p><small><strong>Figure 3 : Performing the transformation</strong></small></p>

<pre class="brush: js">  var fragment = xsltProcessor.transformToFragment(xmlRef, document);
</pre>
