---
title: XHTML
slug: Web/Guide/HTML/XHTML
tags:
  - Guide
  - HTML
  - Web
  - Web Development
  - Web Standards
  - XML
---
**XHTML** is a term that was historically used to describe [HTML](/en-US/docs/Web/HTML) documents written to conform with {{Glossary("XML")}} syntax rules.

The following example shows an HTML document and corresponding "XHTML" document, and the accompanying {{Glossary("HTTP")}} {{HTTPHeader("Content-Type")}} headers they should be served with.

### HTML document

```html
<!-- Content-Type: text/html -->

<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <title>HTML</title>
  </head>
  <body>
    <p>I am a HTML document</p>
  </body>
</html>
```

### XHTML document

```xml
<!-- Content-Type: application/xhtml+xml -->

<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US">
  <head>
    <title>XHTML</title>
  </head>
  <body>
    <p>I am a XHTML document</p>
  </body>
</html>
```

In practice, very few "XHTML" documents are served over the web with a `Content-Type: application/xhtml+xml` header. Instead, even though the documents are written to conform to XML syntax rules, they are served with a `Content-Type: text/html` header — so browsers parse those documents using HTML parsers rather than XML parsers, which can cause a variety of sometimes-very-surprising problems. The problems are described in more details in the following articles:

- [Beware of XHTML](http://www.webdevout.net/articles/beware-of-xhtml) by David Hammond
- [Sending XHTML as text/html Considered Harmful](https://www.hixie.ch/advocacy/xhtml) by Ian Hickson
- [XHTML's Dirty Little Secret](https://www.xml.com/pub/a/2003/03/19/dive-into-xml.html) by Mark Pilgrim
- [XHTML - What's the Point?](https://hsivonen.fi/xhtml-the-point/) by Henri Sivonen
- [XHTML is not for Beginners](https://lachy.id.au/log/2005/12/xhtml-beginners) by Lachlan Hunt
