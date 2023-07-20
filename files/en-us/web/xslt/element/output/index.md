---
title: <xsl:output>
slug: Web/XSLT/Element/output
page-type: xslt-element
---

{{XsltSidebar}}

The `<xsl:output>` element controls the characteristics of the output document. To function correctly in Netscape, this element, with the method attribute, must be used. As of 7.0, `method="text"` works as expected.

### Syntax

```xml
<xsl:output
  method="xml" | "html" | "text"
  version=STRING
  encoding=STRING
  omit-xml-declaration="yes" | "no"
  standalone="yes" | "no"
  doctype-public=STRING
  doctype-system=STRING
  cdata-section-elements=LIST-OF-NAMES
  indent="yes" | "no"
  media-type=STRING />
```

### Required Attributes

None.

### Optional Attributes

- `method`
  - : Specifies output format.
- `version`
  - : Specifies the value of the version attribute of the XML or HTML declaration in the output document. This attribute is only used when `method="html"` or `method="xml"`.
- `encoding`
  - : Specifies the value of the `encoding` attribute in the output document.
- `omit-xml-declaration`
  - : Indicates whether or not to include an XML declaration in the output. Acceptable values are "`yes`" or "`no`".
- `standalone` (Not supported.)
  - : If present, indicates that a standalone declaration should occur in the output document and gives its value. Acceptable values are "yes" or "no".
- `doctype-public`
  - : Specifies the value of the `PUBLIC` attribute of the `DOCTYPE` declaration in the output document.
- `doctype-system`
  - : Specifies the value of the `SYSTEM` attribute of the `DOCTYPE` declaration in the output document.
- `cdata-section-elements`
  - : Lists elements whose text contents should be written as `CDATA` sections. Elements should be whitespace separated.
- `indent` (Not supported.)
  - : Specifies if the output should be indented to indicate its hierarchic structure.
- `media-type` (Not supported.)
  - : Specifies the output document MIME type.

### Type

Top-level, must be the child `<xsl:stylesheet>` or `<xsl:transform>`.

### Defined

XSLT, section 16.

### Gecko support

Partial support. See comments above.
