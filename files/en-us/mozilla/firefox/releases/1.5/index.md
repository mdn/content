---
title: Firefox 1.5 for developers
slug: Mozilla/Firefox/Releases/1.5
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Based on the [Gecko](/en-US/docs/Glossary/Gecko) 1.8 engine, Firefox 1.5 improved its already best in class standards support, and provided new capabilities to enable the next generation of web applications. Firefox 1.5 features improved support for CSS2 and CSS3, APIs for scriptable and programmable 2D graphics through [SVG](/en-US/docs/Web/SVG) 1.1 and [`<canvas>`](/en-US/docs/Web/API/Canvas_API), [XForms](/en-US/docs/Glossary/XForms) and XML events, as well as many DHTML, JavaScript, and DOM enhancements.

## Developer Tools

Several tools and browser extensions are available to help developers support Firefox 1.5.

- [DOM Inspector](/en-US/docs/DOM_Inspector), a tool that allows developers to inspect and modify documents without having to edit the document directly. DOM Inspector is available as part of the Custom install option in Firefox 1.5 under Developer Tools.
- JavaScript console, a tool to write and test JavaScript code as well as view JavaScript and CSS errors on a page.
- View page source, with syntax highlighting and find features.
- [Browser extensions](https://addons.mozilla.org/en-US/firefox/search/?q=Developer%20Tools) including the [FireBug](https://web.archive.org/web/20061205073236/http://www.joehewitt.com/software/firebug/), [Web Developer toolbar](</en-US/docs/Web_Developer_Extension_(external)>), [Live HTTP Headers](</en-US/docs/Live_HTTP_Headers_(external)>), [HTML Validator](</en-US/docs/HTML_Validator_(external)>) and many more.

> **Note:** Some extensions do not currently support Firefox 1.5, and will be automatically disabled.

## Overview

Some of the new features in Firefox 1.5:

### Website and application developers

- SVG is supported in XHTML
  - : SVG can be used in XHTML pages. JavaScript and CSS can be used to manipulate the picture in the same way you would script regular XHTML. See [SVG in Firefox](/en-US/docs/Web/SVG/SVG_1.1_Support_in_Firefox) to learn about the status and known problems of SVG implementation in Firefox.
- [Drawing Graphics with Canvas](/en-US/docs/Web/API/Canvas_API/Tutorial)
  - : Learn about the new `<canvas>` tag and how to draw graphs and other objects in Firefox.
- [CSS3 Columns](/en-US/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts)
  - : Learn about the new support for automatic multi-column text layout as proposed for [CSS3](/en-US/docs/Web/CSS).
- [Using Firefox 1.5 caching](/en-US/docs/Mozilla/Firefox/Releases/1.5/Using_Firefox_1.5_caching)
  - : Learn about `bfcache` and how it speeds up back and forward navigation.

### XUL and Extension Developers

- [Building an Extension](/en-US/docs/Mozilla/Add-ons)
  - : This tutorial will take you through the steps required to build a very basic extension for Firefox. Also see [another tutorial on MozillaZine knowledge base](https://kb.mozillazine.org/Getting_started_with_extension_development), which demonstrates the new features of the Extension Manager in 1.5 that make creating a new extension even easier.
- [XPCNativeWrapper](/en-US/docs/XPCNativeWrapper)
  - : `XPCNativeWrapper` is a way to wrap up an object so that it's [safe to access from privileged code](/en-US/docs/Safely_accessing_content_DOM_from_chrome). It can be used in all Firefox versions, though the behavior changed somewhat starting with Firefox 1.5 (Gecko 1.8).
- [Preferences System](/en-US/docs/Preferences_System)
  - : Learn about the new widgets that allow you to create Options windows easier using less JavaScript code.
- [International characters in XUL JavaScript](/en-US/docs/International_characters_in_XUL_JavaScript)
  - : XUL JavaScript files can now contain non-ASCII characters.
- [Tree API changes](/en-US/docs/Tree_Widget_Changes)
  - : The interfaces for accessing XUL `<tree>` elements have changed.
- [XUL Changes for Firefox 1.5](/en-US/docs/XUL_Changes_for_Firefox_1.5)
  - : Summary of XUL changes. See also [Adapting XUL Applications for Firefox 1.5](/en-US/docs/Mozilla/Firefox/Releases/1.5/Adapting_XUL_Applications_for_Firefox_1.5).

#### Networking-related changes

- Certificate prompts can now be overridden on a per-channel basis. This works by setting an interface requestor as an `nsIChannel`'s notificationCallbacks and giving out an interface for `nsIBadCertListener`.
- nsIWebBrowserPersist's listeners can now implement `nsIInterfaceRequestor::GetInterface` and will get an opportunity to provide all interfaces that channels might ask for, including `nsIProgressEventSink` (not too useful, redundant with `nsIWebProgressListener`). Useful interfaces here include `nsIChannelEventSink` and `nsIBadCertListener`.
- Extensions or other necko consumers, including XMLHttpRequest, can set a Cookie header explicitly, and necko will not replace it. Stored cookies will be merged with the explicitly set header, in a way that the explicit header will override the stored cookies.

## New End user Features

### User Experience

- **Faster browser navigation** with improvements to back and forward button performance.
- **Drag and drop reordering for browser tabs.**
- **Answers.com is added to the search engine list** for dictionary lookup.
- **Improvements to product usability** including descriptive error pages, redesigned options menu, RSS discovery, and "Safe Mode" experience.
- **Better accessibility support** including DHTML accessibility.
- **Report a broken website wizard** to report websites that are not working in Firefox.
- **Better support for Mac OS X** (10.2 and greater) including profile migration from Safari and Mac Internet Explorer.

### Security and Privacy

- **Automated update** to streamline product upgrades. Notification of an update is more prominent, and updates to Firefox may now be half a megabyte or smaller. Updating extensions has also improved.
- **Improvements to popup blocking.**
- **Clear Private Data** feature provides an easy way to quickly remove personal data through a menu item or keyboard shortcut.

### Support for open Web standards

Firefox support for Web standards continues to lead the industry with consistent cross-platform implementations for:

- Hypertext Markup Language ([HTML](/en-US/docs/Web/HTML)) and Extensible Hypertext Markup Language ([XHTML](/en-US/docs/Glossary/XHTML)): [HTML 4.01](https://www.w3.org/TR/html401/) and [XHTML 1.0/1.1](https://www.w3.org/TR/xhtml1/)
- Cascading Style Sheets ([CSS](/en-US/docs/Web/CSS)): [CSS Level 1](https://www.w3.org/TR/REC-CSS1/), [CSS Level 2](https://www.w3.org/TR/CSS22/) and parts of [CSS Level 3](https://www.w3.org/Style/CSS/current-work.html)
- Document Object Model ([DOM](/en-US/docs/Web/API/Document_Object_Model)): [DOM Level 1](https://www.w3.org/TR/2000/WD-DOM-Level-1-20000929/), [DOM Level 2](https://www.w3.org/DOM/DOMTR#dom2) and parts of [DOM Level 3](https://www.w3.org/DOM/DOMTR#dom3)
- Mathematical Markup Language: [MathML Version 2.0](https://www.w3.org/Math/)
- Extensible Markup Language ([XML](/en-US/docs/Web/XML)): [XML 1.0](https://www.w3.org/TR/REC-xml/), [Namespaces in XML](https://www.w3.org/TR/REC-xml-names/), [Associating Style Sheets with XML Documents 1.0](https://www.w3.org/TR/xml-stylesheet/), [Fragment Identifier for XML](https://lists.w3.org/Archives/Public/www-xml-linking-comments/2001AprJun/att-0074/01-NOTE-FIXptr-20010425.htm)
- XSL Transformations ([XSLT](/en-US/docs/Web/XSLT)): [XSLT 1.0](https://www.w3.org/TR/xslt/)
- XML Path Language ([XPath](/en-US/docs/Web/XPath)): [XPath 1.0](https://www.w3.org/TR/xpath/)
- Resource Description Framework ([RDF](/en-US/docs/Glossary/RDF)): [RDF](https://www.w3.org/RDF/)
- Simple Object Access Protocol (SOAP): [SOAP 1.1](https://www.w3.org/TR/2000/NOTE-SOAP-20000508/)
- [JavaScript](/en-US/docs/Web/JavaScript) 1.6, based on [ECMA-262](/en-US/docs/Web/JavaScript/Language_Resources), revision 3: [ECMA-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

Firefox 1.5 supports the following data transport protocols (HTTP, FTP, SSL, TLS, and others), multilingual character data (Unicode), graphics (GIF, JPEG, PNG, SVG, and others) and the latest version of the world's most popular scripting language, [JavaScript 1.6](/en-US/docs/New_in_JavaScript_1.6).

## Changes since Firefox 1.0

Many changes have been introduced into Firefox since it was first released on November 9, 2004. Firefox has progressed with many new features and bug fixes. A detailed list of changes is available from [squarefree.com](https://www.squarefree.com/burningedge/releases/1.5-comprehensive.html).
