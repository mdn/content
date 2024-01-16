---
title: Updating extensions for Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6/Updating_extensions
page-type: guide
---

{{FirefoxSidebar}}

This article provides helpful information to extension developers trying to update their extensions to work properly in Firefox 3.6.

## User interface changes

[Right-clicking on elements (including links and images) no longer offers a "Properties" menu item.](https://bugzil.la/513147) The properties dialog box was not useful for most users and has been removed. If your extension interacts with that menu item in any way, you'll need to revise your code to add it yourself, or contribute your own context menu entry directly.

## Add-on package changes

In order to allow add-ons' icons to be displayed even when they're disabled, Gecko 1.9.2 added support for automatically detecting and using an icon named `icon.png`, located in the add-on's root directory. This is used if the add-on is disabled, or if the manifest is missing an `iconURL` entry.

## HTML 5 compliance improvements

The DOM Level 2 views to HTML and XHTML documents are now unified per HTML 5.

- The [`localName`](/en-US/docs/Web/API/Element/localName) DOM property now returns the name of HTML element nodes in lower case. Previously, in HTML documents, it returned it in upper case. (DOM Level 1 [`tagName`](/en-US/docs/DOM/node.tagName) continues to return in upper case in HTML documents.)
- The [`namespaceURI`](/en-US/docs/Web/API/Element/namespaceURI) DOM property now returns `"http://www.w3.org/1999/xhtml"` on HTML element nodes. Previously, in HTML documents, it returned `null`.
- `document.createElementNS(null, "FOO")` no longer creates an HTML element node in HTML documents. `document.createElement("FOO")`
  or `document.createElementNS("http://www.w3.org/1999/xhtml", "foo")` continue
  to work in HTML documents.
- The [`name`](/en-US/docs/Web/XPath/Functions/name) and the [`local-name`](/en-US/docs/Web/XPath/Functions/local-name) functions in XPath returns the name of HTML elements in lower case. Previously, in HTML documents, they returned it in upper case.

The most probable upgrade problem is the pattern `if (elt.localName === "FOO")`.

### Example: Testing if an element is an HTML img element

#### Firefox 3.6, both text/html and application/xhtml+xml

`if (elt.localName === "img" && elt.namespaceURI === "http://www.w3.org/1999/xhtml")`

#### Firefox 3.5 and 3.6, only extension-supplied text/html without foreign (e.g. SVG) script-inserted elements

`if (elt.tagName === "IMG")`

#### Firefox 3.5 and 3.6, both text/html and application/xhtml+xml

`if (elt instanceof HTMLImageElement)`

## contents.rdf no longer supported

Support for the obsolete `contents.rdf` method for registering chrome has been removed in Gecko 1.9.2, and is no longer supported by Firefox 3.6. This means that add-ons that use contents.rdf can no longer be installed.

Make sure you include a [chrome.manifest](/en-US/docs/Chrome_Registration) in your XPI.

> **Note:** Add-ons that are already installed using the old contents.rdf method for registering chrome will continue to function if already installed. Make sure that you test your add-on by actually removing and reinstalling it to ensure that the install works after updating it to use an install manifest.
