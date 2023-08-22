---
title: Using the Mozilla JavaScript interface to XSL Transformations
slug: Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations
page-type: guide
---

{{XsltSidebar}}

This document describes the JavaScript interface in Mozilla 1.2 and up to the XSLT Processing Engine (TransforMiiX).

### Creating an XSLTProcessor

To start, you need to create an {{domxref("XSLTProcessor")}} object:

```js
const processor = new XSLTProcessor();
```

### Specifying the stylesheet

Before you can use it, you must import a stylesheet with the {{domxref("XSLTProcessor.importStylesheet()")}} method. It has a single parameter, which is the DOM Node of the XSLT stylesheet to import.

> **Note:** The import is live, meaning that if you alter the stylesheet DOM after importing it, this will be reflected in the processing. Rather than modifying the DOM it is recommended to use stylesheet parameters which are usually easier and can give better performance.

```js
const testTransform = document.implementation.createDocument("", "test", null);

// Just an example to get a transform into a script as a DOM
// XMLDocument.load is asynchronous, so all processing happens in the
// onload handler
testTransform.addEventListener("load", onload, false);
testTransform.load("test-transform.xml");
function onload() {
  processor.importStylesheet(testTransform);
}
```

{{domxref("XSLTProcessor.importStylesheet()")}} requires one argument, a DOM Node. If that node is a document node, you can pass in a full XSL Transform or a [literal result element transform](https://www.w3.org/TR/xslt/#result-element-stylesheet), otherwise it must be an `xsl:stylesheet` or `xsl:transform` element.

### Transforming the document

You can use the {{domxref("XSLTProcessor.transformToDocument()")}} or {{domxref("XSLTProcessor.transformToFragment()")}} methods to transform a document using the imported XSLT stylesheet.

#### transformToDocument

{{domxref("XSLTProcessor.transformToDocument()")}} takes one argument, the source node to transform, and returns a new {{domxref("Document")}} with the results of the transformation:

```js
const newDocument = processor.transformToDocument(domToBeTransformed);
```

The resultant object depends on the [output method](https://www.w3.org/TR/1999/REC-xslt-19991116/#output) of the stylesheet:

- **html** - {{domxref("HTMLDocument")}}
- **xml** - {{domxref("XMLDocument")}}
- **text** - {{domxref("XMLDocument")}} with a single root element `<transformiix:result>` with the text as a child

#### transformToFragment

You can also use {{domxref("XSLTProcessor.transformToFragment()")}} which will return a {{domxref("DocumentFragment")}} node. This is handy because appending a fragment to another node transparently appends all the children of that fragment, and the fragment itself is not merged. Fragments are therefore useful for moving nodes around and storing them without the overhead of a full document object.

{{domxref("XSLTProcessor.transformToFragment()")}} takes two arguments: the source document to be transformed (as above) and the {{domxref("Document")}} object that will own the fragment (all fragments must be owned by a document).

```js
const ownerDocument = document.implementation.createDocument("", "test", null);
const newFragment = processor.transformToFragment(
  domToBeTransformed,
  ownerDocument,
);
```

{{domxref("XSLTProcessor.transformToFragment()")}} will only produce HTML DOM objects if the owner document is itself an {{domxref("HTMLDocument")}}, or if the output method of the stylesheet is HTML. It will **not** produce an HTML DOM objects if only the toplevel element of the result is {{HTMLElement("html")}} as {{domxref("XSLTProcessor.transformToFragment()")}} is rarely used to create this element. If you want to override this, you can set the output method normally in the standard way.

#### transforming HTML

Unfortunately it is currently not supported to transform HTML nodes using XSLT. Some things work if you use lower case node-names in patterns and expressions, and treat the nodes as if they are in the null namespace, however this is not very well tested so it might not work in all situations. It is also possible that this will change in a future release.

Transforming XHTML should work as expected though.

### Setting parameters

You can control [parameters for the stylesheet](https://www.w3.org/TR/1999/REC-xslt-19991116/#variables) using the {{domxref("XSLTProcessor.setParameter()")}}, {{domxref("XSLTProcessor.getParameter()")}}, and {{domxref("XSLTProcessor.removeParameter()")}} methods. These all take a namespace URI and a local name as the first two parameters, with {{domxref("XSLTProcessor.setParameter()")}} taking a third - the value of the parameter to be set. See [The XSLT/JavaScript Interface in Gecko](/en-US/docs/Web/XSLT/XSLT_JS_interface_in_Gecko/Setting_Parameters) for an example.

### Resetting

The {{domxref("XSLTProcessor")}} object also implements a {{domxref("XSLTProcessor.reset()")}} method, which can be used to remove all stylesheets and parameters then put the processor back into its initial state. This method is implemented in Gecko 1.3 and later.

### Resources

The following reflect the interface of the {{domxref("XSLTProcessor")}} object:

- [XSLTProcessor.webidl](https://dxr.mozilla.org/mozilla-central/source/dom/webidl/XSLTProcessor.webidl)
- [txXSLTProcessor.cpp](https://dxr.mozilla.org/mozilla-central/source/dom/xslt/xslt/txXSLTProcessor.cpp)

### See also

- [The XSLT JavaScript Interface in Gecko](/en-US/docs/Web/XSLT/XSLT_JS_interface_in_Gecko)
- [document.load()](/en-US/docs/Web/API/XMLDocument) regarding the loading of XML documents (as used above)

### Original Document Information

- Author(s): Mike Hearn
- Last Updated Date: December 21, 2005
- Copyright Information: Copyright (C) Mike Hearn
