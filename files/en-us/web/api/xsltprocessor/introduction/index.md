---
title: Introduction
slug: Web/API/XSLTProcessor/Introduction
page-type: guide
---

{{APIRef("XSLT")}}

One noticeable trend in W3C standards has been the effort to separate content from style. This would allow the same style to be reused for multiple content, as well as simplify maintenance and allow a quick (only modify one file) way to change the look of content.

CSS (Cascade Style Sheets) was one of the first ways proposed by the W3C. CSS is a simple way to apply style rules to a web document. These style rules define how the document (the content) should be laid out. However, it has several limitations, such as lack of programming structures and ability to create complex layout models. CSS also has limited support for changing the position of an element.

XSL (Extensible Stylesheet Language) Transformations are composed of two parts: XSL elements, which allow the transformation of an XML tree into another markup tree and XPath, a selection language for trees. XSLT takes an XML document (the content) and creates a brand new document based on the rules in the XSL stylesheet. This allows XSLT to add, remove and reorganize elements from the original XML document and thus allows more fine-grain control of the resulting document's structure.

Transformations in XSLT are based on rules that consist of templates. Each template matches (using XPath) a certain fragment of the input XML document and then applies the substitution part on that fragment to create the new resulting document.
