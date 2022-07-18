---
title: element-available
slug: Web/XPath/Functions/element-available
tags:
  - XSLT
  - XSLT_Reference
---
{{ XsltRef() }}

The `element-available` function determines if an element is available and returns true or false.

### Syntax

```
element-available( QName )
```

### Arguments

- `QName`
  - : Must evaluate to a valid QName. The QName is expanded into an expanded-name using the namespace declarations in scope for the expression.

### Returns

Returns true if and only if the expanded-name is the name of an instruction. If the expanded-name has a namespace URI equal to the XSLT namespace URI, then it refers to an element defined by XSLT. Otherwise, it refers to an extension element. If the expanded-name has a null namespace URI, the element-available function will return false.

### Defined

[XSLT 1.0 15](https://www.w3.org/TR/1999/REC-xslt-19991116/#function-element-available)

### Gecko support

Supported.
