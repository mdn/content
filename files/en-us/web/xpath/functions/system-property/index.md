---
title: system-property
slug: Web/XPath/Functions/system-property
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `system-property` function returns an object representing the given system-property.

### Syntax

    system-property(name)

### Arguments

- `name` (optional)
  - : The name of the system property. The argument must evaluate to a string that is a QName. The QName is expanded into a name using the namespace declarations in scope for the expression. The system-property function returns an object representing the value of the system property identified by the name. If there is no such system property, the empty string should be returned.

### Returns

An object representing the given system-property.

### Notes

- xsl:version, a number giving the version of XSLT implemented by the processor; for XSLT processors implementing the version of XSLT specified by this document, this is the number 1.0
- xsl:vendor, a string identifying the vendor of the XSLT processor
- xsl:vendor-url, a string containing a URL identifying the vendor of the XSLT processor; typically this is the host page (home page) of the vendor's Web site.

### Defined

[XSLT 1.0 12.4](https://www.w3.org/TR/xslt#function-system-property)

### Gecko support

Supported.
