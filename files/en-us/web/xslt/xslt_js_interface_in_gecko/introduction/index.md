---
title: Introduction
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Introduction
tags:
  - Gecko
  - Intro
  - JavaScript
  - XSLT
---
## Introduction

With modern browsers supporting [XSLT](/en-US/docs/Web/API/XSLTProcessor), developers can now use JavaScript to access the power that XSLT provides. JavaScript can enable a web application to load XML data, process it via XSLT into a presentable form and then add it into an existing document. Since the XML data loaded only contains the raw information without any presentation data, it can load quickly even on dialup.

XSLT allows the author to directly manipulate the structure of a document. For example, it permits the rearranging and sorting of elements; it also provides more fine-grained control of the resulting document's structure.

As of [Mozilla 1.2](https://www.mozilla.org/en-US/firefox/), Gecko enables JavaScript to create XSLT processors. This article covers XSLT/JavaScript bindings in Gecko. They are not available in Netscape 7.0x however are available in Netscape 7.1.
