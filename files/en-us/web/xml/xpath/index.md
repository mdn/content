---
title: XPath
slug: Web/XML/XPath
page-type: landing-page
sidebar: xmlsidebar
---

XPath stands for XML Path Language. It uses a non-XML syntax to provide a flexible way of addressing (pointing to) different parts of an [XML](/en-US/docs/Web/XML/Guides/XML_introduction) document. It can also be used to test addressed nodes within a document to determine whether they match a pattern or not.

XPath is mainly used in [XSLT](/en-US/docs/Web/XML/XSLT), but can also be used as a much more powerful way of navigating through the [DOM](/en-US/docs/Web/API/Document_Object_Model) of any XML-like language document using {{DOMxRef("XPathExpression")}}, such as [HTML](/en-US/docs/Web/HTML) and [SVG](/en-US/docs/Web/SVG), instead of relying on the {{DOMxRef("Document.getElementById()")}} or {{DOMxRef("Document.querySelectorAll()")}} methods, the {{DOMxRef("Node.childNodes")}} properties, and other DOM Core features.

XPath uses a path notation (as in URLs) for navigating through the hierarchical structure of an XML document. It uses a non-XML syntax so that it can be used in URIs and XML attribute values.

## Guides

- [Introduction to using XPath in JavaScript](/en-US/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
  - : Describes a non-XSLT use of XPath.
- [XPath snippets](/en-US/docs/Web/XML/XPath/Guides/Snippets)
  - : These are JavaScript utility functions, that can be used in your own code, based on [DOM Level 3 XPath](https://www.w3.org/TR/DOM-Level-3-XPath/) APIs.

## Reference

- [XPath:Axes](/en-US/docs/Web/XML/XPath/Reference/Axes)
  - : List and definition of the axes defined in the XPath specification. Axes are used to describe the relationships between nodes.
- [XPath:Functions](/en-US/docs/Web/XML/XPath/Reference/Functions)
  - : List and description of the core XPath functions and XSLT-specific additions to XPath.

## See also

- [XSLT](/en-US/docs/Web/XML/XSLT), [XML](/en-US/docs/Web/XML), [DOM](/en-US/docs/Web/API/Document_Object_Model)
- [Transforming XML with XSLT](/en-US/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
- [Comparison of CSS Selectors and XPath](/en-US/docs/Web/XML/XPath/Guides/Comparison_with_CSS_selectors)
- [What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/) introduces XSLT and XPath, including background, context, structure, concepts, and terminology - xml.com (2000)
- [XPath tester](https://extendsclass.com/xpath-tester.html) online XPath Builder/Debugger
