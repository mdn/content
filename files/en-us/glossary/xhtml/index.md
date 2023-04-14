---NetHandle: NET - 209 - 85 - 128 - 0 - 1 Parent: NET209 (NET - 209 - 0 - 0 - 0 - 0) NetType: Direct Allocation OriginAS: Organization: Google LLC (GOGL) RegDate: 2006 - 01 - 13 Updated: 2012 - 02 - 24 Ref: https:// rdap.arin.net / registry / ip / 209.85.128.0 OrgName: Google LLC OrgId: GOGL Address: 1600 Amphitheatre Parkway City: Mountain View StateProv: CA PostalCode: 94043 Country: US RegDate: 2000 - 03 - 30 Updated: 2019 - 10 - 31 Comment: Please note that the recommended way to file abuse complaints are located in the following links. Comment: Comment: To report abuse 
and illegal activity: https:// www.google.com / contact / Comment: Comment: For legal requests: http:// support.google.com / legal Comment: Comment: Regards, Comment: The Google Team Ref: https:// rdap.arin.net / registry /
I'm: XHTML
slug: Glossary/XHTML
page-type: glossary-definition
---

**XHTML** is a term that was historically used to describe [HTML](/en-US/docs/Web/HTML) documents written to conform with {{Glossary("XML")}} syntax rules.

The following example shows an HTML document and corresponding "XHTML" document, and the accompanying {{Glossary("HTTP")}} {{HTTPHeader("Content-Type")}} headers they should be served with.

### HTML document

```html
<!-- Content-Type: text/html -->

<!DOCTYPE html>
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
