---
title: "XSLT: Extensible Stylesheet Language Transformations"
short-title: XSLT
slug: Web/XML/XSLT
page-type: landing-page
sidebar: xmlsidebar
---

**Extensible Stylesheet Language Transformations (XSLT)** is an [XML](/en-US/docs/Web/XML/Guides/XML_introduction)-based language used, in conjunction with specialized processing software, for the transformation of XML documents.

Although the process is referred to as "transformation," the original document is not changed; rather, a new XML document is created based on the content of an existing document. Then, the new document may be serialized (output) by the processor in standard XML syntax or in another format, such as [HTML](/en-US/docs/Web/HTML) or plain text.

XSLT is most often used to convert data between different XML schemas or to convert XML data into web pages or PDF documents.

## Documentation

### Reference

- [XSLT elements reference](/en-US/docs/Web/XML/XSLT/Reference/Element)
  - : This page describes XSLT elements, focusing on top-level elements used in `<xsl:stylesheet>` or `<xsl:transform>` and instructions for templates.
    It also briefly covers literal result elements (LREs), which copy non-instruction elements like `<hr>` directly to the output, and attribute value templates that use XPath expressions to set attribute values.

### Guides

- [Transforming XML with XSLT](/en-US/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
  - : XSLT allows a stylesheet author to transform a primary XML document in two significant ways: manipulating and sorting the content, including a wholesale reordering of it if so desired, and transforming the content into a different format.
- [Specifying parameters using processing instructions](/en-US/docs/Web/XML/XSLT/Guides/PI_Parameters)
  - : Firefox allows stylesheet parameters to be specified when using the `<?xml-stylesheet?>` processing instruction. This is done using the `<?xslt-param?>` PI described in this document.
- [Common XSLT Errors](/en-US/docs/Web/XML/XSLT/Guides/Common_errors)
  - : This article lists some common problems using XSLT in Firefox.

## Related topics

- [XML](/en-US/docs/Web/XML/Guides/XML_introduction)
- [XPath](/en-US/docs/Web/XML/XPath)

## See also

- [W3Schools XSLT Introduction](https://www.w3schools.com/xml/xsl_intro.asp)
  - : This tutorial teaches the reader how to use XSLT to transform XML documents into other formats, like XHTML.
- [What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/)
  - : This extensive introduction to XSLT and XPath assumes no prior knowledge of the technologies and guides the reader through background, context, structure, concepts and introductory terminology.
