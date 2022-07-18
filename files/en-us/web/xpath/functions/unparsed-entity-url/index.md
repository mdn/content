---
title: unparsed-entity-url
slug: Web/XPath/Functions/unparsed-entity-url
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `unparsed-entity-url()` function returns the URI of the unparsed entity with the given name. This is non-XML data referenced in the DTD of the source document.

### Syntax

```
string unparsed-entity-url(string)
```

### Arguments

The name of the unparsed entity. If the argument is not a string, it is converted using the rules of the string() function. The name should be an XML Name.

### Returns

The URI of the unparsed entity retrieved from the DTD, if it exists. Otherwise an empty string.

### Defined

[XSLT 1.0 12.4](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-unparsed-entity-uri)

### Gecko support

Not supported.
