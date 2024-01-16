---
title: XPath
slug: Web/XPath
page-type: landing-page
---

{{XsltSidebar}}

XPath stands for XML Path Language. It uses a non-XML syntax to provide a flexible way of addressing (pointing to) different parts of an [XML](/en-US/docs/Web/XML/XML_introduction) document. It can also be used to test addressed nodes within a document to determine whether they match a pattern or not.

XPath is mainly used in [XSLT](/en-US/docs/Web/XSLT), but can also be used as a much more powerful way of navigating through the [DOM](/en-US/docs/Web/API/Document_Object_Model) of any XML-like language document using {{DOMxRef("XPathExpression")}}, such as [HTML](/en-US/docs/Web/HTML) and [SVG](/en-US/docs/Web/SVG), instead of relying on the {{DOMxRef("Document.getElementById()")}} or {{DOMxRef("Document.querySelectorAll()")}} methods, the {{DOMxRef("Node.childNodes")}} properties, and other DOM Core features.

XPath uses a path notation (as in URLs) for navigating through the hierarchical structure of an XML document. It uses a non-XML syntax so that it can be used in URIs and XML attribute values.

> **Note:** Support for XPath varies widely; it's supported reasonably well in Firefox (although there are no plans to improve support further), while other browsers implement it to a lesser extent, if at all. If you need a polyfill, you may consider [js-xpath](https://sourceforge.net/projects/js-xpath/files/js-xpath/1.0.0/xpath.js/download) or [wicked-good-xpath](https://github.com/google/wicked-good-xpath).

## Documentation

- [Introduction to using XPath in JavaScript](/en-US/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)
  - : Describes a non-XSLT use of XPath.
- [XPath:Axes](/en-US/docs/Web/XPath/Axes)
  - : List and definition of the axes defined in the XPath specification. Axes are used to describe the relationships between nodes.
- [XPath:Functions](/en-US/docs/Web/XPath/Functions)
  - : List and description of the core XPath functions and XSLT-specific additions to XPath.
- [Transforming XML with XSLT](/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT)
  - : XSLT uses XPath to address code segments in an XML document that it wishes to transform.
- [XPath snippets](/en-US/docs/Web/XPath/Snippets)
  - : These are JavaScript utility functions, that can be used in your own code, based on [DOM Level 3 XPath](https://www.w3.org/TR/DOM-Level-3-XPath/) APIs.
- [What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/)
  - : This extensive introduction to XSLT and XPath assumes no prior knowledge of the technologies, and guides the reader through background, context, structure, concepts, and introductory terminology.

## Tools

- [XPath tester](https://extendsclass.com/xpath-tester.html)
  - : An online XPath Builder/Debugger.

## Related Topics

- [XSLT](/en-US/docs/Web/XSLT), [XML](/en-US/docs/Web/XML), [DOM](/en-US/docs/Web/API/Document_Object_Model)
- [Comparison of CSS Selectors and XPath](/en-US/docs/Web/XPath/Comparison_with_CSS_selectors)
