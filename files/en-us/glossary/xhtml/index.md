---
title: XHTML
slug: Glossary/XHTML
page-type: glossary-definition
---

{{GlossarySidebar}}

**XHTML** is a term that was historically used to describe [HTML](/en-US/docs/Web/HTML) documents written to conform with {{Glossary("XML")}} syntax rules.

The following example shows an HTML document and corresponding "XHTML" document, and the accompanying {{Glossary("HTTP")}} {{HTTPHeader("Content-Type")}} headers they should be served with.

### HTML document

```html
<!-- Content-Type: text/html -->

<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
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

In practice, very few "XHTML" documents are served over the web with a `Content-Type: application/xhtml+xml` header. Instead, even though the documents are written to conform to XML syntax rules, they are served with a `Content-Type: text/html` header — so browsers parse those documents using HTML parsers rather than XML parsers.

## See also

- [HTML](/en-US/docs/Glossary/HTML)
- [HTML5](/en-US/docs/Glossary/HTML5)
- [SVG](/en-US/docs/Glossary/SVG)
- [MathML](/en-US/docs/Glossary/MathML)
- [XML](/en-US/docs/Glossary/XML)
